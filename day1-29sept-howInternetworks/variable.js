

{
    let xlet = 23;
    var xVar = 24;
    const xConst = 25;
}

// const xConst=32;
// {
//     const xConst=43;
//     console.log(xConst);
// }



// console.log(xConst);

var x = 5;
{
    console.log("in block " , x);
    var x = 8;
    console.log("in block ", x);
}
console.log(x);