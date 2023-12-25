
var arr=[];
function rev(...arg)
{
    for(let i=0;i<arg.length;i++)
    {
        arr.push(arg[i]);

    }
    ar=arr.reverse();
    return arr;
}


var sun =rev(4,9,10,5,6,2,1);


document.write(`<div> the reverse of your values are :  ${sun} </div>`);
