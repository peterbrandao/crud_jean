import 'dotenv/config';

import routes from './app/routes';
import express from 'express';
import cors from 'cors';
import './database';

class App {
    constructor (){
        this.server = express();
        // this.cors();
        // this.middlewares();
        this.routes();
      }
    
    //   middlewares() {
    //     this.server.use(express.json());
    //   }
    
    //   cors() {
    //     this.server.use(cors(corsConfig));
    //   }
    
      routes() {
        this.server.use(routes);
      }
    }
 export default new App().server;