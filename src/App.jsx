import { useState, useEffect } from 'react';
import './styles/vhs.css';
import './styles/variable.css';

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const randomId = Math.floor(Math.random() * 898) + 1; // 898 is Gen 1-8 range
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await res.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, []);

  if (!pokemon) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;

  return (
    <div className="vhs-background">
      <div style={styles.card}>
      <h2 h2 style={styles.name}>{pokemon.name.toUpperCase()}</h2>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        style={styles.image}
      />
      <div style={styles.stats}>
        {pokemon.stats.map(stat => (
          <p key={stat.stat.name}>
            <strong>{stat.stat.name.toUpperCase()}</strong>: {stat.base_stat}
          </p>
        ))}
      </div>
    </div>
    </div>
  );
}

const styles = {
  card: {
    width: '320px',
    padding: '20px',
    margin: '50px auto',
    border: '3px solid #333',
    borderRadius: '15px',
    background: 'linear-gradient(white, #eee)',
    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#000',
  },
  name: {
    marginBottom: '15px',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
  },
  stats: {
    marginTop: '15px',
    textAlign: 'left',
  }
};

export default App;
