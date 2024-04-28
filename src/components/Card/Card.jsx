export default function Card(props) {
    const pokemon = props.pokemon

    return (
        <div className="card">
        <div className="card-ls">
          <h1>{pokemon.name}</h1>
          <div className="tags poppins-light">
            <div className="tag">tipo</div>
            <div className="tag">tipo</div>
          </div>
        </div>
        <div className="card-rs">
          <img src={pokemon.image} />
        </div>
      </div>
    )
}