class ProductManager{
  productos;
  static idIncrementable = 0;
  constructor(){
      this.productos = [];

  }

  getProducts() {
      // retornar todos los productos
      return this.productos;
    }

  addProduct(title, descripcion, price, thumbnail, code, stock) {
      const codeEncontrado = this.productos.find(busqueda => busqueda.code === code)
      
      ProductManager.idIncrementable++;
      const producto = {
          title,
          descripcion,
          price,
          thumbnail,
          code,
          stock,
          id: ProductManager.idIncrementable,

      }

      if (codeEncontrado) {
          return console.log("El id ya existe")  
    }else{
      this.productos.push(producto)
    }

  }

  getProductById(id){
    const idEncontrado = this.productos.find(busqueda => busqueda.id === id)
    if(idEncontrado){
      console.log(idEncontrado)
    }else{
      console.log("Not found")
    }
  }



}



const newProductManager = new ProductManager();
newProductManager.addProduct("heladera", "365 lts - inox", 185000, "img", "rt38", 4);
newProductManager.addProduct("cocina", "luz en horno - enc electrico", 98000, "img", "5516cl", 7);
//console.log(newProductManager.getProducts())

console.log(newProductManager.getProductById(5))
