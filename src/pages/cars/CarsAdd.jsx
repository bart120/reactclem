import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Component } from "react";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import BrandsService from "../../core/services/BrandsService";

class CarsAdd extends Component {
    styleTextField = { width: "300px", margin: "5px" };
    state = { car: {}, brands: [] };
    servBrands = new BrandsService();

    async componentDidMount() {
        const brands = await this.servBrands.getBrands();
        this.setState({ brands: brands });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.car);
    }

    changeTextField = (e) => {
        const car = this.state.car;
        car[e.target.name] = e.target.value;
        this.setState({ car });
    }

    onChangeDate = (name, value) => {
        const car = this.state.car;
        car[name] = value;
        this.setState({ car });
    }


    render() {
        return (
            <>
                <h1>Ajouter une voiture</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <TextField type="text" label="Modèle" variant="outlined" style={this.styleTextField}
                        onChange={this.changeTextField} name="model" />
                    <br />
                    <TextField type="number" label="Prix" variant="outlined" style={this.styleTextField}
                        onChange={this.changeTextField} name="price" />
                    <br />
                    <DesktopDatePicker
                        label="Mise en circulation" inputFormat="MM/DD/YYYY" name="dateOfCirculation"
                        value={this.state.car.dateOfCirculation}
                        onChange={(value) => this.onChangeDate("dateOfCirculation", value)}
                        renderInput={(params) => <TextField {...params} style={this.styleTextField} />}
                    />
                    <br />
                    <Select onChange={this.changeTextField} label="Modèle" defaultValue="" name="brandID" >
                        <MenuItem value="">none</MenuItem>
                        {this.state.brands.map(brand =>
                            (<MenuItem key={brand.id} value={brand.id}>{brand.name}</MenuItem>)
                        )}

                    </Select>
                    <br />
                    <Button variant="contained" color="primary" type="submit">Enregistrer</Button>
                </form>
            </>
        );
    }
}

export default CarsAdd;