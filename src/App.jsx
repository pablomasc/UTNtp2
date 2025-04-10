import React from 'react'
import './App.css'
import ItmLista from './componentes/item'

function App() {

  return (
    <>
      <div className='contenedorListado'>
        <ItmLista
                  id="1"
                  nombre="Cinta Adhesiva Impermeable"
                  imagen="https://http2.mlstatic.com/D_NQ_NP_620235-MLA79673345149_092024-F.webp"
                  precioreal="1000"
                  porcentajeoferta="20"
                  cantidaddisponible="10"
        />

      </div>
    </>
  )
}

export default App
