		<script src="js/classie.js"></script>
		<!-- // <script src="js/mlpushmenu.js"></script> -->
		<!-- // <script src="js/createPushMenu.js"></script> -->
				<script type="text/javascript">
			// console.log("start of the javascript file");
		   // var environment = "japanese"; // can be default, french etc
		   function loadJsFilesSequentially(scriptsCollection, startIndex, librariesLoadedCallback) {
		     if (scriptsCollection[startIndex]) {
		     	console.log("This is index " + startIndex);
		     	// console.log("in the if loop");
		        var fileref = document.createElement('script');
		        fileref.setAttribute("type","text/javascript");
		        fileref.setAttribute("src", scriptsCollection[startIndex]);
		        // console.log(scriptsCollection[startIndex]);
		        // console.log("before onloading");
		        fileref.onload = function(){
		        	// console.log("loaded one file");
		         	startIndex = startIndex + 1;
		         	loadJsFilesSequentially(scriptsCollection, startIndex, librariesLoadedCallback)
		       	};
		       document.getElementsByTagName("body")[0].appendChild(fileref)
		     }
		     else {
		       librariesLoadedCallback();
		     }
		   }
		 
		   // An array of scripts you want to load in order
		   var scriptLibrary = [];
		   scriptLibrary.push("js/classie.js");
		   scriptLibrary.push("js/jquery-2.1.3.js");
		   scriptLibrary.push("js/sj_page.js");
		   scriptLibrary.push("http://www.parsecdn.com/js/parse-1.3.4.min.js");
		   scriptLibrary.push("js/functionDef.js");
		   scriptLibrary.push("js/testIndex.js");
		   scriptLibrary.push("js/mlpushmenu.js");
		   scriptLibrary.push("js/createPushMenu.js");

		   // Pass the array of scripts you want loaded in order and a callback function to invoke when its done
		   // console.log("calling loading function")
		   loadJsFilesSequentially(scriptLibrary, 0, function(){
		       // application is "ready to be executed"
		       // startProgram();
		       console.log("end of loadJS function");
		   });
		</script>
		