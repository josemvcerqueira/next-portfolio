import Link from "next/link";

export default () => (
	<div>
		<h1>About</h1>
		<Link href="/">
			<a>Go to home</a>
		</Link>
		<p>Javascript programmer</p>
		<img
			style={{ width: "10rem", height: "auto" }}
			src="/static/javascriptlogo.png"
			alt="JavaScript Logo"
		/>
	</div>
);
