//to handle click event in the vertical navigation bar
const makeActive = (element) => {
    document.querySelectorAll('.vertical-menu li').forEach(item => {item.classList.remove('active');
  });
  element.classList.add('active');

  //to hide the displayed container when a new nav item is clicked
  document.querySelector('.main-grid').style.display = 'none';
  document.querySelector('.training-container').style.display = 'none';
  document.querySelector('.suit-container').style.display = 'none';
  document.querySelector('.flightManagementSection').style.display = 'none';
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
      document.querySelector('.training-container').style.display = 'none';
      

      // to hide the 'noFlightBooked' div if there is a booked flight
      document.getElementById('noFlightBooked').style.display = 'none';
  }

  }

  updateUI();


});



// Add event listeners to the vertical menu items
document.querySelectorAll('.vertical-menu li').forEach(item => {
  item.addEventListener('click', function() {
    makeActive(this);
    toggleTrainingContainer(this);
    toggleSuitContainer(this);
    toggleFlightInfo(this);
    toggleManageBooking(this);
  });
});


//toggle training container
function toggleTrainingContainer(element) {
  if (element.id === 'trainStat') {
    const container = document.querySelector('.training-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  }
}

//toggle suit container
function toggleSuitContainer(element) {
  if (element.id === 'yourSuit') {
    const container = document.querySelector('.suit-container');
    container.style.display = container.style.display === 'none' ? 'flex' : 'none';
  }
}

//toggle flight info container
function toggleFlightInfo(element) {
  if (element.id === 'flightInfo') {
    const container = document.querySelector('.main-grid');
    container.style.display = container.style.display === 'none' ? 'grid' : 'none';
  }
}


//toggle manage booking container
function toggleManageBooking(element) {
  if (element.id === 'manageFlight') {
    const container = document.querySelector('.flightManagementSection');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  }
}






























// // For suit display
// document.getElementById('yourSuit').addEventListener('click', function() {
//   // to toggle the main grid display
//   const mainGrid = document.querySelector('.main-grid');
//   if (mainGrid.style.display !== 'none') {
//     mainGrid.style.display = 'none';
//   } else {
//     mainGrid.style.display = 'grid';
//   }
  
//   // to toggle the suit container display
//   const suitContainer = document.querySelector('.suit-container');
//   if (suitContainer.style.display === 'none') {
//     suitContainer.style.display = 'flex'; 
//   } else {
//     suitContainer.style.display = 'none';
//   }
// });



// // For training display
// document.addEventListener('DOMContentLoaded', () => {
//   // Select the Training Status button
//   const trainingStatusButton = document.getElementById('trainStat');
  
//   // Function to toggle the training container display
//   const toggleTrainingContainer = () => {
//     const trainingContainer = document.querySelector('.training-container');
//     if (trainingContainer.style.display === 'none' || trainingContainer.style.display === '') {
//       trainingContainer.style.display = 'block'; // Show the training container
//     } else {
//       trainingContainer.style.display = 'none'; // Hide the training container
//     }
//   };

//   // Add click event listener to the Training Status button
//   trainingStatusButton.addEventListener('click', toggleTrainingContainer);
// });

