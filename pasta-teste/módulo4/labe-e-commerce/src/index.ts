import { app } from "./app";
import { createProduct } from "./endpoits/createProduct";
import { createUsers } from "./endpoits/createUsers";
import { getAllProducts } from "./endpoits/getAllProducts";
import { getAllUsers } from "./endpoits/getAllUsers";
import { getPurchasesByUser } from "./endpoits/getPurchasesByUser";
import registerPurchases from "./endpoits/registerPurchases";


app.get("/users",getAllUsers);

app.get("/users/:userId/purchases",getPurchasesByUser )

app.get("/products", getAllProducts);

app.post("/users", createUsers);

app.post("/purchases", registerPurchases);

app.post("/products",createProduct);

