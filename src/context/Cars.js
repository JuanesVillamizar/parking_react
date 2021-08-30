import React from "react";
import {useState} from "react";

const CarsContext = React.createContext([]);
const {Provider} = CarsContext;

const CarsProvider = ({children}) => {
    const [allCars, setCars] = useState({
        numberCars: 5,
        valueHour: 1500,
        totalCars:
            [
                {
                    mark: 'Chevrolet',
                    color: 'black',
                    dateEntry: '2021-08-22',
                    hoursEntry: '15:00',
                    plate: 'ABC123'
                },{
                mark: 'Renault',
                color: 'white',
                dateEntry: '2021-08-21',
                hoursEntry: '12:00',
                plate: 'ACM456'
            },{
                mark: 'Nisan',
                color: 'green',
                dateEntry: '2021-08-22',
                hoursEntry: '11:00',
                plate: 'DPL789'
            },{
                mark: 'Kia',
                color: 'blue',
                dateEntry: '2021-08-21',
                hoursEntry: '5:00',
                plate: 'PSN147'
            },{
                mark: 'Chevrolet',
                color: 'red',
                dateEntry: '2021-08-22',
                hoursEntry: '10:00',
                plate: 'BOX369'
            }
            ],
    });

    return (
        <Provider value={{allCars, setCars}}>
            {children}
        </Provider>
    );
}
export {CarsProvider, CarsContext};