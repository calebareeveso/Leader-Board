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
        
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
      
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      } 
    }
    document.get
  },2000)
  setTimeout(function() {
    var x = document.getElementsByTagName("TR");
   x[1].style.backgroundColor = "rgb(70, 247, 114)";
  },2250)
  setTimeout(function () {
    var x = document.getElementsByTagName("TR");
   x[2].style.backgroundColor = " rgb(70, 247, 114)";
  },2500)
  setTimeout(function () {
    var x = document.getElementsByTagName("TR");
   x[3].style.backgroundColor = " rgb(70, 247, 114)";
  },3000)

  
  setTimeout(function(){
    var x = document.getElementById("snackbar");
  
    x.className = "shows";
  

    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

  },3500)
}

