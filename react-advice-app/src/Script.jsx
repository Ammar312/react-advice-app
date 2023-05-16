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
        const ranQuoteAuthor = response.data[ranNum].author;
        setState({ quote: ranQuote, author: ranQuoteAuthor });
        console.log(ranNum);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <>
      <h1>{state.quote}</h1>
      <h3>{state.author}</h3>
      <button onClick={getQuote}>Button</button>
    </>
  );
};

export default Script;
