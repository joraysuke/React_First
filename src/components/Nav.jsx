import {} from 'react'
import {Link} from 'react-router-dom'
import '../css/estilo.css'


function Nav(){

    return(

        <section className='nav'>
        <Link to ='home'className='tlink'>Home</Link>
        <Link to ='produto' className='tlink'>Produto</Link>

        </section>
    )
}

export default Nav