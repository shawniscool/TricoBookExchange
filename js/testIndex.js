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
// $(function(){
// initialize();
function initialize(){
	var department;
	Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");
	var books = Parse.Object.extend("Book");
	var queries = new Parse.Query(books);
	queries.equalTo("college","Swarthmore");
	queries.find({
		error: function(error){
			alert("Error: " + error.code +error.message);
		}
	});
	console.log(queries);
	var li, departmentQuery;
	for (var i = 0; i < 1;i++){
	// for (var i = 0; i< swarthmore.length;i++){
		// Key: use string and use inspect element
		department = swarthmore[i];
		console.log("after initializing, department is " + department);
		li = "<li class='icon icon-arrow-left'><a class = 'icon icon-phone department' href='#'>";
		li += department + "</a><div class='mp-level'><h2>" + department +"</h2>";
		li += "<a class='mp-back' href='#'>back</a><ul>";
		console.log("department is " + department);
		departmentQuery = queries.equalTo("department", department);
		// departmentQuery.find({
		// 	success:function(results){
		// 		console.log(results[0].get("courseNumber"));
		// 		// console.log("departmentQuery count is " + count);
		// 		// console.log(departmentQuery[0].get("courseNumber"));
		// 	},
		// 	error:function(error){
		// 		alert("error!")
		// 	}
		// });
		departmentQuery.find().then(function(results){
			return makeList(results);
		}).then(function(returnStrings){
			console.log("returnStrings are " + returnStrings);
			li += returnStrings + "</ul></div></li>";
			return li;
		}).then(function(li){
			console.log("Before append, the li are " + li);
			$('#SwatClasses').append(li);
		});
		// lis = makeList(departmentQuery);
		// alert(lis);
		// console.log("returned lis is " + lis);
		// alert(lis);
		// li += lis;
		// li += "<li><a href = '#'>005</a> </li><li><a href='#'>022</a></li>";
		// li += "</ul></div></li>";
		// console.log(department + " ");
		// console.log(li);
	}
	$('#triggerReturn').hide();
	$('#triggerReturn').on('click',function(e){
		e.preventDefault;
		$("#loadItems").empty();
		$('.content').show();
		$("#form").show();
		$('#triggerReturn').hide();
	});
	findQuery();
	// current issue, findQuery is not properly loaded
}


	// queries.count({
	// 	success: function(count){
	// 		if (count == 0){
	// 			return "0 result";
	// 		} else{
	// 			console.log("Count is " + count);
	// 			queries.find({
	// 				success:function(results){
	// 					for (var i = 0; i < results.length; i++){
	// 						text += "<li><a href = '#'>" + results[i].get("courseNumber") + "</a> </li>";
	// 						// console.log(text);
	// 					}
	// 					// console.log("Total text is below:");
	// 					// console.log(text);
	// 					console.log("before returning, the text is " + text);
	// 					return text;
	// 				},
	// 				error: function(error){
	// 					alert("Error: " + error.code +error.message);
	// 					// return "No result!"
	// 				}
	// 			});
	// 		}
	// 	},
	// 	error: function(err){
	// 		console.log(err)
	// 	}
	// });
