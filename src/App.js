import "./App.css";
import Heart from "./components/Heart";
import MainPage from "./pages/mainPage";
import LiveContainer from "./components/LiveContainer";
import Score from "./components/Score";
import ScoreContainer from "./components/ScoreContainer";
import CountingContainer from "./components/CountingContainer";
import PokemonComponent from "./components/GetPokemonImage";
import PokemonCongtainer from "./components/PokemonContainer";
import TextContainer from "./components/TextContainer";
import NamePokemon from "./components/NamePokemon";

function App() {
  return (
    <>
      <MainPage>
        <CountingContainer>
          <LiveContainer>
            <Heart />
            <Heart />
            <Heart />
          </LiveContainer>
          <ScoreContainer>
            <Score>
              <p>score:</p>
            </Score>
          </ScoreContainer>
        </CountingContainer>
        <PokemonCongtainer>
          <PokemonComponent />
          <TextContainer>
            <NamePokemon />
          </TextContainer>
        </PokemonCongtainer>
      </MainPage>
    </>
  );
}

export default App;
