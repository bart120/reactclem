import axios from "axios";


const url = 'https://formation.inow.fr/demo/api/v1/cars';

class CarsService {
    async getCars() {
        const resp = await axios.get(url);
        return resp.data.sort((a, b) => a.model.localeCompare(b.model));
    }

    async getCarById(id) {
        return (await axios.get(`${url}/${id}`)).data;
    }

    async deleteCarById(id) {
        return (await axios.delete(`${url}/${id}`)).data;
    }

    async addCar(car) {
        car.price = +car.price;
        return (await axios.post(url, car)).data;
    }
}

export default CarsService;