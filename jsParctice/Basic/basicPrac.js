let userLevel = "admin";
let accessLevel

let isAthenticated = true;




if (userLevel == "admin") {
    accessLevel = "Full Access !!!";
} else if (userLevel == "manager") {
    accessLevel = "Limited Access!!!!"
} else {
    accessLevel = "No Access!!!!!"
}


let authenticationStatus = isAthenticated ? "Authenticated" : "No Authenticated"


document.getElementById("demo").innerHTML = accessLevel;

const p = document.createElement("p");
// p.className = "demo1";                        
p.innerHTML = authenticationStatus;
document.body.appendChild(p);



// CalculateArea function
function calculateArea() {
    let height = parseFloat(document.getElementById("Height").value)
    let width = parseFloat(document.getElementById("Width").value)
    console.log("Result : ", height, width)
    document.getElementById("areaResult").innerHTML = `Total Area :  ${height * width}`;

}


// follower counter App
function displayFollower() {
    if (count == 10) {
        alert("Congradulation! You achieved 10 Followers.")
    } else {
        document.getElementById("followerMsg").innerHTML = "Congradulation! You achieved Followers."
    }
}

let count = 0
function incrementFollower() {
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

function displayEmployees() {
    const totalEmployees = employees.map((employee) => (
        `<p>${employee.id}: ${employee.name}: ${employee.age}: ${employee.department}: ${employee.salary} </p>`
    )).join('');
    document.getElementById("employeesDetails").innerHTML = totalEmployees
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0)
    alert(`Total Salaries : $${totalSalaries}`)
}

function displayHREmployees() {
    const hrEmployees = employees.filter((employee) => employee.department === "HR")
    const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>${employee.id}: ${employee.name} : ${employee.age} : ${employee.department} : ${employee.salary}</p>`);
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find((employee) => employee.id === employeeId)
    if (foundEmployee) {
        document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} : ${foundEmployee.age} : ${foundEmployee.department} : ${foundEmployee.salary}</p>`
    } else {
        document.getElementById("employeesDetails").innerHTML = `<p>Employee Not Found!!!</p>`
    }
}




// Book Management System
let books = []
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const allBooks = books.map((book, index) => (`
        <h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        `))

    document.getElementById("books").innerHTML = allBooks;
}

function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }

function editbook(index){
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
     books.splice(index, 1);
     showbooks();
}