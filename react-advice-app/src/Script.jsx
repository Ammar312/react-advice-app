import React, { useEffect, useState } from "react";
import axios from "axios";

const Script = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    getQuote();
  }, []);
  const getQuote = async () => {
    await axios
      .get("https://type.fit/api/quotes")
      .then(function (response) {
        // handle success
        const apiData = response.data;
        const ranNum = Math.floor(Math.random() * apiData.length);
        const ranQuote = response.data[ranNum].text;
        const ranQuoteAuthor = response.data[ranNum].author.split(",");
        setState({ quote: ranQuote, author: ranQuoteAuthor[0] });
        console.log(ranNum);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div className="main">
      <div className="box">
        <div className="quoteBox">
          <h1>{state.quote}</h1>
          <h3>{state.author}</h3>
        </div>

        <button className="btn" onClick={getQuote}>
          <span>QUOTE</span>
        </button>
      </div>
    </div>
  );
};

export default Script;
