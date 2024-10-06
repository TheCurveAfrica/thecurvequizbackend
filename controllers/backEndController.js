import backEndQuestionsSchema from "../models/backEndQuestionsSchema.js"
import questions, { answers } from '../database/backendData.js'


/** insert all questinos */
export async function insertQuestions(req, res){
    try {
        backEndQuestionsSchema.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}

export async function getQuestions(req, res){
    try {
        const q = await backEndQuestionsSchema.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}