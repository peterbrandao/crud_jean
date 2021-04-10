// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/users/usersController';

const user = new Router();
user.post('/',controller.create)

export default user;