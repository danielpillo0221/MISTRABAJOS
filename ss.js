
function agregarPedidos (){
    const producto=document.getElementById("Pedidos").value;
    const cantidad=document.getElementById("Cantidad").value;
   
    let pedidos =JSON.parse(localStorage.getItem("pedidos"))|| [] ;

     pedidos.push({producto, cantidad})
    console.log(pedidos)


      localStorage.setItem("pedidos", JSON.stringify(pedidos));
      document.getElementById("formulario").reset;
}