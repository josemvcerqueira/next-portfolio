import Link from "next/link";

export default ({ children, title }) => (
	<div>
		<header>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/hireme">
				<a>Hire Me</a>
			</Link>
		</header>
		<main>
			<h1>{title}</h1>
			{children}
		</main>
		<footer>&copy; {new Date().getFullYear()}</footer>
	</div>
);
