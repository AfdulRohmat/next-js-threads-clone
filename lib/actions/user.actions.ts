'use server'

import { revalidatePath } from "next/cache";
import User from "../models/user.model"
import { connectToDB } from "../mongoose"

interface updateUserProps {
    userId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    path: string;
}

export async function updateUser({
    userId,
    bio,
    name,
    path,
    username,
    image, }: updateUserProps): Promise<void> {
    connectToDB()

    try {
        await User.findOneAndUpdate({ id: userId },
            {
                username: username.toLowerCase(),
                name,
                bio,
                image,
                onboarded: true,
            },
            { upsert: true } // both update and/or insert
        )

        if (path === '/profile/edit') {
            revalidatePath(path) // re-validate data associated with spesific path. usefull for update Data
        }
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`);
    }

}