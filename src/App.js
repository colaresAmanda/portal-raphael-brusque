import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { UserProvider } from './contexts/UserContext'
// components
import Header from './components/layout/Header/Header.jsx';
import Message from './components/layout/Message/Message.jsx';

// pages
import Login from './components/Auth/Login/Login.jsx'
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword.jsx';
import Dashboard from './components/Pages/Dashboard';
import CadastroFuncionario from './components/Pages/Funcionario/Cadastro.jsx';
import Configuracoes from './components/Pages/Configuracoes/Index.jsx';



function App() {
  return (
    <>
      <Router>

        <UserProvider>
          <Header />

          <main className="main">
            <Message />
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="login/esqueceu-senha" element={<ForgotPassword />} />


              <Route path="/" element={<Dashboard />} />
              <Route path="Funcionarios/Cadastrar" element={<CadastroFuncionario />} />
              <Route path="Configuracoes" element={<Configuracoes />} />
            </Routes>
          </main>
        </UserProvider>

      </Router>
    </>
  );
}

export default App;
