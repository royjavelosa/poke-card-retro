import './NewPokemonButton/NewPokemonButton.css';

function NewPokemonButton({onClick}) {
    return (
        <button style={StyleSheet.button} onClick={(onClick)}>
            Get New Pokemon
        </button>
    );
};

export default NewPokemonButton;