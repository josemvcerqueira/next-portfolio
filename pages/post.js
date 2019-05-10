import Layout from "../components/Layout";

const Post = ({ url }) => (
	<Layout title={url.query.title}>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab a autem
			molestiae placeat aspernatur voluptatum tempora voluptatem doloribus
			perferendis facere!
		</p>
	</Layout>
);

export default Post;
