import { db } from '@vercel/postgres';
import {  users } from '../lib/placeholder-data';


async function getClient() {
    try {
        const client = await db.connect();
        console.log('Connected to database');
        return client;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
      }
   
  }


async function seedUsers() {
    const client = await getClient();

    try {
        console.log('Creating users table...');
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users_h (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  console.log('Inserting users...');
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      return client.sql`
        INSERT INTO users_h (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );


  return insertedUsers;
} catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
    }

  

  

export async function GET() {
    const client = await getClient();
    try {
          await client.sql`BEGIN`;
          await seedUsers();
          
          await client.sql`COMMIT`;
       
       
          return Response.json({ message: 'Database seeded successfully' });
        } catch (error) {
            console.error('Error during transaction:', error);
          await client.sql`ROLLBACK`;
          return Response.json({ error }, { status: 500 });
        }
       
}