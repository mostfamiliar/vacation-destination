function place(located, landmark, season) {
  this.located = located;
  this.landmark = landmark;
  this.season = season;
}


place.prototype.vacationDestination = function() {
  return this.located + " " + this.landmark + " " + this.season;
}
