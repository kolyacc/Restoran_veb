import { UserDbType } from "../repositories/userDbType";




declare global {
    declare namespace Express {
        export interface Request {
            user: UserDbType | null; // Add the user property to the Request interface
        }
    }
}
