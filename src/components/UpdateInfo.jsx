import '../assets/stylesheets/components-styles/UpdateInfo.css'

function UpdateInfo() {
    return (
        <div className="update-info">
            <h1 className="up-title">Actualizar Datos</h1>
            <form className="update-info">

                <label className='inp-up' htmlFor="email">Correo Electrónico</label>
                <input type="email" name="email" id="email" />

                <label className='inp-up' htmlFor="phone">Número telefónico</label>
                <input type="number" name="phone" id="phone" />

                <button className='reply' type="submit">Actualizar</button>
            </form>
        </div>
    );
}

export default UpdateInfo;