let btn = document.getElementById('myButton');
document.getElementById('printColor').innerHTML = '#ffffff';

btn.addEventListener('click', (e) => {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("color").style.backgroundColor = '#' + randomColor;
  document.getElementById('printColor').innerHTML = '#' + randomColor;
});