console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});


$('.menu-icon').click(function(e) {
  e.preventDefault();
  $('.menu').toggleClass('active')
})