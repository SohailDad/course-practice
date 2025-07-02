import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import plants from "../jsonData/airPlants.json"
import { cardDelete, decrementTotalCardAmount } from '../counterSlice'

function ShoppingCards() {
    const total = useSelector((state) => state.counter.total)
    const indexCard = useSelector((state) => state.counter.index)
    const dispatch = useDispatch()
    const deleteCard = (index)=>{
        dispatch(cardDelete(index))
        dispatch(decrementTotalCardAmount())
    }
    return (
        <>
            <Navbar />
            <div className='container mt-3 d-flex align-items-center flex-column '>
                <h1 className='mb-4 '>Total Cards Amount : ${total}</h1>
                {
                    indexCard.map((i) => {
                        const plant = plants[i-1];
                        return (
                            <div className="card  mb-1" style={{ maxWidth: "540px", }} key={plant.id}>
                                <div className="row g-0">
                                    <div className="col-5">
                                        <img src={plant.image} className="img-fluid h-100 rounded-start" alt="..." />
                                    </div>
                                    <div className="col-7 px-5">
                                        <div className="card-body">
                                            <h5 className="card-title">{plant.name}</h5>
                                            <p className='fs-6'>Price : ${plant.price}</p>
                                            <div className='mb-2'>
                                                <button className='px-2 border'>-</button>
                                                <span className='px-3'>1</span>
                                                <button className=' border'>+</button>
                                            </div>
                                            <p className='fs-6'><b>Total : $15</b></p>
                                            <button className='btn btn-sm btn-danger'
                                                onClick={()=>deleteCard(plant.id) }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )
                    })
                }


                <div className="d-grid">
                    <button className='btn btn-success mb-2 mt-4'>Continue Shopping</button>
                    <button className='btn btn-success mb-2 '>CheckOut</button>
                </div>
            </div>
        </>

    )
}

export default ShoppingCards