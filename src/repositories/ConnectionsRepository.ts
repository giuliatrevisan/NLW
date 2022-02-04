import { Entity, EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connections";



@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection>{

}

export { ConnectionsRepository}