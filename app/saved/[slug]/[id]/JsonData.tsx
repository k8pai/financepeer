'use client';

import React, { useState } from 'react';
import { Button, Snippet } from '@nextui-org/react';
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
			<div className="mb-4 w-full flex justify-start space-x-5">
				<Button
					variant="bordered"
					endContent={
						showData ? <HiOutlineMinus /> : <HiOutlinePlus />
					}
					onClick={() => setShowData((el) => !el)}
				>
					{showData ? 'Hide JSON Data' : 'Show JSON Data'}
				</Button>

				{/* <Button href={href} as={Link} color="default" showAnchorIcon>
					API endpoint
				</Button> */}
				<Link
					showAnchorIcon
					href={href}
					color="foreground"
					className="mx-2"
					isExternal
					title={href}
				>
					API endpoint
				</Link>
			</div>

			{showData && (
				<Snippet
					symbol=""
					size="md"
					radius="sm"
					classNames={{
						pre: 'whitespace-pre-wrap',
						base: 'items-start rounded-md p-4',
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
