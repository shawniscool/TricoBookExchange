$(function(){
	$('#triggerReturn').hide();
	var $a=$("a[href='#']").not('.icon').not('.mp-back').not('.mp-forward').not('.menu-trigger');
	createMenu();
	// triggers the ajax call when course number is clicked 
	$a.on('click',function(){
		var $courseNumber = $(this);
		var $department=$(this).parent().parent().parent().siblings('.department');
		var $college = $department.parent().parent().parent().siblings('.college');
		console.log("department now is " + $department.text() + " and college is " + $college.text() + " and course number is "+  $courseNumber.text());
		$.ajax({type:'GET',
						url:'/find',
						data:{college:$college.text(),department:$department.text(), courseNumber:$courseNumber.text()},
						success:function(books){
							// books are returned from book controller render
							console.log("sent ajax call");
							// console.log(books);
							$('form').hide(0);
							$('.content').hide(0);
							$('#loadItems').empty();
							$('#loadItems').append(books);
							$('#triggerReturn').show();
						}
				});
	});
});

// The last function to be called so that menu works for all the dynamically added info
function createMenu(){
	console.log("create menu function");
	new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );
}