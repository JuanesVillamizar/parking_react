import {useState, createContext} from 'react';

const CarsContext =  createContext([]);
const {Provider} = CarsContext;

let data =
    [
        {
            mark: 'Chevrolet',
            color: 'black',
            dateEntry: '2021-08-22',
            hoursEntry: '15:00',
            plate: 'ABC123',
            within: true
        },
        {
            mark: 'Renault',
            color: 'white',
            dateEntry: '2021-08-21',
            hoursEntry: '12:00',
            plate: 'ACM456',
            within: true
        },
        {
            mark: 'Nisan',
            color: 'green',
            dateEntry: '2021-08-22',
            hoursEntry: '11:00',
            plate: 'DPL789',
            within: false
        },
        {
            mark: 'Kia',
            color: 'blue',
            dateEntry: '2021-08-21',
            hoursEntry: '5:00',
            plate: 'PSN147',
            within: true
        },
        {
            mark: 'Chevrolet',
            color: 'red',
            dateEntry: '2021-08-22',
            hoursEntry: '10:00',
            plate: 'BOX369',
            within: false
        },
        {
            mark: 'Chevrolet',
            color: 'green',
            dateEntry: '2021-08-22',
            hoursEntry: '15:00',
            plate: 'ABC120',
            within: true
        },
        {
            mark: 'Renault',
            color: 'pink',
            dateEntry: '2021-08-21',
            hoursEntry: '12:00',
            plate: 'ACM496',
            within: true
        },
        {
            mark: 'Nisan',
            color: 'yellow',
            dateEntry: '2021-08-22',
            hoursEntry: '11:00',
            plate: 'DPL022',
            within: false
        },
        {
            mark: 'Kia',
            color: 'violet',
            dateEntry: '2021-08-21',
            hoursEntry: '5:00',
            plate: 'PSN654',
            within: true
        },
        {
            mark: 'Chevrolet',
            color: 'orange',
            dateEntry: '2021-08-22',
            hoursEntry: '10:00',
            plate: 'BOX879',
            within: true
        }
    ];

const CarsProvider = ({children}) => {
    const [allCars, setCars] = useState({
        numberCars: data.length,
        valueMinute: 100,
        totalCars: data
    });

    const getAllCars = () => {
        return allCars.totalCars;
    }

    const setListCars = (list) => {
        let data = {
            numberCars: list.length,
            valueMinute: 100,
            totalCars: list
        }
        setCars(data);
    }

    const getForPlate = (plate) => {
        return allCars.totalCars.filter(car => car.plate === plate);
    }

    return (
        <Provider value={{allCars, setCars, getAllCars,setListCars, getForPlate }}>
            {children}
        </Provider>
    );
}
export {CarsProvider, CarsContext};