/*----------------JAVASCRIPT CODE---------------*/


window.onload = function () {
  document.getElementById('btnReg').addEventListener('click', Validate);
  document.getElementById('userName').addEventListener('blur',verifyUserName);
  document.getElementById('emailReg').addEventListener('blur',verifyEmailReg);
  document.getElementById('passwordReg').addEventListener('blur',verifyPassword);
  document.getElementById('passwordConf').addEventListener('blur',verifyPasswordConfirm);
}



/*----------------REGISTRATION FORM VALIDATION---------------*/
var userName, email, password, passwordConfirm;


function Validate() {
  userName = document.getElementById('userName').value;
  email = document.getElementById('emailReg').value;
  password = document.getElementById('passwordReg').value;
  passwordConfirm = document.getElementById('passwordConf').value;




//REGULAR EXPRESION

var regUserName = /^[A-ZČĆŽŠĐ][a-zčćžšđ\.\_\-\d\W]{2,15}$/;
var regEmail = /^[\w]+[\.\_\-\w\d]*\@[\w]+([\.][\w]+)+$/;
var regPassword = /^[A-ZČĆŽŠĐa-zčćžšđ\.\_\-\d\W]{2,15}$/;
var regPasswordConf = /^[a-zčćžšđ\.\_\-\d\W\t]{2,15}$/;




   //provera vrednosti iz registracije
   if(!regUserName.test(userName)) {
     document.getElementById('userNameError').style.color = "#ff0000";
     document.getElementById('userNameError').innerHTML = "Username is incorrect!";
   } else {
     document.getElementById('userNameError').style.color = "";
     document.getElementById('userNameError').innerHTML = "";
   }

   if(!regEmail.test(email)) {
     document.getElementById('emailErrorReg').style.color = "#ff0000";
     document.getElementById('emailErrorReg').innerHTML = "Email is incorrect!";
   } else {
     document.getElementById('emailErrorReg').style.color = "";
     document.getElementById('emailErrorReg').innerHTML = ""; 
   }

   if(!regPassword.test(password)) {
    document.getElementById('passwordError').style.color = "#ff0000";
    document.getElementById('passwordError').innerHTML = "Password is incorrect!";
  } else {
    document.getElementById('passwordError').style.color = "";
    document.getElementById('passwordError').innerHTML = "";
  }

  if(!regPasswordConf.test(passwordConfirm)) {
    document.getElementById('passwordErrorConf').style.color = "#ff0000";
    document.getElementById('passwordErrorConf').innerHTML = "Type in correct password!";
  } else {
   document.getElementById('passwordErrorConf').style.color = "";
   document.getElementById('passwordErrorConf').innerHTML = "";
 }
}

/////////////////////////////////////////////////////////////////////////////////



function verifyUserName() {
  userName = document.getElementById('userName');
  if (userName.value == "") {
    userName.style.border = "1px solid #ff0000";
    document.getElementById('userNameError').style.color = "#ff0000";
    document.getElementById('userNameError').innerHTML = "You must enter your username!";
    userName.focus();
  } else {
    userName.style.border = "1px solid #ccc";
    document.getElementById('userNameError').style.color = "";
    document.getElementById('userNameError').innerHTML = "";
  }
}


function verifyEmailReg() {
  email = document.getElementById('emailReg');
  if (email.value == "") {
    email.style.border = "1px solid #ff0000";
    document.getElementById('emailErrorReg').style.color = "#ff0000";
    document.getElementById('emailErrorReg').innerHTML = "You must enter your email";
    email.focus();
  } else {
    email.style.border = "1px solid #ccc";
    document.getElementById('emailErrorReg').style.color = "";
    document.getElementById('emailErrorReg').innerHTML = "";

  }

}


function verifyPassword() {
  password = document.getElementById('passwordReg');
  if (password.value == "") {
    password.style.border = "1px solid #ff0000";
    document.getElementById('passwordError').style.color = "#ff0000";
    document.getElementById('passwordError').innerHTML = "You must enter your password!";
  } else {
    password.style.border = "1px solid #ccc";
    document.getElementById('passwordError').style.color = "";
    document.getElementById('passwordError').innerHTML = "";
  }
}

