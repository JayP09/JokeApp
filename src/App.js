import './App.css';
import React,{useState, useEffect} from 'react';
import Axios from 'axios';

const TWITTER_HANDLE = 'JayPTwts';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [jokeDetails, setJokeDetails] = useState({})
  const [hex, setHex] = useState("#ffffff");

  const randomColorGenerator = () => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setHex(randomColor)
  }

  const fetchJokeDetails = async () =>{
      const response = await Axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=single")
      console.log(response.data)
      setJokeDetails(response.data)
  }

  useEffect(()=>{
      fetchJokeDetails()
      randomColorGenerator()
  },[])

  return (
    <div className="main" style={{backgroundColor: `${hex}`,color: `${hex}`}}>
      <div className="cardcontainer">
        <div className="card">
          <h1>
              {jokeDetails.category} Joke
          </h1>
          <p>
              {jokeDetails.joke}
          </p>
          <button className="btn" onClick={() => {fetchJokeDetails();randomColorGenerator()}} style={{backgroundColor: `${hex}`}}>
              New Joke
          </button>
        </div>
        <div className="footer" style={{backgroundColor: `${hex}`}}>
          <p>
            <a
              className="footer-text"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`by Jay`}</a>
          </p>
        </div>
      </div>
    </div>
    )
}

export default App;
