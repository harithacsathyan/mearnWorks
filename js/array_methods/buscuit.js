var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidendseek",50,0],
    [103,"moms",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],


]

// print costly product detail reduce
console.log("costly product detail");
var costly=products.reduce((b1,b2)=>b1[2]>b2[2]?b1:b2)
var list=products.filter(b=>b[2]==costly[2])
console.log(list);


// print outofstock products filter
console.log("outofstock products")
var outoff=products.filter(b=>b[3]==0)
console.log(outoff);


// print oreo details find
console.log("oreo details")
var oreo=products.find(b1=>b1[1]=="oreo")
console.log(oreo);


// sort products based on available stock order by desc sort
console.log("products based on available stock order by desc")
var srt=products.sort((b1,b2)=>b2[3]-b1[3])
console.log(srt);


// print product details having maximum available stock reduce
console.log("product details having maximum available stock");
var stock=products.reduce((b1,b2)=>b1[3]>b2[3]?b1:b2)
console.log(stock);

// is there any product with available stock greater than 100
console.log("is there any product with available stock greater than 100");
var isPresent=products.some(p=>p[3]>100)
console.log(isPresent);

// is there any products available in range(10-20)
console.log("is there any products available in range(10-20)");
var avlble=products.some(p=>p[2]>=10&&p[2]<=20)
console.log(avlble);

// print products available in range(10-20)
console.log("print products available in range(10-20)");
var avlble=products.filter(p=>p[2]>=10&&p[2]<=20)
console.log(avlble);

// ******forEach*******
products.forEach(p=>console.log(p[1]))

