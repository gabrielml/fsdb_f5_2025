import { useState } from "react";
import "./App.css";
import Botoncito from "./components/Botoncito/Botoncito.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
  // State to manage the theme of the cards
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const user1 = {
    name: "Hedy Lamarr",
    title: "Actress & Inventor",
    about:
      "Hedy Lamarr was an Austrian-born American actress and inventor. After a brief early film career in Czechoslovakia, including the controversial erotic romantic drama Ecstasy, she fled from her first husband, Friedrich Mandl, and secretly moved to Paris.",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 125,
  };

  const user2 = {
    name: "Maria Sklodowska-Curie",
    title: "Physicist & Chemist",
    about:
      "Marie Skłodowska Curie was a Polish and naturalized French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
    imageSize: 125,
  };

  const user3 = {
    name: "Ada Lovelace",
    title: "Mathematician & Writer",
    about:
      "Augusta Ada King, Countess of Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    imageSize: 125,
  };

  return (
    /* Main container for the app content*/
    <div className="app-container">
      <h1 className="app-title">Hello World!</h1>

      {/* Group Botoncitos for smaller spacing between them */}
      <div className="button-group">
        <Botoncito number="1" />
        <Botoncito number="2" />
        <Botoncito number="3" />
        <Botoncito number="4" />
      </div>

      {/* Button to toggle dark mode */}
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Toggle Card Theme to {!isDarkMode ? "Dark" : "Light"}
      </button>

      {/* TODO: Use an advance approach to store the user data in an array and use the map() function to render the Card components dynamically! */}
      {/* Cards container for responsiveness and consistent spacing between cards */}
      <div className="cards-container">
        <Card
          name={user1.name}
          title={user1.title}
          about={user1.about}
          imageUrl={user1.imageUrl}
          imageSize={user1.imageSize}
          isDarkMode={isDarkMode} /* Pass the isDarkMode prop */
        />
        <Card
          name={user2.name}
          title={user2.title}
          about={user2.about}
          imageUrl={user2.imageUrl}
          imageSize={user2.imageSize}
          isDarkMode={isDarkMode} /* Pass the isDarkMode prop */
        />
        <Card
          name={user3.name}
          title={user3.title}
          about={user3.about}
          imageUrl={user3.imageUrl}
          imageSize={user3.imageSize}
          isDarkMode={isDarkMode} /* Pass the isDarkMode prop */
        />
      </div>
    </div>
  );
}

export default App;
