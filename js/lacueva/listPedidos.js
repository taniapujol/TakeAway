$(document).ready(function() {
	var testeo = true;
   
	    $.ajax({
	    	url: '../php/getListPedido.php',
	    	type: 'GET',
	    	dataType: 'json',
	    	success: function(result){
	    		if (testeo) console.log(result.query);
	    		var tbl_body = "";
	    		
	    		$.each(result.query, function(index, val) {
	    		var tbl_row = "";
	    			$.each(this, function(index, val) {
	    				 
	    				 tbl_row +="<td>" + val + "</td>"
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
    