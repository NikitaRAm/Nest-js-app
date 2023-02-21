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
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'static'),
          }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.PORSTGRES_HOST,
            port: Number(process.env.PORSTGRESS_PORT),
            username: process.env.PORSTGRES_USER,
            password: process.env.PORSTGRESS_PASSWORD,
            database: process.env.PORSTGRES_DB,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]
})
export class AppModule {}