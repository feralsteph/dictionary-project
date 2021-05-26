import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] =
    useState("");
  let [results, setResults] =
    useState(null);
  let [photos, setPhotos] =
    useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(
    response
  ) {
    setPhotos(response.data.photos);
  }

  function handleSearch(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios
      .get(apiUrl)
      .then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001deb412250b8143b2a8e6b8311deb8a31";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {
      Authorization: `Bearer ${pexelsApiKey}`,
    };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
