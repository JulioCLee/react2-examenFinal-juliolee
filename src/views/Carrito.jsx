import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Contexto from '../contexts/Contexto'
import { calculaTotalPedido } from '../utils/utils';

const Carrito = () => {

  const { pizzasPedidas, totalPedido, setPizzasPedidas, setTotalPedido } = useContext(Contexto);

  const disminuirCantidad = (id) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === id);
    if (idx >= 0) {
      pizzasPedidas[idx].cant -= 1;
      setPizzasPedidas([...pizzasPedidas]);
    }
    const totalPedidoActual = calculaTotalPedido(pizzasPedidas);
    setTotalPedido(totalPedidoActual);
  }

  const aumentarCantidad = (id) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === id);
    if (idx >= 0) {
      pizzasPedidas[idx].cant += 1;
      setPizzasPedidas([...pizzasPedidas]);
    }
    const totalPedidoActual = calculaTotalPedido(pizzasPedidas);
    setTotalPedido(totalPedidoActual);
  }


  return (
    <div className='boxCarrito'>
      <h2>Detalle del Pedido</h2>
      <div>
        {
          pizzasPedidas.map((pizza, i) => {
            return (
            <div key={i} className='detallePedido'>
              <div className='tittle'>
                <h4>Producto</h4>
                <div className='boxCaja'>
                  <img src={pizza.img} alt="img" />
                  <span>{pizza.nombre}</span>
                </div>
              </div>
              <div className='precioCantidad'>
                <div className='pe-5' >
                  <h4>Sub-total</h4>
                  <span> ${pizza.precio * pizza.cant}</span>
                </div>
              </div>
                <div>
                  <h4>Cantidad</h4>
                  <Button className='mx-2 px-3' variant="danger" onClick={() => disminuirCantidad(pizza.id)}>-</Button>
                  <span>{pizza.cant}</span>
                  <Button className='mx-2 px-3' onClick={() => aumentarCantidad(pizza.id)} >+</Button>
                </div>
            </div>)
          })
        }
        <strong className='totalP'>Total pedido: ${totalPedido}</strong>
      </div>
    </div>
  )
}

export default Carrito