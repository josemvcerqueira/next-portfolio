import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
	<Layout title={router.query.title}>
		<p style={{ width: "80vw" }}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab a autem
			molestiae placeat aspernatur voluptatum tempora voluptatem doloribus
			perferendis facere!
		</p>
	</Layout>
);

export default withRouter(Post);
