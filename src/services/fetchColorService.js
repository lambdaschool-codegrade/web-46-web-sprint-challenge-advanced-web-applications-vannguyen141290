import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setColors) => {
    axiosWithAuth()
        .get('/colors')
        .then(res => {
            setColors(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export default fetchColorService;