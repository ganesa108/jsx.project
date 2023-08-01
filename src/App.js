import CardJS from "./components/Card";
import data from "./product";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{display: "flex",
    justifyContent: "space-evenly",
    marginTop: 170}}>
      {/* cards using props */}
      {/* card one */}
      <CardJS
        name={data[0].name}
        description={data[0].description}
        price={data[0].price}
        image={data[0].image}
      ></CardJS>
      {/* card two */}
      <CardJS
        name={data[1].name}
        description={data[1].description}
        price={data[1].price}
        image={data[1].image}
      ></CardJS>
      {/* card three */}
      <CardJS
        name={data[2].name}
        description={data[2].description}
        price={data[2].price}
        image={data[2].image}
      ></CardJS>
      {/* card four */}
      <CardJS
        name={data[3].name}
        description={data[3].description}
        price={data[3].price}
        image={data[3].image}
      ></CardJS>
    </div>
  );
}

export default App;
