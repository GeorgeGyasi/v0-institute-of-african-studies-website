'use client';

import { useState, useEffect } from 'react';
import { getSupabaseClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { StaffProfile } from '@/lib/supabase';
import Link from 'next/link';

export default function AdminDashboard() {
  const [staff, setStaff] = useState<StaffProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [seeding, setSeeding] = useState(false);
  const [seedError, setSeedError] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetchStaff();
  }, []);

  async function fetchStaff() {
    try {
      setLoading(true);
      setFetchError(null);
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('staff_profiles')
        .select('*')
        .order('name');

      if (error) {
        console.error('[v0] Error fetching staff:', error);
        setFetchError('Failed to load staff. Database may not be initialized. Please click "Initialize Database" first.');
        return;
      }

      setStaff(data || []);
    } catch (err) {
      console.error('[v0] Fetch error:', err);
      setFetchError('Failed to connect to database. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function deleteStaff(id: string) {
    if (!confirm('Are you sure you want to delete this staff member?')) return;

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from('staff_profiles')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('[v0] Delete error:', error);
        return;
      }

      setStaff(staff.filter((member) => member.id !== id));
    } catch (err) {
      console.error('[v0] Delete error:', err);
    }
  }

  async function handleSeedData() {
    setSeeding(true);
    setSeedError(null);

    try {
      const response = await fetch('/api/admin/seed', { method: 'POST' });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to seed data');
      }

      // Refresh the staff list
      fetchStaff();
    } catch (err) {
      console.error('[v0] Seed error:', err);
      setSeedError(err instanceof Error ? err.message : 'Failed to seed data');
    } finally {
      setSeeding(false);
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

        {seedError && (
          <div className="mb-4 p-4 text-sm text-red-600 bg-red-50 rounded-md">{seedError}</div>
        )}

        {fetchError && (
          <div className="mb-4 p-4 text-sm text-red-600 bg-red-50 rounded-md">{fetchError}</div>
        )}

        {loading ? (
          <div className="text-center py-12">Loading staff...</div>
        ) : fetchError && staff.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg p-8">
            <p className="text-muted-foreground mb-4">Unable to load staff data. Please initialize the database first.</p>
            <Button onClick={() => window.location.href = '/admin/setup'} variant="default">
              Go to Setup
            </Button>
          </div>
        ) : filteredStaff.length === 0 && staff.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg p-8">
            <p className="text-muted-foreground mb-4">No staff members yet. Start by seeding initial data.</p>
            <Button onClick={handleSeedData} disabled={seeding} variant="default">
              {seeding ? 'Seeding Data...' : 'Seed Initial Staff Data'}
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
