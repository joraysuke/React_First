import {} from 'react'
import Imagem from '../assets/Imagem1.jpg'
import '../css/estilo.css'

function Home(){

    return(

        <>
        <h1>Está é a página HOME</h1>
        <img src={Imagem} alt="imagem" className='img'/>
        </>
    )
}

export default Home