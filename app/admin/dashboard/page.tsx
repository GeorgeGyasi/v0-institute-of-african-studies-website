'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface StaffProfile {
  id: string;
  name: string;
  role: string;
  email: string;
  specialty?: string;
  photo_url?: string;
}

const MOCK_STAFF: StaffProfile[] = [
  { 
    id: '1', 
    name: 'Prof. Asante', 
    role: 'Senior Member', 
    email: 'p.asante@university.edu', 
    specialty: 'African Studies',
    photo_url: '/images/professor-asante.jpg'
  },
  { 
    id: '2', 
    name: 'Prof. Dzodzi Tsikata', 
    role: 'Senior Member', 
    email: 'p.tsikata@university.edu', 
    specialty: 'Law & Development',
    photo_url: '/images/professor-dzodzi-tsikata.jpg'
  },
  { 
    id: '3', 
    name: 'Prof. Takyiwaa Manuh', 
    role: 'Senior Member', 
    email: 'p.manuh@university.edu', 
    specialty: 'Gender Studies',
    photo_url: '/images/professor-takyiwaa-manuh.jpg'
  },
  { 
    id: '4', 
    name: 'Prof. Albert Awedoba', 
    role: 'Senior Member', 
    email: 'p.awedoba@university.edu', 
    specialty: 'Anthropology',
    photo_url: '/images/professor-albert-awedoba.jpg'
  },
  { 
    id: '5', 
    name: 'Prof. Avorgbedor', 
    role: 'Senior Member', 
    email: 'p.avorgbedor@university.edu', 
    specialty: 'Music & Culture',
    photo_url: '/images/professor-avorgbedor.jpg'
  },
  { 
    id: '6', 
    name: 'Dr. Nii Dortey', 
    role: 'Senior Member', 
    email: 'dr.dortey@university.edu', 
    specialty: 'Literature',
    photo_url: '/images/dr-nii-dortey.jpg'
  },
];

export default function AdminDashboard() {
  const [staff, setStaff] = useState<StaffProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStaff();
  }, []);

  async function fetchStaff() {
    try {
      setLoading(true);
      setError(null);
      console.log('[v0] Fetching staff from API...');
      
      const response = await fetch('/api/staff');
      if (!response.ok) {
        throw new Error('Failed to fetch staff');
      }
      
      const data = await response.json();
      console.log('[v0] Staff fetched:', data.length);
      setStaff(data);
    } catch (err) {
      console.error('[v0] Fetch error:', err);
      setError('Failed to load staff from database');
    } finally {
      setLoading(false);
    }
  }

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function deleteStaff(id: string) {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    
    const updated = staff.filter((member) => member.id !== id);
    setStaff(updated);
    // TODO: Call DELETE API endpoint when built
  }

  async function handleSeedData() {
    try {
      console.log('[v0] Initializing database...');
      const response = await fetch('/api/admin/init', { method: 'POST' });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.details || 'Failed to initialize');
      }
      
      console.log('[v0] Database initialized:', data.message);
      await fetchStaff();
    } catch (err) {
      console.error('[v0] Init error:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize database');
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Staff Management</h1>
          <p className="text-muted-foreground">Manage staff profiles and content</p>
        </div>

        <div className="mb-6 flex gap-4">
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
          <Link href="/admin/staff/new">
            <Button>Add New Staff Member</Button>
          </Link>
        </div>

        {error && (
          <div className="mb-4 p-4 text-sm text-red-600 bg-red-50 rounded-md">{error}</div>
        )}

        {loading ? (
          <div className="text-center py-12">Loading staff...</div>
        ) : filteredStaff.length === 0 && staff.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg p-8">
            <p className="text-muted-foreground mb-4">No staff members yet. Initialize database and seed data.</p>
            <Button onClick={handleSeedData} variant="default">
              Initialize & Seed Database
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredStaff.map((member) => (
              <Card key={member.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-6 items-start">
                    {member.photo_url && (
                      <div className="flex-shrink-0">
                        <Image
                          src={member.photo_url}
                          alt={member.name}
                          width={120}
                          height={160}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      {member.specialty && (
                        <p className="text-sm text-muted-foreground">{member.specialty}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">{member.email}</p>
                      <div className="flex gap-2 mt-4">
                        <Link href={`/admin/staff/${member.id}`}>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteStaff(member.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
