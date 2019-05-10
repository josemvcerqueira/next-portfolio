import Layout from "../components/Layout";
import { Component } from "react";

export default class About extends Component {
	static async getInitialProps() {
		try {
			const response = await fetch(
				"https://api.github.com/users/josemvcerqueira"
			);
			const user = await response.json();
			return { user };
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { user } = this.props;
		return (
			<Layout title="About">
				<p>{user.name}</p>
				<img
					style={{ width: "10rem", height: "auto" }}
					src={user.avatar_url}
					alt="Jose"
				/>
			</Layout>
		);
	}
}
