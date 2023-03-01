import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authenticationActions";


function Header(props) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const isConnected = useSelector((state) => state.isConnected);
    const user = useSelector((state) => state.user);

    const actions = useDispatch();

    function handleLogin(event) {
        navigate("/login");
    }

    function handleLogout() {
        //actions({ type: 'AUTH_LOGOUT'});
        actions(logout());
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
                    {isConnected ?
                        (<>
                            <p>Bonjour {user?.login}</p>
                            <Button onClick={handleLogout} color="inherit">Logout</Button>
                        </>) :
                        (<Button onClick={handleLogin} color="inherit">Login</Button>)}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
