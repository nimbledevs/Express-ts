import mongoose, { Schema, Model, Document } from "mongoose";
import { IUser } from "../types/user.interface";
import bcrypt from 'bcryptjs';
import { NextFunction } from "express";

// Define the User schema
const userSchema: Schema = new Schema<IUser & Document<any, any, IUser>>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
      required: true,
    },
    verify: { type: Boolean, default: false },
    resetToken: { type: String, default: "" },
    resetTokenExpiration: { type: Date, default: null },
    lastLogin: { type: Date, default: Date.now },
    lastPasswordReset: { type: Date, default: null }
  },
  { timestamps: true }
);

// Pre-save hook to hash password before saving
userSchema.pre<IUser & Document<any, any, IUser>>("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    } catch (error:any) {
      next(error); // Pass any errors to the next middleware
    }
  }
  next();
});

// Static method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword: string, storedHash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, storedHash);
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

// Create the User model
export const User: Model<IUser & Document<any, any, IUser>> = mongoose.model<IUser & Document<any, any, IUser>>("User", userSchema);
