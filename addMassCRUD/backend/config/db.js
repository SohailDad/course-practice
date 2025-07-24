const mysql = require("mysql");


try {
    const connectDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "add_mass_crud"
    })

    connectDB.connect((err) => {
        if(err) return console.log("DB connection Error:", err)
        console.log("DB is connected!")
    })
    
    module.exports = connectDB;
} catch (error) {
    console.log("DB Error :", error)
}
