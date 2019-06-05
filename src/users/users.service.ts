import { Injectable, HttpService, Logger } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { map } from 'rxjs/operators';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);
    constructor(private readonly httpService: HttpService){}

    async findAll(): Promise<User[]> {
        
        const url = 'https://reqres.in/api/users';
     
        try{
            //Chamada ao serviço (transformar de Observable p/ Promise para garantir que o async/await funcione)
            const users: User[] = await this.httpService.get(url).pipe(map(res => res.data.data)).toPromise();

            //Início da manipulação dos usuários
            // users.forEach(
            //     (user:User) => {
            //         user.test = 'aaa';
            //     }
            // );
            //Final da manipulação dos usuários

            return users;

        }catch(err){
            this.logger.error('Error when trying to find all users');
        }
    }

    async createUser(
        createUserDto: CreateUserDto,
    ): Promise<string> {
        //Salva no banco ou envia para outro serviço salvar
        return new Promise((resolve, reject) => {
            resolve('Usuário salvo com sucesso');
        });
    }
    
}
