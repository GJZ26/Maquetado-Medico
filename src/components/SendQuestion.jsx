import '../assets/stylesheets/components-styles/SendQuestion.css'

function SendQuestion() {
    return ( 
        <div className="send-question">
            <form className="question-form">
                <h1 className="forn-title">Tu pregunta</h1>
                <textarea className='question-input'/>
                <ul className="specifications">
                    <li>Tu pregunta se publicará de forma anónima</li>
                    <li>Intenta de tu consulta médica sea clara y breve</li>
                    <li>La pregunta irá dirigida a todos los especialistas de Doctoralia, no a uno en específico</li>
                    <li>Este servicio no sustituye a una consulta con un profesional de la salud. Si tienes un problema o una urgencia, acude a tu médico o a los servicios de urgencias</li>
                    <li>No se permiten preguntas sobre casos específicos o segundas opiniones</li>
                    <li>Por cuestiones de salud, no se publicarán cantidades ni dosis de medicamento</li>
                </ul>
                <button className='primary-btn' type="submit">Enviar</button>
            </form>
        </div>
     );
}

export default SendQuestion;