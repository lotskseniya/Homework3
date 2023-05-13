import express from "express";
import cars from "./data/cars.mjs";

const PORT = 7777;
const expressApplication = express();
expressApplication.use(express.json());

expressApplication.get("/cars", (req, res) => {
    res.status(200).send(cars);
});

expressApplication.post("/cars", (req, res) => {
    const { brand, price, color } = req.body;
    cars.push({ brand, price, color, id: cars.length + 1 });
    res.status(201).send(cars); 
});

expressApplication.patch("/cars", (req, res) => {
    const { brand, price, id } = req.body;
    cars.map((car, index) => {
      if (id === car.id) {
        const updatedCarInformation = { ...car, price };
        cars[index] = updatedCarInformation;
        return updatedCarInformation;
      }
      return car;
    })
    res.status(200).send(cars);
});

expressApplication.listen(PORT, () => {
    console.log(`expressApplication is on the ${PORT} port`);
})
