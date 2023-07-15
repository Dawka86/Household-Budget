$(function() {
    $('#contact-button').click(function() {
      $.get('formularz.html', function(data) {
        $('#form-container').html(data);
      });
    });
  });





