import React, { useState } from 'react';
import '../styles/shortener.scss'

function Shortener(props) {
    const [url, setUrl] = useState([]);

    const showResultURL = (result) => {
            let tempUrl = url;
            tempUrl.push(result);
            setUrl(tempUrl)
    }

    const callApi = (url) => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(res => res.json())
      .then(
        (result) => {
        showResultURL(result.result.short_link)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    const onChangeUrl = () => {
        let validUrl = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        let value = document.querySelector(".shortenerInput").value;
        if (value.match(validUrl)){
            callApi(value);
        } else{
            console.log("not valid")
        }
    }

    return (
        <div className="shortenerContainer">
          <input className="shortenerInput" onChange={() => onChangeUrl()} />
          <ul>
              {url.map((i) => {
                  console.log(i)
              return <li key={i}>{i}</li>
              })}
          </ul>
        </div>  
    )
  }

  export default Shortener;