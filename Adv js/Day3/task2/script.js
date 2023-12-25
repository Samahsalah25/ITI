var s1=document.querySelector(".s1");
var s2=document.querySelector(".s2");
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
         var i=0;
         s1.addEventListener("click" , plapla);
            function plapla(e){
              
                if(i<4)
                {
              
              
                var optionvalue=e.target[i].value;
                console.log(optionvalue);
                for(let k in user)
         {
            if(k===optionvalue)
            {  s2.innerHTML=`<option "> </option>`
                for(var m=0;m<user[k].length;m++)
                {
                    console.log(user[k][m].name);
                  
                    s2.innerHTML+=`<option ">${[user[k][m].name]}</option>`;
                   
                }
              
            }
                   

         }
              
               i++
                }
                else{
                    i=0;
                }
                    
                       
                       
                        
                    
        }
      

       

        //  }
    
     
    }

}})






