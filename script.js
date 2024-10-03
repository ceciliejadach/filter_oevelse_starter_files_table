const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");

//1. en der viser alle el drevne fartøjer

const allElectricArr = vehicles.filter(isVehicleElectric);
const allElectricVehiclesButton = document.getElementById("ElectricVehicleButton");

function isVehicleElectric(vehicle) {
  if (vehicle.isElectric) {
    return true;
  } else {
    return false;
  }
}

allElectricVehiclesButton.addEventListener("click", () => {
  showTheseVehicles(allElectricArr);
});
// showTheseVehicles(allElectricArr);

//2. en der viser alle fartøjer med mere end 2 sæder

const allMoreThanTwoArr = vehicles.filter(isVehicleMoreThanTwo);
const moreThanTwoButton = document.getElementById("MoreThanTwoButton");

function isVehicleMoreThanTwo(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}

moreThanTwoButton.addEventListener("click", () => {
  showTheseVehicles(allMoreThanTwoArr);
});
// showTheseVehicles(allMoreThanTwoArr);

//3. alle fartøjer el-drevne fartøjer ejet af Jonas

const allElectricAndOwnedArr = vehicles.filter(isElectricAndOwned);
const electricAndOwnedButton = document.getElementById("ElectricAndOwnedButton");

function isElectricAndOwned(vehicle) {
  if (vehicle.isElectric === true && vehicle.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

electricAndOwnedButton.addEventListener("click", () => {
  showTheseVehicles(allElectricAndOwnedArr);
});
// showTheseVehicles(allElectricAndOwnedArr);

//4. alle rugbrøds drevne fartøjer med plads til mere end en

const allRybreadAndTandem = vehicles.filter(isRybreadAndTandem);
const rybreadVehicleButton = document.getElementById("RybreadVehicle");

function isRybreadAndTandem(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  } else {
    return false;
  }
}

rybreadVehicleButton.addEventListener("click", () => {
  showTheseVehicles(allRybreadAndTandem);
});

// showTheseVehicles(allRybreadAndTandem);

//vis alle vehicles
const showAllVehiclesButton = document.getElementById("AllVehiclesButton");

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; //fjerner indholdet, når man klikker på en ny filtrering
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
    <td>${each.type}</td>
    ${each.fuel ? `<td>${each.fuel}</td>` : `<td>-</td>`}
    <td>${each.passengers}</td> 
    ${each.stops ? `<td>${each.stops}</td>` : `<td>-</td>`}
    ${each.ownedBy ? `<td>${each.ownedBy}</td>` : `<td>-</td>`}
    ${each.isElectric ? `<td>x</td>` : `<td>-</td>`}
    ${each.isTandem ? `<td>x</td>` : `<td>-</td>`}
    </tr>`;
  });
}
showAllVehiclesButton.addEventListener("click", () => {
  showTheseVehicles(vehicles);
});
// showTheseVehicles(vehicles);

// if(each.stops) {<td>${each.stops}</td>} else {`<td>-</td>`} = ${each.stops ? `<td>${each.stops}</td>` : `<td>-</td>`}
