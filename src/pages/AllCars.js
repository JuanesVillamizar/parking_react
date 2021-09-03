import {useContext} from "react";
import {CarsContext} from "../context/Cars";
import Car from "../components/Car";
const AllCars = () => {
    const {getAllCars} = useContext(CarsContext);
    const data = getAllCars();
    // console.log(data);
    return (
        <div className='row mx-2'>
            {data.length > 0 && data.map( (car, index) => car.within && <Car car={car} key={index} />)}
        </div>
    );

}
export default AllCars;