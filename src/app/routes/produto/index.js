// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/produto/produtoController';

const produto = new Router();
produto.post('/',controller.create)
produto.get('/',controller.list)
produto.get('/:id',controller.listIndex)
produto.delete('/:id',controller.delete)
produto.put('/:id',controller.update)


export default produto;