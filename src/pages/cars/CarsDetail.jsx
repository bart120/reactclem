import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CarsService from "../../core/services/CarsService";

export default function CarsDetail() {
    const [car, setCar] = useState();
    const params = useParams();
    const id = params.id;

    /*useEffect(() => {
        servCar.getCarById(id).then(data => setCar(data));
    }, []);*/

    useEffect(() => {
        async function fetchData() {
            const servCar = new CarsService();
            const data = await servCar.getCarById(id)
            setCar(data);
        }
        fetchData();
    }, [id]);

    return (
        <>
            <h1>Voiture {car?.model}</h1>
            <p>Prix : {car?.price} €</p>
        </>
    );
}