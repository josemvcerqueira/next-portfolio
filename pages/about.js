import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "node-fetch";
import Error from "./_error.js";

export default class About extends Component {
	static async getInitialProps() {
		const response = await fetch(
			"https://api.github.com/users/josemvcerqueira"
		);
		const statusCode = response.status > 200 ? response.status : false;
		const user = await response.json();
		return { user, statusCode };
	}

	render() {
		const { user, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}

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
