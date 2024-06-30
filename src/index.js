import Wishlist from "./wishlist";

console.log("Hello World");

// TODO

const form = document.querySelector("#submitForm");
const carMake = document.querySelector("#makeInput");
const carModel = document.querySelector("#modelInput");
const carYear = document.querySelector("#yearInput");
const carMakePara = document.querySelector("#car-make");
const carModelPara = document.querySelector("#car-model");
const carYearPara = document.querySelector("#car-year");
const removeButton = document.querySelector("#removeBtn");
const wishListUl = document.querySelector("#wishListContainer > ul");
const wishList = new Wishlist();

form.addEventListener("submit", addCar);
removeButton.addEventListener("click", removeCar);

function showCarDetails(car){
    carMakePara.textContent = car.make;
    carModelPara.textContent = car.model;
    carYearPara.textContent = car.year;
    removeButton.disabled = false;
    removeButton.setAttribute("data-carId",car.id)

}

function updateDOMList(){
    wishListUl.innerHTML = "";
    wishList.list.forEach((car) => {
        const newLi = document.createElement("li");
        newLi.textContent = `${car.make} ${car.model}`;
        newLi.addEventListener("click", () => {
            showCarDetails(car);
        });
        wishListUl.append(newLi);
    });
}

function addCar(submitEvent){
    submitEvent.preventDefault();
    console.log("car make" + carMake.value);
    console.log("car model" + carModel.value);
    console.log("car year" + carYear.value);
    wishList.add(carMake.value, carModel.value, carYear.value);
    console.log(" wishList" + wishList);
    updateDOMList();
}

function removeCar(){
    const carId = Number(removeButton.getAttribute("data-carId"));
    wishList.remove(carId);
    updateDOMList();
    carModelPara.textContent = "";
    carMakePara.textContent = "";
    carYearPara.textContent = "";
    removeButton.disabled = true;
}


