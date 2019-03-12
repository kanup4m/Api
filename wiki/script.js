document.querySelector('.secondary').addEventListener('click',function() {

$('h6').remove();
$('img').remove();

 var input = document.querySelector(".form-control").value;

var cross = 'https://cors-anywhere.herokuapp.com/';
var api = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=';
var rest = '&format=json';
var URLRequest =cross +  api + input + rest;
var images = 'https://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&format=json&prop=images'
// console.log(URLRequest);
$.getJSON(URLRequest)
.done (function  (data) {
	var title0 = data.query.search[0].title;
	var snipp0 = data.query.search[0].snippet;
	document.querySelector('.title0').innerHTML = title0 ; 
	document.querySelector('.snipp0').innerHTML = snipp0 + "."; 
	var title1 = data.query.search[1].title;
	var snipp1 = data.query.search[1].snippet;
	document.querySelector('.title1').innerHTML = title1 ; 
	document.querySelector('.snipp1').innerHTML = snipp1 + ".";
	var title2 = data.query.search[2].title;
	var snipp2 = data.query.search[2].snippet;
	document.querySelector('.title2').innerHTML = title2 ; 
	document.querySelector('.snipp2').innerHTML = snipp2 + ".";
	var title3 = data.query.search[3].title;
	var snipp3 = data.query.search[3].snippet;
	document.querySelector('.title3').innerHTML = title3 ; 
	document.querySelector('.snipp3').innerHTML = snipp3 + ".";
	var title4 = data.query.search[4].title;
	var snipp4 = data.query.search[4].snippet;
	document.querySelector('.title4').innerHTML = title4 ; 
	document.querySelector('.snipp4').innerHTML = snipp4 + "."; 
	var title5 = data.query.search[5].title;
	var snipp5 = data.query.search[5].snippet;
	document.querySelector('.title5').innerHTML = title5 ; 
	document.querySelector('.snipp5').innerHTML = snipp5 + "."; 
	var title6 = data.query.search[6].title;
	var snipp6 = data.query.search[6].snippet;
	document.querySelector('.title6').innerHTML = title6 ; 
	document.querySelector('.snipp6').innerHTML = snipp6 + "."; 
	var title7 = data.query.search[7].title;
	var snipp7 = data.query.search[7].snippet;
	document.querySelector('.title7').innerHTML = title7 ; 
	document.querySelector('.snipp7').innerHTML = snipp7 + "."; 
	var title8 = data.query.search[8].title;
	var snipp8 = data.query.search[8].snippet;
	document.querySelector('.title8').innerHTML = title8 ; 
	document.querySelector('.snipp8').innerHTML = snipp8 + "."; 
	var title9 = data.query.search[9].title;
	var snipp9 = data.query.search[9].snippet;
	document.querySelector('.title9').innerHTML = title9 ; 
	document.querySelector('.snipp9').innerHTML = snipp9 + "."; 
})


})

$('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        $('h6').remove();
$('img').remove();

 var input = document.querySelector(".form-control").value;

var cross = 'https://cors-anywhere.herokuapp.com/';
var api = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=';
var rest = '&format=json';
var URLRequest =cross +  api + input + rest;
var images = 'https://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&format=json&prop=images'
// console.log(URLRequest);
$.getJSON(URLRequest)
.done (function  (data) {
	var title0 = data.query.search[0].title;
	var snipp0 = data.query.search[0].snippet;
	document.querySelector('.title0').innerHTML = title0 ; 
	document.querySelector('.snipp0').innerHTML = snipp0 + "."; 
	var title1 = data.query.search[1].title;
	var snipp1 = data.query.search[1].snippet;
	document.querySelector('.title1').innerHTML = title1 ; 
	document.querySelector('.snipp1').innerHTML = snipp1 + ".";
	var title2 = data.query.search[2].title;
	var snipp2 = data.query.search[2].snippet;
	document.querySelector('.title2').innerHTML = title2 ; 
	document.querySelector('.snipp2').innerHTML = snipp2 + ".";
	var title3 = data.query.search[3].title;
	var snipp3 = data.query.search[3].snippet;
	document.querySelector('.title3').innerHTML = title3 ; 
	document.querySelector('.snipp3').innerHTML = snipp3 + ".";
	var title4 = data.query.search[4].title;
	var snipp4 = data.query.search[4].snippet;
	document.querySelector('.title4').innerHTML = title4 ; 
	document.querySelector('.snipp4').innerHTML = snipp4 + "."; 
	var title5 = data.query.search[5].title;
	var snipp5 = data.query.search[5].snippet;
	document.querySelector('.title5').innerHTML = title5 ; 
	document.querySelector('.snipp5').innerHTML = snipp5 + "."; 
	var title6 = data.query.search[6].title;
	var snipp6 = data.query.search[6].snippet;
	document.querySelector('.title6').innerHTML = title6 ; 
	document.querySelector('.snipp6').innerHTML = snipp6 + "."; 
	var title7 = data.query.search[7].title;
	var snipp7 = data.query.search[7].snippet;
	document.querySelector('.title7').innerHTML = title7 ; 
	document.querySelector('.snipp7').innerHTML = snipp7 + "."; 
	var title8 = data.query.search[8].title;
	var snipp8 = data.query.search[8].snippet;
	document.querySelector('.title8').innerHTML = title8 ; 
	document.querySelector('.snipp8').innerHTML = snipp8 + "."; 
	var title9 = data.query.search[9].title;
	var snipp9 = data.query.search[9].snippet;
	document.querySelector('.title9').innerHTML = title9 ; 
	document.querySelector('.snipp9').innerHTML = snipp9 + "."; 
})

    }
});
