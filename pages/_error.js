import Layout from "../components/Layout";

export default ({ statusCode }) => (
	<Layout title="Error!!!">
		{statusCode ? (
			<p>`Could not load your uder data: Status Code ${statusCode}`</p>
		) : (
			<p>`Couldn't get that page, sorry!`</p>
		)}
	</Layout>
);
