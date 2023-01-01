console.log("Client side javascript file is loaded!");
console.log("aa13");
const select = document.querySelector("select");
const selectButton1 = document.querySelector("#button1");
const input = document.querySelector("input");
const selectButton2 = document.querySelector("#button2");
const img1 = document.querySelector("#img1");

selectButton1.addEventListener("click", (e) => {
  e.preventDefault();

  // const url = `http://localhost:3300/${select.value}`;

  window.location.href = url;
  // fetch(url).then((a) => {
  //   a.json().then((data) => {
  //     console.log("d", data);
  //     input.value = data.function;
  //     const x = `/img/${data.name}.jpg`;

  //     img1.src = x;
  //   });
  // });
});
