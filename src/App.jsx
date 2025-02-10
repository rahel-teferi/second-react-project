import { useState, useEffect } from "react";
import { Profile } from "./mine/Profile.jsx";
import { Footer } from "./mine/Footer.jsx";
import "./App.css";
import { QuoteGenerator } from "./exercises/quoteGenerator/QuoteGenerator.jsx";
import { DigitalClock } from "./exercises/DigitalClock.jsx";
import { Carosel } from "./exercises/carosel/Carosel.jsx";
import { Route, Routes } from "react-router-dom";
import { ShoppingList } from "./exercises/shopping list/ShoppingList.jsx";
import { Header } from "./mine/header/Header.jsx";
import { SearchUser } from "./exercises/searchAUser/SearchUser.jsx";

function App() {
  let cardsInfo = [
    {
      title: "First Title",
      content: "First content",
    },
    {
      title: "Second Title",
      content: "Second content",
    },
    {
      title: "Third Title",
      content: "Third content",
    },
  ];
  const [quote, setQuote] = useState({});
  const baseURL = "https://qapi.vercel.app/api/random";

  const fetchQuote = async () => {
    try {
      let response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error("not found");
      }
      let data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  function takeInput(e) {
    setQuery(e.target.value);
  }

  const userURL = "https://api.github.com";

  const getUser = async () => {
    try {
      let response = await fetch(`${userURL}/search/users?q=${query}`);
      if (!response.ok) {
        throw new Error(`error is${error}`);
      }
      let userData = await response.json();
      let users = userData.items;
      setResult((result) => (result = users));
    } catch (error) {
      console.log(error);
    }
  };

  const WeatherURL = "";
const cities=["Berlin","Addis Abeba", "Los Angels", "Beijing"];



  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="digitalClock" element={<DigitalClock />} />
          <Route
            path="quoteGenerator"
            element={<QuoteGenerator data={quote} fetchNewQuote={fetchQuote} />}
          />
          <Route path="carosel" element={<Carosel data={cardsInfo} />} />
          <Route path="shoppingList" element={<ShoppingList />} />
          <Route
            path="searchUser"
            element={
              <SearchUser
                data={result}
                onChange={takeInput}
                onClick={getUser}
                value={query}
              />
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
