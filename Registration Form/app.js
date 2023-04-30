// get form element and registration data element
const regForm = document.getElementById("reg-form");
const regData = document.getElementById("reg-data");

// add form submit event listener
regForm.addEventListener("submit", function(event) {
	// prevent form from submitting
	event.preventDefault();

	// get form data
	const formData = new FormData(regForm);

	// display form data
	regData.innerHTML = `
		<p><strong>Name:</strong> ${formData.get("name")}</p>
		<p><strong>Email:</strong> ${formData.get("email")}</p>
		<p><strong>Password:</strong> ${formData.get("password")}</p>
		<p><strong>Confirm Password:</strong> ${formData.get("confirm-password")}</p>
	`;
});