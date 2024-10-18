// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let account = document.getElementById("account");
// let password = document.getElementById("password");
// 
// button1.addEventListener("click", () => {
//   button1.classList.add("active");
//   button2.classList.remove("active");
//   if (button1.classList.contains("active")) {
//     account.classList.remove("disabled");
//     password.classList.add("disabled");
//   }
// });
// button2.addEventListener("click", () => {
//   button2.classList.add("active");
//   button1.classList.remove("active");
//   if (button2.classList.contains("active")) {
//     password.classList.remove("disabled");
//     account.classList.add("disabled");
//   }
// });

// let button1 = document.querySelector("#button1");
// let account = document.querySelector("#account");
// let button2 = document.querySelector("#button2");
// let password = document.querySelector("#password");
// 
// button1.addEventListener("click", () => {
//   button1.classList.add("active");
//   account.classList.remove("disabled");
//   button2.classList.remove("active");
//   password.classList.add("disabled");
// });
// 
// button2.addEventListener("click", () => {
//   button2.classList.add("active");
//   password.classList.remove("disabled");
//   button1.classList.remove("active");
//   account.classList.add("disabled");
// });


// naming the variable
let button1 = document.querySelector("#button1");
let account = document.querySelector("#account");
let button2 = document.querySelector("#button2");
let password = document.querySelector("#password");

button1.addEventListener("click", () => {
  button1.classList.toggle("active");
  account.classList.toggle("disabled");
  button2.classList.toggle("active");
  password.classList.toggle("disabled");
});

button2.addEventListener("click", () => {
  button2.classList.toggle("active");
  password.classList.toggle("disabled");
  button1.classList.toggle("active");
  account.classList.toggle("disabled");
});
