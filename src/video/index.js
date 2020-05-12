import { Router } from 'express';
import videoControler from './controler.js'

const videoRouter = new Router();

//роути 
videoRouter.get("/init", videoControler.init);
videoRouter.get('/', videoControler.get);
videoRouter.get('/:id', videoControler.get_id);
videoRouter.post('/', videoControler.post);
videoRouter.delete('/:id', videoControler.delete_id);
videoRouter.patch('/:id', videoControler.patch);

export default videoRouter;