import { calculateExpirationTime } from "./calculateExpirationTime";
import { formattedUnixTimestamp } from "./formattedUnixTimestamp";
export const fetchSignup = async (signupData) => {
	const { fName, lName, username, email } = signupData;
	try {
		const response = await fetch("http://localhost:3001/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(signupData),
		});
		if (response.ok) {
			const { token } = await response.json();
			const expirationTime = calculateExpirationTime();
			sessionStorage.setItem("username", username);
			sessionStorage.setItem("firstName", fName);
			sessionStorage.setItem("lastName", lName);
			sessionStorage.setItem("email", email);
			sessionStorage.setItem("token", token);
			sessionStorage.setItem("expirationTime", expirationTime.toString());
			sessionStorage.setItem("formattedExpirationTime", formattedUnixTimestamp(expirationTime));
			window.alert("Signup Successful");
			window.location.href = "/schedule";
		} else {
			const { message } = await response.json();
			window.alert(message);
		}
	} catch (error) {
		console.log("Error:", error);
	}
};