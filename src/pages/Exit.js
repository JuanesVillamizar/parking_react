import {useContext, useState} from "react";
import {CarsContext} from "../context/Cars";
import {Link, useParams} from 'react-router-dom';

const Exit = () => {
    let {plate} = useParams()
    const {setListCars, getAllCars, getForPlate, allCars} = useContext(CarsContext);
    let [question, setQuestion] = useState(true);
    let data = getForPlate(plate);
    // console.log(data);

    const getValueForHours = () => {
        let today = new Date();
        let minutesToGoOut = today.getMinutes();
        let hoursToGoOut = today.getHours();
        let hoursEntry = parseInt(data[0].hoursEntry.split(':')[0]);
        let minutesEntry = parseInt(data[0].hoursEntry.split(':')[1]);

        let timeHours = ((hoursEntry - hoursToGoOut) * 60) + (minutesEntry - minutesToGoOut);
        timeHours = timeHours < 0 ? -1 * timeHours : timeHours;
        // console.log(timeHours * allCars.valueMinute);
        return timeHours * allCars.valueMinute;
    }

    const handleClick = () => {
        let array = [];
        let change = {};
        getAllCars().map(car => {
            if(car.plate !== plate){
                array.push(car);
            }else{
                change = {...car};
                change.within = false;
            }
            return null;
        });
        array.push(change);
        setListCars(array);
        setQuestion(false);
    }

    const itLeft = () => {
        return (
            <div className='row justify-content-center mx-5 my-2'>
                <div className='col-12 col-md-6'>
                    <div className="card">
                        <div className="card-body">
                            <div className="row py-5">
                                <div className="col-12 my-2">
                                    <span>Este carro ya salio</span>
                                </div>
                                <div className="col-12 my-2">
                                    <Link to='/' className='btn btn-outline-success'>Volver</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const toGoOut = () => {
        return (
            <div className='row justify-content-center mx-5 my-2'>
                <div className='col-12 col-md-6'>
                    <div className="card">
                        <div className="card-body">
                            <div className="row py-5">
                                <div className="col-12 my-2">
                                    <span>Este carro de placa {plate} debe pagar ${getValueForHours()}</span>
                                </div>
                                <div className="col-12 my-2">
                                    <button className='btn btn-outline-danger' onClick={handleClick}>Sale</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {question ? toGoOut() : itLeft()}
        </div>
    );
}
export default Exit;