import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { News } from './entity/news';
import { Users } from './entity/users';


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'rdb-pystudy.cghwnjnhjrch.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: 'guswjd9388!1',
    database: 'pystudy',
    synchronize: false, // 절대 true 설정 말것 디비 날라감
    bigNumberStrings: false,
    entities: [
        News, Users
    ]
})

export const ensureAppDataSource = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize()
    }
}