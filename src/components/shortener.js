import '../styles/shortener.scss'
import React, { Component } from 'react';

class Shortener extends Component {
    constructor(props) {
        super(props);
        this.state = {resultList: []};
      }

     showResultURL = (originalUrl, result) => {
            let tempUrl = this.state.resultList;
            tempUrl.push({"originalUrl": originalUrl,
            "shortUrl": result
        });
           this.setState({
            resultList: tempUrl
          });
    }

     callApi = (url) => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(res => res.json())
      .then(
        (result) => {
            console.log("made call")
            console.log("url", url)
        this.showResultURL(url, result.result.short_link)
        },
        (error) => {
         console.log("Error retrieving information")
        }
      )
    }

     onClickShortenLink = () => {
        let validUrl = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        let value = document.querySelector(".shortenerInput").value;
        if (value.match(validUrl)){
            this.callApi(value);
        } else{
            console.log("not valid")
        }
    }

    render() {
        return (
            <div>
                <div  className="shortenerContainer">
                    <input className="shortenerInput" placeholder="Shorten a link here..." />
                    <button onClick={()=>this.onClickShortenLink()}>Shorten it!</button>
                </div>
  
                <ul>
                {this.state.resultList.map((i, key) => (
                     <li key={key}>
                         <div><p>{i.originalUrl}</p><p>{i.shortUrl}</p></div>
                         <button onClick={() => {navigator.clipboard.writeText(i.shortUrl)}}>Copy</button>
                         
                     </li>
                ))}
                </ul>
            </div>  
            )
    }
}

  export default Shortener;
