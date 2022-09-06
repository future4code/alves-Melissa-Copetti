import { getFullAddress } from './services/getFullAddress';
import { app } from "./app";
import { createAddress } from "./endpoints/createAddress";


app.get("/address/:cep", getFullAddress)
app.post("/user/address/:cep", createAddress)