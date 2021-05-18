/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  time = time.split(":")[0];
  if (time < 12) return "Good Morning";
  if (time > 17) return "Good Evening";
  else return "Good Afternoon";
}
/* Write your implementation of displayMessage() */
// The `displayMessage` function should take one argument, a `String`.
function displayMessage (message) {
  document.getElementById('greeting').innerText = message
}

// When the function runs it should update the text inside the `#greeting` node
// with the content of the argument.

// It does not return anything.