function verifyPasswordConfirm() {
  password = document.getElementById('passwordReg');
  passwordConfirm = document.getElementById('passwordConf');
  if (password.value != passwordConfirm.value) {
    password.style.border = "1px solid #ff0000";
    passwordConfirm.style.border = "1px solid #ff0000";
    document.getElementById('passwordErrorConf').style.color = "#ff0000";
    document.getElementById('passwordErrorConf').innerHTML = "Passwords do not match!";
    passwordConfirm.focus();
  } else {
    password.style.border = "1px solid #ccc";
    passwordConfirm.style.border = "1px solid #ccc";
    document.getElementById('passwordErrorConf').style.color = "";
    document.getElementById('passwordErrorConf').innerHTML = "";
  }
}





/*----------------JQUERY CODE---------------*/

$(document).ready(function() {


  /*----------------SCROLL TO BOTTOM BUTTON---------------*/


  $('.scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.section-reservation').offset().top}, 3000);
    $('.new').hide();
    $('.new').fadeIn(5000);
  });

  

  $('.scroll-to-start').click( function () {
    $('html, body').animate({scrollTop: $('.section-features').offset().top}, 2000); 
    $('#scroll').hide();
    $('#scroll').fadeIn(5000);
  });





  /*----------------SCROLL TO TOP BUTTON---------------*/


  $(document).scroll(function() {
    if ($(this).scrollTop() >= 500) {        
      $('#return-to-top').fadeIn();    
    } else {
      $('#return-to-top').fadeOut();  
    }
  });
  $('#return-to-top').click(function(e) {
    e.preventDefault();    
    $('body,html').animate({
      scrollTop : 0                     
    }, 2000);
  });
});



/*----------------SLIDER---------------*/

function slideShow() {
  var current = $('.photos .show');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 3000);
}

slideShow();




$.ajax({
  type: 'GET',
  url: 'resources/json/slider.json',
  dataType: "json",
  success: function(data) {
    showSlider(data);
  },
  error: function(error) {
    console.log(error);
  }
});

function showSlider(data) {
  var slider = "";
  $.each(data, function(index, data) {
  slider += "<img src='resources/images/" + data.picture.src + "' alt='" + data.picture.alt +"' class='show' >";
  });
  document.querySelector('.photos').innerHTML = slider;
}




/*----------------------AJAX GARDEN----------------------------*/




$.ajax({
  type: 'GET',
  url: 'resources/json/cactigarden.json',
  dataType: "json",
  success: function(data) {
    sortCacti(data);
  },
  error: function(error) {
    console.log(error);
  }
});



function sortCacti(data) {

  //sortiranje a-z
  $('.sort-name').click(function(e){
    e.preventDefault();
    var garden = $('.cacti-garden');
    garden.sort(function(a,b){
      var a = $(a).find('.title').text();
      var b = $(b).find('.title').text();
      if(a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else { 
        return 0;
      }
    });
    $('.new').append(garden);
  });



  $('.sort-price').click(function(e){
    e.preventDefault();
    var garden = $('.cacti-garden');
    garden.sort(function(a,b){
      var a = parseInt($(a).find('.price').text());
      var b = parseInt($(b).find('.price').text());
      if (a > b) { 
        return -1; 
      } else if (a < b) { 
        return 1;
      } else { 
        return 0;
      }
    });
    $('.new').append(garden)
  });


//sortiranje-rastuca cena
$('.sort-price2').click(function(e){
  e.preventDefault();
  var garden = $('.cacti-garden');
  garden.sort(function(a,b){
    var a = parseInt($(a).find('.price').text());
    var b =parseInt($(b).find('.price').text());
    if(a > b){
      return 1;
    } else if(a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  $('.new').append(garden)
});

showCacti(data);

}




function showCacti(data) {
  var cac = "";
  $.each(data, function(index, data) {
    cac += "<div class='col span-1-of-3 cacti-garden'>";
    cac +="<div class='organisation-box'>" ;
    cac += "<div>";
    cac+= "<h3 class='title'>" + data.name + "</h3>";
    cac += "<img src='resources/images/" + data.picture.src + "' alt='" + data.picture.alt + "'>";
    cac +="</div>";
    cac += "<div><ul><li>Price: <span class='price'>" + data.price + "</span>EUR</li></ul></div>"; 
    cac += "<div><a href='contact.html' class='btn btn-full fade'>Buy</a></div>";
    cac +="</div></div>";
  });

  document.querySelector('.new').innerHTML = cac;
} 