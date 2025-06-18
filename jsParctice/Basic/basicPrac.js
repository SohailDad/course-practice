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


// follower counter App
function displayFollower(){
    if (count == 10) {
        alert("Congradulation! You achieved 10 Followers.")
    }else {
        document.getElementById("followerMsg").innerHTML = "Congradulation! You achieved Followers."
    }
}

let count = 0
function incrementFollower(){
    count++;
    document.getElementById("count").innerHTML = count;
    displayFollower();
}


// Employee Management System

const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    ];

function displayEmployees(){
    const totalEmployees = employees.map((employee)=>(
        `<p>${employee.id}: ${employee.name}: ${employee.age}: ${employee.department}: ${employee.salary} </p>`
    )).join('');
    document.getElementById("employeesDetails").innerHTML = totalEmployees
}

function calculateTotalSalaries(){
    totalSalaries = employees.reduce((total,employee)=> total + employee.salary,0)
    alert(`Total Salaries : $${totalSalaries}`)
}