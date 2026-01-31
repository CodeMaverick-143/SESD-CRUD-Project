import { User, IUser } from "./user.model.js";

class AuthRepository {
    public async create(data: Partial<IUser>): Promise<IUser> {
        return await User.create(data);
    }

    public async findByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({ email });
    }

    public async findById(id: string): Promise<IUser | null> {
        return await User.findById(id).select("-password");
    }
}

export const authRepository = new AuthRepository();
