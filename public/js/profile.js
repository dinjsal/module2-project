//to handle click event in the vertical navigation bar


const makeActive = (element) => {
    document.querySelectorAll('.vertical-menu li').forEach(item => {item.classList.remove('active');
  });
  element.classList.add('active');
  };
