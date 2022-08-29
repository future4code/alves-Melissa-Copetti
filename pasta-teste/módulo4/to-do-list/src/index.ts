
import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getAllUsers from "./endpoints/getAllUsers";
import getTask from "./endpoints/getTask";
import getTaskUser from "./endpoints/getTaskUser";
import getUserId from "./endpoints/getUserId";



app.post('/user', createUser);

app.get('/user/:id',getUserId);

app.put('/user/edit/:id',editUser);

app.post('/create/task',createTask);

app.get('/task/:id',getTask);

app.get('/user/all',getAllUsers);

app.get('/task?creatorUserId=id',getTaskUser);