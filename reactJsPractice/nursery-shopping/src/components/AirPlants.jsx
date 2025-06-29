import { useState } from "react";
import airPlants from "../jsonData/airPlants.json";
import { useDispatch } from 'react-redux'
import { increment, totalCardAmount } from '../counterSlice'

function AirPlants() {

    
    const dispatch = useDispatch()
    
    const [disabledButtons, setDisabledButtons] = useState([]);
   

    const addCardBtn = (index) => {
        setDisabledButtons((prev) => [...prev, index]);
        dispatch(increment())
        dispatch(totalCardAmount(Number(airPlants[index].price)))
        dispatch(cardIndex(index))
    };

    return (
        <div>
            
            <h1 className='text-center mt-3'>Air Purifying Plants</h1>
            <div className='mt-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {airPlants.map((plants) => (
                        <div className="col" key={plants.id}>
                            <div className="card text-center">
                                <img
                                    src={plants.image}
                                    className="card-img-top"
                                    width="200"
                                    height="250"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <div className='d-flex'>
                                        <h5 className="me-auto">{plants.name}</h5>
                                        <h5>Price: {plants.price}</h5>
                                    </div>
                                    <p className="card-text">{plants.description}</p>
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-success"
                                            type="button"
                                            disabled={disabledButtons.includes(plants.id)}
                                            onClick={() => addCardBtn(plants.id)}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AirPlants;
