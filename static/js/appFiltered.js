// create variable from data file
var tableData = data;


var tbody = d3.select("tbody");

console.log(tableData);

//Populate table with all events

tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


var submit = d3.select("#filter-btn");

//Create on-click function
submit.on("click", function() {
  d3.event.preventDefault();
  //clear populated table
  d3.select("tbody").html("");
  //read entered date
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  //create filtered data with datetime
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);
  //Populate chart with filtered data
  filteredData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      
      var cell = tbody.append("td");
      cell.text(value);
    });
  });




});


