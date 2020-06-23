window.onload = function getUsers(){
  fetch('users.json')
  .then((res) => res.json())
  .then((data) => {
    let output = '';
    data.forEach(function(user){
      output += `
      <tr>
          <td> ${user.id}</td>
          <td> ${user.name}</td>
          <td "> ${user.email}</td>
          <td "> ${user.points}</td>
        </tr>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
  setTimeout(function sortTables() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
   
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      } 
    }
    document.get
  },2500)
}

