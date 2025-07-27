import { useEffect, useState } from "react"
import axios from "axios"

function Table() {
    const [items, setItems] = useState([])
    console.log("items Data : ", items)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/crudItems");
                console.log("Data :", response.data.data)// for testing
                setItems(...items, response.data.data)
            } catch (error) {
                console.error("Fetching Data Error!", error);
            }
        };

        fetchData();

    }, [])


    const deleteItems = ()=>{
        
    }


    return (
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
                    {items.map((item,index) => (
                
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.status}</td>
                            <td>{item.description}</td>
                            <td>
                                <div className='d-md-flex justify-content-center '>
                                    <button className='btn btn-danger mx-md-2' onClick={deleteItems}>Delete</button>
                                    <button className='btn btn-primary'>Edit</button>
                                </div>
                            </td>

                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table