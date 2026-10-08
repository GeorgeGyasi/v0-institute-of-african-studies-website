'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SeniorProfileForm } from '@/components/admin/senior-profile-form'

export default function SeniorProfileEditorPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Senior Members</p>
            <h1 className="text-3xl font-bold tracking-tight text-balance">Professional profile form</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">Create a consistent public profile while keeping long publication lists easy to manage and easy to navigate.</p>
          </div>
          <Button asChild variant="outline"><Link href="/admin/dashboard">Back to staff management</Link></Button>
        </header>
        <SeniorProfileForm onSave={(profile) => { window.localStorage.setItem('senior_profile_draft', JSON.stringify(profile)) }} />
      </div>
    </main>
  )
}
