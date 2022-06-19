

let signin=()=>{
    let email=document.getElementById('email').value;
    let pass=document.getElementById('password').value;
    console.log(email)
    console.log(pass);

  let users=localStorage.getItem('users');
  let validuser=false;
  if(users===''){
     users=[];
    alert('No database exist first you need to signup');
  }
  else{
    users=JSON.parse(users);
   
}
let login={
    email1:email,
    pass1:pass
    
}
let{email1,pass1}=login;

for(let i=0;i<users.length;i++){
    if(users[i].email===email1||users[i].pass===pass1){
        alert('login successfully');
   
        location.href='index.html'
      
        
        
        

    }
    else{
        alert('user does not exit please sign up first')
      
    }
}
}