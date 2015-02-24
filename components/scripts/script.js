//GENERADOR DE EMAIL CON LINK "MAILTO"	
    usuario="info";
	dominio="fastandyours.com";
	conector="@";
	
	function dame_correo(){ 
	   return usuario + conector + dominio;
	} 
	
	function escribe_enlace_correo(){ 
	   document.write("<a href='mailto:" + dame_correo() + "'>" + dame_correo() + "</a>"); 
	} 