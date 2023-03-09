import { useEffect, useState } from 'react';
import GlobalStyles from './globalStyles';
import Sample from "./components/Sample";
import axios from "axios";
import MainRoutes from './routes';

function App() {
  const [ token, setToken ] = useState(null);
  const [ artists, setArtists ] = useState([]);
  const [ searchKey, setSearchKey ] = useState("");

  useEffect(() => {
    let hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[ 1 ];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    });

    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map(artist => (
      <div key={ artist.id }>
        { artist.images.length ? <img width={ "100%" } src={ artist.images[ 0 ].url } alt="" /> : <div>No Image</div> }
        { artist.name }
      </div>
    ));
  };
  return (
    <div className="App">
      <GlobalStyles />
      <div className="testing">
        <h1>Spotify React</h1>
        { !token ?
          <a href={ `${import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_SPOTIFY_REDIRECT_URI}&response_type=${import.meta.env.VITE_SPOTIFY_AUTH_RESPONSE_TYPE}` }>Login
            to Spotify</a>
          : <button onClick={ handleLogout }>Logout</button> }

        { token ?
          <form onSubmit={ searchArtists }>
            <input type="text" onChange={ e => setSearchKey(e.target.value) } />
            <button type={ "submit" }>Search</button>
          </form>

          : <h2>Please login</h2>
        }

        { renderArtists() }

      </div>
      <MainRoutes />
    </div>
  );
}

export default App;
