
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import tubaraoteamo from './assets/SOS REC LOGO 2.png'
import praia from './assets/Boa_Viagem_(2)_-_Recife_-_Pernambuco,_Brasil (1).jpg'
import './styles.css'
import { useState } from 'react';
import about from './pages/about';
import app from './pages/app'


function App() {


  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (

    <Router>
    <ul>
      <li>
        <Link to="/about">Sobre nós</Link>
      </li>
    </ul>
    
    <ul>
      <li>
        <Link to="/app">Baixe nosso app</Link>
      </li>
    </ul>
   
   <Switch>

<Route path="/" element={<about />} >
<about />
</Route>

<Route path="/" element={<app />} >
<app />
</Route>

   </Switch>

    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
          
        
        <span className="login-form-title">
          <img src={tubaraoteamo} alt="Mergulhador"/>
          
          </span>

          <div className="wrap-input">
          <input 
          className={email !== "" ? 'has-val input' : 'input'} 
          type="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          
          />
          <span className="focus-input" data-placaholder="email"></span>
          </div>

          <div className="wrap-input">
          <input 
          className={senha !== "" ? 'has-val input' : 'input'}
          type="senha" 
          value={senha}
          onChange={e => setSenha(e.target.value)} 
          />
          
          <span className="focus-input" data-placaholder="senha"></span>
          </div>
        
          <div className="container-login-form=btn">
          <button className="login-form-btn">Login</button>
          </div>
          
          <div className="registrai">
            <span className="txt1">Não possui cadastro?</span>
            <a className="txt2" href="#"> Registre-se aqui.</a>
          </div>

          </form>
        </div>
      </div>
    </div>
    
    </Router>
  )
}



export default App;