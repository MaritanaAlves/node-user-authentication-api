import { Router, Response, Request, NextFunction } from 'express';
import {StatusCodes} from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{userName: 'Mari'}];
  res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({uuid});
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifieldUser = req.body;

  modifieldUser.uuid = uuid;

  res.status(StatusCodes.OK).send({modifieldUser});
})

usersRoute.delete('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK);
})

export default usersRoute;