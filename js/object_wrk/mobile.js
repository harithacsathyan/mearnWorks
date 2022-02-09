var products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103, 
    p_name: "mi11lite", 
    band: "5g", 
    price: 22000, 
    display: "led" },
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105, 
    p_name: "realme", 
    band: "4g", 
    price: 12000, 
    display: "led" },
  ]
  
  
  
  
  // # print product names only
  console.log("product names only");
  // for (let data of products ){
  // console.log(data.p_name);
  // }
  //or
  products.forEach(p=>console.log(p.p_name))
  
  // // # print all mobile details whose display="amoled"
  console.log("mobile details whose display amoled");

  // for (let data of products ){
  //   if(data.display=="amoled"){
  //       console.log(data);

  //   }
  //   }
    // or
    products.filter(p=>p.display=="amoled").forEach(p=>console.log( p.p_name))
  
  // // # print 5g moboile names
  console.log("5g moboile names");

  // for (let data of products ){
  //   if(data.band=="5g"){
  //       console.log(data);
  //   }
  products.filter(p=>p.band=="5g").forEach(p=>console.log(p.p_name) )

  //   }

  
  // # filter mobiles based on price
  console.log("sort");
  // for (let data of products ){
    
  //   products.sort((r1,r2)=>r2[3]-r1[3]);
  //   console.log(products);


  // }

  products.sort((p1,p2)=>p2.price-p1.price).forEach(p=>console.log(p))
// for (let data of products ){
    // console.log(products.sort((r1,r2)=>r2[3]-r1[3]));
    // }
    

  
  // # print costly mobile
  console.log("costly");
  var costly=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
  console.log(costly);
  
  // # print low cost mobile
  console.log("chaepest");
  var cheap=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
  console.log(cheap);