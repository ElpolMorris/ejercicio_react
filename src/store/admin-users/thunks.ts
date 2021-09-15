import {
	getUsersInit,
	getUsersSuccess,
	getUsersFailure,
	usersDeleteFailure,
	usersDeleteInit,
	usersDeleteSuccess,
} from "./actions";

export const getUsersThunk = (token: string) => {
	return async (dispatch: Function) => {
		dispatch(getUsersInit());
		try {
			const res = await fetch(`http://localhost:4000/admin/dashboard`, {
				method: "get",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			});
			const data = await res.json();
			dispatch(getUsersSuccess(data));
		} catch (error) {
			dispatch(getUsersFailure(error));
		}
	};
};

export const deleteUsers = (id: number, token: string) => {
	return async (dispatch: Function) => {
		dispatch(usersDeleteInit());
		try {
			await fetch(`http://localhost:4000/admin/users?id=${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			});

			dispatch(usersDeleteSuccess(id));
		} catch (error) {
			console.log(error)
			dispatch(usersDeleteFailure(error));
		}
	};
};
