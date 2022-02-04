import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepositores } from "../repositories/UsersRepository"



class UsersService{
  private usersRepository : Repository<User>
  static findByEmail: any
  constructor(){
    this.usersRepository = getCustomRepository(UsersRepositores)
  }
  async create(email:string){
    //verificar se o usuario existe
    const userExist = await this.usersRepository.findOne({
      email
    })
    //se existir, retornar user
    if(userExist){
      return userExist;
    }
    const user = this.usersRepository.create({
      email
    });
    await this.usersRepository.save(user);
    //se n existir, salvar no bd
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
  
    return user;
  }

}

export{UsersService}