import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


function Header(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            Formation
                        </Link>
                    </Typography>

                    <Link to="/bob">Marques</Link>
                    <Link to="/cars">Voitures</Link>
                    <Link to="/cars/add">Ajouter une voiture</Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
