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

function makeList(results){
	var set = new Set();
	var text = "";
	var number;
	console.log("We are in the makeList function");
	for (var i = 0; i < results.length; i++){
		number = results[i].get("courseNumber");
		if (!set.has(number)){
			set.add(number);
			text += "<li><a href='#'>" + number + "</a></li>";
		}
	}
	console.log("In makeList function, text is " + text);
	return text;
}


function findQuery(){
	console.log("start of findQuery");
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
	console.log("end of findQuery");

}

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
	// $.when(forLoop(queries)).done(findQuery()).done(createMenu());
	forLoop(queries);
	$('#triggerReturn').hide();
	$('#triggerReturn').on('click',function(e){
		e.preventDefault;
		$("#loadItems").empty();
		$('.content').show();
		$("#form").show();
		$('#triggerReturn').hide();
	});
	// $.Deferred().then(function(){
	// 	findQuery();
	// }).then(function(){
	// 	createMenu();
	// });
	// current issue, findQuery is not properly loaded
}

function forLoop(queries){
	console.log("start of for loop");
	for (var i = 0; i < 2;i++){
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
	console.log("end of for loop");
}
function createMenu(){
	console.log("create menu function");
	new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );
}
initialize();
setTimeout(findQuery,500);
setTimeout(createMenu,1000);

// var deferred = $.Deferred();
// console.log("after deferred created");
// function test(){
// 	initialize();
// 	console.log("In test function");
// 	return deferred.resolve();
// }
// initialize(findQuery(createMenu()));
// createMenu(findQuery(initialize()));
// $.when(initialize()).done(findQuery()).done(createMenu());

// test().done(function(){
// 	console.log("in deferred function");
// 	findQuery();
// 	createMenu();
// });