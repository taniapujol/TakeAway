$(document).ready(function() {
	var testeo = true;

	$.ajax({
	  	url: '../php/getListPlato.php',
	   	type: 'GET',
	   	dataType: 'json',
	   	success: function(result){
	   		if (testeo) console.log(result.query);
	   		var tbl_body = "";
				// recoremos el array que obtemos al llamar el php
	   		$.each(result.query, function(index, val) {
		   		var tbl_row = "";
	    		$.each(this, function(index, val) {
	    			if (index==='foto'){
	    				tbl_row += "<td><img class='z-depth-3' src='../img/"+ val + "'width='90px'></td>"
	    			}else{
	    				tbl_row +="<td>" + val + "</td>"
	    			}
	    		});
	    		tbl_body += "<tr>" + tbl_row +"</tr>";
	    	});
	    	$("#listado tbody").html(tbl_body);
	    },
	    error: function(result){
	    	alert('errorororor');
	    }
	});
});
