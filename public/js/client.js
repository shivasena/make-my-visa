$('.carousel').carousel({
        interval: 5000,
        pause:	"hover"
      });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('#orderModal').on('shown.bs.modal', function () {
  $('#phoneInput').focus()
})
