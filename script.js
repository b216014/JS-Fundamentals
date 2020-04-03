function getMovie(title){
    return new Promise(function(resolve,reject){
		var request = new XMLHttpRequest();
		request.open('GET', 'http://mymovieapi.com/?q='+title);
		request.onload = function() {
		  if (request.status == 200) {
			resolve(request.response); //we get the data here.So, resolve the Promise
		  }
		  else {
			reject(Error(request.statusText)); //if status is not 200 OK, reject.
		  }
		};
	
		request.onerror = function() {
		  reject(Error("Error fetching data.")); //error occurred, reject the Promise
		};
	
		request.send(); //send the request
    });
}
function fetchMovies(){
	var titles=document.getElementById('titles').value;
    titles=titles.split(',');
    let step=0;
	for(var i in titles){
		getMovie(titles[i]).then(function(data){
			var img=JSON.parse(data)[0].poster.imdb;
			document.getElementById('movies').innerHTML=document.getElementById('movies').innerHTML+'<img src="'+img+'"/>';
		}).catch(function(error){
			console.log(error);
        });
        step++;
        console.log(step);
	}
}
function clearMovies(){
	document.getElementById('movies').innerHTML="";
}