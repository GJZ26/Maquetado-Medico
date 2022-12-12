import '../assets/stylesheets/components-styles/Replies.css'
import Messenger from './Messages';

function Replies() {
    return (
        <div className="replies">
            <div className="reply-container">
                <h1 className="reply-title">Respuestas</h1>
                <div className="messages">
                    <Messenger content="Hola soy un mensaje como cliente" isOwn={true}/>
                    <Messenger content="Hola soy un mensaje como médico"/>
                </div>
            </div>
            <span className="declaimer">Todos los contenidos publicados, especialmente preguntas y respuestas, son de carácter informativo y en ningún caso deben considerarse un sustituto de un asesoramiento médico.</span>
        </div>
    );
}

export default Replies;