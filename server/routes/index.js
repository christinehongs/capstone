import { Router } from 'express';

const router = Router();

export default function () {
  router.route('/cart').post((req, res) => {
    res.setHeader('Content-Type', 'application/json');
  });

  return router;
}
