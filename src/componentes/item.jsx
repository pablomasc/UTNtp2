import React, { useState, useEffect } from 'react'
import './item.css'



const ItmLista = ({id, nombre, imagen, precioreal, porcentajeoferta, cantidaddisponible}) => {
  
    let preciofinal = 0

    const [estadocompra, setEstadocompra] = useState(false)
    const [botonEstado, setBotonEstado] = useState(false)
    const [botonTexto, setBotonTexto] = useState('Comprar')

    useEffect(() => {
        if(estadocompra === true){
            alert('Gracias por su compra!');    
            setBotonEstado(true)
            setBotonTexto('Comprado')
        }
        
    }, [estadocompra]);

    // Condicional oferta. Calcular si vinee con descuento o no y precio final
    function salidaOferta(precioreal, porcentajeoferta) {

        if (porcentajeoferta > 0) {
            
            preciofinal = precioreal - (precioreal * porcentajeoferta / 100); 

            return (
                <>
                <div className='contenedorOferta'>
                    <div className='contenedorPrecio'>$<span className='precioReal'>{precioreal}</span></div>
                    <div className='fondoOferta'><p>{porcentajeoferta}%</p></div>
                </div>
                <p className='precioFinal'>${preciofinal}</p>
                </>
            )
        } else {
            return (
                <>
                <p className='precioFinal'>${precioreal}</p>
                </>
            )
        }
    }


    return (
        <>
        <div className='contenedorProducto'>
            <img src={imagen} className='imagenProducto' alt='imagenProducto' />
            <h1>{nombre}</h1>
            {salidaOferta(precioreal, porcentajeoferta)}
            <button className='botonComprar' onClick={() => setEstadocompra(true)} disabled={botonEstado} >{botonTexto}</button>
        </div>
        </>
    )
}


export default ItmLista