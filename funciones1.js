

/*
 * Inicializacion de variables y llamada a la 
 * funcion ready() de jquery
 */
var x;
x=$(document);
x.ready(inicializarEventos);



/*
 * Funcion que inicializa los eventos.
 * Esta funcion se pasa a ready() de jquery
 */
function inicializarEventos()
{
  var x=$("#boton1");
  x.click(ocultarTexto);
  x=$("#boton2");
  x.click(mostrarTexto);
  x =$("#boton3");
  x.click(abrirVentana);
  x=$("#boton4");
  x.click(extraerTexto);

}
/*
 * Funcion que hace uso de 'hide' para 
 * ocultar el div con id 'descripcion'  
 * El parametro 'show' indica a la funcion 
 * realize el proceso lentamente.
 */
function ocultarTexto()
{
  var x=$("#descripcion");
  x.hide("slow");
}

/*
 * Esta funcion realiza la tarea de mostrar el 
 * texto identificado por descripcion 
 * El parametro fast indica que se realize de forma rapida
 */
function mostrarTexto()
{
  var x=$("#descripcion");
  x.show("fast");
}

/*
 * Funcion que usa la funcino 'open'.
 * Pasamos como parametros el valor de la pagina
 * que queremos que habrá, el nombre que queremos que 
 * reciba y el tamaño. 
 */
function abrirVentana()
{
   window.open("pagina2.html","Pagina2","width=800,height=600");
   
}
 
/*
 * Funcion para extraer el texto del parrafo etiquetado con el 'id' 
 * parrafo1. Este mensaje usa la funcion alerta que muestra un mensaje
 * de alerta con el contenido del parrafo1. (la funcino alert() se usa 
 * en una de las explicaciones del curso) 
 */
function extraerTexto()
{
  var x=$("#parrafo1");
  alert(x.text());
}

