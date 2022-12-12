import '../assets/stylesheets/components-styles/ContactMe.css'
import img from '../assets/Images/Doctor-Experience.png'

function ContactMe() {
    return ( 
        <div className="contact-me">
            <div className="contact-info">
                <h1 className="contact-title">Contáctame</h1>

                <h2 className="info-title">Número Telefónico</h2>
                <span className="contact-content">000-000-0000</span>

                <h2 className="info-title">Correo Electrónico</h2>
                <span className="contact-content">also@hotmail.com</span>

            </div>
            <img src={img} alt="The same doctor pointer to something" className="contact-img" />
        </div>
     );
}

export default ContactMe;