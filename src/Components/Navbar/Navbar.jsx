import "./Navbar.css"
import searchicon from "../../Assets/bx_search.svg"
import cart from "../../Assets/cart.svg"

export default function Navbar(){
    return(
        <div>
            <header>
                <nav className="navbar">

                    <div className="left">
                        <span>Crafty</span>
                    </div>

                    <div className="right">
                        <ul>
                            <li>Home</li>
                            <li>Offer</li>
                            <li>About</li>
                            <li><img src={searchicon} alt="search" /></li>
                            <li><img src={cart} alt="cart" /></li>
                        </ul>
                    </div>

                </nav>
            </header>

        </div>
    )
}