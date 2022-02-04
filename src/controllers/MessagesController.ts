import{Request, Response } from "express"
import { MessagesService } from "../services/MessagesService"


class MessagesController{

  async create(resquest: Request, response: Response){
    const {admin_id,text,user_id} = resquest.body;
    const messagesService = new MessagesService();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id
    })
    return response.json(message);
  }
  //localhost:3333/messages/IdDoUsuario
  async showByUser(resquest: Request, response: Response){
    
      const{id} = resquest.params;
    
      const messagesService = new MessagesService();

      const list = await messagesService.ListByUser(id);
      return response.json(list)
  }

}

export {MessagesController}