const profilePhoto = document.querySelector("#profilePhoto");
const profileName = document.querySelector("#name");
const profilePosition = document.querySelector("#mainPosition");

importData().then((response) => {
	let { name } = response.languages[0];
	console.log(name);
});
