// Add event listener for "#shot-rating" fieldset
document.querySelector('#shot-rating').addEventListener('change', addShot);

// Get span for output statistics
const shotsOutput = document.querySelector('#shotNumber');
const ratingOutput = document.querySelector('#averageRating');
// Init statistics variables
let shotNumber = 0;
let totalPoint = 0;

function addShot(event) {
  // Get distance element
  const distance = document.querySelector('input[type=range]');

  // Get shotType element
  // const shotType = document.querySelector("#shot-type input[type=radio]:checked");
  const shotType = document.querySelector('#shot-type select');

  // Get shotRating target element
  const shotRating = event.target;

  // if shotType and distance have value
  if (shotType.value && distance.value) {
    // Событие "click" по нажатию на тег label вызывает автоматический клик по тегу input, поэтому мы используем событие "change" или "input"
    if (shotRating.tagName === 'INPUT') {
      // Get session div
      const session = document.getElementById('session');
      // Create span element
      const span = document.createElement('span');
      // Add class
      span.className = 'val' + shotRating.value;
      // Add text
      span.textContent = shotRating.value;
      // Add span with rating to div
      session.append(span);

      // Calculate statistics
      shotNumber++;
      totalPoint += +shotRating.value;
      averageRating = (totalPoint / shotNumber).toFixed(2);

      // Add statistics to UI
      shotsOutput.textContent = shotNumber;
      ratingOutput.textContent = `${averageRating} (${Math.round(
        averageRating * 20
      )}%)`;

      console.log(distance.value, shotType.value, shotRating.value);
      setTimeout(function () {
        shotRating.checked = false;
      }, 500);
    }
    // if shotType is NOT checked
  } else {
    alert('Please, choose "Distance to the Jack" and "Shot Type"!');
    // почему-то это не работает
    // event.preventDefault();
    shotRating.checked = false;
  }
}

// // Shot constructer
// function Shot(distance, type, rating) {
//   this.distance = distance;
//   this.type = type;
//   this.rating = rating;
// }

// const shot1 = new Shot(4, 'Lob Shot', 5);
// const shot2 = new Shot(4, 'Lob Shot', 4);
// console.log(shot1);
// console.log(shot2);
