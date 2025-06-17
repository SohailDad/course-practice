let userLevel = "admin";
let accessLevel 

let isAthenticated = true;




if (userLevel == "admin"){
    accessLevel = "Full Access !!!";
}else if(userLevel == "manager"){
    accessLevel = "Limited Access!!!!"
}else{
    accessLevel = "No Access!!!!!"
}


let authenticationStatus = isAthenticated ? "Authenticated" : "No Authenticated"


document.getElementById("demo").innerHTML= accessLevel;

const p = document.createElement("p");        
// p.className = "demo1";                        
p.innerHTML = authenticationStatus;           
document.body.appendChild(p);   
