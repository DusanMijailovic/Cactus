/*--------------------------GALLERY-----------------------------*/

(function($) {
  $(document).ready(function() {
 });
})(jQuery);


$.ajax({
  type: 'GET',
  url: 'resources/json/gallery.json',
  dataType: "json",
  success: function(data) {
    showGallery(data);
  },
  error: function(error) {
    console.log(error);
  }
});


function showGallery(data) {
  var gallery = "";
  $.each(data, function(index, data) {
    gallery += "<a class='lightbox' href='" + data.source.href + "'data-fancybox='group' data-caption='" + data.source.caption +"'>" +
   "<img src='" + data.picture.src + "' alt='"+ data.picture.alt + "'/></a>";
 }); 

    document.querySelector(".frame").innerHTML = gallery;
  
}

/*--------------------------BUTTON FROM BOTTOM TO TOP-----------------------------*/
$(document).ready(function() {
 $(document).scroll(function() {
  if ($(this).scrollTop() >= 50) {        
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