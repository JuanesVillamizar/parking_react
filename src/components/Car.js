import {Link} from "react-router-dom";

const Car = ({car}) => {
    let {mark, color, dateEntry, hoursEntry, plate} = car;
    let to = `/Exit/${plate}`;
    return (
        <div className='col-12 col-md-6 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Placa {plate}</h5>
                    <p className="card-text">Carro marca {mark}</p>
                    <p className="card-text">Color {color}</p>
                    <p className="card-text">Ingreso en la fecha {dateEntry} a las {hoursEntry}</p>
                    <Link to={to} className="btn btn-outline-success mx-2">Salida</Link>
                </div>
            </div>
        </div>
    );
}
export default Car;