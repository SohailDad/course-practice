import React from 'react'
import AromaticPlants from './AromaticPlants'
import AirPlants from './AirPlants'

function Cards() {
    return (
        <div className='container mb-5'>
            <AirPlants/>
            {/* <AromaticPlants/> */}
        </div>
    )
}

export default Cards