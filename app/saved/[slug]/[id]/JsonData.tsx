'use client';

import React, { ReactNode, useState } from 'react';
import { Accordion, AccordionItem, Button, Snippet } from '@nextui-org/react';
import { JsonRecord } from '@prisma/client';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { Link } from '@nextui-org/react';

export default function JsonData({
	jsonData,
	href,
}: {
	jsonData: Omit<JsonRecord, 'Uid' | 'fileId'>;
	href: string;
}) {
	const [showData, setShowData] = useState<boolean>(false);

	return (
		<div className="">
			<div className="mb-4 w-full flex justify-end">
				<Button
					variant="bordered"
					endContent={
						showData ? <HiOutlineMinus /> : <HiOutlinePlus />
					}
					onClick={() => setShowData((el) => !el)}
				>
					{showData ? 'Hide JSON Data' : 'Show JSON Data'}
				</Button>

				<Button
					href="https://github.com/nextui-org/nextui"
					as={Link}
					color="default"
					showAnchorIcon
					variant="bordered"
				>
					Button Link
				</Button>
				<Link
					isBlock
					showAnchorIcon
					href={href}
					color="foreground"
					className="hover:bg-white"
				>
					API route
				</Link>
			</div>

			{showData && (
				<Snippet
					symbol=""
					radius="sm"
					classNames={{
						pre: 'whitespace-pre-wrap',
						base: 'items-start rounded-md',
					}}
					tooltipProps={{
						content: 'Copy',
						color: 'foreground',
						radius: 'sm',
					}}
				>
					{JSON.stringify(jsonData, null, 4)}
				</Snippet>
			)}
		</div>
	);
}
