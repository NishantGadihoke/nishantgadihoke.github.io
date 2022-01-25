var getTime = function() {  
    // Reference from https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
      
    let options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit'
    },
    formatter = new Intl.DateTimeFormat([], options);
    rawCurrentTime = new Date();
    currentTime = formatter.format(new Date());
    document.getElementById("current-time").innerHTML = currentTime;

    // 8 AM
    var startTime = new Date().setHours(8, 0, 0);
    // 9 PM
    var endTime = new Date().setHours(21, 0, 0);

    isAvailable = false;

    // Functionality to show the green dot if time is between 8 AM and 9 PM (probably over-engineered this part)
    if (rawCurrentTime >= startTime && rawCurrentTime <= endTime) {
        isAvailable = true;
    }

    if (isAvailable) {
        document.getElementById("timeContainer").classList.remove("not-available");
        document.getElementById("timeContainer").classList.add("available");
    } else {
        document.getElementById("timeContainer").classList.remove("available");
        document.getElementById("timeContainer").classList.add("not-available");
    }

}

if (document.getElementById("current-time")) {
    // Run the function once on page load
    getTime();
    // Then run it every 20 seconds
    setTimeout(getTime, 20000);
}



// Vanilla JS Smooth Scroll - taken from https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165

const links = document.querySelectorAll(".smooth");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}