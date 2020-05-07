// Add event listener for "#shot-rating" fieldset
document.querySelector("#shot-rating").addEventListener('change', addShot);

function addShot(event) {
  // Get distance and shotType elements
  const distance = document.querySelector("input[type=range]");
  const shotType = document.querySelector("#shot-type input[type=radio]:checked");
  const shotRating = event.target;

  // if shotType is checked
  if (shotType) {
    // Событие "click" по нажатию на тег label вызывает автоматический клик по тегу input, поэтому мы используем событие "change" или "input"
    if (shotRating.tagName === "INPUT") {
      // Get session div
      const session = document.getElementById("session");
      // Create span element
      const span = document.createElement('span');
      // Add class
      span.className = 'val' + shotRating.value;
      // Add text
      span.textContent = shotRating.value;
      // Add span with rating to div
      session.append(span);

      console.log(distance.value, shotType.value, shotRating.value);
      setTimeout(function () {
        shotRating.checked = false;
      }, 500);
      
    }
  // if shotType is NOT checked
  } else {
    alert("Please, choose Type of shot!");
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
