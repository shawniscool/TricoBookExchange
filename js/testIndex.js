var swarthmore = ["Ancient History",
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




	// initialization code to add department names
$(function(){
	var department;
	for (var i = 0; i< swarthmore.length;i++){
		// Key: use string and use inspect element
		department = swarthmore[i];
		var li = "<li class='icon icon-arrow-left'><a  href='#'>";
		li += department + "</a><div class='mp-level' ><h2>" +department +"</h2>";
		li += "<a class='mp-back' href='#'>back</a>";
		li += "<ul id =" + department;
		li += "> <li class='icon icon-arrow-left'> <a href = '#'> 05</a> </li><li><a href='#'>22</a></li> </ul></div>";
		li += "</li>";
	}
	$('#triggerReturn').hide();
	// alert($('#return').text());
	$('#triggerReturn').on('click',function(e){
		e.preventDefault;
		$("#loadItems").empty();
		// $('#mp-menu').show();
		$('.content').show();
		$("#form").show();
		$('#triggerReturn').hide();
	});

	var $a=$("a[href='#']").not('.icon').not('.mp-back').not('.mp-forward').not('.menu-trigger');
	$a.on('click',function(){
		$parents = $a.parents();
		var courseNumber = $(this).text();
		var $department=$(this).parent().parent().parent().siblings('.department');
		console.log("department now is " + $department.text());
		var $college = $department.parent().parent().parent().siblings('.college');
		console.log("college is " + $college.text() + " and length is "+ $college.length);
		console.log("department now is " + $department.text() + " and college is " + $college.text() + " and course number is "+  courseNumber);
		var list, name,condition;

		// creating Parse query
		Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");
		var Book = Parse.Object.extend("Book");
		var query = new Parse.Query("Book");
		var collegeName = $college.text()
		query.equalTo("courseNumber",courseNumber);
		query.equalTo("department",$department.text());
		query.equalTo("college",collegeName);

		query.find({
			success:function(results){
				// alert("success");
				var text="";
				for (var i =0; i<results.length; i++){
					var book = results[i];
					text += "<p class ='message block block-50'><span class ='department'><b> " + book.get("department");
					text +=" </b></span> <span class ='courseNumber'>" +book.get("courseNumber") + " </span><span class ='name'>"; 
					text += book.get("name") +"</span><br />Price:$ <span class ='price'>" + book.get("price") ;
					text +=" </span> <br />Condition: <span class ='condition'>" + book.get("condition") ;
					text += "</span> <br />Seller Name: <span class ='sellerName'>" + book.get("sellerName");
					text += "</span><br />Contact: <span class ='sellerContact'>" + book.get("sellerContact"); 
					text += "</span><br /> Additional comment: <span class='additional_comment'>"; 
					text +=  book.get("additionalComment") +" </span><br /></p>";
					// $("#loadItems").append(book.get("price"));
				}
				$('form').hide(0);
				$('.content').hide(0);
				$('#loadItems').empty();
				$("#loadItems").append(text);
				$('#triggerReturn').show();
			},
			error: function(err){
				alert("Error: " + error.code +error.message);
				}
			});
		});
	
});
