import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produto from './routes/Produto.jsx'

{/* Criando a função createbrowserrouter*/}
const router = createBrowserRouter([
  {
    /*chamando o elemento pai*/
    
    path:'/', element: <App/>,
    errorElement: <Error/>,
    /*chamando os elementos filhos */

    children:[
      {path: '/home' , element:<Home/>},
      {path: '/produto', element:<Produto/>}
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
