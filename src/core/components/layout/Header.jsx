import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header(props) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    function handleLogin(event) {
        navigate("/login");
    }

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
                            {t("header.home")}
                        </Link>
                    </Typography>

                    <Link to="/brands">Marques</Link>
                    <Link to="/cars">{t("header.cars")}</Link>
                    <Link to="/cars/add">{t("header.add")}</Link>
                    <Button onClick={handleLogin} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
