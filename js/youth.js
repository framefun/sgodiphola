//the menu
  const burger = document.getElementById('burger');
  const fill_menu = document.getElementById('menu');
  var menu = document.querySelector(".menu");
  var hidden_menu = document.querySelector(".burgerMenu");
  //fill_menu.style.borderRadius = "50%";
  const nav_wrapper = document.getElementById('nav_wrapper');
  burger.addEventListener('click',function(){
    burger.classList.toggle('toggle');
    nav_wrapper.classList.toggle('open-menu');
    fill_menu.classList.toggle('menu');
    menu.style.animationName = "unfill";

  });
//scroll to hide menu
if (window.innerWidth > 1024) {
  window.addEventListener("scroll",function(){
    if(window.pageYOffset > 500){
     hidden_menu.style.display = "block";
    }
    else if(window.pageYOffset < 500){
      hidden_menu.style.display = "none";
    }

  },false);
}
//the end of menu
//start google charts
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['member',      2],
    ['Admin',  1],
    ['Blogger', 1],
    ['regular user', 1]
  ]);

  var options = {
    title: 'User accounts',
    pieHole: 0.6,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
