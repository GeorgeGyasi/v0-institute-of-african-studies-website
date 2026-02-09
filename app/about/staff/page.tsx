import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { StaffDirectory } from "@/components/staff/staff-directory"

export const metadata: Metadata = {
  title: "Staff",
  description:
    "Faculty and staff of the Institute of African Studies, University of Ghana.",
}

export default function StaffPage() {
  return (
    <>
      <PageHeader
        title="Staff Directory"
        subtitle="Faculty, research fellows, and administrative staff of the Institute"
      />
      <StaffDirectory />
    </>
  )
}
