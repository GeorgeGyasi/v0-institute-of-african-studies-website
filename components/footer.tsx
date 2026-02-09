import Link from "next/link"

const footerLinks = {
  institute: [
    { label: "About Us", href: "/about" },
    { label: "Research Areas", href: "/research" },
    { label: "Academic Units", href: "/units" },
    { label: "Publications", href: "/publications" },
  ],
  resources: [
    { label: "Events & Seminars", href: "/events" },
    { label: "Archives", href: "/units" },
    { label: "Library", href: "/units" },
    { label: "Contact Us", href: "/contact" },
  ],
  university: [
    { label: "University of Ghana", href: "https://www.ug.edu.gh" },
    { label: "Admissions", href: "https://www.ug.edu.gh/admissions" },
    { label: "Student Portal", href: "#" },
    { label: "Staff Directory", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <span className="text-lg font-bold text-secondary-foreground">
                  IAS
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Institute of African Studies
                </p>
                <p className="text-xs opacity-70">University of Ghana, Legon</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Advancing knowledge and understanding of African societies through
              interdisciplinary research, teaching, and public engagement since
              1961.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-90">
              Institute
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.institute.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-90">
              Resources
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-90">
              University
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.university.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-card/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs opacity-60">
              &copy; {new Date().getFullYear()} Institute of African Studies,
              University of Ghana. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-xs opacity-60 transition-opacity hover:opacity-100"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs opacity-60 transition-opacity hover:opacity-100"
              >
                Terms of Use
              </Link>
              <Link
                href="/contact"
                className="text-xs opacity-60 transition-opacity hover:opacity-100"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
