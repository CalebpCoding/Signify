function setLeftPosition() {
    const screenWidth = window.innerWidth;
    let leftValue;

    if( screenWidth < 200) {
        leftValue = '1vw'; // For very small screens
    } else if (screenWidth < 768) {
      leftValue = '3vw'; // For small screens
    } else if (screenWidth >= 768 && screenWidth < 1200) {
      leftValue = '5vw'; // For medium screens
    } else {
      leftValue = '10vw'; // For large screens
    }
  
    document.getElementsByClassName('con').style.left = leftValue;
  }
  
  // Call the function on page load and resize
  window.onload = setLeftPosition;
  window.addEventListener('resize', setLeftPosition);
