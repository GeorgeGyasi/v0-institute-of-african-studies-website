import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const STAFF_DATA = [
  { name: 'Prof. Asante', role: 'Senior Member', email: 'p.asante@university.edu', specialty: 'African Studies', photo_url: '/images/professor-asante.jpg' },
  { name: 'Prof. Dzodzi Tsikata', role: 'Senior Member', email: 'p.tsikata@university.edu', specialty: 'Law & Development', photo_url: '/images/professor-dzodzi-tsikata.jpg' },
  { name: 'Prof. Takyiwaa Manuh', role: 'Senior Member', email: 'p.manuh@university.edu', specialty: 'Gender Studies', photo_url: '/images/professor-takyiwaa-manuh.jpg' },
  { name: 'Prof. Albert Awedoba', role: 'Senior Member', email: 'p.awedoba@university.edu', specialty: 'Anthropology', photo_url: '/images/professor-albert-awedoba.jpg' },
  { name: 'Prof. Avorgbedor', role: 'Senior Member', email: 'p.avorgbedor@university.edu', specialty: 'Music & Culture', photo_url: '/images/professor-avorgbedor.jpg' },
  { name: 'Dr. Nii Dortey', role: 'Senior Member', email: 'dr.dortey@university.edu', specialty: 'Literature', photo_url: '/images/dr-nii-dortey.jpg' },
];

export async function POST(request: NextRequest) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  let client;
  try {
    console.log('[v0] Init endpoint called');
    console.log('[v0] DATABASE_URL set:', !!process.env.DATABASE_URL);

    client = await pool.connect();
    console.log('[v0] Connected to Neon database');

    // Create table
    console.log('[v0] Creating staff_profiles table...');
    await client.query(`
      CREATE TABLE IF NOT EXISTS staff_profiles (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        specialty TEXT,
        email TEXT NOT NULL UNIQUE,
        photo_url TEXT,
        bio TEXT,
        department TEXT,
        rank TEXT,
        phone TEXT,
        office TEXT,
        research_interests TEXT,
        publications TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log('[v0] Table created successfully');

    // Seed data
    console.log('[v0] Seeding staff data...');
    for (const staff of STAFF_DATA) {
      await client.query(
        `INSERT INTO staff_profiles (name, role, email, specialty, photo_url) 
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (email) DO NOTHING`,
        [staff.name, staff.role, staff.email, staff.specialty, staff.photo_url]
      );
    }
    console.log('[v0] Seeded', STAFF_DATA.length, 'staff members');

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully with ' + STAFF_DATA.length + ' staff members',
    });
  } catch (error: any) {
    console.error('[v0] Database initialization error:', error.message);
    
    // If table already exists, that's fine
    if (error.code === '42P07') {
      console.log('[v0] Table already exists');
      return NextResponse.json({
        success: true,
        message: 'Database already initialized',
      });
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to initialize database',
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
    await pool.end();
  }
}

