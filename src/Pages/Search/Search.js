import { Button, createTheme, TextField, ThemeProvider } from '@material-ui/core'
import React, { useEffect } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { useState } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';


function Search () {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([])

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      }
    }
  })

  const fetchSearch = async() => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6dabcff495f51dd56007af237e249fbd&query=${searchText}`
      );
      setContent(data.results);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect (() => {
    window.scroll(0,0);
    fetchSearch();
  })
  
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ dispaly: "flex", margin: "15px 0px" }}>
          <TextField
            style = {{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
          onClick={fetchSearch}
          variant="contained"
          style={{ marginLeft: 10 }}> <SearchIcon /> 
          </Button>
        </div>
      </ThemeProvider>
      <div className="trending">
        {content && content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
            />
        ))}
        {searchText && !content}
      </div>
    </div>
  )
}

export default Search