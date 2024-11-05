import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Guestbook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "text", nullable: true, default: "" })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static create(title: string, content: string, description: string) {
    const guestbook = new Guestbook();
    guestbook.title = title;
    guestbook.content = content;
    guestbook.description = description;
    return guestbook;
  }
  update(title: string, content: string): void {
    this.title = title;
    this.content = content;
  }
}
