import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn
} from 'typeorm';


@Entity('users')
export class Users extends BaseEntity {
    @PrimaryColumn()
    id!: number;

    @Column()
    nickname!: string;

    @Column()
    thumbnail_image_url!: string;

    @Column()
    access_token!: string;

    @Column()
    refresh_token!: string;

    @Column()
    use_talk!: boolean;
}