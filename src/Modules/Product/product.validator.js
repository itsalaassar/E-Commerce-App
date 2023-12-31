import Joi from "joi";
import { generalFields } from "../../Middleware/Validation.js";
import { generateToken } from "../../utils/TokenFunction.js";
export const AddProduct ={
    body:Joi.object({
        name:Joi.string().min(5).max(55).required(),
        price:Joi.number().positive().required(),
        description:Joi.string().max(255).optional(),
        appliedDiscount:Joi.number().positive().min(1).max(100).optional(),
        colors:Joi.array().items(Joi.string().required()).optional(),
        size:Joi.array().items(Joi.string().required()).optional(),
        stock:Joi.number().integer().positive().min(1).required(),
    }),
    query:Joi.object({
        CategoryId:generalFields._id,
        SubCategoryId:generalFields._id,
        BrandId:generalFields._id,

    }).required().options({presence:'required'}),
    headers:Joi.object({
        token:Joi.string().required()
    }).options({allowUnknown:true})

}
export const UpdateProduct ={
    body:Joi.object({
        name:Joi.string().min(5).max(55).required(),
        price:Joi.number().positive().required(),
        description:Joi.string().max(255).optional(),
        appliedDiscount:Joi.number().positive().min(1).max(100).optional(),
        colors:Joi.array().items(Joi.string().required()).optional(),
        size:Joi.array().items(Joi.string().required()).optional(),
        stock:Joi.number().integer().positive().min(1).required(),
        PriceAfterDiscount:Joi.number().positive().optional(),
    }).options({allowUnknown:true}),
    query:Joi.object({
        CategoryId:generalFields._id,
        SubCategoryId:generalFields._id,
        BrandId:generalFields._id,

    }).required().options({presence:'required'}),
    headers:Joi.object({
        token:Joi.string().required()
    }).options({allowUnknown:true})

}
export const DeleteSchema={
    query:Joi.object({
        SubCategoryId:generalFields._id.required(),
        Categoryid:generalFields._id.required(),
        productId:generalFields._id.required()
    }),
    headers:Joi.object({
        token:Joi.string().required()
    }).options({allowUnknown:true})
}