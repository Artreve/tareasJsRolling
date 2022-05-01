 class Producto{
     constructor(codigo, nombre, precio){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio
     }
     imprimeDatos(){
         document.write(`<b>Código</b>:${this.codigo}<br/>`);
         document.write(`<b>Nombre</b>:${this.nombre}<br/>`);
         document.write(`<b>Precio</b>:${this.precio}<br/>`);
         document.write(`<b>-------------------------------</b><br/>`)
    }
 }
 
 let producto1 = new Producto('1','Yogurt','$10');
 let producto2 = new Producto('2','Mermelada','$50');
 let producto3 = new Producto('3','Atún','$100');

 let productos = [producto1,producto2,producto3];
 productos.forEach(function(producto){
    producto.imprimeDatos();
});
