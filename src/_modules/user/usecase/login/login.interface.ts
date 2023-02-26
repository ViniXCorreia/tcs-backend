import { UserEntity } from "src/infra/database/entities/user.entity";

export interface ILoginDTO {
  username: string;
  password: string;
}

export interface ILoginUseCase {
  execute(loginDto: ILoginDTO): Promise<UserEntity>
}