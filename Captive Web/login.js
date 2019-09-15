var u = document.getElementById("usuario");
var p = document.getElementById("contrase-a");
var a = document.getElementById("acceso"); 
var r = document.getElementById("resultado"); 
a.addEventListener("click",sirve);
var uu = 3;
var pp = 3;
var llave;
function sirve()
{
    if (u.value == "abc" && p.value == "123")
    {
        var uu = 1;
        var pp = 1;
        var llave = "permitido"
        a.href = "bee-money.html"
    }
    else
    {
        var uu = 0;
        var pp = 0;
        var llave = "denegado"
    }
    r.innerHTML = llave + uu + pp;
   // document.write("entro");
   
 }
