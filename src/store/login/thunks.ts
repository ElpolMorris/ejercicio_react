import { loginFailure, loginInit, loginSuccess } from "./actions";


interface Login {
    username: string;
    password: string;
}

export const loginThunk = ({ username, password }: Login) => {
	return async(dispatch: Function) => {
		dispatch(loginInit);
		try {
            const res = await fetch(`http://localhost:4000/login`,{
                method: "post",
				headers: {
					"Content-Type": "application/json",
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
