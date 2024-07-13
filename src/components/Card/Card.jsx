import React from "react";
import img1 from "./assets/001.png";
import img2 from "./assets/002.png";
import img3 from "./assets/003.png";
import img4 from "./assets/004.png";
import img5 from "./assets/005.png";
import img6 from "./assets/006.png";
import img7 from "./assets/007.png";
import img8 from "./assets/008.png";
import img9 from "./assets/009.png";
import img10 from "./assets/010.png";
import img11 from "./assets/011.png";
import img12 from "./assets/012.png";

function Card() {
  // return (
  //   <div className="container">
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img1} alt="img1" />
  //         </div>
  //       </div>
  //       <p className="index">#0001</p>
  //       <p className="name">Bulbasaur</p>
  //       <div className="element">
  //         <span className="grass">Grass</span>
  //         <span className="poison">Poison</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img2} alt="img2" />
  //         </div>
  //       </div>
  //       <p className="index">#0002</p>
  //       <p className="name">Ivysaur</p>
  //       <div className="element">
  //         <span className="grass">Grass</span>
  //         <span className="poison">Poison</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img3} alt="img3" />
  //         </div>
  //       </div>
  //       <p className="index">#0003</p>
  //       <p className="name">Venusaur</p>
  //       <div className="element">
  //         <span className="grass">Grass</span>
  //         <span className="poison">Poison</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img4} alt="img4" />
  //         </div>
  //       </div>
  //       <p className="index">#0004</p>
  //       <p className="name">Charmander</p>
  //       <div className="element">
  //         <span className="fire">Fire</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img5} alt="img5" />
  //         </div>
  //       </div>
  //       <p className="index">#0005</p>
  //       <p className="name">Charmeleon</p>
  //       <div className="element">
  //         <span className="fire">Fire</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img6} alt="img6" />
  //         </div>
  //       </div>
  //       <p className="index">#0006</p>
  //       <p className="name">Charizard</p>
  //       <div className="element">
  //         <span className="fire">Fire</span>
  //         <span className="flying">Flying</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img7} alt="img7" />
  //         </div>
  //       </div>
  //       <p className="index">#0007</p>
  //       <p className="name">Squirtle</p>
  //       <div className="element">
  //         <span className="water">Water</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img8} alt="img8" />
  //         </div>
  //       </div>
  //       <p className="index">#0008</p>
  //       <p className="name">Watortle</p>
  //       <div className="element">
  //         <span className="water">Water</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img9} alt="img9" />
  //         </div>
  //       </div>
  //       <p className="index">#0009</p>
  //       <p className="name">Blastoise</p>
  //       <div className="element">
  //         <span className="water">Water</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img10} alt="img10" />
  //         </div>
  //       </div>
  //       <p className="index">#0010</p>
  //       <p className="name">Caterpie</p>
  //       <div className="element">
  //         <span className="bug">Bug</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img11} alt="img11" />
  //         </div>
  //       </div>
  //       <p className="index">#0011</p>
  //       <p className="name">Metapod</p>
  //       <div className="element">
  //         <span className="bug">Bug</span>
  //       </div>
  //     </div>
  //     <div className="pokemon">
  //       <div className="backGroundImg">
  //         <div className="wrapperImg">
  //           <img src={img12} alt="img12" />
  //         </div>
  //       </div>
  //       <p className="index">#0012</p>
  //       <p className="name">Butterfree</p>
  //       <div className="element">
  //         <span className="bug">Bug</span>
  //         <span className="flying">Flying</span>
  //       </div>
  //     </div>
  //   </div>
  // );
  const pokemonData = [
    {
      img: img1,
      index: "#0001",
      name: "Bulbasaur",
      elements: ["Grass", "Poison"],
    },
    {
      img: img2,
      index: "#0002",
      name: "Ivysaur",
      elements: ["Grass", "Poison"],
    },
    {
      img: img3,
      index: "#0003",
      name: "Venusaur",
      elements: ["Grass", "Poison"],
    },
    { img: img4, index: "#0004", name: "Charmander", elements: ["Fire"] },
    { img: img5, index: "#0005", name: "Charmeleon", elements: ["Fire"] },
    {
      img: img6,
      index: "#0006",
      name: "Charizard",
      elements: ["Fire", "Flying"],
    },
    { img: img7, index: "#0007", name: "Squirtle", elements: ["Water"] },
    { img: img8, index: "#0008", name: "Watortle", elements: ["Water"] },
    { img: img9, index: "#0009", name: "Blastoise", elements: ["Water"] },
    { img: img10, index: "#0010", name: "Caterpie", elements: ["Bug"] },
    { img: img11, index: "#0011", name: "Metapod", elements: ["Bug"] },
    {
      img: img12,
      index: "#0012",
      name: "Butterfree",
      elements: ["Bug", "Flying"],
    },
  ];

  return (
    <div className="container">
      {pokemonData.map((data) => (
        <div className="pokemon">
          <div className="backGroundImg">
            <div className="wrapperImg">
              <img src={data.img} alt={data.name} />
            </div>
          </div>
          <p className="index">{data.index}</p>
          <p className="name">{data.name}</p>
          <div className="element">
            {data.elements.map((element) => (
              <span className={element}>{element}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
