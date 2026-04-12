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

    // Create all tables
    console.log('[v0] Creating database tables...');
    
    // Staff profiles table
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
    console.log('[v0] staff_profiles table created');

    // Events table
    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        description TEXT,
        event_date TIMESTAMP WITH TIME ZONE NOT NULL,
        location TEXT,
        category TEXT,
        image_url TEXT,
        status TEXT DEFAULT 'upcoming',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log('[v0] events table created');

    // Blog posts table
    await client.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        slug TEXT UNIQUE,
        content TEXT,
        excerpt TEXT,
        author_id UUID,
        featured_image TEXT,
        status TEXT DEFAULT 'draft',
        published_at TIMESTAMP WITH TIME ZONE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log('[v0] blog_posts table created');

    // Research projects table
    await client.query(`
      CREATE TABLE IF NOT EXISTS research_projects (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        description TEXT,
        principal_investigator TEXT,
        co_investigators TEXT[],
        start_date DATE,
        end_date DATE,
        funding_source TEXT,
        status TEXT DEFAULT 'active',
        publications TEXT[],
        image_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log('[v0] research_projects table created');

    // Users/Members table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        password_hash TEXT,
        role TEXT DEFAULT 'user',
        status TEXT DEFAULT 'active',
        avatar_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log('[v0] users table created');

    // Resources/Documents table
    await client.query(`
      CREATE TABLE IF NOT EXISTS resources (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        description TEXT,
        file_url TEXT NOT NULL,
        file_type TEXT,
        category TEXT,
        size_kb INTEGER,
        download_count INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log('[v0] resources table created');

    console.log('[v0] All tables created successfully');

    // Seed staff data
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
      message: 'Database initialized successfully with all tables and ' + STAFF_DATA.length + ' staff members',
    });
  } catch (error: any) {
    console.error('[v0] Database initialization error:', error.message);
    
    // If tables already exist, that's fine
    if (error.code === '42P07' || error.message.includes('already exists')) {
      console.log('[v0] Tables already exist');
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

