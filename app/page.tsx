import FileInput from '@/components/FileInput';
import { auth } from '@/lib/auth/config';
import { getFiles } from '@/lib/database';
import Link from 'next/link';

export default async function Home() {
	const session = await auth();

	const { data, error, loginError } = await getFiles(
		session?.user?.email as string,
	);
	return (
		<div className="p-2 md:p-4 flex-grow flex flex-col">
			<div className="flex justify-center py-10">
				<h1 className="text-2xl font-bold mb-4">JSON File Reader</h1>
			</div>
			<div className="flex-grow  h-full ">
				<div className="p-3 md:p-8 flex flex-col justify-center items-center">
					<FileInput session={session} />
				</div>
				{error ? <>{error}</> : null}

				<div className=" py-10 mx-1 md:mx-[200px] flex flex-col items-start justify-start">
					<h1 className="text-3xl font-bold my-10">Saved files.</h1>
					{loginError ? <span>{loginError}</span> : null}
					{data && data.length <= 0 ? (
						<span>No Saved Files</span>
					) : (
						data &&
						data.slice(0, 5).map((el, _) => {
							return (
								<div key={el.id} className=" w-full">
									<div className="tracking-wider my-2 flex space-x-3">
										<span className="font-semibold ">
											{_ + 1})
										</span>
										<Link
											href={`/saved/${el.id}`}
											className="hover:text-blue-500"
											title={`/saved/${el.id}`}
										>
											{el.fileName}
										</Link>
									</div>
									<div className="divider"></div>
								</div>
							);
						})
					)}
					{data && data.length > 4 ? (
						<Link href={'/saved'}>View More Links</Link>
					) : null}
				</div>
			</div>
		</div>
	);
}
