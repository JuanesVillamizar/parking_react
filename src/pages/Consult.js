import {CarsContext} from "../context/Cars";
import {useRef, useContext, useState} from "react";
import {Link} from 'react-router-dom';

const Consult = () => {
    let {getAllCars} = useContext(CarsContext);
    const data = getAllCars();
    let searchInput = useRef(null);
    let [url, setUrl] = useState('');
    let btn = useRef(null);
    let div = useRef(null);

    const handleClick = () => {
        let plate = searchInput.current.value;
        setUrl('/Exit/'+plate);
        // console.log(plate)
        if(plate !== ''){
            // console.log(div.current);
            let itWasFound, itWasNotFound;
            data.map( (car) => {
                if(car.within){
                    if(car.plate === plate) {
                        // console.log('si');
                        itWasFound = car;
                    } else {
                        // console.log('no');
                        itWasNotFound = 'Esta placa no se encuentra en el parqueadero';
                    }
                }
                return null;
            });
            // console.log(itWasFound, itWasNotFound);
            if(itWasFound !== undefined){
                div.current.innerHTML = `
                    <div className='col-12 col-md-6 my-2'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Placa ${itWasFound.plate}</h5>
                                <p className="card-text">Carro marca ${itWasFound.mark}</p>
                                <p className="card-text">Color ${itWasFound.color}</p>
                                <p className="card-text">Ingreso en la fecha ${itWasFound.dateEntry} a las ${itWasFound.hoursEntry}</p>
                            </div>
                        </div>
                    </div>
                `;
                btn.current.classList.remove('d-none');
            }else{
                div.current.innerHTML = itWasNotFound;
                setTimeout(() => {
                    empty();
                },2000);
            }
        }
    }

    const handleChange = (element) => {
        // console.log(element.target.value);
        if(element.target.value === ''){
            empty();
        }
    }

    const empty = () => {
        div.current.innerHTML = '';
        btn.current.classList.add('d-none');
    }

    // console.log(data);
    return (
        <div className='row justify-content-center mx-3'>
            <div className="input-group w-50">
                <input type="text" className="form-control" placeholder="Escriba placa" ref={searchInput} onChange={handleChange}/>
                <span className="input-group-text" id="basic-addon2" style={{cursor:"pointer"}} onClick={handleClick}>Buscar placa</span>
            </div>
            <div className="col-12 p-3">
                <div className="row justify-content-center" ref={div}>

                </div>
                <div className="row justify-content-center">
                    <Link to={url} ref={btn} className='btn btn-outline-danger w-50 d-none'>Sale?</Link>
                </div>
            </div>
        </div>
    );
}
export default Consult;