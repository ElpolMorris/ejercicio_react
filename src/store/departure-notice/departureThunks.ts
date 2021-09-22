import {
	createDepartureInit,
createDepartureSuccess,
createDepartureFailure,
userGetInit,
userGetSuccess,
userGetFailure,
getDepartureInit,
getDepartureSuccess,
getDepartureFailure,
deleteDepartureInit,
deleteDepartureSuccess,
deleteDepartureFailure
} from "./actions";

export const getUserSession = (token: string) => {
	return async (dispatch: Function) => {
		dispatch(userGetInit());
		try {
			
			const res = await fetch(`https://registro-salidas-montana-chile.herokuapp.com/users`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			});
			const {username} = await res.json();
			dispatch(userGetSuccess({username}));
		} catch (error) {
			dispatch(userGetFailure(error));
		}
	};
};
export const createDeparture = (token: string,username: string,dataByAdd: object) => {
	return async (dispatch: Function) => {
		dispatch(createDepartureInit());
		try {
			const res = await fetch(`https://registro-salidas-montana-chile.herokuapp.com/users/${username}/departure`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					'Access-Control-Allow-Origin': '*',
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(dataByAdd)
			});
			console.log("estoy creando")
			const data = await res.json();
			console.log(data)
			dispatch(createDepartureSuccess(data));
		} catch (error) {
			console.log("este es el error",error)
			dispatch(createDepartureFailure(error));
		}
	};
};
export const getDeparture = (token: string,username: string) => {
	return async (dispatch: Function) => {
		dispatch(getDepartureInit());
		try {
			
			const res = await fetch(`https://registro-salidas-montana-chile.herokuapp.com/users/${username}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					'Access-Control-Allow-Origin': '*',
					authorization: `Bearer ${token}`,
				}
			});
			const data = await res.json();
			console.log("getdepData",data)
			dispatch(getDepartureSuccess(data));
		} catch (error) {
			console.log(error)
			dispatch(getDepartureFailure(error));
		}
	};
};

export const deleteDepartureThunks = (id: number, token: string, username: string) => {
	return async (dispatch: Function) => {
		dispatch(deleteDepartureInit());
		try {
			await fetch(`https://registro-salidas-montana-chile.herokuapp.com/users/${username}/departure?id=${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					'Access-Control-Allow-Origin': '*',
					authorization: `Bearer ${token}`,
				},
			});
			dispatch(deleteDepartureSuccess(id));
		} catch (error) {
			console.log(error)
			dispatch(deleteDepartureFailure(error));
		}
	};
};



