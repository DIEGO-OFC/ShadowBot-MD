let tiempoTranscurrido = Date.now(); 
 let fechajs = new Date(tiempoTranscurrido); 
  
 var Epoca = fechajs.getFullYear(); 
  
 var Mes = fechajs.getMonth(); 
 var NumMes = fechajs.getMonth(); 
 var NumDiMes = fechajs.getDate(); 
 var Dia = fechajs.getDay(); 
  
 var SaluHora = fechajs.getHours(); 
 var HorasT = fechajs.getHours(); 
 var MinutosT = fechajs.getMinutes(); 
 var SegundosT = fechajs.getSeconds(); 
  
 switch(NumMes) { 
 case 0: NumMes = "1"; break; 
 case 1: NumMes = "2"; break; 
 case 2: NumMes = "3"; break; 
 case 3: NumMes = "4"; break; 
 case 4: NumMes = "5"; break; 
 case 5: NumMes = "6"; break; 
 case 6: NumMes = "7"; break; 
 case 7: NumMes = "8"; break; 
 case 8: NumMes = "9"; break; 
 case 9: NumMes = "10"; break; 
 case 10: NumMes = "11"; break; 
 case 11: NumMes = "12"; break; 
 } //12 Meses 
 switch(Mes) { 
 case 0: Mes = "De Enero Del"; break; 
 case 1: Mes = "De Febrero Del"; break; 
 case 2: Mes = "De Marzo Del"; break; 
 case 3: Mes = "De Abril Del"; break; 
 case 4: Mes = "De Mayo Del"; break; 
 case 5: Mes = "De Junio Del"; break; 
 case 6: Mes = "De Julio Del"; break; 
 case 7: Mes = "De Agosto Del"; break; 
 case 8: Mes = "De Septiembre Del"; break; 
 case 9: Mes = "De Octubre Del"; break; 
 case 10: Mes = "De Noviembre Del"; break; 
 case 11: Mes = "De Diciembre Del"; break; 
 } //Meses del año ✓ 
 switch(Dia) { 
 case 0: Dia = "Domingo"; break; 
 case 1: Dia = "Lunes"; break; 
 case 2: Dia = "Martes"; break; 
 case 3: Dia = "Miercoles"; break; 
 case 4: Dia = "Jueves"; break; 
 case 5: Dia = "Viernes"; break; 
 case 6: Dia = "Sabado"; break; 
 } //Dias de la semana ✓ 
 switch(SaluHora){ 
 case 0: SaluHora = "Buena Madrugada"; break; 
 case 1: SaluHora = "Buena Madrugada"; break; 
 case 2: SaluHora = "Buena Madrugada"; break; 
 case 3: SaluHora = "Buenos Dias"; break; 
 case 4: SaluHora = "Buenos Dias"; break; 
 case 5: SaluHora = "Buenos Dias"; break; 
 case 6: SaluHora = "Buenos Dias!!!"; break; 
 case 7: SaluHora = "Que tengas un excelente dia"; break; 
 case 8: SaluHora = "Que tengas un excelente dia"; break; 
 case 9: SaluHora = "Que tengas un excelente dia"; break; 
 case 10: SaluHora = "Que tengas un excelente dia"; break; 
 case 11: SaluHora = "Buen dia"; break; 
 case 12: SaluHora = "Buen dia"; break; 
 case 13: SaluHora = "Buen dia"; break; 
 case 14: SaluHora = "Buenas Tardes"; break; 
 case 15: SaluHora = "Buenas Tardes"; break; 
 case 16: SaluHora = "Buenas Tardes"; break; 
 case 17: SaluHora = "Buenas Tardes"; break; 
 case 18: SaluHora = "Buenas Tardes"; break; 
 case 19: SaluHora = "Buenas Tardes"; break; 
 case 20: SaluHora = "Buenas Noches"; break; 
 case 21: SaluHora = "Buenas Noches"; break; 
 case 22: SaluHora = "Buenas Noches"; break; 
 case 23: SaluHora = "Buenas Noches"; break; 
 } //24 Horas con saludos :v 
              
 let fechaCompleta = Dia + " "+ NumDiMes + " " + Mes + " " + Epoca; 
 let saludHora = SaluHora; 
  
 export default { 
     fechaCompleta, 
     saludHora 
 }
