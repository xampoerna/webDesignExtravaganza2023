//header time scroll
const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
    setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
    let today = new Date();

    // return number
    let dayName = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // value -> ID of the html element
    const IDCollection = ["day", "daynum", "month", "year"];
    // return value array with number as a index
    const val = [dayWeek[dayName], dayNum, months[month], year];
    for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
}

updateDate();
setInterval(refreshTime, 1000);

// carousel image
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// tab active
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).className += " active";
    evt.currentTarget.className += " active";
}
