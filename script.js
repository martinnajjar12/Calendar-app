const myDate = new Date();
const month = myDate.getMonth();
const day = myDate.getDay();
const date = myDate.getDate();
const fullYear = myDate.getFullYear();
const time = myDate.getHours();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentDay = days[day];
const currentMonth = months[month];

//Viewing the current month
const appMonth = document.getElementById('thisMonth');
appMonth.innerHTML = currentMonth;
appMonth.setAttribute('class', `${fullYear}-${month + 1}`);

//Choosing the current week
const dateNumber = document.getElementById('numbers');
const mainContainer = document.getElementsByClassName('container')[0];

function choosingWeek(j) {
    for (let i = 0; i < 7; i++) {
        const dateElem = document.createElement('li');
        const timeElem = document.createElement('time');
        timeElem.setAttribute('datetime', `${fullYear}-${month + 1}-${date + j}`);
        timeElem.innerHTML = date + j;
        dateElem.appendChild(timeElem);
        j++;
        dateNumber.appendChild(dateElem);
        if (timeElem.innerHTML == date) {
            dateElem.setAttribute('class', 'active');
            const hasContentDiv = document.createElement('div');
            dateElem.appendChild(hasContentDiv);
            hasContentDiv.setAttribute('class', 'hasContent');
        }
    }
}

switch (currentDay) {
    case 'Sunday':
        choosingWeek(0);
        break;
    case 'Monday':
        choosingWeek(-1);
        break;
    case 'Tuesday':
        choosingWeek(-2);
        break;
    case 'Wednesday':
        choosingWeek(-3);
        break;
    case 'Thursday':
        choosingWeek(-4);
        break;
    case 'Friday':
        choosingWeek(-5);
        break;
    case 'Saturday':
        choosingWeek(-6);
        break;
}

//Toggling the Content of the day
const ThirdSection = document.getElementById('third');
const messiPic = document.getElementsByClassName('messi')[0];
messiPic.addEventListener('click', toggleThirdSection);

function toggleThirdSection() {
    ThirdSection.classList.toggle('hide');
    ThirdSection.classList.toggle('show');
}

//Viewing the right greeting based on the time
const greeting = document.getElementsByClassName('greeting')[0];
if (time >= 12 && time < 18) {
    greeting.innerHTML = 'Good Afternoon';
} else if (time >= 0 && time < 12) {
    greeting.innerHTML = 'Good Morning';
} else if (time >= 18) {
    greeting.innerHTML = 'Good Evening';
}

//toggling search bar
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementsByClassName('fa-search')[0];

searchBtn.addEventListener('click', toggleSearchBar);

function toggleSearchBar() {
    searchBar.classList.toggle('show-search-bar');
}

//toggling navigation bar

const hamburger = document.getElementsByClassName('fa-bars')[0];
const navBarDiv = document.getElementsByClassName('nav-bar-links')[0];

hamburger.addEventListener('click', showingNavBarDiv);

function showingNavBarDiv() {
    navBarDiv.classList.toggle('nav-bar-show');
}