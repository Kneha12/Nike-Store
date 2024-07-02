 const wrapper = document.querySelector(".sliderWrapper");
//  console.log(wrapper)
//  wrapper.style.transform="translate(-400vw)"


const products=[
    {
        id:1,
        title:"Air Force",
        price:119,
        color:[
            {
                code:"black",
                img:"Air.png",
            },
            {
                code:"darkblue",
                img:"air2.png",
            },
        ],
    },
    {
        id:2,
        title:"Air Jordan",
        price:149,
        color:[
            {
                code:"lightgray",
                img:"jordan.png",
            },
            {
                code:"green",
                img:"jordan2.png",
            },
        ],

    },

    {
        id:3,
        title:"Blazer",
        price:109,
        color:[
            {
                code:"lightgray",
                img:"blazer.png",
            },
            {
                code:"green",
                img:"blazer2.png",
            },
        ],
    },

    {
        id:4,
        title:"Crater",
        price:129,
        color:[
            {
                code:"black",
                img:"crater.png",
            },
            {
                code:"lightgray",
                img:"crater2.png",
            },
        ],

    },

    {
        id:5,
        title:"Hippie",
        price:99,
        color:[
            {
                code:"gray",
                img:"hippie.png",
            },
            {
                code:"black",
                img:"hippie2.png",
            },
        ],

    },

];
 let chooseProduct=products[0]
 const crrentProductImg=document.querySelector(".productImg");
 const crrentProductTitle=document.querySelector(".productTitle");
 const crrentProductPrice=document.querySelector(".productPrice");
 const crrentProductColors=document.querySelectorAll(".color");
 const crrentProductSizes=document.querySelectorAll(".size");

 const menuItems=document.querySelectorAll(".menuItem");
menuItems.forEach((item,index)=>{
    item.addEventListener("click" ,()=>{
    wrapper.style.transform=`translate(${-100 * index}vw)`;

    //change the choosen product
    chooseProduct= products[index]
//change text of current product
crrentProductTitle.textContent=chooseProduct.title
crrentProductPrice.textContent="$"+chooseProduct.price;
crrentProductImg.src=chooseProduct.color[0].img;

//assigning new color
crrentProductColors.forEach((color, index)=>{
    color.style.backgroundColor=chooseProduct.color[index].code;
       });
    });
});

crrentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        crrentProductImg.src=chooseProduct.color[index].img
    });
});

crrentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        crrentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        })
     size.style.backgroundColor="black";
     size.style.color="white";
    });
});

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
})
close.addEventListener("click",()=>{
    payment.style.display="none";
})