import React from 'react'

function Table() {
    return (
        <div className='d-flex justify-content-center items-center container'>
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col" className=''>Status</th>
                        <th scope="col">Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>Mark</td>
                        <td>1</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae itaque dolorum quidem quo explicabo sapiente voluptas facilis inventore sint? Ab iste doloribus placeat facilis amet id, repellat enim dolorum nobis?</td>
                         <td>
                            <div className='d-flex justify-content-center '>
                                <button className='btn btn-danger mx-2'>Delete</button>
                                <button className='btn btn-primary'>Edit</button>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>0</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis odit vero, suscipit excepturi sunt ipsa laudantium dolorem, debitis eius aliquam officia quibusdam iste dignissimos quasi nemo. Quibusdam odio sit dolor.</td>
                        <td>
                            <div className='d-flex justify-content-center '>
                                <button className='btn btn-danger mx-2'>Delete</button>
                                <button className='btn btn-primary'>Edit</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>1</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis earum doloribus explicabo nam illo, harum nihil, ab assumenda facere quo? Quos molestiae vitae veniam fuga saepe, consequatur exercitationem eos.</td>
                        <td>
                            <div className='d-flex justify-content-center '>
                                <button className='btn btn-danger mx-2'>Delete</button>
                                <button className='btn btn-primary'>Edit</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table