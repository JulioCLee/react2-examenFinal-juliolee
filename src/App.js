import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contexto from "./contexts/Contexto";
import Carrito from "./views/Carrito";
import Detalle from "./views/Detalle";
import Barra from "./components/Barra";
import Home from "./views/Home";
import "./style.css";

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzasPedidas,setPizzasPedidas] = useState([])
  const [totalPedido,setTotalPedido] = useState(0)

  const getPizzas = async () => {

    const res = await fetch(`http://localhost:3000/pizzas.json`);
    const data = await res.json();

    setPizzas(data)
  }


  useEffect(() => {
    getPizzas();
  }, [])


  return (
    <div>
      <Contexto.Provider value={{pizzas,pizzasPedidas,setPizzasPedidas,setTotalPedido,totalPedido}}>
        <BrowserRouter >
        <Barra></Barra>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/carrito" element={<Carrito></Carrito>}></Route>
            <Route path="/detalle/:id" element={<Detalle ></Detalle>}></Route>
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}

export default App;
