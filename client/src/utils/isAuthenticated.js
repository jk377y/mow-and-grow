export const isAuthenticated = () => {
	const username = sessionStorage.getItem("username");
	const token = sessionStorage.getItem("token");
	const expirationTime = sessionStorage.getItem("expirationTime");
	const tokenNotExpired = () => {
		if (expirationTime) {
			const currentTimestamp = Date.now();
			return currentTimestamp <= parseInt(expirationTime) * 1000;
		}
		return false;
	};
	if (username && token && tokenNotExpired()) {
		const currentTime = Date.now();
		return currentTime <= parseInt(expirationTime) * 1000;
	}
	return false;
};