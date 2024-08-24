let fetchdata= async ()=>{
    let data= await fetch("https://fakestoreapi.com/products")
    let result = await data.json();
    // console.log(result);
    let section = document.getElementById("container")
      result.forEach((ele)=>{
        container.innerHTML +=`
       <main class="card">
       <h1>${ele.id}</h1>
       <img src=${ele.image}>
       <h3>${ele.title}</h3>
       <p>${ele.description.slice(0,70)}</p>
       <b>Rs: ${ele.price}</b>
       <button onclick="addToCart('${ele.title}',${ele.price})">ADD TO CART</button>
       </main>
         `

    })
}
fetchdata()
let count=0;
let cart=[]
let cartPrice=[]
let cart_value= document.getElementById("cart_value")
let addToCart=(productTitle,productPrice)=>{
  count++
  cart_value.innerText=count

let cart_obj={
  name:productTitle,
  price:productPrice
}
cart.push(cart_obj)
let cart_items= document.getElementById("cart_items")
console.log(cart_items);

cartPrice.push(cart[cart.length-1].price)
let finalPrice = cartPrice.reduce((storage,ele)=>{
  return storage+=ele
})

cart_items.innerHTML+=`
<h1>${cart[cart.length-1].name}<span>${cart[cart.length-1].price}</span></h1>`


let price_container= document.querySelector("#price_container")
// console.log(price_container);
price_container.innerHTML=`
<p>YOUR TOTAL PRICE IS :${finalPrice}</p>`
  
  cart_items.style.display = "block"
}