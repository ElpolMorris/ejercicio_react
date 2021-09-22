import { loginFailure, loginInit, loginSuccess } from "./actions";


interface Login {
    username: string;
    password: string;
}

export const loginThunk = ({ username, password }: Login) => {
	return async(dispatch: Function) => {
		dispatch(loginInit);
		try {
            const res = await fetch(`https://registro-salidas-montana-chile.herokuapp.com/login`,{
                method: "POST",
				headers: {
					"Content-Type": "application/json",
					'Access-Control-Allow-Origin': '*',
				},
				body: JSON.stringify({ username: username, password: password })
            })
            const {token} = await res.json()
            console.log("pase")
            if(token){
                localStorage.accessToken = token;
					dispatch(
						loginSuccess({
							token
						})
					);
            }
			
		} catch (error) {
			dispatch(loginFailure(error));
		}
	};
};
