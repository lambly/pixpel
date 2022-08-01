import React from "react";
import {Button, Menu} from "../index";
import Modal from "react-modal";
const Header = (props) => {
    let styles = {
        marginBottom: '60px'
    }
    if (props.styles) Object.assign(styles, props.styles)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: '#1F2630',
            padding: '30px 60px 60px 60px',
            borderRadius: '10px'
        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpenLogin, setIsOpenLogin] = React.useState(false);
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    function openModal() {
        setIsOpen(true);

    }
    function closeModal() {
        setIsOpen(false);
    }
    function openModalLogin() {
        setIsOpenLogin(true);
        closeModal()

    }
    function closeModalLogin() {
        setIsOpenLogin(false);
    }
    return ( <>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >

           <div className="modal">
               <button onClick={closeModal}  className="modal__close">
                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1" stroke="#717A8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
               </button>
               <div className="modal__row">
                   <div onClick={ () =>openModalLogin()} className="modal__box">
                       <img src="assets/images/Player.jpg" className="modal__img" alt=""/>
                       <div className="modal__name">
                           PLAYER
                       </div>
                   </div>
                   <div className="modal__box">
                       <img src="assets/images/Developer.jpg" className="modal__img" alt=""/>
                       <div className="modal__name">
                           DEVELOPER
                       </div>
                   </div>
               </div>
           </div>
        </Modal>

            <Modal
                isOpen={modalIsOpenLogin}
                onRequestClose={closeModalLogin}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="modal-login">
                    <button onClick={closeModalLogin}  className="modal__close">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1" stroke="#717A8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div className="modal-login__title">
                        Login
                    </div>
                    <form action="">
                        <div className="modal-login__field">
                            <label htmlFor="">Mail</label>
                            <input type="text" className="modal-login__input"/>
                        </div>
                        <div className="modal-login__field">
                            <label htmlFor="">Password</label>
                            <input type="password" className="modal-login__input" />
                        </div>
                        <button className="btn modal-login__btn">
                            Login
                        </button>
                        <button>Dont have account?</button>
                    </form>
                </div>
            </Modal>
        <header  onClick={openModal} className="header" style={styles}>
            <div className="container-fluid">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src="assets/images/logo.svg" className="logo" alt=""/>
                    </div>
                    <Menu />
                    <div className="header__group">
                        <Button onClick={openModal}>Log in</Button>
                        <Button classes="btn--brand" onClick={openModal}>Register</Button>
                    </div>
                </div>
            </div>
        </header>
        </>

    )
}

export default Header