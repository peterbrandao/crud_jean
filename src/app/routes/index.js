import { Router } from 'express';

import user from './user';

import produto from './produto';

const routes = new Router();
const BASE_PATH = `/${process.env.APP_VERSION_ROUTES}`;

routes.use(`${BASE_PATH}/users`, user);
routes.use(`${BASE_PATH}/produto`, produto);

export default routes;