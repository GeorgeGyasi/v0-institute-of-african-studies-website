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
  { id: '1', name: 'Prof. Asante', role: 'Senior Member', email: 'p.asante@university.edu', specialty: 'African Studies', photo_url: '/images/professor-asante.jpg' },
  { id: '2', name: 'Prof. Dzodzi Tsikata', role: 'Senior Member', email: 'p.tsikata@university.edu', specialty: 'Law & Development', photo_url: '/images/professor-dzodzi-tsikata.jpg' },
  { id: '3', name: 'Prof. Takyiwaa Manuh', role: 'Senior Member', email: 'p.manuh@university.edu', specialty: 'Gender Studies', photo_url: '/images/professor-takyiwaa-manuh.jpg' },
  { id: '4', name: 'Prof. Albert Awedoba', role: 'Senior Member', email: 'p.awedoba@university.edu', specialty: 'Anthropology', photo_url: '/images/professor-albert-awedoba.jpg' },
  { id: '5', name: 'Prof. Avorgbedor', role: 'Senior Member', email: 'p.avorgbedor@university.edu', specialty: 'Music & Culture', photo_url: '/images/professor-avorgbedor.jpg' },
  { id: '6', name: 'Dr. Nii Dortey', role: 'Senior Member', email: 'dr.dortey@university.edu', specialty: 'Literature', photo_url: '/images/dr-nii-dortey.jpg' },
  { id: '7', name: 'Prof. Esi Sutherland-Addy', role: 'Senior Member', email: 'esutherland-addy@ug.edu.gh', specialty: 'African Literature & Cultural Policy', photo_url: '/images/professor-esi-sutherland.jpg' },
  { id: '8', name: 'Prof. Akosua Adomako Ampofo', role: 'Senior Member', email: 'aadomako@ug.edu.gh', specialty: 'Gender & African Studies', photo_url: '/images/professor-adomako.jpg' },
  { id: '9', name: 'Dr. Peter Narh', role: 'Senior Member', email: 'p.narh@university.edu', specialty: 'Economics', photo_url: '/images/dr-peter-narh.jpg' },
  { id: '10', name: 'Dr. Hasiyatu Abubakari', role: 'Senior Member', email: 'h.abubakari@university.edu', specialty: 'History', photo_url: '/images/dr-hasiyatu-abubakari.jpg' },
  { id: '11', name: 'Dr. Mjiba Frehiwot', role: 'Senior Member', email: 'm.frehiwot@university.edu', specialty: 'Religious Studies', photo_url: '/images/dr-mjiba-frehiwot.jpg' },
  { id: '12', name: 'George Gyesaw', role: 'Senior Member', email: 'g.gyesaw@university.edu', specialty: 'Cultural Studies', photo_url: '/images/george-gyesaw.jpg' },
  { id: '47', name: 'Ɔbenfo (Professor) Ọbádélé Bakari Kambon', role: 'Senior Member', email: '', specialty: 'African Philosophy & Consciousness', photo_url: '/images/obadele-bakari-kambon.jpg' },
  { id: '49', name: 'Chika C. Mba', role: 'Senior Member', email: 'cmba@ug.edu.gh', specialty: 'African Philosophy & Decolonial Theory', photo_url: '/images/dr-chika-mba.jpg' },
  { id: '50', name: 'Dr. Eric Tamatey Lawer', role: 'Senior Member', email: 'elawer@ug.edu.gh', specialty: 'Natural Resource Governance & Energy Transition', photo_url: '/images/dr-eric-tamatey-lawer.jpg' },
  { id: '51', name: 'Aba Amandzewaa Anaman', role: 'Senior Member', email: 'aaanaman@ug.edu.gh', specialty: 'Academic Librarianship & Information Science', photo_url: '/images/aba-amandzewaa-anaman.jpg' },
  { id: '52', name: 'Rev. Dr. Grace Sintim Adasi', role: 'Senior Member', email: 'gadasi@ug.edu.gh', specialty: 'Religions, Philosophy & Gender Studies', photo_url: '/images/rev-dr-grace-sintim-adasi.png' },
  { id: '53', name: 'Professor Samuel Aniegye Ntewusu', role: 'Senior Member', email: 'santewusu@ug.edu.gh', specialty: 'African History, Culture & Development', photo_url: '/images/professor-samuel-ntewusu.jpg' },
  { id: '13', name: 'Nathaniel Kpogo Worlanyo', role: 'Senior Member', email: 'sm1@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-1.jpg' },
  { id: '14', name: 'Senior Member 2', role: 'Senior Member', email: 'sm2@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-2.jpg' },
  { id: '15', name: 'Senior Member 3', role: 'Senior Member', email: 'sm3@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-3.jpg' },
  { id: '16', name: 'Senior Member 4', role: 'Senior Member', email: 'sm4@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-4.jpg' },
  { id: '17', name: 'Senior Member 5', role: 'Senior Member', email: 'sm5@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-5.jpg' },
  { id: '18', name: 'Senior Member 6', role: 'Senior Member', email: 'sm6@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-6.jpg' },
  { id: '19', name: 'Senior Member 7', role: 'Senior Member', email: 'sm7@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-7.jpg' },
  { id: '20', name: 'Senior Member 8', role: 'Senior Member', email: 'sm8@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-8.jpg' },
  { id: '21', name: 'Senior Member 9', role: 'Senior Member', email: 'sm9@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-9.jpg' },
  { id: '22', name: 'Selina Okle Emma', role: 'Senior Member', email: 'sm10@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-10.jpg' },
  { id: '23', name: 'Philip Owusu PhD', role: 'Senior Member', email: 'sm11@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-11.jpg' },
  { id: '24', name: 'Joy Koney', role: 'Senior Member', email: 'sm12@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-12.jpg' },
  { id: '25', name: 'Justice Library', role: 'Senior Member', email: 'sm13@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-13.jpg' },
  { id: '26', name: 'Mark Anthony A. Alongya', role: 'Senior Member', email: 'sm14@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-14.jpg' },
  { id: '27', name: 'Senior Member 15', role: 'Senior Member', email: 'sm15@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-15.jpg' },
  { id: '28', name: 'Senior Member 16', role: 'Senior Member', email: 'sm16@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-16.jpg' },
  { id: '29', name: 'Senior Member 17', role: 'Senior Member', email: 'sm17@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-17.jpg' },
  { id: '30', name: 'Senior Member 18', role: 'Senior Member', email: 'sm18@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-18.jpg' },
  { id: '31', name: 'Senior Member 19', role: 'Senior Member', email: 'sm19@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-19.jpg' },
  { id: '32', name: 'Senior Member 20', role: 'Senior Member', email: 'sm20@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-20.jpg' },
  { id: '33', name: 'Senior Member 21', role: 'Senior Member', email: 'sm21@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-21.jpg' },
  { id: '34', name: 'Senior Member 22', role: 'Senior Member', email: 'sm22@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-22.jpg' },
  { id: '35', name: 'Senior Member 23', role: 'Senior Member', email: 'sm23@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-23.jpg' },
  { id: '36', name: 'Senior Member 24', role: 'Senior Member', email: 'sm24@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-24.jpg' },
  { id: '37', name: 'Senior Member 25', role: 'Senior Member', email: 'sm25@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-25.jpg' },
  { id: '38', name: 'Senior Member 26', role: 'Senior Member', email: 'sm26@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-26.jpg' },
  { id: '39', name: 'Senior Member 27', role: 'Senior Member', email: 'sm27@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-27.jpg' },
  { id: '40', name: 'Senior Member 28', role: 'Senior Member', email: 'sm28@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-28.jpg' },
  { id: '41', name: 'Senior Member 29', role: 'Senior Member', email: 'sm29@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-29.jpg' },
  { id: '42', name: 'Senior Member 30', role: 'Senior Member', email: 'sm30@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-30.jpg' },
  { id: '43', name: 'Senior Member 31', role: 'Senior Member', email: 'sm31@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-31.jpg' },
  { id: '44', name: 'Junior Staff Member 1', role: 'Junior Staff', email: 'js1@university.edu', specialty: 'Support', photo_url: '/images/staff/junior-staff-1.jpg' },
  { id: '45', name: 'Junior Staff Member 2', role: 'Junior Staff', email: 'js2@university.edu', specialty: 'Administration', photo_url: '/images/staff/junior-staff-2.jpg' },
  { id: '46', name: 'Junior Staff Member 3', role: 'Junior Staff', email: 'js3@university.edu', specialty: 'Support', photo_url: '/images/staff/junior-staff-3.jpg' },
];

