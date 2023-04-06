import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // If the data is in database, then you have to use async await to make it asynchronous
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // console.log(savedCart);
    return savedCart;
    // for multiple variable return : 
    /* 
    * 1 - array : return [products, savedCart]
    * 2 - object : return { products, cart: savedCart}
    */
}
export default cartProductsLoader;