function getIt () {
  $('p').on('click', alert("Hey!"));
}

function frameIt () {
  $('img').addClass("tasty");
  $('#tasty').on('load').css('border', 'solid red');
}

function pressIt () {
  $('form input').on('keydown');
    if (key.which === 71) {
      alert("You have pressed the G key!")
    }
  
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});
