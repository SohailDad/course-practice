import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useData } from "../context/DataContext";

function AddItems() {
    const [submitToast, setSubmitToast] = useState(false)
    const { fetchData, editItems, setEditItems, setEditItemsData, editItemsData } = useData();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        if (editItems && editItemsData) {
            reset({
                title: editItemsData.title,
                status: editItemsData.status,
                description: editItemsData.description
            });
        }
    }, [editItems, editItemsData]);
    const update = () => {
        reset({
            title: '',
            status: null,
            description: ""
        })
        setEditItems(false)
    }

    const onSubmit = async (data) => {
        console.log("form data: ", data);
        try {
            if (editItems) {
                await axios.put(`http://localhost:3000/crudItems/${editItemsData.id}`, data);
                reset({
                    title: '',
                    status: null,
                    description: ""
                })
            } else {
                await axios.post("http://localhost:3000/crudItems", data);
            }

            reset();
            fetchData();
            setSubmitToast(true);
            setTimeout(() => setSubmitToast(false), 3000);

            setEditItems(false);
            setEditItemsData(null);
        } catch (error) {
            console.log("Inserting/Updating Items Error", error);
        }
    };




    return (
        <>
            {
                submitToast ?
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
            <div className=" container p-4 d-flex justify-content-end">
                <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Items +</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Items</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={() => {
                                        reset({
                                            title: '',
                                            status: null,
                                            description: ""
                                        });
                                        setEditItems(false);
                                        setEditItemsData(null);
                                    }}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label className="col-form-label text-start">Title</label>
                                        <input {...register("title", { required: true })} type="text" className="form-control" id="recipient-name" placeholder="Enter Title" />
                                        {errors.title && <span className="text-danger ">This field is required</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label text-start">Status</label>
                                        <select>
                                            <option>Active</option>
                                            <option>In-active</option>
                                        </select>
                                        {errors.status && <span className="text-danger ">This field is required only 0 or 1.</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label">Description</label>
                                        <textarea {...register("description", { required: true })} className="form-control h-4" id="message-text" placeholder="Write description..."></textarea>
                                        {errors.description && <span className="text-danger ">This field is required</span>}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                        reset({
                                            title: '',
                                            status: null,
                                            description: ""
                                        });
                                        setEditItems(false);
                                        setEditItemsData(null);
                                    }}>Close</button>
                                        <button type="submit" className="btn btn-primary px-4" >
                                            {editItems ? "Update" : "Add"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddItems