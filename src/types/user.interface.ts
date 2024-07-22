export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    role: "admin" | "user";
    verify: boolean;
    resetToken: string | null;
    resetTokenExpiration: Date | null;
    lastLogin: Date;
    lastPasswordReset: Date | null;
  }