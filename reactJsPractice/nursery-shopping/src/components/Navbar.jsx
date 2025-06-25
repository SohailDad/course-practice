import { Link } from 'react-router-dom';
import cart from '../assets/cart-shopping-solid.svg';
import Cards from './Cards';

function Navbar() {
    return (
        
        <nav class="navbar bg-success navbar-expand-lg" data-bs-theme="dark" >
            <div className="container">
                <Link to={"/mainpage"} className="navbar-brand" href="#">
                    <img src="https://i.ibb.co/2t1x5bH/logo.png" alt="logo" width="60" height="50" className=" m-2 rounded" />
                    <span className='fw-bold'>Paradise Nursery</span>
                    {/* <span>Where Green Meets Serenity</span> */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <span className='me-auto'></span>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/mainpage"} className="nav-link active fs-3 " aria-current="page" href="#">Plants</Link>
                        </li>
                    </ul>

                    
                    <Link to={"/shoppingCards"} class="border-0 position-relative">
                        <img src={cart} alt="logo" className="d-inline-block align-text-top me-2" width="50" height="50" />
                        <span class="position-absolute top-50 start-50 translate-middle badge rounded-pill bg-light text-dark">
                            99+
                            {/* <span class="visually-hidden">unread messages</span> */}
                        </span>
                    </Link>
                    {/* <a className="" href="#">
                    </a> */}

                </div>
            </div>
        </nav>
    
    )
}

export default Navbar