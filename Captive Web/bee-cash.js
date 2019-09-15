var billete1 = document.createElement("img");
billete1.src = "imagen/10.png";
billete1.style.height = "50px";

var billete2 = document.createElement("img");
billete2.src = "imagen/20.png";
billete2.style.height = "50px";

var billete3 = document.createElement("img");
billete3.src = "imagen/50.png";
billete3.style.height = "50px";

var billete4 = document.createElement("img");
billete4.src = "imagen/100.png";
billete4.style.height = "50px";

var billete5 = document.createElement("img");
billete5.src = "imagen/200.png";
billete5.style.height = "50px";


class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja) 
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles) );
            // -= significa la variable restado con todo lo que le acompa-a
            dinero -= (bi.valor * papeles);

        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "No tengo suficiente dinero" +"<br />" + "Por favor recargue para continuar";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                // += significa la misma variable sumado con todo lo que le sigue
                resultado.innerHTML +="Haz recibido " + e.cantidad + " billetes de $ " + e.valor + "      ";

                if(e.valor == 10)
                {
                    resultado.appendChild(billete1);
                    resultado.innerHTML +="<br />";
                }
                else if (e.valor == 20)
                {
                    resultado.appendChild(billete2);
                    resultado.innerHTML +="<br />";
                }
                else if (e.valor == 50)
                {
                    resultado.appendChild(billete3);
                    resultado.innerHTML +="<br />";
                }
                else if (e.valor == 100)
                {
                    resultado.appendChild(billete4);
                    resultado.innerHTML +="<br />";
                }
                else if(e.valor == 200)
                {
                    resultado.appendChild(billete5);
                    resultado.innerHTML +="<br />";
                }
                

            }
        }
    }
    
}

var caja = [];
var entregado = [];
caja.push( new Billete(200,5) );
caja.push( new Billete(100,10) );
caja.push( new Billete(50,50) );
caja.push( new Billete(20,10) );
caja.push( new Billete(10,50) );
var dinero = 0;
var div = 0;
var papeles = 0;

var imagen1 = document.getElementById("imagen1");
var imagen2 = document.getElementById("imagen2");

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

  