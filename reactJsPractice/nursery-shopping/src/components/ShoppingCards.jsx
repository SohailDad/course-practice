import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

function ShoppingCards() {

    const total = useSelector((state)=>state.counter.total)

    return (
    <>
        <Navbar/>
        <div className='container mt-3 d-flex align-items-center flex-column '>
            <h1 className='mb-4 '>Total Cards Amount : {total}</h1>
            <div className="card  mb-1" style={{ maxWidth: "540px", }}>
                <div className="row g-0">
                    <div className="col-5">
                        <img src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022108.jpg?ga=GA1.1.1767132769.1750844106&semt=ais_hybrid&w=740" className="img-fluid h-100 rounded-start" alt="..." />
                    </div>
                    <div className="col-7 px-5">
                        <div className="card-body">
                            <h5 className="card-title">Snake Plant</h5>
                            <p className='fs-6'>Price : $15</p>
                            <div className='mb-2'>
                                <button className='px-2 border'>-</button>
                                <span className='mx-2'>1</span>
                                <button className=' border'>+</button>
                            </div>
                            <p className='fs-6'><b>Total : $15</b></p>
                            <button className='btn btn-sm btn-danger'>Delete</button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="card mb-1" style={{ maxWidth: "540px", }}>
                <div className="row g-0">
                    <div className="col-5">
                        <img src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022108.jpg?ga=GA1.1.1767132769.1750844106&semt=ais_hybrid&w=740" className="img-fluid h-100 rounded-start" alt="..." />
                    </div>
                    <div className="col-7 px-5">
                        <div className="card-body">
                            <h5 className="card-title">Snake Plant</h5>
                            <p className='fs-6'>Price : $15</p>
                            <div className='mb-2'>
                                <button className='px-2 border'>-</button>
                                <span className='mx-2'>1</span>
                                <button className=' border'>+</button>
                            </div>
                            <p className='fs-6'><b>Total : $15</b></p>
                            <button className='btn btn-sm btn-danger'>Delete</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="d-grid">
                <button className='btn btn-success mb-2 mt-4'>Continue Shopping</button>
                <button className='btn btn-success mb-2 '>CheckOut</button>
            </div>
        </div>
        </>
    
    )
}

export default ShoppingCards