import Nav from './Nav';
import Search from './Search';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	return (
		<>
			<nav className="bg-gray-800">
				<div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-start">
						<div className="">
							<Link href="/">
								<Image
									src="./vercel.svg"
									alt="vercel"
									height={100}
									width={100}
								></Image>
							</Link>
						</div>
						<div className="flex flex-1 items-center justify-center gap-4">
							<Link href="/">
								<Nav name="Home" />
							</Link>
							<Link href="/products">
								<Nav name="Products" />
							</Link>
							<Link href="/cart">
								<Nav name="Cart" />
							</Link>
						</div>
						<Search />
					</div>
				</div>
			</nav>
		</>
	);
}
