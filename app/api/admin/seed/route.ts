import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const STAFF_DATA = [
  {
    name: "Professor Dzodzi Tsikata",
    role: "Professor",
    specialty: "African Legal Studies & Gender Justice",
    email: "dtsikata@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Professor Emerita Takyiwaa Manuh",
    role: "Professor Emerita",
    specialty: "African Development & Diaspora Studies",
    email: "tmanuh@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Professor Akosua Adomako Ampofo",
    role: "Professor",
    specialty: "Gender Studies & Social Transformation",
    email: "aadomako@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Professor Esi Sutherland-Addy",
    role: "Professor",
    specialty: "African Literature & Linguistics",
    email: "esutherland@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Professor Albert Awedoba",
    role: "Professor",
    specialty: "African Anthropology & Religion",
    email: "aawedoba@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Professor Daniel Avorgbedor",
    role: "Professor",
    specialty: "Ethnomusicology & Cultural Studies",
    email: "davorgbedor@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Dr. Chika C. Mba",
    role: "Senior Lecturer",
    specialty: "African Economic Development",
    email: "cmba@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Dr. Peter Narh",
    role: "Senior Lecturer",
    specialty: "African Urban Geography",
    email: "pnarh@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
  {
    name: "Dr. Benjamin Kobina Kwansa",
    role: "Senior Lecturer",
    specialty: "African Heritage Management",
    email: "bkwansa@ug.edu.gh",
    department: "Senior Members",
    bio: "",
  },
];

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Insert staff data
    const { error: insertError } = await supabase
      .from('staff_profiles')
      .insert(STAFF_DATA);

    if (insertError) {
      console.error('[v0] Seed error:', insertError);
      return NextResponse.json(
        { error: 'Failed to seed data', details: insertError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${STAFF_DATA.length} staff members`,
    });
  } catch (error) {
    console.error('[v0] Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}
