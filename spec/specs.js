describe("place", function() {
  it("will create a place with specified details", function() {
    var newPlace = new place("Los Angeles", "La Brea Tar Pits", "Fall");
    expect(newPlace.located).to.equal("Los Angeles");
    expect(newPlace.landmark).to.equal("La Brea Tar Pits");
    expect(newPlace.season).to.equal("Fall");
  });
  it("adds vacationDestination method to all places", function() {
    var newDestination = new place ("Chicago", "The Bean", "Spring");
    expect(newDestination.vacationDestination()).to.equal("Chicago The Bean Spring");
  });
});
