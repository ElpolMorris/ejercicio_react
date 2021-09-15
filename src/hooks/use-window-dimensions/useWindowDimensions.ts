import { useEffect, useState } from "react";


const getWindowWidth = () => {
	const { innerWidth: width } = window;
	return {
		width,
	};
}
const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowWidth());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
};

export default useWindowDimensions