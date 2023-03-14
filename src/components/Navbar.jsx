import Nav from './Nav';
import Search from './Search';
import Image from 'next/image';

export default function Navbar() {
	return (
		<>
			<nav className="bg-gray-800">
				<div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-start">
						{/* <div className="absolute inset-y-0 left-0 flex items-center"> */}
						<div className="">
							<Image
								src="./vercel.svg"
								alt="vercel"
								height="100"
								width="100"
							></Image>
						</div>
						<div className="flex flex-1 items-center justify-center">
							<Nav name="Home" />
							<Nav name="Products" />
							<Nav name="Cart" />
						</div>
						<Search />
						{/* </div> */}
					</div>
				</div>
			</nav>
		</>
	);
}