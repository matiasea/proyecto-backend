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
    class Products extends ProductManager{constructor(title, descripcion, price, thumbnail, code, stock) {
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

const newProductManager = new ProductManager () 

const heladera = {
  title : "Heladera Samsung",
  descripcion: "365 lts - Acero Inox",
  price: 185000,
  thumbnail: "img",
  code: "RT38SKF",
  stock: 4,
}

const cocina = {
  title : "Cocina Florencia",
  descripcion: "Gas Envasado - Luz + Encendido Electrico",
  price: 98000,
  thumbnail: "img",
  code: "5538f",
  stock: 7,
}

const lavarropas = {
  title : "Lavarropas Drean",
  descripcion: "6 kg - 800rpm",
  price: 121000,
  thumbnail: "img",
  code: "6.08",
  stock: 5,
}


newProductManager.addProduct(heladera);
newProductManager.addProduct(lavarropas)
//getProducts(this.products); 
console.log(newProductManager.getProducts())


