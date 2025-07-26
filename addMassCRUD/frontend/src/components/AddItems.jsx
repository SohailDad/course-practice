
function AddItems() {
    return (
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
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label text-start">Title</label>
                                    <input type="text" className="form-control" id="recipient-name" placeholder="Enter Title"/>
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label text-start">Status</label>
                                    <input type="number" className="form-control" id="recipient-name" min={0} max={1} placeholder="0-1"/>
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Description</label>
                                    <textarea className="form-control h-4" id="message-text" placeholder="Write description..."></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary px-4">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItems