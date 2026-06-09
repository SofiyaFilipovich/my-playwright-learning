type Product = {
  name: string;
  price: number;
  inStock: boolean;
}

const backpack: Product = {
  name: "Backpack",
  price: 29,
  inStock: true,
}

const bike: Product = {
  name: "bike", 
  price: 21, 
  inStock: false,
}

function formatPrice (price: number): string { 
return "$" + price 
 }
console.log (formatPrice (29))
