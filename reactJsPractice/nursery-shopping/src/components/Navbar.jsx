import cart from '../assets/cart-shopping-solid.svg';

function Navbar() {
    return (
        <nav class="navbar bg-success navbar-expand-lg" data-bs-theme="dark" >
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://i.ibb.co/2t1x5bH/logo.png" alt="logo" width="60" height="50" className=" m-2 rounded" />
                    <span className='fw-bold'>Paradise Nursery</span>
                    {/* <span>Where Green Meets Serenity</span> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <span className='me-auto'></span>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active fs-3 " aria-current="page" href="#">Plants</a>
                        </li>
                    </ul>

                    
                    <a class="border-0 position-relative">
                        <img src={cart} alt="logo" className="d-inline-block align-text-top me-2" width="50" height="50" />
                        <span class="position-absolute top-50 start-50 translate-middle badge rounded-pill bg-light text-dark">
                            99+
                            {/* <span class="visually-hidden">unread messages</span> */}
                        </span>
                    </a>
                    {/* <a className="" href="#">
                    </a> */}

                </div>
            </div>
        </nav>
    )
}

export default Navbar