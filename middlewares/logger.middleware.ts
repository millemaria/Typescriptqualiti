import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log("[Path]: ", req.path);
    console.log("[Method]: ", req.method);
    console.log("[Params]: ", req.params);
    console.log("[Body]: ", req.body);
    next();
});

export default router;