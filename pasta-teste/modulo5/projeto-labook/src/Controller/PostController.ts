import { ICreatePostInputDTO } from './../Models/Post';
import { Request, Response } from "express";
import { PostBusiness } from "../Business/PostBusiness";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

public createPost = async (req:Request, res:Response)=>{
try {
  const input:ICreatePostInputDTO = {
    token: req.headers.authorization,
    content:req.body.content
  }

  const response = await this.postBusiness.createPost(input)
  
} catch (error:any) {
  
}
}



}
