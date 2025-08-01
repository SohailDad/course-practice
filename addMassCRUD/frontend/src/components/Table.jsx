import { useEffect, useState } from "react"
import axios from "axios"
import { useData } from "../context/DataContext";

function Table() {
    const [deleteToast, setDeleteToast] = useState(false)
    const [catchError, setCatchError] = useState("")

    // console.log("items Data : ", items)
    const { items, fetchData, setEditItems, setEditItemsData} = useData();


    const editItems = async (itemsData) => {
        try {
            setEditItems(true);
            setEditItemsData(itemsData)
        } catch (error) {
            console.log("Edit Data Error")
            setCatchError("Edit Data Error plz wait..!")
            setTimeout(() => setCatchError(""), 3000);
        }
    }


    const deleteItems = async (id) => {
        try {
            if (confirm("you want to delete this items?")) {

                await axios.delete(`http://localhost:3000/crudItems/${id}`)
                fetchData();
                setDeleteToast(true)
                setTimeout(() => setDeleteToast(false), 3000);
            }
        } catch (error) {
            console.log("Deleting Data Error")
            setCatchError("Edit Data Error plz wait..!")
            setTimeout(() => setCatchError(""), 3000);
        }
    }




    return (
        <>{
            deleteToast ?
                    <div className="toast container align-items-center text-bg-success border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex">
                            <div className="toast-body">
                                Successfully!
                            </div>
                            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                    : ""
        }
        {
            catchError ?
                    <div className="toast container align-items-center text-bg-danger border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex">
                            <div className="toast-body">
                                {catchError}
                            </div>
                            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                    : ""
        }

            <div className='d-flex justify-content-center items-center container'>

                <table className="table align-middle table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col" className=''>Status</th>
                            <th scope="col">Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (

                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.status}</td>
                                <td>{item.description}</td>
                                <td>
                                    <div className='d-md-flex justify-content-center '>
                                        <button className='btn btn-danger mx-md-2' onClick={() => deleteItems(item.id)}>Delete</button>
                                        <button className="btn btn-warning"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" onClick={() => editItems(item)}>Edit</button>
                                    </div>
                                </td>

                            </tr>
                        ))}


                    </tbody>
                </table>

            </div>

        </>
    )
}

export default Table