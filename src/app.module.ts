import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';



@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.PORSTGRES_HOST,
            port: Number(process.env.PORSTGRESS_PORT),
            username: process.env.PORSTGRES_USER,
            password: process.env.PORSTGRESS_PASSWORD,
            database: process.env.PORSTGRES_DB,
            models: [User, Role, UserRoles],
            autoLoadModels: true
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
    ]
})
export class AppModule {}