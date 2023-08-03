import { calculateExpirationTime } from "./calculateExpirationTime";
import { formattedUnixTimestamp } from "./formattedUnixTimestamp";
export const fetchLogin = async (loginData) => {
	try {
		const { username } = loginData;
		const response = await fetch("http://localhost:3001/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(loginData),
		});
		if (response.ok) {
			const { token, fName, lName, email } = await response.json();
			const expirationTime = calculateExpirationTime();
			sessionStorage.setItem("username", username);
			sessionStorage.setItem("firstName", fName);
			sessionStorage.setItem("lastName", lName);
			sessionStorage.setItem("email", email);
			sessionStorage.setItem("token", token);
			sessionStorage.setItem("expirationTime", expirationTime.toString());
			sessionStorage.setItem("formattedExpirationTime", formattedUnixTimestamp(expirationTime));
			window.location.href = "/schedule";
		} else {
			const { message } = await response.json();
			window.alert(message);
		}
	} catch (error) {
		console.log("Error:", error);
	}
};
