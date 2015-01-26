var list, name,condition;

Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");
var Book = Parse.Object.extend("Book");
var query = new Parse.Query("Book");
// query.equalTo("name","hello");
// query = query.each;
query.find({
	success:function(results){
		// alert("successfully retrieved" +results.length + " books");
		var text="";
		for (var i =0; i<results.length; i++){
			var book = results[i];
			// text += book.get("price") + "<br>"
			// text += book.get("name") +" " + book.get("price") + "<br>"
			// add block and block-50 here 
			text += "<p class ='message block block-50'><span class ='department'><b> " + book.get("department")
			text +=" </b></span> <span class ='courseNumber'>" +book.get("courseNumber") + " </span><span class ='name'>" 
			text += book.get("name") +"</span><br />Price:$ <span class ='price'>" + book.get("price") 
			text +=" </span> <br />Condition: <span class ='condition'>" + book.get("condition") 
			text += "</span> <br />Seller Name: <span class ='sellerName'>" + book.get("sellerName") 
			text += "</span><br />Contact: <span class ='sellerContact'>" + book.get("sellerContact") 
			text += "</span><br /> Additional comment: <span class='additional_comment'>" 
			text +=  book.get("additionalComment") +" </span><br /></p>"
			// alert("a");
			// $("#loadItems").append(book.get("price"));
			// alert(book.get("price"));
		}
		$("#loadItems").append(text);
	},
	error: function(err){
		alert("Error: " + error.code +error.message);
	}
});

