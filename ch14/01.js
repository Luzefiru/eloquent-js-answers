/*
For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags,
we can put cell elements: either heading cells (<th>) or regular cells (<td>).

Given a data set of mountains, an array of objects with name, height, and
place properties, generate the DOM structure for a table that enumerates
the objects. It should have one column per key and one row per object, plus
a header row with <th> elements at the top, listing the column names.

Write this so that the columns are automatically derived from the
objects, by taking the property names of the first object in the data.

Add the resulting table to the element with an id attribute of "mountains"
so that it becomes visible in the document.

Once you have this working, right-align cells that contain number values
by setting their style.textAlign property to "right".
*/

/* test data set */
const mountains = [
  { name: 'Mount Kilimanjaro', height: '5,885 m', place: 'Tanzania' },
  { name: 'Mount Everest', height: '8,849 m', place: 'Nepal' },
  { name: 'K2', height: '8,611 m', place: 'Pakistan' },
];

/**
 * @brief Transforms an array of objects into an HTML table node with the keys as the headers.
 *
 * @param {Array} arrayOfObjects - the data we want to embed on a table
 * @param {string} tableID - the string we want to associate the table's HTML ID with
 * @returns Node - the outputted table
 */
function createTableFromData(arrayOfObjects, tableID) {
  // creates a table with the passed-in {tableID}
  const table = document.createElement('table');
  table.id = tableID;

  // create a table row that contains the keys as headers from the {arrayOfObjects}
  const headerRow = document.createElement('tr');
  for (const key of Object.keys(arrayOfObjects[0])) {
    const newHeader = document.createElement('th');
    newHeader.textContent = key;
    headerRow.appendChild(newHeader);
  }
  table.appendChild(headerRow);

  // create data rows for each object in the array and set its keys' values as the text content
  for (const currentObject of arrayOfObjects) {
    const newDataRow = document.createElement('tr');

    for (key of Object.keys(currentObject)) {
      const newTableData = document.createElement('td');
      newTableData.textContent = currentObject[key];

      // if the data contains a number not preceeded by any other character
      if (/(?<![a-zA-Z])\d+/.test(currentObject[key])) {
        // let it align to the right
        newTableData.style.textAlign = 'right';
      }

      newDataRow.appendChild(newTableData);
    }

    table.appendChild(newDataRow);
  }

  return table;
}

/* test code */
const root = document.querySelector('#root');
root.appendChild(createTableFromData(mountains, 'mountains'));
