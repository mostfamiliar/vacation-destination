function place(located, landmark, season) {
  this.located = located;
  this.landmark = landmark;
  this.season = season;
}


place.prototype.vacationDestination = function() {
  return this.located + " " + this.landmark + " " + this.season;
}


$(document).ready(function() {
  $("#new-destination").submit(function(event){
    event.preventDefault();
    var locatedInput = $("#locationInput").val();
    var landmarkInput = $("#landmarkInput").val();
    var seasonInput = $("#seasonInput").val();

    var newDestination = place(locatedInput, landmarkInput, seasonInput);

    $("ul#destinations").append("<li class='location'>" + locatedInput + "</li>");
    $(".location").last().click(function() {
    $("#show-output").show();
    $(".locationOutput").text(" " + locatedInput);
    $(".landmarkOutput").text(" " + landmarkInput);
    $(".seasonOutput").text(" " + seasonInput);
    $("p.destinationList").text(newDestination);
  });
 });
});
