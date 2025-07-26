const connDB = require("../config/db")


const getItems = async (req, res) => {
    try {
        const dbQuery = "Select * From items_table"
        await connDB.query(dbQuery, (err, result) => {
            if (err) {
                return console.log("Query error: ", err)
            }
            console.log("Result: ", result)
            if (result.length > 0) {
                return res.status(200).json({ message: "found all Items!", data: result })
            }
            res.status(400).json({message:"Items not found !!"})
        })
    } catch (error) {
        console.log("Server Error: ", error)
        res.status(500).json({ message: "Server Error!!!" })
    }
}
const insertItems = async (req, res) => {
    try {
        const itemsData = req.body
        if (!itemsData.title || !itemsData.status || !itemsData.description) {
            return res.status(400).json({ message: "fill all fields !!" })
        }
        // console.log("items Data : ",itemsData) //for testing 
        const dbQuery = `insert into items_table (title, status, description) values ("${itemsData.title}","${itemsData.status}","${itemsData.description}")`

        await connDB.query(dbQuery, (err, result) => {
            if (err) return console.log("Query Error: ", err)

            res.status(200).json({ message: "Insert Successfully!!" })
        })


    } catch (error) {
        console.log("Server Error: ", error);
        res.status(500).json({ message: "Sever Error!!" })
    }


}
const updateItems = async (req, res) => {
    try {
        const updateItems = req.body
        const { id } = req.params;
        // console.log("put operation : ",id,updateItems) //for testing
        if (!updateItems || !id) {
            return res.status(400).json({ message: "Fill all feilds!!" })
        }
        const dbQuery = `update items_table set title="${updateItems.title}", status = "${updateItems.status}", description = "${updateItems.description}" where id = "${id}"`
        await connDB.query(dbQuery, (err, result) => {
            if (err) return console.log("Query Error:", err)

            res.status(200).json({ message: "Update successfully!!", data: result })

        })

    } catch (error) {
        console.log("Server Error: ", error);
        res.status(500).json({ message: "Sever Error!!" })
    }

}
const deleteItems = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log("delete operation : ",id) //for testing
        if (!id) {
            return res.status(400).json({ message: "Not found Id !!" })
        }

        const dbQuery = `delete from items_table where id = "${id}"`

        await connDB.query(dbQuery, (err, result) => {
            if (err) {
                return console.log("Query Error: ", err)
            }

            res.status(200).json({ message: "Delete Successfully !!" })
        })
    } catch (error) {
        console.log("Server Error: ", error);
        res.status(500).json({ message: "Sever Error!!" })
    }

}


module.exports = { getItems, insertItems, updateItems, deleteItems }