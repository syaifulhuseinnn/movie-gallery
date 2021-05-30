import React, { useState } from "react";
import { search_endpoint } from "../common/endpoints";
import { filterBackdropNull } from "../common/helper";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const { isScroll, isSearch, setIsSearch } = props;
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
    <nav className="text-right text-white p-3 d-lg-flex justify-content-lg-between px-lg-5 align-items-lg-center">
      <Link to="/" className="text-white">
        <div className="text-left d-none d-lg-block">
          <h6 className="font-weight-bold">Movie</h6>
          <h6 className="font-weight-light">Gallery</h6>
        </div>
      </Link>
      <span
        className={`badge ${isScroll ? "badge-purple" : ""} p-2 mx-1 d-lg-none`}
        id="search"
        onClick={() => setIsSearch(!isSearch)}
      >
        <i
          className={`bx bx-search h5 m-0 ${isScroll ? "" : "text-shadow"}`}
        ></i>
      </span>
      <div className="d-none d-lg-block search-box">
        <form className="d-lg-flex">
          <div className="autocomplete">
            <input
              type="text"
              className="form-control form-control-sm border-0"
              placeholder="Search movie"
              value={keywords}
              onChange={handleKeywords}
            />
            {suggestion && (
              <div className="autocomplete-items">
                <ul>
                  {items &&
                    items.slice(0, 5).map((item) => (
                      <Link to={`movie/${item.id}`} className="text-white">
                        <li className="my-2">
                          <div className="p-1 d-lg-flex">
                            <div className="backdrop">
                              <img
                                src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                                alt={item.title}
                                className="img-fluid"
                              />
                            </div>
                            <div className="mx-2 description w-50">
                              <h6>{item.original_title}</h6>
                            </div>
                          </div>
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    </nav>
  );
}
