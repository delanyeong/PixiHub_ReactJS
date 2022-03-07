import { Button, createTheme, TextField, ThemeProvider } from '@material-ui/core'
import React, { useEffect } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { useState } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';


function Search () {
  const [content, setContent] = useState([])
  const [searchText, setSearchText] = useState("");
  const [searchFromButtonClick, setSearchFromButtonClick] = useState("")

  const handleClick = () => {
    setSearchFromButtonClick(searchText)
  }

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      }
    }
  })

  const fetchSearch = async() => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6dabcff495f51dd56007af237e249fbd&query=${searchFromButtonClick}`
      );
      setContent(data.results);
  };

  useEffect (() => {
    window.scroll(0,0);
    fetchSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchFromButtonClick])
  
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ dispaly: "flex", margin: "15px 0px" }}>
          <TextField
            value = {searchText}
            style = {{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
          onClick={handleClick}
          variant="contained"
          style={{ marginLeft: 10 }}> <SearchIcon /> 
          </Button>
        </div>
      </ThemeProvider>
      <div className="trending">
        {
          content && content.map((c) => <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type="movie"
          vote_average={c.vote_average}
          />
          )}
      </div>
    </div>
  )
}

export default Search