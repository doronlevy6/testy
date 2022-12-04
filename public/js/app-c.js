console.log("Client side javascript file is loaded!");

const select = document.querySelector("select");
const selectButton1 = document.querySelector("#button1");
const input = document.querySelector("input");
const selectButton2 = document.querySelector("#button2");
const img = document.querySelector("#img1");

selectButton1.addEventListener("click", (e) => {
  e.preventDefault();

  const url = `http://localhost:3300/${select.value}`;
  console.log("sd", select.value);
  // fetch(url);
  // window.location.href = url;
  fetch(url).then((a) => {
    a.json().then((data) => {
      console.log(data);
      input.value = data.name;
      const x = `/img/${data.name}.jpg`;
      console.log(x);
      img.src = x;
    });
  });
});
