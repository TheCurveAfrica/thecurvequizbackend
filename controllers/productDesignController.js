import  productDesignQuestions from "../models/productDesignQuestionsSchema.js"
import questions, { answers } from '../database/productData.js'

/** insert all questinos */
export async function insertQuestions(req, res){
    try {
        productDesignQuestions.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}

export async function getQuestions(req, res){
    try {
        const q = await productDesignQuestions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}