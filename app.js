$(document).ready(function () {
  $('#show').click(function () {
    $('#panel').slideDown('fast');
    $('#show').hide();
    $('#hide').show();
  });
  $('#hide').click(function () {
    $('#panel').slideUp('fast');
    $('#hide').hide();
    $('#show').show();
  });
});
