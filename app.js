let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let btn = document.querySelector("#at");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let dltbtn = document.createElement("button");
  dltbtn.innerText = "Delete";
  dltbtn.classList.add("delete");
  ul.appendChild(item);
  item.appendChild(dltbtn);

  inp.value = "";
});

let dltbtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let pr = event.target.parentElement;
    pr.remove();
  } else {
    console.log("not deleted");
  }
});
