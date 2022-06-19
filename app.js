
let signup=()=>{
    var form=document.querySelector('.form');
    console.log(form.elements[0].value);
    var name=form.elements[0].value;
    var lastname=form.elements[1].value;
    console.log(lastname)
    var email=form.elements[2].value;
    console.log(email);
    var pass=form.elements[3].value;
    var conpass=form.elements[4].value;
    var fndiv=document.getElementById('validfname');
    console.log(fndiv);
    var lndiv=document.getElementById('validlname');
    var emdiv=document.getElementById('validemail');
    var pdiv=document.getElementById('validpas');
    var cpdiv=document.getElementById('validcpass');


     const messege=[];
     const messege2=[];
     const messege3=[];
     const messege4=[];
     

    if(name=='' ||name.length<=2)
    {
       messege.push('Please enter valid name')
       fndiv.innerHTML=messege;
       fndiv.style.color="red"
    }
    else{
        messege.push('Good')
        fndiv.innerHTML=messege;
        fndiv.style.color="green"
    }
    if(lastname=='' ||lastname.length<=2)
    {
       messege.push('Please enter valid name')
       messege.pop(messege[0])
       lndiv.innerHTML=messege;
       lndiv.style.color="red"
    }
    else{
        messege.push('Good');
        messege.pop(messege[0]);
        lndiv.innerHTML=messege;
        lndiv.style.color="green"
    }
     if(email.includes('@'))
     {
      messege2.push('Good')
     emdiv.innerHTML=messege2;
     emdiv.style.color="green"
     
     }
     else{
        messege2.push('invalid email')
        emdiv.innerHTML=messege2;
        emdiv.style.color="red"

     }
     if(pass==''||pass.length<=5)
     {
        messege3.push('invalid password');
        pdiv.innerHTML=messege3;
        pdiv.style.color="red"
     }
     else if(pass.includes('!')||pass.includes('@')||pass.includes('#')||pass.includes('$')||pass.includes('%')||pass.includes('&')||pass.includes('*')||pass.includes('(')||pass.includes('^')||pass.includes(')')||pass.includes('+ -'))
     {
         messege3.push('Good');
         pdiv.innerHTML=messege3;
         pdiv.style.color="green"
     }
     else if(pass.includes('1')||pass.includes('2')||pass.includes('3')||pass.includes('4')||pass.includes('5')||pass.includes('6')||pass.includes('7')||pass.includes('8')||pass.includes('9')||pass.includes('0'))
     {
         messege3.push('Good');
         pdiv.innerHTML=messege3;
         pdiv.style.color="green"
     }
     else{
        messege3.push('invalid password');
        pdiv.innerHTML=messege3;
        pdiv.style.color="red"

     }

     if(conpass==pass || conpass==''){
      
        messege4.push('Good');
        

        cpdiv.innerHTML=messege4;
        cpdiv.style.color="green"

     }
     else{
        messege4.push('invalid');
      

        cpdiv.innerHTML=messege4;
        cpdiv.style.color="red"
   
        

     }
   
    
   var users=localStorage.getItem('users');
  
   let validexist=false;
   if(users===null){
      users=[];
      console.log(users);

   }
   else{
     users=JSON.parse(users);
     console.log(users);
    
   }
   let a={
      email:email,
      pass:pass,
      name:name
   }
  

   for(let i=0;i<users.length;i++){
      if(users[i].email===a.email){
        validexist=true;
        console.log(validexist)
       
      }
   }
   if(validexist===true){
      alert("Your input email is already exist try other")
   }
  else{
 users.push(a);
   let b=localStorage.setItem('users',JSON.stringify(users));
    alert('you successfully resgisterd');
    console.log(b);
    location.href='index.html';

   }


 
  
   

}


let back=()=>{
    location.href="index.html"
}