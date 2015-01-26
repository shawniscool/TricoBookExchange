var department, number, name, price, condition, sellerName, sellerContact, additionalComment, college;
$(function(){
	$('#submit').on('click',function(e){
		e.preventDefault();
		
		var selectDepart = document.getElementById('department');
		var indexDepart = selectDepart.selectedIndex;
		department = selectDepart.options[indexDepart].value;

		// issue with number and price (integer values)
		var selectNum = document.getElementById('number');


		number = document.getElementById('inputCN').value;
		console.log(number);
		college = document.getElementById('college').value;
		name = document.getElementById('bookName').value;
		price = parseFloat(document.getElementById('inputPrice').value);
		condition = document.getElementById('inputCondition').value;
		sellerName = document.getElementById('inputName').value;
		sellerContact = document.getElementById('inputContact').value;
		additionalComment = document.getElementById('textArea').value;

		if ((name == '') || (price == '') || (condition == '') || (sellerName == '') || (sellerContact == '') || (college == '')){
			alert('Please enter all required fields.');
			return false;
		}

		else if (number == ''){
			alert('Please add the course number.');
			return false;
		}

   	    var atpos = sellerContact.indexOf("@");
        var dotpos = sellerContact.lastIndexOf(".");
        if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=sellerContact.length) {
       		 alert("Not a valid e-mail address");
      	     return false;
      	}

      	if ((number.length > 4) || (number.length < 3)){
      		alert('Course number should be 3 digits, eg. STAT 11 = STAT 011 (or 3 digits with additional letter, eg. PHYS 004L)');
      		return false;

      	}

      	function isNumber(obj) { return !isNaN(parseFloat(obj)) }

      	if (!isNumber(number.substring(0,2)) || (isNumber(number.substring(3,4)))) {
      		alert('Invalid course number.');
      		return false;
      	}



		Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");

		var Book = Parse.Object.extend("Book");
		var book = new Book();
		book.set("college",college);
		book.set("department",department);
		book.set("courseNumber",number);
		book.set("name",name);
		book.set("condition",condition);
		book.set("price", price);
		book.set("sellerName",sellerName);
		book.set("sellerContact",sellerContact);
		book.set("additional",additionalComment);

		book.save(null,{
		success: function(person){
			alert('New object created');
			location.reload()
		},
		error:function(person,error){
			alert('Failed to create new object, with error code: ' + error.message);
		}
		});
	});
});