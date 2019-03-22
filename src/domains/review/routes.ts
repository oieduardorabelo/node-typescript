import express from 'express';

import controllers from './controllers';

const router = express.Router();

router.get('/', controllers.index);
router.get('/:reviewId', controllers.show);

export default router;
