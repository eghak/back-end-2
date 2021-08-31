const houses = require(`../db.json`);
let id = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  deleteHouses: (req, res) => {
    const { id } = req.params;
    const index = houses.findIndex((house) => {
      return house.id === +id;
    });
    if (index === -1) {
      res.status(400).send(`Unable to find house`);
    } else {
      houses.splice(index, 1);
      res.status(200).send(houses);
    }
  },
  createHouses: (req, res) => {
    let { address, price, imageURL } = req.body;

    const newHouse = { id, address, price, imageURL };

    houses.push(newHouse);
    id++;
    res.status(200).send(houses);
  },
  updateHouses: (req, res) => {
    let { type } = req.body;
    const { id } = req.params;

    const index = houses.findIndex((house) => {
      return house.id === +id;
    });
    if (type === "plus") {
      houses[index].price = houses[index].price + 10000;
      res.status(200).send(houses);
    } else if (type === `minus`) {
      houses[index].price = houses[index].price - 10000;
      res.status(200).send(houses);
    } else {
      res.status(404).send(`Something went wrong`);
    }
  },
};
