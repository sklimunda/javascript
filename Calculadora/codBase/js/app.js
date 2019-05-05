var Calculadora = ( function (){

		// Efecto boton presionado
		var Botones = document.getElementsByClassName("tecla"); 
		for( i=0; i<Botones.length; i++) {
			Botones[i].onmousedown=function(){ this.style.padding="2px"; };
			Botones[i].onmouseup=function(){ this.style.padding="0px"; };
			Botones[i].onmouseleave=function(){ this.style.padding="0px"; };
			Botones[i].onclick=function(){ Calculadora.Calcular(this.id) };
		}
		
		var display="0";
		var valorA="0";
		var valorB="0";

		return {
			
			Calcular: function(BtnId) {
	
					switch(BtnId) {
						case "on":
							display="0";
							break;
							case "punto":
							if (display.indexOf(".")==-1)
							{
							  display=display+".";
							}
							break;
						case "sign":
						  if (display.indexOf("-")==-1 && display!="0")
						  {
						   display="-"+display;
						  }else {
						   display=display.replace("-", "");
						  }
						  break;
						case "dividido":
							valorA=display;
							display="";
							operador=" / ";
							break;
						case "por":
							valorA=display;
							display="";
							operador=" * ";
							break;
						case "menos":
							valorA=display;
							display="";
							operador=" - ";
							break;
						case "mas":
							valorA=display;
							display="";
							operador=" + ";
							break;
						case "igual":
							if (valorA==0)
							{
								//El igual aplica la ultima operaci�n al ultimo resultado
								display=eval(display+operador+valorB);
							}else{
								//Se construye el resultado de la operaci�n
								valorB=display;
								display=eval(valorA+operador+valorB);
								valorA="0";
							}
							break;			
					  case "raiz":
						//No ejecuta ninguna acci�n
						break;
					  default:
						  //cualquier otra tecla
						  //Muestra hasta 8 digitos
						if (display.length<8)
						{
							 
							 if (display!="0"){
								display=display+BtnId;
							}else{
								display=BtnId;
							}
						}
					} 

					//Imprime el resultado en pantalla, solo los primeros 8 digitos
					document.getElementById("display").innerHTML=display.toString().substr(0,8);

			}
		};
	})();

		