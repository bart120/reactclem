import axios from "axios";


const url = 'https://formation.inow.fr/demo/api/v1/brands';

class BrandsService {
    resolvePromise(resp) {
        if (resp.data == null) {
            return Promise.reject({ message: "Données introuvables" });
        }
        return Promise.resolve(resp.data);
    }

    rejectPromise(err) {
        //log
        return Promise.reject({ message: err });
    }

    getBrands() {
        /*axios.get(url).then(resp => {
            console.log(resp.data);
        });
        console.log('fin getBrands');*/
        return axios.get(url).then(this.resolvePromise).then(data => {
            return Promise.resolve(data.sort((a, b) => a.name.localeCompare(b.name)));
        }).catch(this.rejectPromise);
    }
}

export default BrandsService;