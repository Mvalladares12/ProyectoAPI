import { Application, Router } from 'express';
import brandsRoutes from './api/controllers/brands/router';
import productsRoutes from './api/controllers/products/router';

export default function routes(app: Application): void {
    const router = Router();

    router.use('/brands', brandsRoutes);
    router.use('/products', productsRoutes);

    app.use('/api/v1', router);
}
