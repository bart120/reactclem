import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Component, useEffect, useState } from "react";
import BrandsService from "../../core/services/BrandsService";

export default function BrandsList() {
    const [name, setNom] = useState("Bob");
    const [brands, setBrands] = useState([]);
    const servBrand = new BrandsService();

    function test() {
        //name = "Toto";
        setNom("Toto");
    }

    // = componentdidupdate
    useEffect(() => {
        //console.log("componentdidupdate");
    });

    // = componentdidmount
    useEffect(() => {
        //console.log("componentdidmount")
        //setBrands([{ name: 'renault', image: 'renault.jpg' }, { name: 'audi', image: 'audi.jpg' }]);
        servBrand.getBrands().then(data => {
            setBrands(data);
        }).catch(err => {
            alert(err.message);
        });
        //console.log(brands);
    }, []);

    return (
        <div>
            <h1>Liste des marques par {name}</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {brands.map(brand => (
                    <Grid item xs={6} key={brand.name}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={`/images/${brand.image}`}
                                title={brand.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {brand.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button onClick={test}>Test</Button>
        </div>
    );
}

//version class
export class BrandsList2 extends Component {
    servBrand = new BrandsService();
    state = { name: "Bob", brands: [] };


    test = () => {
        this.setState({ name: "Toto" });
    }

    componentDidMount() {
        //cht data
        //this.setState({ brands: [{ name: 'renault', image: 'renault.jpg' }, { name: 'audi', image: 'audi.jpg' }] });
        this.servBrand.getBrands().then(resp => {
            this.setState({ brands: resp.data });
        });
    }

    render() {
        return (
            <div>
                <h1>Liste des marques par {this.state.name}</h1>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {this.state.brands.map(brand => (
                        <Grid item xs={6} key={brand.name}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`/images/${brand.image}`}
                                    title={brand.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {brand.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}