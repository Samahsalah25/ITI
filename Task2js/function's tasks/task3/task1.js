var arr=[];

function twoa(...num)
{
    for(let i=0;i<num.length;i++)
    {
        arr.push(num[i])
    }
    //try{
    if(arr.length>2)
    {
        throw ('Parameter graeter than 2 ');
    }

    return "<span style='color:red'> Good </span> Parameter less than 2";
    }
   /* catch{
        document.write(` <span style='color:red'> Sorry: </span> Parameter graeter than 2`)
    }*/


document.write(twoa(5,2,4));