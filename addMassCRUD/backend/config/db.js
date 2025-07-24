const mysql = require("mysql");


try {
    const connectDB = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "add_mass_crud",
        port:"3307"
    })

    connectDB.connect((err) => {
        if(err) return console.log("DB connection Error:", err)
        console.log("DB is connected!")
    })
    
    module.exports = connectDB;
} catch (error) {
    console.log("DB Error :", error)
}
