function makeList(results){
	var text = "";
	console.log("We are in the makeList function");
	for (var i = 0; i < results.length; i++){
		text += "<li><a href='#'>" + results[i].get("courseNumber") + "</a></li>";
	}
	console.log("In makeList function, text is " + text);
	return text;
}

	// queries.find({
	// 	success:function(results){
	// 		for (var i = 0; i < results.length; i++){
	// 			text += "<li><a href = '#'>" + results[i].get("courseNumber") + "</a> </li>";
	// 			// console.log(text);
	// 		}
	// 		console.log("text is " + text)
	// 		return text
	// 	},
	// 	error: function(error){
	// 		alert("Error: " + error.code +error.message);
	// 		// return "No result!"
	// 	}
	// });

function findQuery(){
	var $a=$("a[href='#']").not('.icon').not('.mp-back').not('.mp-forward').not('.menu-trigger');
	$a.on('click',function(){
		// $parents = $a.parents();
		var courseNumber = $(this).text();
		var $department=$(this).parent().parent().parent().siblings('.department');
		console.log("department now is " + $department.text());
		var $college = $department.parent().parent().parent().siblings('.college');
		console.log("college is " + $college.text() + " and length is "+ $college.length);
		console.log("department now is " + $department.text() + " and college is " + $college.text() + " and course number is "+  courseNumber);
		var list, name,condition;

		// creating Parse query
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
				console.log("successfully loading findQuery");
			},
			error: function(err){
				alert("Error: " + error.code +error.message);
			}
		});
	});
}