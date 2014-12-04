
/*
 * Inicializacion de variable y llamada a ready() de jquery 
 */
var x;
x=$(document);
x.ready(inicializarEventos);


/*
 * Inicializacion de eventos. Esta funcion es llamada por 
 * la funcion ready() de jquery 
 */
function inicializarEventos()
{ 
  
  var x=$("#guardar");
  x.click(guardarTexto);
  x=$("#leer");
  x.click(leerTexto);
  x=$("#eliminar");
  x.click(eliminarTexto);
  x=$("#abrir_entrada_texto");
  x.click(activarEntradaTexto);
  x =$("#boton3");
  x.click(abrirVentana);
}

/*
 * Funcion encargada de guardar un texto en la variable valor 
 * que esta asociada al 'id' valor  
 */
function guardarTexto()
{
  var valor = document.formul.valor.value;
  $("#division").data("dato",valor);
  // con la funcino html muestro por pantalla un texto indicando lo
  // que se ha realizado
  $("#division").html('He guardado el elemento en "dato" con el valor "' + valor + '"');
  }

/*
 * Funcion que lee el texto que ha sido guarda en la variable valor 
 *  
 */
function leerTexto()
{
  var valor = $("#division").data("dato");
   // con la funcino html muestro por pantalla un texto indicando lo
  // que se ha realizado
  $("#division").html('En este mismo DIV leo "dato" con el valor "' + valor + '"');
}

/*
 * Eliminamos el valor que tenia la variable 'valor' 
 */
function eliminarTexto()
{
  $("#division").removeData("dato");
  $("#division").html('Hemos eliminado de este DIV "dato"');
}
/*
 * Funcion encargada de usar la funcion open() para abrir una pagina 
 * los parametros que se le pasan son el valor de la pagina que queremos
 * abra, el nombre de esta y el tamaño.
 */
function abrirVentana()
{
   window.open("pagina3.html","Pagina3","width=800,height=600");
   
}

/*
 * Funcion que se encarga de comprobar si se ha activado el checkbox
 * para esto hace uso de la funcino prop(). 
 * El condicional indica que muestre el texto unicamente 
 * si se ha activado el checkbock.
 */
function activarEntradaTexto(){
   
      if ($("#abrir_entrada_texto").prop("checked")){
         $("#texto").css("display", "block");
      }else{
         $("#texto").css("display", "none");
      }
}

