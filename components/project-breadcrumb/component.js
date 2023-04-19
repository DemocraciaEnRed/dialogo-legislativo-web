import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import BreadcrumbNav, { BreadcrumbWrapper } from '../../elements/breadcrumb-nav/component'
import BreadcrumbItem from '../../elements/breadcrumb-item/component'

const ProjectBreadcrumb = ({ title, id, section }) => (
  <BreadcrumbNav>
    <BreadcrumbWrapper>
      <Link href='/#projects'>
        <BreadcrumbItem>Propuestas</BreadcrumbItem>
      </Link>
      <Link href={`/propuesta?id=${id}`}>
        <BreadcrumbItem isActive={section === '/propuesta'}>{title}</BreadcrumbItem>
      </Link>
      { section === '/articulado' &&
        <Link href={`/articulado?id=${id}`}>
          <BreadcrumbItem isActive={section === '/articulado'}>Articulado de la propuesta</BreadcrumbItem>
        </Link>
      }
      { section === '/versiones' &&
        <Link href={`/versiones?id=${id}`}>
          <BreadcrumbItem isActive={section === '/articulado'}>Versiones</BreadcrumbItem>
        </Link>
      }
    </BreadcrumbWrapper>
  </BreadcrumbNav>
)

ProjectBreadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired
}

export default ProjectBreadcrumb
