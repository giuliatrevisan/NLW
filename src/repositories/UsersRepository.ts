import {Entity, EntityRepository, Repository} from "typeorm";
import {User} from "../entities/User";

@EntityRepository(User)
class UsersRepositores extends Repository<User>{

}

export{UsersRepositores}