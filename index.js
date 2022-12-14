class ProductManager {
  constructor() {
    this.products = [];
    this.product = this.product;
  }

  addProduct(product) {
    let idEncontrado = this.products.find((product) =>
    product.code === code);
    if (idEncontrado) {
        return console.log("El id ya existe")  
  }else{
    this.products.push(product)
  }
}

getProducts() {
  // retornar todos los productos
  return this.products
}
}
    /* products;
    id;
    products = [];
    static idContador = 0 */
    class Product extends ProductManager{constructor(title, descripcion, price, thumbnail, code, stock) {
      super()      
      this.title = title; 
        this.descripcion = descripcion; 
        this.price = price; 
        this.thumbnail = thumbnail; 
        this.code = code; 
        this.stock = stock;
        //this.id = Id.idContador += 1; 
    }}

    
    
/*     getProductById() {
      let productoEncontrado = this.products.find((product) =>
      product.id === id);
      return this.products.id = productoEncontrado
      // retornar el producto que cuente con este id
      // pista: Utilizar find()
    }
   */

const heladera = new ProductManager () 

heladera.addProduct("Heladera", "Samsung", 1222, "imagen", "rt38", 5);
//getProducts(this.products); 
console.log(heladera.getProducts())


