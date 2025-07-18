import { Link } from "react-router-dom"


function WelcomePage() {
    return (
        <>

            <div className="back-image"></div>
            <div className="container-fluid text-center position-absolute top-50 start-50 translate-middle">

                <div className="row ">
                    <div className="col-md-4 mt-md-0 mt-5 align-items-center justify-content-center d-flex flex-column ">
                        <h1 className="text-white ">
                            Welcome To <br />
                            Paradise Nursery
                        </h1>
                        {/* <hr className="welcome-hr "/> */}
                        <p className="fs-5 text-white">
                            Where Green Meets Serenity
                        </p>
                        <button className="btn btn-success btn-lg">
                            <Link to={"/mainpage"} className="text-decoration-none text-white">
                            Get Started
                            </Link>
                        </button>
                    </div>
                    <div className="col-md-8 text-white text-start p-5 mt-5">

                        <p className="fs-md-1 "> Welcome to Paradise Nursery, where green meets serenity!</p>
                        <p className="fs-md-5 ">At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.</p>
                        <p className="fs-md-5 ">Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.</p>
                        <p className="fs-md-5 ">Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default WelcomePage