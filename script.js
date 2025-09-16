let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let cart = document.getElementById("cart");

function click1() {
  var val1 = value1.innerText;
  console.log(val1);

  let square = document.createElement("div");
  let heading = document.createElement("h5");
  let btn = document.createElement("button");

  heading.innerText = val1;
  btn.innerText = "remove";

  //   btn.setAttribute("onclick", "remove()");
  btn.onclick = function () {
    square.remove();
  };

  cart.appendChild(square);
  square.appendChild(heading);
  square.appendChild(btn);

  square.style.display = "flex";
  square.style.alignItems = "center";
  square.style.justifyContent = "space-around";
}

function click2() {
  var val2 = value2.innerText;
  console.log(val2);

  let square = document.createElement("div");
  let heading = document.createElement("h5");
  let btn = document.createElement("button");

  heading.innerText = val2;
  btn.innerText = "remove";

  //   btn.setAttribute("onclick", "remove()");
  btn.onclick = function () {
    square.remove();
  };

  cart.appendChild(square);
  square.appendChild(heading);
  square.appendChild(btn);

  square.style.display = "flex";
  square.style.alignItems = "center";
  square.style.justifyContent = "space-around";
}

function click3() {
  var val3 = value3.innerText;
  console.log(val3);

  let square = document.createElement("div");
  let heading = document.createElement("h5");
  let btn = document.createElement("button");

  heading.innerText = val3;
  btn.innerText = "remove";

  //   btn.setAttribute("onclick", "remove()");
  btn.onclick = function () {
    square.remove();
  };

  cart.appendChild(square);
  square.appendChild(heading);
  square.appendChild(btn);

  square.style.display = "flex";
  square.style.alignItems = "center";
  square.style.justifyContent = "space-around";
}
