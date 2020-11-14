let personalData;
let xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET", "./resources/data/profile.json", true); // Replace 'my_data' with the path to your file
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == "200") {
    personalData = JSON.parse(xhr.responseText);
  }
};
xhr.send(null);
