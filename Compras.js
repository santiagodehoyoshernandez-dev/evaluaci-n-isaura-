// elabore un algoritmo que muestre el total pagado de una compra de x cantidad de producto.
// aparte del total mostrar el IVA con descuento del 5% si la compra es superior de 100k pesos, la persona paga en fectivo y debe mostrar cuales son las vueltas
// que paga el usuario

function compras(producto, IVA, resultado) {
    IVA = 15;
    prompt (parseInt("cuantas compras hizo?: ", producto))

    producto = producto / IVA;
    if (producto => 100) {
        console.log("tienes un descuento de: ")
    } if (producto => IVA) {
        console.log("no tienes descuento")
    } else {
        console.log("desconocido")
    }


    prompt (parseInt("Cuanto vas a pagar?"))
}