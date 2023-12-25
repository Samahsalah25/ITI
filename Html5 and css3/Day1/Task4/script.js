var input1=document.querySelector(".input1");
var input2=document.querySelector(".input2");
var tbody=document.querySelector(".tbody");
var form=document.querySelector(".form");
var color=document.querySelector(".color");
console.log(form);
console.log(tbody);

form.addEventListener("submit",function(e){
    console.log(input1);
    console.log(input2);
    console.log(tbody);
 
e.preventDefault();
tbody.innerHTML="";

    for(var i=0;i<input1.value;i++){
        var tr=document.createElement("tr");
        for(var j=0;j<input2.value;j++)
        {
           
            var td=document.createElement("td");
            td.style.width="20px"
            td.style.height="20px"
            td.style.border=`2px solid ${color.value} `
            td.innerText=" "
           
            tr.appendChild(td);
            
         td.addEventListener("click",function(e){
            e.target.style.backgroundColor=color.value;
           
         })
         color.addEventListener("change",function(){
            for (var k = 0; k < j; k++) {
                console.log(tr.children[k]);
                tr.children[k].style.border = `2px solid ${color.value}`;
            }
    
        })
        
       
        
        }
      
       
       
        tbody.appendChild(tr);
        console.log("hellp")
    }
   
    input1.value="";
input2.value="";
input1.focus();

    
})

