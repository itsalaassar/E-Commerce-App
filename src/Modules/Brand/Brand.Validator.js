import Joi from "joi";
import{generalFields}from'../../Middleware/Validation.js'

export const AddBrandSchema ={
    body:Joi.object({
        name:Joi.string().min(5).required()
    }),
    query:Joi.object({
        subCategoryId:generalFields._id.required(),
        Categoryid:generalFields._id.required()
    
    }),
    headers:Joi.object({
        token:Joi.string().required()
    }).options({allowUnknown:true})
}
export const deleteSchema={
    query:Joi.object({
        SubCategoryId:generalFields._id.required(),
        Categoryid:generalFields._id.required(),
        BrandId:generalFields._id.required(),
    }),
    headers:Joi.object({
        token:Joi.string().required()
    }).options({allowUnknown:true})
}
export const Update={
    query:Joi.object({
        SubCategoryId:generalFields._id.required(),
        Categoryid:generalFields._id.required(),
        BrandId:generalFields._id.required(),
    }),
    headers:Joi.object({
        token:Joi.string().required()
    }).options({allowUnknown:true}),
    body:Joi.object({
        name:Joi.string().min(5).optional()
    })
}