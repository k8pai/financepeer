import { getJsonRecords } from '@/lib/database';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }: { params: { slug: string } }) => {
	const { data, error } = await getJsonRecords(params.slug);

	return (
		<div className="flex-grow p-10 ">
			{error ? <>{error}</> : null}

			<div className="mt-10 px-5 md:px-20 flex flex-col items-start justify-start box-border">
				<h1 className=" px-4 text-3xl font-bold my-10">File Data.</h1>
				{data &&
					data.map((el) => {
						return (
							<div
								key={el.Uid}
								className=" shadow-md rounded px-4 w-full"
							>
								<Link href={`/saved/${params.slug}/${el.id}`}>
									<h2 className="text-xl font-bold">
										#{el.id} - {el.title}
									</h2>
								</Link>
								<div className="divider"></div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
