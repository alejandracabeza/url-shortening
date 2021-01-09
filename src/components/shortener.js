import React, { useState } from 'react';
import '../styles/shortener.scss'

function Shortener(props) {
    const [url, setUrl] = useState([]);
    const [resultList, setResultList] = useState([]);

    const showResultURL = (result) => {
        console.log("ffh", result)
            let tempUrl = resultList;
            tempUrl.push(result);
            setResultList(tempUrl);
    }

    const callApi = (url) => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(res => res.json())
      .then(
        (result) => {
            console.log("made call")
        showResultURL(result.result.short_link)
        },
        (error) => {
         console.log("Error retrieving information")
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
              {resultList && resultList.map((i) => {
              return <li key={i}>{i}</li>
              })}
          </ul>
        </div>  
    )
  }

  export default Shortener;