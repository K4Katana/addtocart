const product = [
  {
    id: 0,
    image: 'images/1.jpg',
    title: 'Sketcher Men sneakers',
    price: 95,
  },
  {
    id: 1,
    image: 'images/2.jpg',
    title: 'Nike Air Jordan',
    price: 195,
  },
  {
    id: 2,
    image: 'images/3.jpg',
    title: 'Nike Air Jordan Custom',
    price: 255,
  },
  {
    id: 3,
    image: 'images/4.jpg',
    title: 'All white Fazers',
    price: 55,
  },
  {
    id: 4,
    image: 'images/5.jpg',
    title: 'All Black Timbaland',
    price: 255,
  },
  {
    id: 5,
    image: 'images/6.jpg',
    title: 'Puma Running Shoes',
    price: 125,
  },
  {
    id: 6,
    image: 'images/7.jpg',
    title: 'Low loafers',
    price: 35,
  },
  {
    id: 7,
    image: 'images/8.jpg',
    title: 'Nike Air Jordan Black',
    price: 255,
  },
]

const categories = [...new Set(product.map((item) => {return item}))]

let i=0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var {image, title, price} = item;
  return(
    `<div class='box'>
      <div class = 'img-box'>
        <img class= 'images' src=${image}>
      </div>
      <div class = 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
    </div>`
  )
}).join('')

var cart = [];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}

function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ "+0+" .00";
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((items)=> {
      var {image, title, price} = items;
      total=total+price;
      document.getElementById("total").innerHTML= "$ "+total+".00";
      return(
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowing' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
          "<i class='bx bx-trash-alt'onclick='delElement("+(j++)+")'></i></div>"
      );
    }).join('');
  }
}