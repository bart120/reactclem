import { Button, Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";
import CarsService from "../../core/services/CarsService";

class CarsList extends Component {

    servCar = new CarsService();

    state = { cars: [] };

    loadData = async () => {
        const data = await this.servCar.getCars();
        this.setState({ cars: data });
    }

    componentDidMount() {
        this.loadData();
    }

    delete = async (id) => {
        const objDel = await this.servCar.deleteCarById(id);
        alert(`La voiture ${objDel.model} est supprimée.`);
        this.loadData();
    }

    render() {
        return (
            <>
                <h1>Liste des voitures</h1>
                {this.state.cars.length === 0 ?
                    (<Skeleton variant="circular" width={40} height={40} />) :
                    (
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Modèle</TableCell>
                                    <TableCell align="right">Prix</TableCell>
                                    <TableCell align="right">Mise en circulation</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.cars.map((car) => (
                                    <TableRow
                                        key={car.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {car.model}
                                        </TableCell>
                                        <TableCell align="right">{car.price}</TableCell>
                                        <TableCell align="right">{car.dateOfCirculation}</TableCell>
                                        <TableCell align="right">
                                            <Link to={`/cars/detail/${car.id}/${car.model}`}>detail</Link>
                                            <Button onClick={(ev) => this.delete(car.id)}>Suppr.</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>)
                }
            </>
        );
    }
}

export default CarsList;