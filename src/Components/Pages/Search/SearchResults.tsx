import { useNavigate, useParams } from 'react-router-dom';
import { getGamesSearch } from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useEffect, useState } from 'react';

interface GameItem {
  id: string;
  name: string;
  background_image: string;
}

const SearchResults = () => {
  const { searchQuery } = useParams<{ searchQuery: string }>();
  const [searchResults, setSearchResults] = useState<GameItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGamesNames();
  }, [searchQuery]);

  useEffect(() => {
    const element = document.getElementById("details-container");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  }, [])

  const getGamesNames = () => {
    getGamesSearch({ search: searchQuery }).then((output) => {
      setSearchResults(output?.data?.results);
    });
  };

  return (
    <div className="game-name">
      <div  id='details-container' className="search-query">Showing results for "{searchQuery}"</div>

      <div className="content">
        {searchResults.map((game: GameItem) => (
          <div
            className="game-item"
            key={game?.name}
            onClick={() => navigate(`/details/${game.id}`)}
          >
            <img
              className="game-image"
              alt={"game results"}
              src={game?.background_image}
            ></img>
            <div className="game-name">{game?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
