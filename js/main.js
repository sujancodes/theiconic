/*
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("30 July 2022");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((myDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((myDate % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((myDate % (1000 * 60)) / 1000);

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()

setInterval( countDown, 1000 ) */


// Set the date we're counting down to
var countDownDate = new Date("may 6, 2022 10:00:00").getTime();

// Update the count down every 1 second

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="clock"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("clock").innerHTML = "EXPIRED";
    }
  }, 1000);