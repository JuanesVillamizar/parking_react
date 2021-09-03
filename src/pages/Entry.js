import {CarsContext} from "../context/Cars";
import {useContext, useRef} from "react";
const Entry = () => {
    let {setListCars, getAllCars} = useContext(CarsContext);
    const mark = useRef(null), color = useRef(null), plate = useRef(null);

    const getDate = () => {
        let today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    const getHours = () => {
        let today = new Date();
        let minutes = today.getMinutes();
        return `${today.getHours()}:${minutes < 10 ? '0'+minutes : minutes }`;
    }

    const handleClick = () => {
        if(mark.current.value === '' || color.current.value === '' || plate.current.value === ''){
            alert('No deje campos vacios');
        }else{
            let entry = {
                mark: mark.current.value,
                color: color.current.value,
                dateEntry: getDate(),
                hoursEntry: getHours(),
                plate: plate.current.value,
                within: true
            }
            // console.log([...getAllCars(), entry]);
            let array = [...getAllCars(), entry];
            setListCars(array);
            mark.current.value = '';
            color.current.value = '';
            plate.current.value = '';
        }

    }

    return (
        <div className='row justify-content-center mx-5'>
            <div className='col-12 w-75'>
                <div className="row justify-content-center mx-5">
                    <div className="col-12 col-md-4">
                        <label htmlFor="marca" className="form-label">Marca</label>
                        <input type="text" className="form-control" ref={mark} id="marca" placeholder="Escriba aqui..."/>
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="placa" className="form-label">Placa</label>
                        <input type="text" className="form-control" ref={plate} id="placa" placeholder="Escriba aqui..."/>
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="color" className="form-label">Color</label>
                        <input type="text" className="form-control" ref={color} id="color" placeholder="Escriba aqui..."/>
                    </div>
                    <div className="col-12">
                        <input type="submit" className="btn btn-outline-success my-3" id="color" value='Ingresar' onClick={handleClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Entry;