export default function AdminDashboard() {
  const [staff, setStaff] = useState<StaffProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load staff from localStorage on mount
    try {
      const savedStaff = localStorage.getItem('staff_profiles');
      if (savedStaff) {
        const saved = JSON.parse(savedStaff) as StaffProfile[];
        const renamed = saved.map((member) => {
          const nameUpdates: Record<string, string> = {
            'Senior Member 1': 'Nathaniel Kpogo Worlanyo',
            'Senior Member 10': 'Selina Okle Emma',
            'Senior Member 11': 'Philip Owusu PhD',
            'Senior Member 12': 'Joy Koney',
            'Senior Member 13': 'Justice Library',
            'Senior Member 14': 'Mark Anthony A. Alongya',
          };
          return nameUpdates[member.name] ? { ...member, name: nameUpdates[member.name] } : member;
        });
        const missingProfiles = MOCK_STAFF.filter((member) =>
          ['Ɔbenfo (Professor) Ọbádélé Bakari Kambon', 'Chika C. Mba', 'Dr. Eric Tamatey Lawer', 'Aba Amandzewaa Anaman', 'Rev. Dr. Grace Sintim Adasi', 'Professor Samuel Aniegye Ntewusu'].includes(member.name) &&
          !renamed.some((savedMember) => savedMember.name === member.name),
        );
        const synced = [...renamed, ...missingProfiles];
        setStaff(synced);
        localStorage.setItem('staff_profiles', JSON.stringify(synced));
      } else {
        setStaff(MOCK_STAFF);
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
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/senior-profile">
              <Button variant="outline">Senior Member Profile Form</Button>
            </Link>
            <Link href="/admin/staff/new">
              <Button>Add New Staff Member</Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading staff...</div>
        ) : filteredStaff.length === 0 && staff.length === 0 ? (
          <div className="text-center py-12 bg-muted/20 rounded-lg p-8">
            <p className="text-muted-foreground mb-4">No staff members yet. Click below to load initial staff data.</p>
            <Button onClick={handleSeedData} variant="default">
              Load Sample Staff Data
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
