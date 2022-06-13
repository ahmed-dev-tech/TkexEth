<<<<<<< HEAD
import { ethers } from "ethers";
import { useState } from "react";
import logo from "../../assets/logo.png";


function Header() {
const [btnname,setbtnname] = useState("Connect Wallet")
    let web3;
    async function detectWallet() {
        if (window.ethereum) {
            console.log("Metamask exists")
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })    

                setbtnname(accounts[0].slice(0,5)+"...."+accounts[0].slice(35,-1))           
            } catch (error){
           alert("Error!")
            }   
        }      
        else {
            alert("No metamask")
        }
    }
    
    async function connectWallet(){
        if(typeof window.ethereum !== 'undefined'){
            await detectWallet();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
    }

=======
import logo from "../../assets/logo.png";

function Header() {
>>>>>>> main
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
<<<<<<< HEAD

                </ul>
                <button onClick={connectWallet}> {btnname} </button>

=======
                </ul>
>>>>>>> main
            </nav>
        </>
    )
}

export default Header;