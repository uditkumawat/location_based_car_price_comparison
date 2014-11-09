        var ptr = {};
	var c1,c2,c3,c4;
	var p1,p2,p3,p4;

	ptr.cardata=function()
	{
		var make=$('#make').val();
		var model=$('#model').val();
		var variant=$('#variant').val();
		c1=$('#c1').val();
		c2=$('#c2').val();
		c3=$('#c3').val();
		c4=$('#c4').val();
	
		var url1="http://api.dataweave.in/v1/carPricesIndia/findByMake/?api_key=eaeb25532a889d86103808a40d0e3c2f1014ceec&make="+make+"&city="+c1+"&variant"+variant+"&model"+model;
		$.getJSON(url1,function(json){
      			p1=json.data[0].price;
    		});	
		
		var url2="http://api.dataweave.in/v1/carPricesIndia/findByMake/?api_key=eaeb25532a889d86103808a40d0e3c2f1014ceec&make="+make+"&city="+c2+"&variant"+variant+"&model"+model;
		$.getJSON(url2,function(json){
      			p2=json.data[0].price;
    		});
		var url3="http://api.dataweave.in/v1/carPricesIndia/findByMake/?api_key=eaeb25532a889d86103808a40d0e3c2f1014ceec&make="+make+"&city="+c3+"&variant"+variant+"&model"+model;
		$.getJSON(url3,function(json){
      			p3=json.data[0].price;
    		});
		var url4="http://api.dataweave.in/v1/carPricesIndia/findByMake/?api_key=eaeb25532a889d86103808a40d0e3c2f1014ceec&make="+make+"&city="+c4+"&variant"+variant+"&model"+model;
		$.getJSON(url4,function(json){
      			p4=json.data[0].price;
    		});
		$("#map_canvas").slideUp(300).delay(500).fadeIn(500);
		//Correct values are coming in log but variable value is showing undefined		
		console.log(c1+" "+p1);
		console.log(c2+" "+p2);
		console.log(c3+" "+p3);
		console.log(c4+" "+p4);
		
		ptr.geocode();
	}
	
        //declare map
        var map;
 
        //Function that gets run when the html document loads
        ptr.initialize = function()
        {
            var latlng = new google.maps.LatLng(21.0000,78.0000);
            var myOptions = {
                zoom: 5,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        }
	
	//Getting data from html file
	var geocoder=new google.maps.Geocoder();
	ptr.geocode = function()
	{
	    		var c = $('#c1').val();
	    		geocoder.geocode( { 'address':c}, function(results, status) 
			{
				if (status == google.maps.GeocoderStatus.OK)
				{   
				    lat=results[0].geometry.location.lat();
				    lon=results[0].geometry.location.lng();
			            var latlng = new google.maps.LatLng(lat,lon);		
				    var content='<b>'+c1+'</b><br>'+'Rs.'+p1;
				    var marker = new google.maps.Marker({
					map: map,
					position:latlng,
					title:c1
				    });

				    var infowindow = new google.maps.InfoWindow()
					google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
						return function() {
						   infowindow.setContent(content);
						   infowindow.open(map,marker);
						};
					    })(marker,content,infowindow));
				}
				else
				{
				    alert("Geocode was not successful for the following reason: " + status);
				}
	    		});
			
			var c = $('#c2').val();
	    		geocoder.geocode( { 'address':c}, function(results, status) 
			{
				if (status == google.maps.GeocoderStatus.OK)
				{
				    //map.setCenter(results[0].geometry.location);
			            
				    lat=results[0].geometry.location.lat();
				    lon=results[0].geometry.location.lng();
			            var latlng = new google.maps.LatLng(lat,lon);		
				    var content='<b>'+c2+'</b><br>'+'Rs.'+p2;
				    var marker = new google.maps.Marker({
					map: map,
					position:latlng,
					title:c2
				    });

				    var infowindow = new google.maps.InfoWindow()
					google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
						return function() {
						   infowindow.setContent(content);
						   infowindow.open(map,marker);
						};
					    })(marker,content,infowindow));
				}
				else
				{
				    alert("Geocode was not successful for the following reason: " + status);
				}
	    		});
			
			var c = $('#c3').val();
	    		geocoder.geocode( { 'address':c}, function(results, status) 
			{
				if (status == google.maps.GeocoderStatus.OK)
				{
				    //map.setCenter(results[0].geometry.location);
			            
				    lat=results[0].geometry.location.lat();
				    lon=results[0].geometry.location.lng();
			            var latlng = new google.maps.LatLng(lat,lon);		
				    var content='<b>'+c3+'</b><br>'+'Rs.'+p3;
				    var marker = new google.maps.Marker({
					map: map,
					position:latlng,
					title:c3
				    });

				    var infowindow = new google.maps.InfoWindow()
					google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
						return function() {
						   infowindow.setContent(content);
						   infowindow.open(map,marker);
						};
					    })(marker,content,infowindow));
				}
				else
				{
				    alert("Geocode was not successful for the following reason: " + status);
				}
	    		});
			
			var c = $('#c4').val();
	    		geocoder.geocode( { 'address':c}, function(results, status) 
			{
				if (status == google.maps.GeocoderStatus.OK)
				{
				    //map.setCenter(results[0].geometry.location);
			            
				    lat=results[0].geometry.location.lat();
				    lon=results[0].geometry.location.lng();
			            var latlng = new google.maps.LatLng(lat,lon);		
				    var content='<b>'+c4+'</b><br>'+'Rs.'+p4;
				    var marker = new google.maps.Marker({
					map: map,
					position:latlng,
					title:c4
				    });

				    var infowindow = new google.maps.InfoWindow()
					google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
						return function() {
						   infowindow.setContent(content);
						   infowindow.open(map,marker);
						};
					    })(marker,content,infowindow));
				}
				else
				{
				    alert("Geocode was not successful for the following reason: " + status);
				}
	    		});
	}	
