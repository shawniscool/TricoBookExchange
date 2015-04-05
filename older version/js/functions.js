// list of all swarthmore departments
var swarthmore = ["Ancient History","Anthropology","Arabic","Art","Art History","Asian Studies","Astronomy","Biochemistry","Biology","Black Studies","Chemistry","Chinese","Classics","Cognitive Science","Comparative Literature","Computer Science","Dance","Economics","Educational Studies","Engineering","English Literature","Environmental Studies","Film & Media Studies","French & Francophone Studies","Gender & Sexuality Studies","German Studies","Greek","History","Interpretation Theory","Islamic Studies","Japanese","Latin","Latin American Studies","Linguistics","Math and Stats","Medieval Studies","Modern Languages & Literatures","Music","Peace & Conflict Studies","Philosophy","Physics","Political Science","Psychology","Public Policy","Religion","Russian","Sociology","Spanish","Statistics","Theater"]


// This function returns a string of all course numbers within one department
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
	// console.log("set is " + set);
	console.log("In makeList function, text is " + text);
	return text;
}


// This function is used to exhibit existing data regarding textbooks of a certain course
// after the user clicks on the course number
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

// The initialization function called when the first is first loaded
function initialize(){
	var department;
	Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");
	var books = Parse.Object.extend("Book");
	var queries = new Parse.Query(books);
	queries.equalTo("college","Swarthmore");
	queries.ascending("department");
	queries.find({
		success:function(books){
			forLoop(books);
		},
		error: function(error){
			alert("Error: " + error.code +error.message);
		}
	});
	// console.log(queries);
	// console.log("queries length is " + queries.count);
	// var li, departmentQuery;
	// $.when(forLoop(queries)).done(findQuery()).done(createMenu());
	// forLoop(queries);
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

// forLoop function goes over all the department in each college adds all the content info to 
// each department, college
function forLoop(books){
	var book, previousDepartment;
	var hash ={};
	var courses = [];
	for (var i = 0; i < books.length; i++){
		book = books[i];
		department = book.get("department");
		if ((department != previousDepartment) || (i == books.length-1)){
			li = "<li class='icon icon-arrow-left'><a class = 'icon department' href='#'>";
			li += previousDepartment + "</a><div class='mp-level'><h2>" + previousDepartment +"</h2>";
			li += "<a class='mp-back' href='#'>back</a><ul>";
			for (var j = 0; j < courses.length; j++){
				li += "<li><a href='#'>" + courses[j] + "</a></li>"
			}
			li += "</ul></div></li>";
			$('#SwatClasses').append(li);
			console.log("department is " + previousDepartment);
			console.log(" all its course numbers are " + courses.toString());
			courses.length = 0;
		}
		courseNumber = book.get("courseNumber");
		if (courses.indexOf(courseNumber) == -1){
			courses.push(courseNumber);
		}
		previousDepartment = department;
	}

	// var values = Array.from(hash["Anthropology"]);
	// console.log("values are " + values);
	// for value in values {
		// console.log(value);
	// }
	// console.log("values are " + values);
	// for (let item of hash["Anthropology"].values()) console.log(item);
	// var item;
	// for item in hash.keys():
		// console.log(item);

	

	// for (var i = 0; i<queries.length; i++){
	// 	var query = queries[i];
	// 	console.log("query is " + query);
	// 	department= query.get("department");
	// 	if (!(department in hash)){
	// 		hash[department] = new Set();
	// 	}
	// 	var courseNumber = query.get("courseNumber")
	// 	if (!hash[department].has(courseNumber)){
	// 		hash[department].add(courseNumber);
	// 	}
	// }
	




	// console.log("start of for loop");
	// var done = {};
	// for (var i = 0; i < 2;i++){
	// 	// if (i != 0){ 
	// 	// 	while (!( (i-1) in done)){
	// 	// 		console.log("in the while loop");
	// 	// 	}
	// 	// }

	// 	// li = "";
	// // for (var i = 0; i< swarthmore.length;i++){
	// 	// Key: use string and use inspect element


	// 	department = swarthmore[i];
	// 	console.log("after initializing, department is " + department);
	// 	li = "<li class='icon icon-arrow-left'><a class = 'icon icon-phone department' href='#'>";
	// 	li += department + "</a><div class='mp-level'><h2>" + department +"</h2>";
	// 	li += "<a class='mp-back' href='#'>back</a><ul>";
	// 	console.log("after li addition, department is " + department);
	// 	departmentQuery = queries.equalTo("department", department);
	// 	console.log("This is after departmentQuery is initialized");


	// 	// departmentQuery.find({
	// 	// 	success:function(results){
	// 	// 		console.log(results[0].get("courseNumber"));
	// 	// 		// console.log("departmentQuery count is " + count);
	// 	// 		// console.log(departmentQuery[0].get("courseNumber"));
	// 	// 	},
	// 	// 	error:function(error){
	// 	// 		alert("error!")
	// 	// 	}
	// 	// });
	// 	departmentQuery.find({
	// 		success:function(results){
	// 			returnStrings = makeList(results);
	// 			console.log("returnStrings are " + returnStrings);
	// 			li += returnStrings + "</ul></div></li>";
	// 			console.log("Before append, the li are " + li);
	// 			done[i] = i;
	// 			$('#SwatClasses').append(li);
	// 		}
	// 	});


	// 	// departmentQuery.find().then(function(results){
	// 	// 	return makeList(results);
	// 	// }).then(function(returnStrings){
	// 	// 	console.log("returnStrings are " + returnStrings);
	// 	// 	li += returnStrings + "</ul></div></li>";
	// 	// 	return li;
	// 	// }).then(function(li){
	// 	// 	console.log("Before append, the li are " + li);
	// 	// 	done[i] = i;
	// 	// 	$('#SwatClasses').append(li);
	// 	// });

	// }
	console.log("end of for loop");
}

// The last function to be called so that menu works for all the dynamically added info
function createMenu(){
	console.log("create menu function");
	new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );
}

// This is where all the functions are called. First calls the initialize function and calls
// createMenu at the end by setting time out.
$(function(){
	initialize();
	// findQuery();
	// createMenu();
	setTimeout(findQuery,500);
	setTimeout(createMenu,500);
});



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
// 