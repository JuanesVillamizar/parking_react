import {Link} from 'react-router-dom';
const Menu = () => {
    return (
        <div className='row' style={{zIndex:1}}>
            <div className="col-12">
                <Link exact to='/' className="btn btn-outline-secondary mx-2">Inicio</Link>
                <Link to='/Entry' className="btn btn-outline-primary mx-2">Ingreso</Link>
                <Link to='/ConsultCar' className="btn btn-outline-info mx-2">Consultar placa</Link>
                <Link to='/AllCars' className="btn btn-outline-light mx-2">Consultar Todos los vehiculos</Link>
            </div>
        </div>
    );
}
export default Menu;