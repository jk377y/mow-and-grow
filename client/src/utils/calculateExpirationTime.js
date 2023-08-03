export const calculateExpirationTime = () => {
	const currentTimestamp = Math.floor(Date.now() / 1000);
	const expirationTime = currentTimestamp + (60 * 15);
	return expirationTime;
};
