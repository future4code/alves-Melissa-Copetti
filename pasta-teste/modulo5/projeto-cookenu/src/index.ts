import { app } from "./app";
import { login } from "./endpoints/login";
import { singUp } from "./endpoints/signup";

app.post("/signup", singUp);

app.post("/login", login);

app.get("/users/profile");

app.get("/user/:id");

app.post("/recipe");

app.get("/recipe/:id");


