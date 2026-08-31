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
  { id: '2', name: 'Professor Deborah Atobrah', role: 'Senior Member', email: 'datobrah@ug.edu.gh', specialty: 'African Women & Development', photo_url: '/images/professor-deborah-atobrah.png' },
  { id: '3', name: 'Dr. Laryea Akwetteh', role: 'Senior Member', email: 'lakwetteh@ug.edu.gh', specialty: 'African Cultural Heritage', photo_url: '/images/dr-laryea-akwetteh.png' },
  { id: '4', name: 'Dr. Benjamin Kobina Kwansa', role: 'Senior Member', email: 'bkkwansa@ug.edu.gh', specialty: 'African Heritage Management', photo_url: '/images/dr-benjamin-kobina-kwansa.png' },
  { id: '5', name: 'Prof. Avorgbedor', role: 'Senior Member', email: 'p.avorgbedor@university.edu', specialty: 'Music & Culture', photo_url: '/images/professor-avorgbedor.jpg' },
  { id: '6', name: 'Dr. Nii Dortey', role: 'Senior Member', email: 'dr.dortey@university.edu', specialty: 'Literature', photo_url: '/images/dr-nii-dortey.jpg' },
  { id: '7', name: 'Prof. Esi Sutherland-Addy', role: 'Senior Member', email: 'esutherland-addy@ug.edu.gh', specialty: 'African Literature & Cultural Policy', photo_url: '/images/professor-esi-sutherland.jpg' },
  { id: '8', name: 'Dr. Aristedes Narh Hargoe', role: 'Senior Member', email: 'ahargoe@ug.edu.gh', specialty: 'African Environmental Conservation', photo_url: '/images/dr-aristedes-narh-hargoe.png' },
  { id: '9', name: 'Dr. Peter Narh', role: 'Senior Member', email: 'p.narh@university.edu', specialty: 'Economics', photo_url: '/images/dr-peter-narh.jpg' },
  { id: '10', name: 'Prof. Hasiyatu Abubakari', role: 'Associate Professor', email: 'haabubakari@ug.edu.gh', specialty: 'African Linguistics', photo_url: '/images/dr-hasiyatu-abubakari.jpg' },
  { id: '11', name: 'Dr. Mjiba Frehiwot', role: 'Senior Member', email: 'm.frehiwot@university.edu', specialty: 'Religious Studies', photo_url: '/images/dr-mjiba-frehiwot.jpg' },
  { id: '12', name: 'George Gyasi Gyesaw', role: 'Senior Member', email: 'g.gyesaw@university.edu', specialty: 'Cultural Studies', photo_url: '/images/george-gyesaw.jpg' },
  { id: '47', name: 'Ɔbenfo (Professor) Ọbádélé Bakari Kambon', role: 'Senior Member', email: '', specialty: 'African Philosophy & Consciousness', photo_url: '/images/obadele-bakari-kambon.jpg' },
  { id: '49', name: 'Chika C. Mba', role: 'Senior Member', email: 'cmba@ug.edu.gh', specialty: 'African Philosophy & Decolonial Theory', photo_url: '/images/dr-chika-mba.jpg' },
  { id: '50', name: 'Dr. Eric Tamatey Lawer', role: 'Senior Member', email: 'elawer@ug.edu.gh', specialty: 'Natural Resource Governance & Energy Transition', photo_url: '/images/dr-eric-tamatey-lawer.jpg' },
  { id: '51', name: 'Aba Amandzewaa Anaman', role: 'Senior Member', email: 'aaanaman@ug.edu.gh', specialty: 'Academic Librarianship & Information Science', photo_url: '/images/aba-amandzewaa-anaman.jpg' },
  { id: '52', name: 'Rev. Dr. Grace Sintim Adasi', role: 'Senior Member', email: 'gadasi@ug.edu.gh', specialty: 'Religions, Philosophy & Gender Studies', photo_url: '/images/rev-dr-grace-sintim-adasi.png' },
  { id: '53', name: 'Professor Samuel Aniegye Ntewusu', role: 'Senior Member', email: 'santewusu@ug.edu.gh', specialty: 'African History, Culture & Development', photo_url: '/images/professor-samuel-ntewusu.jpg' },
  { id: '54', name: 'Vivian Appiah, CA', role: 'Senior Member', email: 'voduro@ug.edu.gh', specialty: 'Finance & Accounting', photo_url: '/images/vivian-appiah.jpg' },
  { id: '55', name: 'Professor Michael Kpessa-Whyte', role: 'Senior Member', email: 'mkpessa-whyte@ug.edu.gh', specialty: 'African Politics & Comparative Public Policy', photo_url: '/images/professor-michael-kpessa-whyte.jpg' },
  { id: '56', name: 'Dr. Genevieve Nrenzah', role: 'Senior Member', email: 'gnrenzah@ug.edu.gh', specialty: 'Religions & Philosophy', photo_url: '/images/dr-genevieve-nrenzah.png' },
  { id: '57', name: 'Dr. Pius Siakwah', role: 'Senior Member', email: 'psiakwah@ug.edu.gh', specialty: 'African Social Development', photo_url: '/images/dr-pius-siakwah.png' },
  { id: '58', name: 'Professor. (Mrs) Mercy Akrofi Ansah', role: 'Senior Member', email: 'maansah@ug.edu.gh', specialty: 'Language, Literature and Drama', photo_url: '/images/professor-mercy-akrofi-ansah.jpg' },
  { id: '13', name: 'Nathaniel Kpogo Worlanyo', role: 'Senior Research Assistant', email: 'nkpogo@ug.edu.gh', specialty: 'Office: IAS Old Site', photo_url: '/images/staff/nathaniel-kpogo-worlanyo.jpg' },
  { id: '14', name: 'Diana Abena Mensah-Addo', role: 'Principal Administrative Assistant', email: 'damensah@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/diana-abena-mensah-addo.jpg' },
  { id: '15', name: 'Fidelia Ametewee', role: 'Principal Research Assistant', email: 'fametewee@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/fidelia-ametewee.jpg' },
  { id: '22', name: 'Selina Emma Okle', role: 'Senior Research Assistant', email: 'snalaryea@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/selina-emma-okle.jpg' },
  { id: '23', name: 'Dr. Philip Owusu', role: 'Curator', email: 'phowusu@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/dr-philip-owusu.jpg' },
  { id: '26', name: 'Dr. Apuri Mark-Anthony Alongya', role: 'Chief Administrative Assistant', email: 'maalongya@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/dr-apuri-mark-anthony-alongya.jpg' },
  { id: '44', name: 'Wiafe Francisca', role: 'Junior Lib. Assistant', email: 'wfrancisca@ug.edu.gh', specialty: '', photo_url: '/images/staff/junior-staff-1.jpg' },
  { id: '45', name: 'Mr. Obeng', role: 'Driver', email: 'obeng@ug.edu.gh', specialty: '', photo_url: '/images/staff/junior-staff-2.jpg' },
  { id: '46', name: 'Ziem Lydia', role: 'Cleaner', email: 'zlydia@ug.edu.gh', specialty: '', photo_url: '/images/staff/junior-staff-3.jpg' },
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
        // Drop removed placeholder staff (generic "Senior Member N", Joy Koney, Justice Library)
        const removedNames = ['Joy Koney', 'Justice Library'];
        const pruned = saved.filter(
          (member) => !/^Senior Member \d+$/.test(member.name) && !removedNames.includes(member.name),
        );
        // Refresh senior/junior staff members whose details were updated with real name/role/email/office/photo
        const refreshedIds = ['10', '13', '14', '15', '22', '23', '26', '44', '45', '46'];
        const renamed = pruned.map((member) => {
          if (refreshedIds.includes(member.id)) {
            const updated = MOCK_STAFF.find((m) => m.id === member.id);
            if (updated) return { ...member, ...updated };
          }
          return member;
        });
        const missingProfiles = MOCK_STAFF.filter((member) =>
          ['Ɔbenfo (Professor) Ọbádélé Bakari Kambon', 'Chika C. Mba', 'Dr. Eric Tamatey Lawer', 'Aba Amandzewaa Anaman', 'Rev. Dr. Grace Sintim Adasi', 'Professor Samuel Aniegye Ntewusu', 'Vivian Appiah, CA', 'Professor Michael Kpessa-Whyte', 'Dr. Genevieve Nrenzah', 'Dr. Pius Siakwah'].includes(member.name) &&
          !renamed.some((savedMember) => savedMember.name === member.name),
        );
        const synced = [...renamed, ...missingProfiles].map((member) => member.name === 'Professor Michael Kpessa-Whyte' ? { ...member, email: 'mkpessa-whyte@ug.edu.gh' } : member);
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
