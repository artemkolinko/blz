// const distance = document.querySelector('input[type="range"]');
// const output = document.querySelector("#output");

// distance.addEventListener("input", updateTextInput);

// function updateTextInput(e) {
//   output.textContent = e.target.value + ' m';
// } distance

// const form = document.querySelector('#shot-info');
const shotRatingFieldset = document.querySelector("#shot-rating");

// shotRatingFieldset.addEventListener("mouseup", unCheckRating);
shotRatingFieldset.addEventListener("click", addShot);

function addShot(event) {
  if (event.target.tagName === "INPUT") {
    const distance = document.querySelector("input[type=range]").value;
    const shotType = document.querySelector(
      "#shot-type input[type=radio]:checked"
    ).value;
    const shotRating = document.querySelector(
      "#shot-rating input[type=radio]:checked"
    );
    console.log(distance, shotType, shotRating.value);
  }

  // console.log(event.target.tagName);

  // console.log(this);
  // event.preventDefault();

  // alert(event.target);
  // if (event.target.value === false) {

  // } else {

  // }
}

function unCheckRating() {
  const shotRating = document.querySelector(
    "#shot-rating input[type=radio]:checked"
  ).value;
  shotRating.checked = false;
}

// shotType.addEventListener('click', function (e) {
//   let typeOfShot = e.target.firstChild;
//   console.log(typeOfShot);
// })

// Shot constructer
function Shot(distance, type, rating) {
  this.distance = distance;
  this.type = type;
  this.rating = rating;
}

// const shot1 = new Shot(4, 'Lob Shot', 5);
// const shot2 = new Shot(4, 'Lob Shot', 4);
// const shot3 = new Shot(4, 'Lob Shot', 3);
// const shot4 = new Shot(4, 'Lob Shot', 5);
// const shot5 = new Shot(4, 'Lob Shot', 5);
// const shot6 = new Shot(4, 'Lob Shot', 3);
// const shot7 = new Shot(4, 'Lob Shot', 4);
// console.log(shot1);
// console.log(shot2);
// console.log(shot3);
// console.log(shot4);
// console.log(shot5);
// console.log(shot6);
// console.log(shot7);
