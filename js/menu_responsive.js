var contenedor = document.getElementsByTagName('nav')[0];

var categoria = ['Home','Galeria','Productos','Recetas','Contacto'];


var links = ['index.html','galeria.html','productos.html','recetas.html','contacto.html'];


var boton = document.createElement('input');
boton.type = 'button';
boton.value = 'ir!';

document.onmousemove = function(){

	var resolucion = window.innerWidth;
	
	if(resolucion <= 550){
		var select = document.createElement('select');
		select.id = 'menu2';

		contenedor.appendChild(select);
		select.appendChild(option);
		
		for(var i in categoria){
			var option = document.createElement('option');
			option.appendChild(i);
				
		}
	
	}
}

