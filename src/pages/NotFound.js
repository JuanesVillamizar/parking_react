import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='row justify-content-center'>
            <h3>Pagina no encontrada, por favor vuelva al inicio</h3>
            <Link to='/' className='btn btn-info w-50'>Inicio</Link>
        </div>
    );
}

export default NotFound;