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