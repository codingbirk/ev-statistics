$(document).ready(function() {

	$('#arrow1').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#page2').offset().top
			}, 1500)
	})

});

$(document).ready(function() {

	$('#arrow2').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#page3').offset().top
			}, 1500)
	})

});

$(document).ready(function() {

	$('#arrow2').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#page3').offset().top
			}, 1500)
	})

});

$(document).ready(function() {

	$('#arrow3').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#page4').offset().top
			}, 1500)
	})

});

$(document).ready(function() {

	$('#arrow4').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#page5').offset().top
			}, 1500)
	})

});

// Our labels along the x-axis
var years = [2013,2014,2015];
// For drawing the lines
var us = [172.000,291.322,410.000];
var china = [28.619,83.198,258.328];
var japan = [74.124, 108.248,126.420];
var netherlands = [28.673,45.020,88.991];
var france = [28.560,43.605,74.294];
var uk = [9.982,24.500,53.524];
var germnay = [12.126,25.205,48.669];
var sweden = [3.138,8.076,16.996];
var norway = [20.486,43.442,84.401];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        
  data: us,
  label: "United States",
  borderColor: "#7faaeb",
  fill: false
},
{ 
  data: china,
  label: "China",
  borderColor: "#97ed65",
  fill: false
},
{ 
  data: japan,
  label: "Japan",
  borderColor: "#ed8e65",
  fill: false
},
{ 
  data: netherlands,
  label: "Nethelands",
  borderColor: "#ebc77f",
  fill: false
},
{ 
  data: france,
  label: "France",
  borderColor: "#a765ed",
  fill: false
},
{ 
  data: uk,
  label: "United Kingdom",
  borderColor: "#656ced",
  fill: false
},
{ 
  data: germnay,
  label: "Germnay",
  borderColor: "#eb7f80",
  fill: false
},
{ 
  data: sweden,
  label: "Sweden",
  borderColor: "#d93122",
  fill: false
},
{ 
  data: norway,
  label: "Norway",
  borderColor: "#51D178",
  fill: false
},
      
    ]
  },
options: {
	legend: {
      labels: {
         fontColor: 'white'
      }
   },
	scales: {
		xAxes: [{
			gridLines: {
				color: 'white',

			},
			ticks: {
                    fontColor: "white",
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                }
		}], 
		yAxes: [{
			gridLines: {
			color: 'white',
			},
			ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 100,
                    beginAtZero: true
                }
		}],
		
	}

}
});

//Chart 2//

// Our labels along the x-axis
var years = [2017];
// For drawing the lines
var france = [1.5];
var uk = [1.7];
var netherlands = [1.7];
var luxenburg = [1.8];
var finland = [2.0];
var switzerland = [2.0];
var belgium = [2.3];
var sweden = [4.3];
var island = [9.0];
var norway = [34.7];

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: years,
    datasets: [
      { 
        
  data: france,
  label: "France / China",
  backgroundColor: "#7faaeb",
  fill: true
},
{ 
  data: uk,
  label: "United Kingdom",
  backgroundColor: "#97ed65",
  fill: false
},
{ 
  data: netherlands,
  label: "Nethelands",
  backgroundColor: "#ed8e65",
  fill: false
},
{ 
  data: luxenburg,
  label: "Luxenburg",
  backgroundColor: "#ebc77f",
  fill: false
},
{ 
  data: finland,
  label: "Finland",
  backgroundColor: "#a765ed",
  fill: false
},
{ 
  data: switzerland,
  label: "Switzerland",
  backgroundColor: "#656ced",
  fill: false
},
{ 
  data: belgium,
  label: "Belgium",
  backgroundColor: "#eb7f80",
  fill: false
},
{ 
  data: sweden,
  label: "Sweden",
  backgroundColor: "#d93122",
  fill: false
},
{ 
  data: island,
  label: "Island",
  backgroundColor: "#f4ff94",
  fill: false
},
{ 
  data: norway,
  label: "Norway",
  backgroundColor: "#51D178",
  fill: false
},
      
    ]
  },


});
 
//Chart 3//

// Our labels along the x-axis
var years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];
// For drawing the lines
var sales = [352,231,567,454,733,2243,4700,10769,23408,39432,50875];


var ctx = document.getElementById("myChart3");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: years,
    datasets: [
      { 
        
  data: sales,
  label: "Sales",
  backgroundColor: "#51D178",
  fill: true
},

      
    ]
  },
  options: {
   legend: {
      labels: {
         fontColor: 'white'
      }
   },

   
}
});



//Chart 4//

// Our labels along the x-axis
var years = ["Electric","Plug-in Hybrid","Petrol"];
// For drawing the lines
var e = [27, 58, 16];
var pih = [70];
var p = [20];

var ctx = document.getElementById("myChart4");
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
  	datasets: [{
  		data: e,
  		backgroundColor: ['#48AB57', '#AB3E3B', '#407CAB']
  	}],
  	labels: years
  		
  },
  options: {
   legend: {
      labels: {
         fontColor: 'white'
      }
   }},
});

// Wrap every letter in a span
$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 100 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


//console.log($(this).closest('section').find('.cd-section').next('section'));