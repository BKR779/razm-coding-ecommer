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
						<Link className="relative h-20 w-20" href="/">
							<Image
								src="./vercel.svg"
								alt="vercel"
								fill
							></Image>
						</Link>
						<div className="flex flex-1 items-center justify-center sm:gap-0 md:gap-4">
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
