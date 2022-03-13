// let email = document.querySelector("#email").value;
// let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;\
// let subject = document.querySelector("#subject").value;
// let message = document.querySelector("#message").value;
    
function contact(){
    const email =document.getElementById('email').value;
    const subject = document.getElementById('subject').value.length;
    const message = document.getElementById('message').value.length;
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    valid = true;
    if(emailregex.test(email) == false){
        alert("Invalid email");
        valid=false;
    }
    if(subject < 4){
        alert("subject must be more than 4 characters");
        valid=false;
    }
    else if(message < 10){
        alert(" message must be more than 10 characters");
        valid=false;
    }
    if(valid ==true){
        alert("message sent");
    }
} 
