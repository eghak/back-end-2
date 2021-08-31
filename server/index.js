const express = require(`express`);
const cors = require(`cors`);
const ctrl = require(`./controller/ctrl`)

const app = express();

app.use(express.json());
app.use(cors());

app.get(`/api/houses`, ctrl.getHouses)
app.delete(`/api/houses/:id`, ctrl.deleteHouses)
app.post(`/api/houses`, ctrl.createHouses)
app.put(`/api/houses/:id`, ctrl.updateHouses)


app.listen(4004, () => console.log(`Server running on port 4004`))