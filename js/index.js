var swatDepts = ["Ancient History",
"Anthropology",
"Arabic",
"Art",
"Art History",
"Asian Studies",
"Astronomy",
"Biochemistry",
"Biology",
"Black Studies",
"Chemistry",
"Chinese",
"Classics",
"Cognitive Science",
"Comparative Literature",
"Computer Science",
"Dance",
"Economics",
"Educational Studies",
"Engineering",
"English Literature",
"Environmental Studies",
"Film & Media Studies",
"French & Francophone Studies",
"Gender & Sexuality Studies",
"German Studies",
"Greek",
"History",
"Interpretation Theory",
"Islamic Studies",
"Japanese",
"Latin",
"Latin American Studies",
"Linguistics",
"Math and Stats",
"Medieval Studies",
"Modern Languages & Literatures",
"Music",
"Peace & Conflict Studies",
"Philosophy",
"Physics",
"Political Science",
"Psychology",
"Public Policy",
"Religion",
"Russian",
"Sociology",
"Spanish",
"Statistics",
"Theater"]
$(document).ready(function(){
for (var i = 0; i < swatDepts.length; i++) {
	$('#SwatClasses').prepend("<li>" +swatDepts[i]+"</li>");
	}

	var newLi = document.createElement("li");
	newLi.addClass("icon icon-arrow-left");
	var newA = document.createElement

	<li class="icon icon-arrow-left">
		<a class="icon icon-tv" href="#">Art History</a>
		<div class="mp-level">
			<h2>Art History</h2>
			<a class="mp-back" href="#">back</a>
			<ul>
				<li><a href="#">Flat Superscreen</a></li>
				<li><a href="#">Gigantic LED</a></li>
				<li><a href="#">Power Eater</a></li>
				<li><a href="#">3D Experience</a></li>
				<li><a href="#">Classic Comfort</a></li>
			</ul>
		</div>
	</li>
	// Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");
	// var Book = Parse.Object.extend("Book");
	// var query = new Parse.Query("Book");
	// query.equalTo("department","ANTH");
	// // $(.college)

});
