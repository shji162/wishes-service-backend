import { Roles } from "src/enums/user.enum"

export class CreateUserDto {
    email: string
    password: string
    role: Roles
}
