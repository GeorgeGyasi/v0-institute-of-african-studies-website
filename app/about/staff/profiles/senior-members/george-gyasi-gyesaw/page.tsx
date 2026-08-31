import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export default function GeorgeGyasiGyesawPage() {
  return <StaffProfileDetail
    name="George Gyasi Gyesaw"
    role="Archivist"
    specialty="J. H. Kwabena Nketia Archives"
    email="ggyesaw@ug.edu.gh"
    office="IAS Old Site"
    photo="/images/staff/senior-member-6.jpg"
    categorySlug="george-gyasi-gyesaw"
    bio="George Gyasi Gyesaw is the Archivist overseeing the management and operations of the J. H. Kwabena Nketia Archives at the Institute of African Studies, University of Ghana. He has significant experience engaging with archives locally and internationally, focusing on archival support and learning best practices. He was awarded the TRANS NATIONAL ACCESS FELLOWSHIP to conduct research at the University of Palermo, Italy. His expertise includes archiving in digital humanities and applying Artificial Intelligence in archival science."
    education={[
      { degree: "B.A. Information Studies, Geography, and Human Resource Management", institution: "University of Ghana", year: "Not available" },
      { degree: "PgDip, Management Information Systems", institution: "Ghana Institute of Management and Public Administration (GIMPA)", year: "Not available" },
      { degree: "MSc. Information Technology", institution: "Kwame Nkrumah University of Science and Technology (KNUST)", year: "Not available" },
    ]}
    researchAreas={["Archival Research and Projects", "Digital humanities and archiving", "Artificial Intelligence in archival science", "Cultural heritage preservation and digitization"]}
    publications={[{ title: "From Film to Files: Impact of Gerald Annan Photographic Collection", year: "2024" }]}
    awards={["TRANS NATIONAL ACCESS FELLOWSHIP, University of Palermo, Italy"]}
  />
}
