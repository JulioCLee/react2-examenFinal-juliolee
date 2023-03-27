import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Contexto from '../contexts/Contexto';

const Detalle = () => {

    const { id } = useParams();

    const { pizzas } = useContext(Contexto);


    const idxPizza = pizzas.findIndex((p) => p.id === id)
    const pizzaDetalle = pizzas[idxPizza]


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    var value = pizzaDetalle.price;
    
    return (
        <div>
            <div className='verDetalle'>
                <div className='imgDetalle'>
                    <img src={pizzaDetalle.img} alt="imagenPizza"  />
                </div>
                <div className='infDetalle'>
                    <p>{pizzaDetalle.name}</p>
                    <hr></hr>
                    <p>{pizzaDetalle.desc}</p>
                    <p><strong>Ingredientes:</strong></p>
                    <ul className='lista'>
                        {
                            pizzaDetalle.ingredients.map((i, e) => <li key={e}> 🍕 {i}</li>)
                        }
                    </ul>
                    <p><span>Familiar:</span> {formatter.format(value)}</p>
                    <div className='btn'>
                        <Button variant="danger">Añadir</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle