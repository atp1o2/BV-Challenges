$(document).ready(function () {
  $("#slider10, #slider15, #slider20").click(function(){
    var contentId = $(this).find('span').attr('id')
    var $content = $('#' + contentId);
    var originalText = $content.text();

    $content.slideUp('fast', function () {
      $(this).text('Code copied!').slideDown('fast');
      setTimeout(function () {
        $content.slideUp('fast', function () {
          $(this).text(originalText).slideDown('fast');
        });
      }, 3000);
    });
  });
});
