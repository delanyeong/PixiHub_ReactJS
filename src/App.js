import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header"
import SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending'
import Watchlist from './Pages/Watchlist/Watchlist'
import Watched from './Pages/Watched/Watched'
import Search from './Pages/Search/Search'
import { GlobalProvider } from "./components/context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/search" element={<Search />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/watched" element={<Watched />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

//testing on mac2