const add = () =>{
    const productName = document.getElementById('product-name').value
    document.getElementById('product-name').value="";
    const productQuantity = document.getElementById('product-quantity').value
    document.getElementById('product-quantity').value="";
    console.log(productName,productQuantity);
    displayPet(productName,productQuantity)
    saveProductData(productName,productQuantity)
}
const displayPet =(a,b) => {
  const productContainer = document.getElementById('product-container') 
  const list = document.createElement('li')
  list.innerText= `${a}-${b}`
  productContainer.append(list);
}

const getShopingDataFromLocalStorage = () =>{
  let cart = {} // at first we need to make it an empty object
  const cartData = localStorage.getItem('cart')
  if(cartData){
    cart = JSON.parse(cartData)
  }
  return cart
}
const saveProductData = (product,quantity) =>{
  const cart = getShopingDataFromLocalStorage() // it gets the emptyy object from the function or the previous object which i stored
  
  cart[product] = quantity; 
  const cartString = JSON.stringify(cart) // it makes the object everything in string
  console.log(cartString); 
  localStorage.setItem('cart',cartString) // first value is name of the object or in the application it is value
}
const showDatafromlocalStorage = () =>{
  const getData = getShopingDataFromLocalStorage();
  for (const product in getData){
    const quantity = getData[product]
    displayPet(product,quantity)
  }
}
showDatafromlocalStorage()