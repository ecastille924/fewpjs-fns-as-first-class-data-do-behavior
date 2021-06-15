/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// function greet(timeString) {
//   let currentTime = timeString.split(':');
//   let currentHour = parseInt(currentTime[0])
//   if (currentHour < 12) {
//     return "Good Morning";
//     } 
//     else if(currentHour > 17) {
//     return "Good Evening";
//     }
//   return "Good Afternoon";
// }

// function displayMessage(msg) {
//   document.getElementById("greeting").innerText = msg;
// }


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let nowTime = time.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (nowHour < 12 )
  return "Good Morning"
  else if (nowHour > 17)
  return "Good Evening"
  else 
  return "Good Afternoon"
}

function displayMessage(string){
  greeting = document.getElementById("greeting")
  greeting.innerText = string

}