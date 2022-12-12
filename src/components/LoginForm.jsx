import '../assets/stylesheets/components-styles/LoginForm.css'
import img from '../assets/Images/login-img.png'

function LoginForm() {
    return (
        <div className="login">
            <img src={img} alt="operation" className="login-img" />
            <form className="login-form">
                <h1 className="login-title">Inicio de Sesión</h1>

                <label htmlFor="email">Correo Electrónico</label>
                <input className='login-inp' type="email" name="email" id="email" />

                <label htmlFor="pwd">Contraseña</label>
                <input className='login-inp' type="password" name="pwd" id="pwd" />

                <button type="submit" className='login-btn'>Entrar</button>

            </form>
        </div>
    );
}

export default LoginForm;