
import Card from "../CardHome/CardHome";
import "./GridCardsHome.css";

const GridCards = () => {
  
  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
        <Card
              title={ `Edurado Bridigo`}
              value={ `Pinguim 1 ou 2 ou 3` }
              info={`sei lá algo ai lalalalala`}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
