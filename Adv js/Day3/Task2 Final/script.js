var s1=document.querySelector(".s1");
var s2=document.querySelector(".s2");

var op=document.querySelectorAll(".t")
var arr=[];
console.log(s1);
var Xhruser=new XMLHttpRequest();
console.log(Xhruser);


Xhruser.open("get","rockbands.json");

Xhruser.send();
Xhruser.addEventListener("readystatechange", function(){
if(Xhruser.readyState===4)
{  
  if(Xhruser.status===200)
    {
      var user=JSON.parse(Xhruser.response);
      console.log(user)
         for(let k in user)
         {
            console.log(k);
            s1.innerHTML+=`<option value="${k}">${k}</option>`

          
          

         }
         s1.addEventListener("click",test)
         function test(e){
         

            s2.innerHTML=``;
         for(let k in user)
         {
            if(k===e.target.value)
            { 
              for(let m in user[k])
              { 
                // console.log(user[k][m])
                console.log(user[k][m].name);
                console.log(user[k][m].value);
                s2.innerHTML+=`<option class="t">  ${user[k][m].name}</option>`;
              }
              
            }
         }
         }
         var a=document.querySelectorAll(".a")
         console.log(a[0]);
         s2.addEventListener("click",add)
         function add(e)
         {
                 var value=e.target.value;

                 console.log(value);
                 console.log(e.target.value);
            
            for(var k in user)

            { 
                // console.log(typeof(user[k]))
              for(var l=0;l<user[k].length;l++)
              {
                if(user[k][l].name===value)
                {
                  
                    console.log(user[k][l].value);
                    console.log(a[l])
                    window.location.href=user[k][l].value;
                    // a[l].href=`${user[k][l].value}`;

                }
                
              }
                
            }
                   

                
               
               
            //    if(k===e.target.value)
            //    { 
            //     console.log(k)
             
            //     //  
            //     //  {
                 
            //        console.log(user[k][m].src);
                
            //      }
                 
               }
            }


         }
        //  var i=0;
        //  s1.addEventListener("click" , plapla);
        //     function plapla(e){
        //         console.log(i);
        //         if(i<4)
        //         {
              
              
        //         var optionvalue=e.target[i].value;
        //         console.log(optionvalue);
        //         for(let k in user)
        //  {
        //     if(k===optionvalue)
        //     {  s2.innerHTML=`<option "> </option>`
        //         // for(var m=0;m<user[k].length;m++)
        //         // { 
        //             for(var l in user[k])
        //             {
        //                 console.log(user[k][l]);
                        
        //             }
        //             console.log(user[k]);
        //             // console.log(user[k][i].name);
        //             // for(var m in user[k])
        //             // s2.innerHTML+=`<option class="t"><a class="a"> ${[user[k][i].name]}</a></option>`;
        //         // }
        //     }
        //  }
              
        //        i++
        //         }
        //         else{
        //             i=0;
        //         }            
        // }   // 
    }

)






