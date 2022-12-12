import '../assets/stylesheets/components-styles/RecentQuestions.css'

function RecentQuestions() {
    return ( 
        <div className="recent-questions">
            <h1 className='recent-q-title'>Preguntas Recientes</h1>
            <div className="questions-pool">
                <div className="question">
                    <span className="question-content">
                        Hola, yo soy una pregunta de prueba para ver si todo funciona como deberia
                    </span>
                    <button className='reply'>Responder</button>
                </div>
                <div className="question">
                    <span className="question-content">
                        Hola, yo soy una pregunta de prueba para ver si todo funciona como deberia
                    </span>
                    <button className='reply'>Responder</button>
                </div>
            </div>
        </div>
     );
}

export default RecentQuestions;