import React, { useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Contexto from '../contexts/Contexto'

const Barra = () => {
    const { totalPedido } = useContext(Contexto);
    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    var value = totalPedido;

    return (
        <div >
            <Navbar bg="success" expand="lg" variant="dark" className='py-3'>
                <Container> 
                    <NavLink className={setActiveClass} 
                        to="/" >🍕 Pizzería Mamma Mia!</NavLink>
                        <Nav>
                            <NavLink className={setActiveClass} 
                        to="/" >Home</NavLink>
                            <NavLink className={setActiveClass} 
                        to="/carrito" >🛒{formatter.format(value)}</NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Barra