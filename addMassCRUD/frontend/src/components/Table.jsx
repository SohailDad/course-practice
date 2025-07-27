import { useEffect, useState } from "react"
import axios from "axios"

function Table() {
    const [items, setItems] = useState([])
    const [deleteToast, setDeleteToast] = useState(false)
    // console.log("items Data : ", items)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/crudItems");
                // console.log("Data :", response.data.data)// for testing
                setItems(...items, response.data.data)
            } catch (error) {
                console.log("Fetching Data Error!", error);
            }
        };

        fetchData();

    }, [])


    const deleteItems = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/crudItems/${id}`)
            confirm("you want to delete this items?")
            setDeleteToast(true)

        } catch (error) {
            console.log("Deleting Data Error")
        }
    }


    return (
        <>
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
                                        <button className='btn btn-primary'>Edit</button>
                                    </div>
                                </td>

                            </tr>
                        ))}


                    </tbody>
                </table>
              
            </div>
              {
                deleteToast ?
                <div class="toast align-items-center text-bg-success border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
                : ""
                }

        </>
    )
}

export default Table