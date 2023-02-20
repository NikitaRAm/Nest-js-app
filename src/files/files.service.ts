import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
    async createFile(file): Promise<string> {
        try{
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', 'static');
            fs.access(filePath, (err) => {
                if(err) {
                    fs.mkdir(filePath, {recursive: true}, (err) => { if (err) throw err;});
                    fs.writeFile(path.join(filePath, fileName), file.buffer, (err) => {if (err) throw err});  
                }
                fs.writeFile(path.join(filePath, fileName), file.buffer, (err) => {if (err) throw err});
            }) 
            return fileName;
        } catch (e) {
            throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
