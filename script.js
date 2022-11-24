const inputDeparture = document.querySelector('.departure__input');
const inputRoute = document.querySelector('.route__input');
const routeBtn = document.querySelector('.route__btn');
const departureElem = document.querySelector('.departure');
const arrivalElem = document.querySelector('.arrival');
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

routeBtn.addEventListener('click', getRoute);

function getRoute() {
  let choosenDay = inputDeparture.value;
  let choosenRoute = parseInt(inputRoute.value);
  removeResults();
  getDay(choosenDay, choosenRoute);
}

function getDay(choosenDay, choosenRoute) {
  let d = new Date(choosenDay);
  // d.setDate(d.getDate() + choosenDay);
  departureElem.textContent = `${d.toLocaleDateString(
    'en-US',
    options
  )}`;
  console.log(
    `Avgångsdag är: ${d.toLocaleDateString('en-US', options)}day`
  );

  d.setDate(d.getDate() + choosenRoute);
  console.log(`Ankomstdagen är: ${d}`);
  arrivalElem.textContent = `${d.toLocaleDateString(
    'en-US',
    options
  )}`;
}

function removeResults() {
  departureElem.textContent = '';
  arrivalElem.textContent = '';
}
