$(document).ready(function(){
  setTimeout(function(){
    $('dd').slideUp();
  },500);

  $('dt').on('mouseover', function(){
    $(this).next().slideDown("fast");
  });
  $('dt').on('mouseout', function(){
    $(this).next().slideUp("fast");
  });
});
