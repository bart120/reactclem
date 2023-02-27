import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Component, useState } from "react";

export default function BrandsList() {
    const [name, setNom] = useState("Bob");
    const [brands, setBrands] = useState([]);

    function test() {
        //name = "Toto";
        setNom("Toto");
    }

    return (
        <div>
            <h1>Liste des marques par {name}</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
            {/*<Button onClick={test}>Test</Button>*/}
        </div>
    );
}

//version class
class BrandsList2 extends Component {
    state = { name: "Bob", brands: [] };


    test = () => {
        this.setState({ name: "Toto" });
    }

    render() {
        return (
            <div>
                <h1>Liste des marques par {this.state.name}</h1>
                <Button onClick={this.test}>Test</Button>
            </div>
        );
    }
}