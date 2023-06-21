(function(){
    var actualizarHora = function(){

                var fecha = new Date(),
                    horas = fecha.getHours(),
                    ampm,
                    minutos = fecha.getMinutes(),
                    segundos = fecha.getSeconds(),
                    dia = fecha.getDay(),
                    diaNumero = fecha.getDate(),
                    mes = fecha.getMonth(),
                    year = fecha.getFullYear();  


                var pHoras= document.getElementById("horas"),
                    pAMPM= document.getElementById("ampm"),
                    pMinutos= document.getElementById("minutos"),
                    pSegundos= document.getElementById("segundos"),
                    pDiaNumero= document.getElementById("diaNumero"),
                    pDia= document.getElementById('dia'),
                    pMes= document.getElementById("mes"),
                    pYear= document.getElementById("year");

        var semana = ["Domingo" , "Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sabado"];
        pDia.textContent = semana[dia];
        pDiaNumero.textContent = diaNumero;
        
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes]; 

        pYear.textContent = year;

        if (horas >=12){
            horas = horas - 12;
            ampm= 'PM';
        }else{
            ampm = 'AM';
        }

        if(horas == 0){
            horas = 12;

        }

        if(minutos < 10){
            minutos = '0' + minutos;
        }

        if(horas <10){
            horas = '0' + horas;
        }

        if(segundos <10){
            segundos = '0' + segundos;
        }




        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;









    };








    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

}())

