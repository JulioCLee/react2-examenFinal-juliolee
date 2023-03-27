import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import Contexto from '../contexts/Contexto'
import CardPizza from './CardPizza';

const Galeria = () => {

    const { pizzas } = useContext(Contexto);

  return (
        <Row className='cardPizza' >
            {
                pizzas.map((pizza) =>{
                    return <Col key={pizza.id}><CardPizza pizza={pizza}></CardPizza></Col>
                })
            }
        </Row>
  )
}

export default Galeria