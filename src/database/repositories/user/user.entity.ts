import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, default: null })
  hashedPassword: string | null;

  @Column({ nullable: true, default: null })
  pwResetToken: string | null;

  @Column({ nullable: true })
  friendlyName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: false })
  emailVerified: boolean;
}
