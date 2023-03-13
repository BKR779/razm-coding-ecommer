import Nav from './Nav';

export default function Navbar() {
	return (
		<nav className="bg-gray-800">
			<div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-center">
					{/* <div className="absolute inset-y-0 left-0 flex items-center"> */}
						<Nav name="Home" />
						<Nav name="Products" />
						<Nav name="Cart" />
					{/* </div> */}
				</div>
			</div>
		</nav>
	);
}
