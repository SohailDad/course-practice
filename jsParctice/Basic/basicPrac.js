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



// CalculateArea function
function calculateArea(){
    let height = parseFloat(document.getElementById("Height").value)
    let width = parseFloat(document.getElementById("Width").value)
    console.log("Result : ",height,width)
    document.getElementById("areaResult").innerHTML =`Total Area :  ${height * width}`;
    
}


