import { useEffect, useState } from "react";


const getLocalStorageContent = (tokenName: string) => {
	const { localStorage } = window;
    const token = localStorage.getItem(tokenName)
	return {
		token,
	};
}
const useStorage = (tokenName: string) => {
	const [localStorageItem, setLocalStorageItem] = useState(getLocalStorageContent(tokenName));

	useEffect(() => {
		const handleGetLocalStorage = () => {
            console.log("soy el hook de storage")
			setLocalStorageItem(getLocalStorageContent("accessToken"));
		}
		window.addEventListener("storage", handleGetLocalStorage);
		return () => window.removeEventListener("storage", handleGetLocalStorage);
	}, [localStorageItem]);

	return localStorageItem;
};

export default useStorage