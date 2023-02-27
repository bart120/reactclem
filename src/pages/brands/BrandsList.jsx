import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Component, useEffect, useState } from "react";

export default function BrandsList() {
    const [name, setNom] = useState("Bob");
    const [brands, setBrands] = useState([]);

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
        setBrands([{ name: 'renault', image: 'renault.jpg' }, { name: 'audi', image: 'audi.jpg' }]);
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
                                title="green iguana"
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
class BrandsList2 extends Component {
    state = { name: "Bob", brands: [] };


    test = () => {
        this.setState({ name: "Toto" });
    }

    componentDidMount() {
        //cht data
        this.setState({ brands: [{ name: 'renault' }, { name: 'audi' }] });
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
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="green iguana"
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