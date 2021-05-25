import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(
    ""
  );
  let [results, setResults] = useState(
    null
  );

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleSearch(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>
          What word do you want to look
          up?
        </h1>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            onChange={handleKeyword}
          />
        </form>
        <div className="hint">
          suggested words: cat, sunset,
          wine, plants...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
