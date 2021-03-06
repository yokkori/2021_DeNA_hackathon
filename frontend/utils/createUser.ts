import type { User } from "../models";

type Body = Pick<User, "name" | "birthday">;

type Response = {
	data?: {
		userId: User["id"];
	};
	error: boolean;
};

// [POST] /users
async function createUser(name: string, birthday: string): Promise<Response> {
	const body: Body = { name, birthday };
	const res = await fetch(`${process.env["NEXT_PUBLIC_API_DOMAIN"]}/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
	const data = await res.json();

	if (!res.ok) {
		return {
			error: true,
		};
	}

	return {
		data,
		error: false,
	};
}

export default createUser;
