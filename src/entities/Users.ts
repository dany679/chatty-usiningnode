
// entities is like some model how is the typeorm base
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuidv4} from 'uuid'
@Entity('users')
class Users {
  @PrimaryColumn()
  id:string;
  @Column()
  email: string;
  // @UpdateDateColumn()
  // updated_at:Date;
  @CreateDateColumn()
  created_at:Date;
  constructor(){
  if (!this.id) {
    this.id= uuidv4();
  }
}
}
export{Users}