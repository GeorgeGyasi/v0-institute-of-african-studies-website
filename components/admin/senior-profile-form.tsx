'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export type SeniorProfileFormData = {
  shortBio: string
  email: string
  position: string
  specialisation: string
  education: string
  researchAreas: string
  currentProjects: string
  editedBooks: string
  bookChapters: string
  journalArticles: string
  workingPapers: string
  googleScholarUrl: string
  teaching: string
  universityBoards: string
  externalBoards: string
  editorialBoards: string
  associations: string
}

const emptyProfile: SeniorProfileFormData = {
  shortBio: '', email: '', position: '', specialisation: '', education: '', researchAreas: '',
  currentProjects: '', editedBooks: '', bookChapters: '', journalArticles: '', workingPapers: '',
  googleScholarUrl: '', teaching: '', universityBoards: '', externalBoards: '', editorialBoards: '', associations: '',
}

const sections = [
  ['overview', 'Overview'], ['education', 'Education'], ['research', 'Research'],
  ['publications', 'Publications'], ['teaching', 'Teaching'], ['boards', 'Boards'],
  ['service', 'Service'],
]

function Field({ label, name, value, onChange, multiline = false, placeholder }: { label: string; name: keyof SeniorProfileFormData; value: string; onChange: (name: keyof SeniorProfileFormData, value: string) => void; multiline?: boolean; placeholder?: string }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium">
      <span>{label}</span>
      {multiline ? (
        <Textarea value={value} onChange={(event) => onChange(name, event.target.value)} placeholder={placeholder} rows={5} />
      ) : (
        <Input value={value} onChange={(event) => onChange(name, event.target.value)} placeholder={placeholder} />
      )}
    </label>
  )
}

export function SeniorProfileForm({ initialValue, onSave }: { initialValue?: Partial<SeniorProfileFormData>; onSave?: (value: SeniorProfileFormData) => void }) {
  const [form, setForm] = useState<SeniorProfileFormData>({ ...emptyProfile, ...initialValue })
  const [saved, setSaved] = useState(false)
  const update = (name: keyof SeniorProfileFormData, value: string) => setForm((current) => ({ ...current, [name]: value }))
  const completion = useMemo(() => Math.round((Object.values(form).filter(Boolean).length / Object.values(form).length) * 100), [form])
  const save = () => { onSave?.(form); setSaved(true); window.setTimeout(() => setSaved(false), 2500) }

  return (
    <div className="grid gap-6 lg:grid-cols-[190px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <Card>
          <CardHeader className="p-4"><CardTitle className="text-base">Profile sections</CardTitle><CardDescription>{completion}% complete</CardDescription></CardHeader>
          <CardContent className="flex gap-2 overflow-x-auto p-4 lg:flex-col">
            {sections.map(([id, label]) => <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{label}</a>)}
          </CardContent>
        </Card>
      </aside>
      <div className="flex min-w-0 flex-col gap-6">
        <section id="overview"><Card><CardHeader><CardTitle>Overview</CardTitle><CardDescription>Core information displayed at the top of the public profile.</CardDescription></CardHeader><CardContent className="grid gap-5 md:grid-cols-2"><Field label="Email address" name="email" value={form.email} onChange={update} placeholder="name@ug.edu.gh" /><Field label="Position" name="position" value={form.position} onChange={update} /><Field label="Specialisation" name="specialisation" value={form.specialisation} onChange={update} /><div className="md:col-span-2"><Field label="Short bio" name="shortBio" value={form.shortBio} onChange={update} multiline /></div></CardContent></Card></section>
        <section id="education"><Card><CardHeader><CardTitle>Education</CardTitle></CardHeader><CardContent><Field label="Degrees, institutions, dates and qualifications" name="education" value={form.education} onChange={update} multiline placeholder="One qualification per line" /></CardContent></Card></section>
        <section id="research"><Card><CardHeader><CardTitle>Research</CardTitle></CardHeader><CardContent className="grid gap-5"><Field label="Research Areas" name="researchAreas" value={form.researchAreas} onChange={update} multiline /><Field label="Current Research and Publication Projects" name="currentProjects" value={form.currentProjects} onChange={update} multiline /></CardContent></Card></section>
        <section id="publications"><Card><CardHeader><CardTitle>Recent Publications</CardTitle><CardDescription>Share major works only. Use one publication per line.</CardDescription></CardHeader><CardContent className="grid gap-5"><Field label="Google Scholar Web link" name="googleScholarUrl" value={form.googleScholarUrl} onChange={update} placeholder="https://scholar.google.com/..." /><Field label="Edited Books and Special Issues" name="editedBooks" value={form.editedBooks} onChange={update} multiline /><Field label="Book Chapters" name="bookChapters" value={form.bookChapters} onChange={update} multiline /><Field label="Journal Articles" name="journalArticles" value={form.journalArticles} onChange={update} multiline /><Field label="Refereed Working Papers" name="workingPapers" value={form.workingPapers} onChange={update} multiline /></CardContent></Card></section>
        <section id="teaching"><Card><CardHeader><CardTitle>Teaching and Supervision</CardTitle></CardHeader><CardContent><Field label="Courses, supervision and mentoring" name="teaching" value={form.teaching} onChange={update} multiline /></CardContent></Card></section>
        <section id="boards"><Card><CardHeader><CardTitle>Board Memberships and Committees</CardTitle></CardHeader><CardContent className="grid gap-5 md:grid-cols-2"><Field label="University of Ghana" name="universityBoards" value={form.universityBoards} onChange={update} multiline /><Field label="External Board Members" name="externalBoards" value={form.externalBoards} onChange={update} multiline /></CardContent></Card></section>
        <section id="service"><Card><CardHeader><CardTitle>Professional Service</CardTitle></CardHeader><CardContent className="grid gap-5"><Field label="Editorial Board Memberships" name="editorialBoards" value={form.editorialBoards} onChange={update} multiline /><Field label="Professional and Civil Society Associations" name="associations" value={form.associations} onChange={update} multiline /></CardContent></Card></section>
        <div className="sticky bottom-4 flex items-center justify-end gap-3 rounded-lg border bg-background/95 p-3 shadow-lg backdrop-blur"><span className="mr-auto text-sm text-muted-foreground">{saved ? 'Profile saved' : 'Changes are ready to save'}</span><Button type="button" onClick={save}>Save profile</Button></div>
      </div>
    </div>
  )
}
