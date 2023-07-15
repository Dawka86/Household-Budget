document.addEventListener("DOMContentLoaded", function() {
    var delayInMilliseconds = 2500; 
    
    setTimeout(function() {
      var offcanvasElement = document.getElementById('staticBackdrop');
      var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      
      if (!offcanvas) {
        offcanvas = new bootstrap.Offcanvas(offcanvasElement);
      }
      
      offcanvas.show();
    }, delayInMilliseconds);
  });