import { Button, createTheme, TextField, ThemeProvider } from '@material-ui/core'
// import React, { useEffect } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';


const Search = () => {
  const [content, setContent] = useState([])
  const [searchText, setSearchText] = useState("");

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
      console.log(data.results);
    } catch (error) {
    console.error(error);
    }
  }

  // useEffect(() => {
  //   return () => {
  //     setContent([]);
  //     setSearchText("");
  //   };
  // },[]);

  
  
  
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
          onClick={fetchSearch}
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
  );
};

export default Search;