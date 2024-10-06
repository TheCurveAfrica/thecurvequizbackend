import { Router } from "express";
const router = Router();

/** import controllers */
import * as frontEndController from '../controllers/controller.js';
import * as backEndController from '../controllers/backEndController.js';
import * as productDesignController from '../controllers/productDesignController.js';

/** Questions Routes API */

router.route('/frontend')
        .get(frontEndController.getQuestions) /** GET Request */
        .post(frontEndController.insertQuestions) /** POST Request */
        .delete(frontEndController.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(frontEndController.getResult)
        .post(frontEndController.storeResult)
        .delete(frontEndController.dropResult)

router.route('/backend').post(backEndController.insertQuestions)
router.route('/product').post(productDesignController.insertQuestions)

export default router;