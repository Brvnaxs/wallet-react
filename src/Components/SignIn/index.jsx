import { useState } from 'react';
import Modal from 'react-modal'
import logo2 from '../../assets/Group 16.png'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";
import './styles.css'

export default function SignIn() {
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    function GoToDashboard(){
        if(!email || !password){
            return(
                alert("Por favor informe seu email e senha para prosseguir.")
            )
        }else{
            navigate(`/dashboard/${email}`)
        }
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    // Função que abre a modal
    function abrirModal() {
        setIsOpen(true);
    }

    // Função que fecha a modal
    function fecharModal() {
        setIsOpen(false);
    }
    return (
        <div className='SigNIn'>
            <button className='open-modal' onClick={abrirModal}>SIGN IN</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                contentLabel="Modal de exemplo"
                className='modal'
                overlayClassName='modal-overlay'
             >
                <div className='modal-content'>
                <img className='logo2' src={logo2} alt="" />
                <input type="text" className='modal-input' placeholder='E-mail'  value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" className='modal-input' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
                <span className='redefine-senha'>Esqueceu a senha?</span>
                <button className='entrar' onClick={GoToDashboard}>ENTRAR</button>
                </div>
                {/* <button className='close-modal' onClick={fecharModal}><AiOutlineCloseCircle/></button> */}
            </Modal>
        </div>
    )
}