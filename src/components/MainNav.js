import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('/');
  const navigate = useNavigate();

  // useEffect(() => {
  //     if(value === 0) navigate("/");
  //     else if (value === 1) navigate("/trending");
  //     else if (value === 2) navigate("/search");
  //     else if (value === 3) navigate("/series");
  // }, [value,navigate]);

  

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <BottomNavigationAction
        onClick={() => {
          navigate("/");
        }}
        style={{color: "white"}}
        label="Home"
        icon={<MovieIcon />}
    />
    <BottomNavigationAction
        onClick={() => {
          navigate("/trending");
        }}
        style={{color: "white"}}
        label="Trending"
        icon={<WhatshotIcon />}
    />
    <BottomNavigationAction
        onClick={() => {
          navigate("/search");
        }}
        style={{color: "white"}}
        label="Search"
        icon={<SearchIcon />}
    />
    <BottomNavigationAction
        onClick={() => {
          navigate("/series");
        }}
        style={{color: "white"}}
        label="TV Series"
        icon={<TvIcon />}
    />
    
    </BottomNavigation>
  );
}
