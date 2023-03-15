import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Search() {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('test');
		const res = await fetch('https://fakestoreapi.com/products/');
		const data = await res.json();
		const product = data.find((product) => product.title == query);
		if (!product) router.push('/');
		else router.push(`products/${product.id}`);
	};
	const onChange = (e) => {
		const { value } = e.target;
		setQuery(value);
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				onChange={onChange}
				type="search"
				name="search"
				className="outline-0
			h-8
			border-2
			border-gray-400 
			rounded-sm 
			hover:border-blue-300 
			bg-slate-100 
			pl-2"
				value={query}
				placeholder="Search..."
			/>
		</form>
	);
}
