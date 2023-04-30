import "./App.css";
import album1 from "./images/Faith No More - Angel Dust - 1992.jpg";
import album2 from "./images/Faith No More - King for a Day Fool for a Lifetime - 1995.jpg";
import album3 from "./images/Faith No More - The Real Thing - 1989.jpg";
import album4 from "./images/Living Colour - Times Up - 1988.jpg";
import album5 from "./images/Living Colour - Vivid - 1984.jpg";
import album6 from "./images/Tomahawk - Oddfellows - 2013.jpg";
import album7 from "./images/Tomahawk - Tomahawk - 2001.jpg";

function App() {
  const discos = [
    {
      id: 1,
      banda: "Faith No More",
      album: "Angel Dust",
      ano: 1992,
      imagem: album1,
    },
    {
      id: 2,
      banda: "Faith No More",
      album: "King For A Day... Fool For A Lifetime",
      ano: 1995,
      imagem: album2,
    },
    {
      id: 3,
      banda: "Faith No More",
      album: "The Real Thing",
      ano: 1995,
      imagem: album3,
    },
    {
      id: 4,
      banda: "Living Colour",
      album: "Times Up",
      ano: 1988,
      imagem: album4,
    },
    {
      id: 5,
      banda: "Living Colour",
      album: "Vivid",
      ano: 1984,
      imagem: album5,
    },
    {
      id: 6,
      banda: "Tomahawk",
      album: "Oddfellows",
      ano: 2013,
      imagem: album6,
    },
    {
      id: 7,
      banda: "Tomahawk",
      album: "Tomahawk",
      ano: 2001,
      imagem: album7,
    },
  ];

  return (
    <section className="App">
      {discos.map((disco) => 
      <div className="discos"
      key={disco.id}>
        <img src={disco.imagem} className="capa-disco"/>
        <p>{disco.banda}</p>
        <p>{disco.album}</p>
        <p>{disco.ano}</p>
      </div>
      )}
    </section>
  );
}

export default App;
