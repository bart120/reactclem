import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function CarsMenu() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                Menu cars:
                <div>
                    <Link to="/cars">Voitures</Link>
                    <Link to="/cars/add">Ajouter une voiture</Link>
                </div>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </>
    );
}