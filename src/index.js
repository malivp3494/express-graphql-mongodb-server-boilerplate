//lol here wwe go... just make sure to create a boilerplate first, and git add origin mastar?
import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';

import constants from './config/constants';
import middlewares from './config/middleware';
import mocks from './mocks';
import './config/db';

const app = express();
middlewares(app);

const graphQLServer = createServer(app);

mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Server started at ${constants.PORT}`);
    }
  });
});
