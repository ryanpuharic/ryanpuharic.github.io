// Function to show a specific popup
function showPopup(popupId) {
    document.getElementById(`popup${popupId}`).style.display = 'flex';
  }
  
  // Function to close a specific popup
  function closePopup(popupId) {
    document.getElementById(`popup${popupId}`).style.display = 'none';
  }
  
  window.onclick = function(event) {
    for (let i = 1; i <= 3; i++) {
      const popup = document.getElementById(`popup${i}`);
      if (event.target == popup) {
        popup.style.display = 'none';
      }
    }
  };
  