'use client'
import Link from 'next/link'
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as BreadcrumbShadcn
} from '../ui'
import { usePathname } from 'next/navigation'

export function Breadcrumb() {
  const currentPathname = usePathname()
  console.log(currentPathname)
  const pathnames = currentPathname.split('/').filter(Boolean)
  console.log(pathnames)

  const breadcrumbElements = pathnames.map((name, index) => {
    const href = `/${pathnames.slice(0, index + 1).join('/')}`
    const isLast = index === pathnames.length - 1

    const BreadcrumbShadcn = isLast ? (
      <BreadcrumbItem key={name}>
        <BreadcrumbPage>{name}</BreadcrumbPage>
      </BreadcrumbItem>
    ) : (
      <>
        <BreadcrumbItem key={name}>
          <BreadcrumbLink asChild>
            <Link href={href}>{name}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </>
    )

    return BreadcrumbShadcn
  })
  return (
    <BreadcrumbShadcn className="hidden md:flex">
      <BreadcrumbList>{breadcrumbElements}</BreadcrumbList>
    </BreadcrumbShadcn>
  )
}
