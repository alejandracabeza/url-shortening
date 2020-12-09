import '../styles/main.scss'
import illustration from "../assets/illustration-working.svg"

function Main(props) {

    return (
        <div className="main">
            <img src={illustration} className="mainImg" alt="illustration of woman working" />
            <div className="mainText">
                <h2>More than just shorter links</h2>
                <p>Build you brand's recognition and get detailed insights on how your links are performing</p>
                <button>Get Started</button>
            </div>
        </div>
        
    )
  }

  export default Main;