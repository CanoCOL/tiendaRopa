let car = JSON.parse(localStorage.getItem("car"));

//
let bill = document.getElementById("bill");

//comprobando el estado del carrito de compras
if (car == null) {
  let row = document.createElement("div");
  row.classList.add("row", "my-5", "justify-content-center");

  let column = document.createElement("div");
  column.classList.add("col-12", "col-md-4");

  let picture = document.createElement("img");
  picture.classList.add("img-fluid", "w-100");
  picture.src = "../../assets/img/carritoVacio.png";
  console.log(picture);

  let message = document.createElement("h3");
  message.classList.add("text-center");
  message.textContent = "Make a Purchase!";

  let a = document.createElement("a");
  a.setAttribute("href", "../views/coleccion.html");
  a.classList.add(
    "btn",
    "bg-dark",
    "text-white",
    "d-flex",
    "justify-content-center"
  );
  let aTexto = document.createTextNode("Back to back");
  a.appendChild(aTexto);

  // document.body.appendChild(a);

  column.appendChild(picture);
  column.appendChild(message);
  column.appendChild(a);
  row.appendChild(column);
  bill.appendChild(row);
} else {
  //RECORRO EL CARRITO
  car.forEach(function (product) {
    let row = document.createElement("div");
    row.classList.add(
      "row",
      "my-4",
      "justify-content-center",
      "border",
      "border-dark",
      "rounded"
    );

    let column1 = document.createElement("div");
    column1.classList.add("col-12", "col-md-5");

    let column2 = document.createElement("div");
    column2.classList.add("col-12", "col-md-3", "text-center", "my-auto");

    let column3 = document.createElement("div");
    column3.classList.add("col-12", "col-md-3");

    let picture = document.createElement("img");
    picture.classList.add("img-fluid", "w-100");
    picture.src = product.picture;

    let name = document.createElement("h3");
    name.classList.add("text-content");
    name.textContent = product.name;

    let quantity = document.createElement("h3");
    name.classList.add("text-center", "mt-5");
    quantity.textContent = "Unity: " + product.quantity;

    let price = document.createElement("h4");
    name.classList.add("text-center", "mt-5");
    price.textContent = "Unity Cost: " + product.price;

    let subtotal = document.createElement("h2");
    subtotal.classList.add("fw-bold");

    console.log(product.price);
    console.log(product.quantity);
    console.log(product.price * product.quantity);
    let banana = product.price.split("US")[1];
    console.log(banana);

    column1.appendChild(picture);
    row.appendChild(column1);
    row.appendChild(column2);
    column2.appendChild(name);
    column2.appendChild(price);
    column2.appendChild(quantity);
    row.appendChild(column3);
    bill.appendChild(row);
  });
}
