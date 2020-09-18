/*mongoose.connect('mongodb://localhost:27017/curso2',{useNewUrlParser: true, useUnifiedTopology: true}, (err, res)  => {
	if(err){
		throw err;
	}else{
		console.log("La base esta corriendo correctamente..");
		
		app.listen(port, function(){
			console.log("servidor ap rest musica escuchando en http://localhost:"+port);
		});
	}
	});
