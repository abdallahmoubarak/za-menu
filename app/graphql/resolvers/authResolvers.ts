import { userTypes } from "@/types/common";
import { createJWT, comparePassword, hashPassword } from "@/utils/jwt";

import { User } from "../index";

export const authMutations = {
  signUp: async (_source: any, { name, email, password }: userTypes) => {
    const [existing] = await User.find({ where: { email } });
    if (existing) throw new Error(`User with email ${email} already exists!`);
    const hash = await hashPassword(password);

    const { users } = await User.create({
      input: [
        {
          name,
          email,
          password: hash,
        },
      ],
    });
    const token = await createJWT({ sub: users[0].id });

    return { user: users[0], token };
  },

  signIn: async (_source: any, { email, password }: userTypes) => {
    const [user] = await User.find({ where: { email } });
    if (!user) throw new Error("Email or password is not correct!");
    const correctPassword = await comparePassword(password, user.password);
    if (!correctPassword) throw new Error("Email or password is not correct!");
    const token = await createJWT({ sub: user.id });

    return { user, token };
  },
};
