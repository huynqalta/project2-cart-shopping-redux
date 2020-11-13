var inittialState=[
    {
        id:1,
        name:'Iphone 11 pro max',
        image:'https://www.ifd-pforzheim.de/images/ifdpforzheimde/714-iphone-11-pro-max-apple-3342.jpg',
        description:'sản phẩm do Apple san xuat',
        price:'510',
        inventory:15,
        rating:5
    },
    {
        id:2,
        name:'Sam sum galaxy j7 plus',
        image:'https://http2.mlstatic.com/celular-libre-samsung-j7-pro-2017-55-pulgadas-16gb-13mp-4g-D_NQ_NP_798360-MCO26711144924_012018-F.jpg',
        description:'sản phẩm do Samsum san xuat',
        price:'310',
        inventory:10,
        rating:4
    },
    {
        id:3,
        name:'ReadMe',
        image:'https://www.pricerunner.se/product/1200x1200/1909183075/Xiaomi-Redmi-Note-8-Pro-6GB-RAM-128GB.jpg',
        description:'sản phẩm do Tau Khua  san xuat',
        price:'100',
        inventory:5,
        rating:3
    }
    ,
    {
        id:4,
        name:'Iphone 12 ',
        image:'https://www.pricerunner.se/product/1200x1200/1909183075/Xiaomi-Redmi-Note-8-Pro-6GB-RAM-128GB.jpg',
        description:'sản phẩm do Apple  san xuat',
        price:'12000',
        inventory:5,
        rating:3
    }
];

const product=(state=inittialState,action)=>{
    switch(action.type){
        default: return [...state];
    }
}
export default product;
