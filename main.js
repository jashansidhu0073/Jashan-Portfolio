/*
//
//
//
//
*/
console.log('Hello, World!'); // just saying hello
 
/* alert ('Hello, World!'); // just saying hello */
 
// Footer - Display current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerText = currentYear;
 
 
  // Alert Button
  document.getElementById('btn-alert').addEventListener('click', function () {
    alert('Hello world!');
  });
 
  // Hover Button
  const hoverButton = document.getElementById('btn-hover');
 
  hoverButton.addEventListener('mouseover', function () {
    hoverButton.innerText = 'Welcome';
  });
 
  hoverButton.addEventListener('mouseleave', function () {
    hoverButton.innerText = 'Click here to login';
  });
 
 
   // Incrementing Button
   let count = 1;
 
   document.getElementById('btn-counter').addEventListener('click', function () {
     count++;
     document.getElementById('txt-counter').innerText = `Number: ${count}`;
 
     // Check if the number is even or odd
     if (count % 2 === 0) {
       document.getElementById('txt-counter').classList.remove('odd');
       document.getElementById('txt-counter').classList.add('even');
     } else {
       document.getElementById('txt-counter').classList.remove('even');
       document.getElementById('txt-counter').classList.add('odd');
     }
   });
 
   
  // For Loops
  const numbersList = document.getElementById('numbers');
 
  for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    
    // Change color based on even or odd
    listItem.style.color = i % 2 === 0 ? 'red' : 'green';
 
    numbersList.appendChild(listItem);
  }