$('.carousel').carousel({
        interval: 5000,
        pause:	"hover"
      });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function() {
 
  $("#owl-flags").owlCarousel({
      'slideSpeed' : 300,
      'paginationSpeed' : 400,
      'loop': true,
      'lazyLoad': true,
      'autoplay': true,
      'items': 2
  });
 
});

$('#orderModal').on('shown.bs.modal', function () {
  $('#phoneInput').focus()
})
