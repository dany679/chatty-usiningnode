// entities is like some model how is the typeorm base
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Users } from './Users'
@Entity('messages')
class Messages {
  @PrimaryColumn()
  id:string;

  @Column()
  user_id: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => Users)
  user: Users

  @Column()
  admin_id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at:Date;

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
export { Messages }
