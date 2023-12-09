document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;

  // Alert Button
  const alertButton = document.getElementById('btn-alert');
  alertButton.addEventListener('click', function () {
    alert('Hello everyone!');
  });

  // Hover Button
  const hoverButton = document.getElementById('btn-hover');
  hoverButton.addEventListener('mouseover', function () {
    hoverButton.innerText = 'Welcome!';
  });

  hoverButton.addEventListener('mouseout', function () {
    hoverButton.innerText = 'login now';
  });

  // Incrementing Button
  let count = 1;
  const counterButton = document.getElementById('btn-counter');
  const counterText = document.getElementById('txt-counter'); // Added this line

  counterButton.addEventListener('click', function () { // Changed 'enter' to 'click'
    count++;
    counterText.innerHTML = `Number: ${count}`;

    // Change text color based on even or odd
    if (count % 2 === 0) {
      counterText.classList.remove('odd');
      counterText.classList.add('even');
    } else {
      counterText.classList.remove('even');
      counterText.classList.add('odd');
    }
  });

  // For Loop
  const numbersList = document.getElementById('numbers');
  for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    numbersList.appendChild(listItem);
  }

});

