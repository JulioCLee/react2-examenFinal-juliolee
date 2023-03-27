import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Contexto from '../contexts/Contexto';

const CardPizza = ({ pizza }) => {

    const {pizzasPedidas, setPizzasPedidas, totalPedido, setTotalPedido} = useContext(Contexto);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })
  
      var value = pizza.price

      const navigate = useNavigate();

      const verDetalle = () =>{
        navigate(`/detalle/${pizza.id}`);
      }

      const agregarPizza  = (pizza) => {
        const idx = pizzasPedidas.findIndex((p) => p.id === pizza.id);
        if (idx >= 0){
            pizzasPedidas[idx].cant += 1;
            setPizzasPedidas([...pizzasPedidas]);

        } else{
            const pizzaSeleccionada = {id:pizza.id, cant:1, img:pizza.img, precio:pizza.price, nombre:pizza.name};
            setPizzasPedidas([...pizzasPedidas,pizzaSeleccionada]);
        }

        setTotalPedido(totalPedido+pizza.price)
      }

    return (
        <Card style={{ width: '18rem', marginTop:'1em' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body> 
                <h2>{pizza.name}</h2>
                <hr></hr>
                <p><strong>Ingredientes:</strong></p>
                <ul>
                    {
                        pizza.ingredients.map((i) => <li className='listStyle' key={i}> 🍕 {i}</li>)
                    }
                </ul>
                <hr></hr>
                <p><span>Familiar:</span> {formatter.format(value)}</p>
                <div>
                    <Button className='me-2' variant="dark" onClick={() => verDetalle()}>Ver más</Button>
                    <Button variant="success" onClick={()=> agregarPizza(pizza)}>Añadir</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardPizza;