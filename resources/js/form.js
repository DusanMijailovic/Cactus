window.onload = function() {
  document.getElementById('pressing').addEventListener('click', formConfirm);
  document.getElementById('nameBox').addEventListener('blur', name);
  document.getElementById('lastName').addEventListener('blur', lastName);
  document.getElementById('emailBox').addEventListener('blur', email);
}


/*--------------------FORM VALIDATION------------------*/

function formConfirm() {
  var formName = document.getElementById('nameBox').value;
  var formLastName = document.getElementById('lastName').value;
  var formEmail = document.getElementById('emailBox').value;
  var chb = document.getElementsByName('chbx');
  var formMessage = document.getElementById('messageBox').value;
  var dropdown = document.getElementById('find-us');
  var dropCh = dropdown.options[dropdown.selectedIndex].value;

  /*---------------------------CHECKBOX----------------------------------*/

  var chbCh = "";
  for(var i = 0; i < chb.length; i++) {
    if (chb[i].checked) {
      chbCh = chbCh + chb[i].value + " ";
    }
  }



  var regName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11})*$/;
  var regLastName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11}$/;
  var regEmail = /^[\w]+[\.\_\-\w\d]*\@[\w]+([\.][\w]+)+$/;


  if(!regName.test(formName)) {
   document.getElementById('nameError').style.color = "#ff0000";
   document.getElementById('nameError').innerHTML = "Name is incorrect!";
 }
 else {
  document.getElementById('nameError').style.color = "";
  document.getElementById('nameError').innerHTML = "";
}

if(!regLastName.test(formLastName)) {
 document.getElementById('lastNameError').style.color = "#ff0000";
 document.getElementById('lastNameError').innerHTML = "Last name is incorrect!";
} else {
  document.getElementById('lastNameError').style.color = "";
  document.getElementById('lastNameError').innerHTML = "";
}

if(!regEmail.test(formEmail)) {
  document.getElementById('emailError').style.color = "#ff0000";
  document.getElementById('emailError').innerHTML = "Email is incorrect!";
}
else {
  document.getElementById('emailError').style.color = "";
  document.getElementById('emailError').innerHTML = "";
}

if(dropCh == "0") {
  document.getElementById('dropError').style.color = "#ff0000";
  document.getElementById('dropError').innerHTML = "You must choose one option!";
} else {
  document.getElementById('dropError').style.color = "";
  document.getElementById('dropError').innerHTML = "";
}

}


/*------------FORM VALIDATION-------------------------*/

function name() {
  var vrName = document.getElementById('nameBox');
  if (vrName.value == "") {
    vrName.style.border = "1px solid #ff0000";
    document.getElementById('nameError').style.color = "#ff0000";
    document.getElementById('nameError').innerHTML = "You must enter your name!";
    vrName.focus();
  }
  else {
    vrName.style.border = "1px solid #ccc";
    document.getElementById('nameError').style.color = "";
    document.getElementById('nameError').innerHTML = "";
  }
}


function lastName() {
 var vrLastName = document.getElementById('lastName');
 if (vrLastName.value == "") {
  vrLastName.style.border = "1px solid #ff0000";
  document.getElementById('lastNameError').style.color = "#ff0000";
  document.getElementById('lastNameError').innerHTML = "You must enter your last name!";
  vrLastName.focus();
}
else {
  vrLastName.style.border = "1px solid #ccc";
  document.getElementById('lastNameError').style.color = "";
  document.getElementById('lastNameError').innerHTML = "";
}

}


function email() {
 var vrEmail = document.getElementById('emailBox');
 if (vrEmail.value == "") {
  vrEmail.style.border = "1px solid #ff0000";
  document.getElementById('emailError').style.color = "#ff0000";
  document.getElementById('emailError').innerHTML = "You must enter your email!";
  vrEmail.focus();
}
else{
  vrEmail.style.border = "1px solid #ccc";
  document.getElementById('emailError').style.color = "";
  document.getElementById('emailError').innerHTML = "";
}

}

/*-----------------AJAX DROPDOWN LIST----------------------------*/

$.ajax({
  url: 'resources/json/dropdownlist.json',
  type: 'GET',
  dataType: "json",
  success: function(data) {
    showForm(data);
  },
  error: function(error) {
    console.log(error);
  }
});


function showForm(data) {
var list = '<select name="chooselist" id="find-us" class="form-dimension">';
$.each(data, function(index, data) {
  list += '<option value="'+ data.value + '">' + data.content + '</option>';
});

list += '</select>'
document.querySelector('#find-us').innerHTML = list;
}













