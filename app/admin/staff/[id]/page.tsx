'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { StaffProfile } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

export default function StaffFormPage() {
  const router = useRouter();
  const params = useParams();
  const staffId = params.id as string;
  const isNew = staffId === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    specialty: '',
    email: '',
    bio: '',
    department: '',
    rank: '',
    phone: '',
    office: '',
    research_interests: '',
    publications: '',
    photo_url: '',
  });

  useEffect(() => {
    if (!isNew) {
      fetchStaff();
    }
  }, [staffId, isNew]);

  async function fetchStaff() {
    try {
      const supabase = getSupabaseClient();
      const { data, error: fetchError } = await supabase
        .from('staff_profiles')
        .select('*')
        .eq('id', staffId)
        .single();

      if (fetchError) {
        setError('Failed to load staff member');
        return;
      }

      if (data) {
        setFormData(data);
        if (data.photo_url) {
          setPreviewUrl(data.photo_url);
        }
      }
    } catch (err) {
      console.error('[v0] Fetch error:', err);
      setError('Failed to load staff member');
    } finally {
      setLoading(false);
    }
  }

  async function handleImageUpload(file: File) {
    try {
      setUploading(true);
      const supabase = getSupabaseClient();
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError, data } = await supabase.storage
        .from('staff-photos')
        .upload(fileName, file, { upsert: false });

      if (uploadError) {
        console.error('[v0] Upload error:', uploadError);
        setError('Failed to upload image');
        return;
      }

      const { data: publicData } = supabase.storage
        .from('staff-photos')
        .getPublicUrl(fileName);

      setFormData((prev) => ({
        ...prev,
        photo_url: publicData.publicUrl,
      }));
      setPreviewUrl(publicData.publicUrl);
    } catch (err) {
      console.error('[v0] Upload error:', err);
      setError('Failed to upload image');
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const supabase = getSupabaseBrowserClient();
      if (isNew) {
        const { error: insertError } = await supabase
          .from('staff_profiles')
          .insert([formData]);

        if (insertError) {
          setError(insertError.message);
          return;
        }
      } else {
        const { error: updateError } = await supabase
          .from('staff_profiles')
          .update(formData)
          .eq('id', staffId);

        if (updateError) {
          setError(updateError.message);
          return;
        }
      }

      router.push('/admin/dashboard');
    } catch (err) {
      console.error('[v0] Save error:', err);
      setError('Failed to save staff member');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl">
        <div className="mb-8">
          <Link href="/admin/dashboard">
            <Button variant="outline" className="mb-4">
              ← Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">
            {isNew ? 'Add Staff Member' : 'Edit Staff Member'}
          </h1>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Photo Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Profile Photo</label>
                <div className="flex gap-4">
                  {previewUrl && (
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file);
                      }}
                      disabled={uploading}
                      className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    {uploading && <p className="text-sm text-muted-foreground mt-2">Uploading...</p>}
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Role *
                </label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>

              {/* Specialty */}
              <div className="space-y-2">
                <label htmlFor="specialty" className="text-sm font-medium">
                  Specialty
                </label>
                <Input
                  id="specialty"
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <label htmlFor="department" className="text-sm font-medium">
                  Department
                </label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />
              </div>

              {/* Rank */}
              <div className="space-y-2">
                <label htmlFor="rank" className="text-sm font-medium">
                  Rank
                </label>
                <Input
                  id="rank"
                  value={formData.rank}
                  onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Office */}
              <div className="space-y-2">
                <label htmlFor="office" className="text-sm font-medium">
                  Office
                </label>
                <Input
                  id="office"
                  value={formData.office}
                  onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                />
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                />
              </div>

              {/* Research Interests */}
              <div className="space-y-2">
                <label htmlFor="research" className="text-sm font-medium">
                  Research Interests
                </label>
                <textarea
                  id="research"
                  value={formData.research_interests}
                  onChange={(e) => setFormData({ ...formData, research_interests: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                />
              </div>

              {/* Publications */}
              <div className="space-y-2">
                <label htmlFor="publications" className="text-sm font-medium">
                  Publications
                </label>
                <textarea
                  id="publications"
                  value={formData.publications}
                  onChange={(e) => setFormData({ ...formData, publications: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                />
              </div>

              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">{error}</div>
              )}

              <div className="flex gap-4">
                <Button type="submit" disabled={saving}>
                  {saving ? 'Saving...' : 'Save'}
                </Button>
                <Link href="/admin/dashboard">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
