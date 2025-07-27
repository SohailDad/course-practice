import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"

function AddItems() {
    const [deleteToast, setDeleteToast] = useState(false)
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        console.log("form data: ",data)
        try {
            await axios.post("http://localhost:3000/crudItems",data)

            reset()
            setDeleteToast(true)
        } catch (error) {
            
        }

    }



    return (
        <>
        {
                deleteToast ?
                <div class="toast align-items-center text-bg-success border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Successfully Add Item.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
                : ""
                }
        <div className="py-4 d-flex justify-content-center">
            <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Items +</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Items</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label text-start">Title</label>
                                    <input {...register("title", { required: true })} type="text" className="form-control" id="recipient-name" placeholder="Enter Title" />
                                    {errors.title && <span className="text-danger ">This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label text-start">Status</label>
                                    <input type="number" {...register("status", { required: true, minLength: 0, maxLength: 1 })} className="form-control" id="recipient-name" placeholder="0-1" />
                                    {errors.status && <span className="text-danger ">This field is required only 0 or 1.</span>}
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Description</label>
                                    <textarea {...register("description", { required: true })} className="form-control h-4" id="message-text" placeholder="Write description..."></textarea>
                                    {errors.title && <span className="text-danger ">This field is required</span>}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary px-4" >Add</button>
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