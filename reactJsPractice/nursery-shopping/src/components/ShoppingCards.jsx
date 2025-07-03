// import React from 'react'
// import Navbar from './Navbar'
// import { useDispatch, useSelector } from 'react-redux'
// import plants from "../jsonData/airPlants.json"
// import { cardDelete, cardTotal, cardTotalDecrement, decrementTotalCardAmount, totalCardAmount } from '../counterSlice'

// function ShoppingCards() {
//     const total = useSelector((state) => state.counter.total)
//     const indexCard = useSelector((state) => state.counter.index)
//     const totalCard = useSelector((state)=>state.counter.cardT)


//     const dispatch = useDispatch()
//     const deleteCard = (index,price)=>{
//         dispatch(cardDelete(index))
//         dispatch(decrementTotalCardAmount(price))
//     }

//     const incrementBtn = (price)=>{
//         dispatch(totalCardAmount(price))
//         dispatch(cardTotal(price))
//     }

//     const decrementBtn = (price)=>{
//         dispatch(decrementTotalCardAmount(price))
//         dispatch(cardTotalDecrement(price))
//     }

//     return (
//         <>
//             <Navbar />
//             <div className='container mt-3 d-flex align-items-center flex-column '>
//                 <h1 className='mb-4 '>Total Cards Amount : ${total}</h1>
//                 {
//                     indexCard.map((i) => {
//                         const plant = plants[i-1];
//                         return (
//                             <div className="card  mb-1" style={{ maxWidth: "540px", }} key={plant.id}>
//                                 <div className="row g-0">
//                                     <div className="col-5">
//                                         <img src={plant.image} className="img-fluid h-100 rounded-start" alt="..." />
//                                     </div>
//                                     <div className="col-7 px-5">
//                                         <div className="card-body">
//                                             <h5 className="card-title">{plant.name}</h5>
//                                             <p className='fs-6'>Price : ${plant.price}</p>
//                                             <div className='mb-2'>
//                                                 <button className='px-2 border' 
//                                                     onClick={()=>decrementBtn(plant.price)}
//                                                 >
//                                                     -

//                                                 </button>
//                                                 <span className='px-3' >1</span>
//                                                 <button className=' border'
//                                                     onClick={()=>incrementBtn(plant.price)}
//                                                 >
//                                                     +

//                                                 </button>
//                                             </div>
//                                             <p className='fs-6'><b>Total : ${totalCard === 0 ? plant.price : totalCard}</b></p>
//                                             <button className='btn btn-sm btn-danger'
//                                                 onClick={()=>deleteCard(plant.id,plant.price) }
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>

//                         )
//                     })
//                 }


//                 <div className="d-grid">
//                     <button className='btn btn-success mb-2 mt-4'>Continue Shopping</button>
//                     <button className='btn btn-success mb-2 '>CheckOut</button>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default ShoppingCards


import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import plants from "../jsonData/airPlants.json";
import {
    cardDelete,
    decrementQuantity,
    incrementQuantity
} from '../counterSlice';



function ShoppingCards() {
    const total = useSelector(state => state.counter.total);
    const indexCard = useSelector(state => state.counter.index);
    const quantities = useSelector(state => state.counter.quantities);

    const dispatch = useDispatch();

    const handleDelete = (id, price) => {
        dispatch(cardDelete({id, price}));
    };

    const handleIncrement = (id, price) => {
        dispatch(incrementQuantity({ id, price }));
    };

    const handleDecrement = (id, price) => {
        dispatch(decrementQuantity({ id, price }));
    };

    return (
        <>
            <Navbar />
            <div className='container mt-3 d-flex align-items-center flex-column'>
                <h1 className='mb-4'>Total Cards Amount: ${total}</h1>
                {indexCard.map((i) => {
                    const plant = plants[i - 1];
                    const quantity = quantities[i] || 1;
                    const itemTotal = plant.price * quantity;

                    return (
                        <div className="card mb-1" style={{ maxWidth: "540px" }} key={plant.id}>
                            <div className="row g-0">
                                <div className="col-5">
                                    <img src={plant.image} className="img-fluid h-100 rounded-start" alt="..." />
                                </div>
                                <div className="col-7 px-5">
                                    <div className="card-body">
                                        <h5 className="card-title">{plant.name}</h5>
                                        <p className='fs-6'>Price: ${plant.price}</p>
                                        <div className='mb-2'>
                                            <button className='px-2 border' onClick={() => handleDecrement(plant.id, plant.price)}>-</button>
                                            <span className='px-3'>{quantity}</span>
                                            <button className='border' onClick={() => handleIncrement(plant.id, plant.price)}>+</button>
                                        </div>
                                        <p className='fs-6'><b>Total: ${itemTotal}</b></p>
                                        <button className='btn btn-sm btn-danger' onClick={() => handleDelete(plant.id, plant.price)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="d-grid">
                    <button className='btn btn-success mb-2 mt-4'>Continue Shopping</button>
                    <button className='btn btn-success mb-2'>CheckOut</button>
                </div>
            </div>
        </>
    );
}

export default ShoppingCards;
