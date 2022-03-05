import { Button, createTheme, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { useState } from 'react';

function Search () {
  const [type, setType] = useState(0);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      }
    }
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
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
          variant="contained"
          style={{ marginLeft: 10 }}> <SearchIcon /> 
          </Button>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Search