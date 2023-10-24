'use client';

import { Session } from 'next-auth';
import React, { ChangeEvent, useRef, useState } from 'react';
import { handleFileSelect } from '@/app/_actions';
import { JsonRecord } from '@prisma/client';
import { checkMissingFields } from '@/lib/file/findMissingField';
import { Button } from '@nextui-org/react';

const FileInput = ({ session }: { session: Session | null }) => {
	const [isUpdating, setIsUpdating] = useState<boolean>(false);
	const formRef = useRef<HTMLFormElement>(null);

	const modalRef = useRef<HTMLDialogElement>(null);
	const [jsonData, setJsonData] = useState<JsonRecord[]>([]);
	const [parseError, setParseError] = useState<string>('');
	const [modalError, setModalError] = useState<{
		errorType: 'Parse Error' | 'File Error' | 'Login Error' | null;
		message: string;
		fields: string[];
	}>({ errorType: null, message: '', fields: [] });

	const handleSubmit = async (formdata: FormData) => {
		setIsUpdating(true);
		const file = formdata.get('file');
		const { name } = file as File;

		if (!name) {
			setModalError({
				errorType: 'File Error',
				message: 'select a file and then try again...',
				fields: [],
			});
			modalRef.current!.showModal();
			setIsUpdating(false);

			return;
		}

		if (!session || !session.user) {
			setModalError({
				errorType: 'Login Error',
				message:
					'You should login first, and then try again to parse a file.',
				fields: [],
			});
			modalRef.current!.showModal();
			setIsUpdating(false);
			return;
		}

		const fileData = {
			fileName: name,
			email: session.user?.email as string,
		};

		if (Array.isArray(jsonData) && jsonData.length > 0) {
			for (let val of jsonData) {
				let missingFields = checkMissingFields(val);
				if (missingFields.length <= 0) {
					continue;
				} else {
					setModalError({
						errorType: 'Parse Error',
						message: 'parse Error occured with missing fields',
						fields: missingFields,
					});
					modalRef.current!.showModal();
					setIsUpdating(false);
					formRef.current!.reset();
					return;
				}
			}
		} else {
			setModalError({
				errorType: 'Parse Error',
				message:
					'The .json file is expected to have an array of json values, with fields',
				fields: ['id', 'userId', 'title', 'body'],
			});
			setIsUpdating(false);
			modalRef.current!.showModal();
			formRef.current!.reset();
			return;
		}
		await handleFileSelect(fileData, jsonData, parseError);
		setIsUpdating(false);
		formRef.current!.reset();
	};

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (e: ProgressEvent<FileReader>) => {
				const { result } = e.target as FileReader;
				try {
					if (result) {
						const content = JSON.parse(result as string);
						setJsonData(content);
					} else {
						setModalError({
							errorType: 'Parse Error',
							message:
								'The file you inserted is empty or not valid. Try Again!',
							fields: [],
						});
						modalRef.current!.showModal();
						formRef.current!.reset();
					}
				} catch (error) {
					setParseError(error as string);
				}
			};
			reader.readAsText(file);
		}
	};

	return (
		<div>
			<form
				ref={formRef}
				action={handleSubmit}
				className="flex flex-wrap items-center justify-center"
			>
				<input
					type="file"
					name="file"
					accept=".json"
					onChange={handleFileChange}
					placeholder="Choose a JSON file"
					className="file-input file-input-ghost w-full max-w-xs"
				/>
				<Button
					type={'submit'}
					className="ml-4 rounded-md"
					aria-disabled={isUpdating}
				>
					{isUpdating ? 'loading...' : 'Submit'}
				</Button>
			</form>
			<dialog ref={modalRef} id="my_modal_2" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						{modalError.errorType}
					</h3>
					<p className="py-4">{modalError.message}</p>
					{modalError.fields.length > 0 ? (
						<ul>
							{modalError.fields.map((field) => {
								return (
									<li className="font-semibold" key={field}>
										<code>`{field}`</code>
									</li>
								);
							})}
						</ul>
					) : null}
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
};

export default FileInput;
