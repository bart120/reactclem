import { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import BrandsList from "../../../pages/brands/BrandsList";
import CarsAdd from "../../../pages/cars/CarsAdd";
import CarsDetail from "../../../pages/cars/CarsDetail";
import CarsList from "../../../pages/cars/CarsList";
import CarsMenu from "../../../pages/cars/CarsMenu";
import Home from "../../../pages/home/Home";
import NotFound from "../../../pages/home/NotFound";

class MainRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brands" caseSensitive element={<BrandsList />} />
                <Route path="/cars" element={<CarsMenu />}>
                    <Route path="add" element={<CarsAdd />} />
                    <Route path="detail" element={<CarsDetail />} />
                    <Route index element={<CarsList />} />
                </Route>
                <Route path="404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="404" />} />
            </Routes>
        );
    }
}

export default MainRoutes;