// Implement the jQuery UI datepicker on dom load
$(function() {
  $("#datepicker").datepicker({minDate: new Date(2008, 05, 08), maxDate: new Date()});
});

// Save the newly chosen date
$(function() {
	$('#datepicker').change(function(e) {
    app.$data.date = e.target.value;
	})
});
