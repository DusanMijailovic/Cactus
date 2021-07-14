
	document.getElementById('dropbtn').addEventListener('click', myFunction);

function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}


$.ajax({
	type: 'GET',
	url: 'resources/json/menu.json',
	dataType: "json",
	success: function(data) {
		showMenu(data);
		showFooterMenu(data);
	},
	error: function(error) {
		console.log(error);
	}
});

function showMenu(data){
	var list = "<ul class='main-nav'>";
	$.each(data, function(index, data) {
		list += "<li><a href='" + data.href + "'>" + data.content + "</li>";
	});

	list += "</ul>";
	document.querySelector(".dropdown-content").innerHTML = list;
}


function showFooterMenu(data){
	var list = "<ul class='footer-nav'>";
	$.each(data, function(index, data) {
		list += "<li><a href='" + data.href + "'>" + data.content + "</li>";
	});

	list += "</ul>";
	document.querySelector(".foo-nav").innerHTML = list;
}


/*-------------MENU AND SOCIALS AJAX-----------------------*/

$.ajax({
	type: 'GET',
	url: 'resources/json/socialnetworks.json',
	dataType: "json",
	success: function(data) {
		showSocials(data);
	},
	error: function(error) {
		console.log(error);
	}
});


function showSocials(data) {
	var social = "<ul class='social-icons'>";
	$.each(data, function(index, data) {
		social+= "<li><a href='" + data.href + "'><i class='" + data.icon + "'></i></a></li>";
	});
	social += "</ul>";
	document.querySelector(".icons").innerHTML = social;
}