import React, { useState } from "react";
import { search_endpoint } from "../common/endpoints";
import { filterBackdropNull } from "../common/helper";
import { Link } from "react-router-dom";

export default function Search(props) {
  const { isSearch, setIsSearch } = props;
  const [keywords, setKeywords] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const [items, setItems] = useState([]);

  const findMovie = async (query) => {
    try {
      const request = await fetch(search_endpoint(query));
      const response = await request.json();
      const filteredItems = await filterBackdropNull(response.results);
      setItems(filteredItems);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeywords = (e) => {
    const input = e.currentTarget.value;
    setKeywords(input);

    if (input !== "") {
      setSuggestion(true);
      findMovie(input);
    } else {
      setSuggestion(false);
    }
  };

  return (
    <div className="position-fixed search-container overflow-auto d-lg-none">
      <div className="d-flex justify-content-between align-items-center px-3 py-4">
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search movie"
          autoComplete="off"
          value={keywords}
          onChange={handleKeywords}
        />
        <span
          className="badge badge-purple ml-2"
          onClick={() => setIsSearch(!isSearch)}
        >
          <i className="bx bx-x h2 m-0 text-white"></i>
        </span>
      </div>
      {suggestion && (
        <div className="m-items p-3">
          {items.map((item) => (
            <Link to={`movie/${item.id}`} className="text-white">
              <div className="d-flex item p-1 mb-2 mb-md-3">
                <div className="m-backdrop">
                  <img
                    src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`}
                    alt={item.original_title}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="mx-2 m-title w-50">
                  <h6>{item.original_title}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
