'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface StaffProfile {
  id: string;
  name: string;
  role: string;
  email: string;
  specialty?: string;
}

const MOCK_STAFF: StaffProfile[] = [
  { id: '1', name: 'Dr. Sarah Johnson', role: 'Professor', email: 'sarah@university.edu', specialty: 'Computer Science' },
  { id: '2', name: 'Prof. Michael Chen', role: 'Associate Professor', email: 'michael@university.edu', specialty: 'AI & Machine Learning' },
  { id: '3', name: 'Dr. Emily Rodriguez', role: 'Assistant Professor', email: 'emily@university.edu', specialty: 'Web Development' },
];

export default function AdminDashboard() {
  const [staff, setStaff] = useState<StaffProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMockData, setShowMockData] = useState(false);

  useEffect(() => {
    // Load staff from localStorage on mount
    try {
      const savedStaff = localStorage.getItem('staff_profiles');
      if (savedStaff) {
        setStaff(JSON.parse(savedStaff));
      }
    } catch (err) {
      console.error('[v0] Error loading staff:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function deleteStaff(id: string) {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    
    const updated = staff.filter((member) => member.id !== id);
    setStaff(updated);
    localStorage.setItem('staff_profiles', JSON.stringify(updated));
  }

  function handleSeedData() {
    setStaff(MOCK_STAFF);
    localStorage.setItem('staff_profiles', JSON.stringify(MOCK_STAFF));
    setShowMockData(true);
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

        {loading ? (
          <div className="text-center py-12">Loading staff...</div>
        ) : filteredStaff.length === 0 && staff.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg p-8">
            <p className="text-muted-foreground mb-4">No staff members yet. Start by seeding initial data.</p>
            <Button onClick={handleSeedData} variant="default">
              Seed Initial Staff Data
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredStaff.map((member) => (
              <Card key={member.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      {member.specialty && (
                        <p className="text-sm text-muted-foreground">{member.specialty}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">{member.email}</p>
                    </div>
                    <div className="flex gap-2">
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
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
