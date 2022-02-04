import {Request,Response} from "express"
import { UsersService } from "../services/UsersService"


class   UsersController{

  async create(resquest: Request, response: Response):Promise<Response>{
    const usersService = new UsersService();
    const {email} = resquest.body;

    const user = await usersService.create(email);
    return response.json(user);
  }

}
export{UsersController}