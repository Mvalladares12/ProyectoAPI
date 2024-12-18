import { nextTick } from "process";
import brandsService from "../../services/brands.service";
import { NextFunction,Request, Response } from "express";


export class Controller{
    findAll(_:Request, res:Response){
        brandsService.findAll().then((x)=>res.json(x))
    }

    async findById(req: Request, res: Response, next:NextFunction){
        try {
            const{id}=req.params;
            const brand=await brandsService.findById(id);
            res.json(brand)
            return;
        } catch (error) {
            next(error);
        }
    }

    create(req: Request, res: Response){
        brandsService.create(req.params.name).then((x)=>res.json(x))
    }

    async update(req: Request, res: Response, next:NextFunction){
        try {
            const{id}=req.params;
            const brand=await brandsService.update(id, req.body);
            res.json(brand)
        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next:NextFunction){
        try {
            const{id}=req.params;
            const brand=await brandsService.delete(id);
            res.json(brand)
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller();




/*import BrandsService from '../../services/brands.service';
import { NextFunction, Request, Response } from 'express';

export class Controller {
    findAll(_: Request, res: Response) {
        BrandsService.findAll().then((r) => res.json(r));
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const branch = await BrandsService.findById(id);
            res.json(branch);
            return;
        } catch (error) {
            next(error);
        }
    }

    create(req: Request, res: Response) {
        BrandsService.create(req.body.name).then((x) => res.json(x));
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const upt = await BrandsService.update(id, req.body);
            res.json(upt);
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const upt = await BrandsService.delete(id);
            res.json(upt);
        } catch (err) {
            next(err);
        }
    }
}
export default new Controller();*/
