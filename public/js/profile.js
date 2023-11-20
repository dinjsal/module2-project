//to handle click event in the vertical navigation bar
const makeActive = (element) => {
    document.querySelectorAll('.vertical-menu li').forEach(item => {item.classList.remove('active');
  });
  element.classList.add('active');
  };


  //to handle logout event from the navigation bar
  function performLogout(e){
    e.preventDefault();
    document.getElementById('logout').submit();
  }

// to toggle nav items in hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', () =>{document.querySelectorAll('.nav-item').forEach(item => 
  {item.style.display = item.style.display === 'block' ? 'none' : 'block';
});});


//disable vertical navbar buttons if no flight booked. 
document.addEventListener('DOMContentLoaded', () => {
  const flightBooked = localStorage.getItem('flightBooked') === 'true';

  const updateUI = () => {

    if (!flightBooked) {
      // disabling specific buttons
      document.getElementById('trainStat').classList.add('disabled');
      document.getElementById('flightInfo').classList.add('disabled');
      document.getElementById('manageFlight').classList.add('disabled');
      document.getElementById('yourSuit').classList.add('disabled');

      // disabling main dashboard
      document.querySelector('.main-grid').style.display = 'none';

      //to display no flight booked message
      document.getElementById('noFlightBooked').style.display = 'block';
    } else {
      // to enable back specific buttons
      document.getElementById('trainStat').classList.remove('disabled');
      document.getElementById('flightInfo').classList.remove('disabled');
      document.getElementById('manageFlight').classList.remove('disabled');
      document.getElementById('yourSuit').classList.remove('disabled');

      // to enable main dashboard
      document.querySelector('.main-grid').style.display = 'grid';

      // to hide the 'noFlightBooked' div if there is a booked flight
      document.getElementById('noFlightBooked').style.display = 'none';
  }

  }

  updateUI();


});


