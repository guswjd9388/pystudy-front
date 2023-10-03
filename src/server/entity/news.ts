import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn
} from 'typeorm';


@Entity('news')
export class News extends BaseEntity {
    @PrimaryColumn()
    id!: number;

    @Column()
    type!: string;

    @Column()
    url!: string;

    @Column()
    title!: string;

    @Column()
    img_url!: string;

    @Column()
    abstractive!: string;
}