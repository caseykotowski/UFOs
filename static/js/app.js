// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody")

// Building our UFO table
function buildTable(data) {
    // clear any existing data
    tbody.html("");

    //Loop through each object in data
    //Append a row and cell for eachv alue in row
    data.forEach((dataRow) => {
        // append a  row to table body
        let row = tbody.append("tr");

        // Loop through each field in dataRow and
        // add each falvue as table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}