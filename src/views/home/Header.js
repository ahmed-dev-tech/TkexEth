import logo from "../../assets/logo.png";

function Header() {
    return (
        <>
            <nav class="navbar">
                <img style={{zIndex: "1"}} src={logo} className="w-16" alt="a"/>
                <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Networks</a></li>
                    <li class="services">
                    <a href="/">Governence</a>
                    {/* <ul class="dropdown">
                        <li><a href="/">Dropdown 1 </a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 3</a></li>
                        <li><a href="/">Dropdown 4</a></li>
                    </ul> */}
                    </li>
                    <li><a href="/">Developers</a></li>
                    <li><a href="/">Community</a></li>
                    <li><a href="/">About</a></li>
                </div>
                </ul>
            </nav>
        </>
    )
}

export default Header;