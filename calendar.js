function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[parseInt(days) + 2];
   
if (days <= 0 || isNaN(days) || days > 31) {
      alert("Digite um número positivo entre 1 e 31.");
      return;
    }
   
    td.style.backgroundColor = color;
  }