var st={
 name:"Doaa",
 email: "doo@gmail.com",
  details :function(){
    return "hello doaa";
  } ,
  display: function(){
    document.write("name is :"+this.name +" email is"+this.email+" details is"+this.details()+" ");
   return ""
  }

}




document.write(st.display());
