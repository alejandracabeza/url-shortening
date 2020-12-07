import logo from '../assets/logo.svg'
import menuIcon from '../assets/icon-menu.svg'
import '../styles/menu.scss'


function Welcome(props) {

    const onClickMenu = () => {
        let menu = document.querySelector(".menu");

        if(menu.style.visibility === "visible"){
            menu.style.visibility = "hidden";
        } else {
            menu.style.visibility = "visible";
        }
    }


    return (
        <div>
            <img className="logo" src={logo} alt='logo' />
            <img className="menuIcon" onClick={() => onClickMenu()}src={menuIcon} alt='menu icon' />
            <nav className="menu">
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
            
                    <li>Login</li>
                    <li className="signupBtn">Sign up</li>
                    
                </ul>
            </nav>
        </div>
    )
  }

  export default Welcome;