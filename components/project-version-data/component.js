import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectVersion from '../../elements/project-version/component'
import ProjectCreationDate from '../../elements/project-creation-date/component'
import Link from 'next/link'

const StyledProjectVersionData = styled.div`
  display: flex;
  flex-direction:column;
  width:250px;
  height:50px;
`
const MoreLink = styled.div`
  font-size: 1.2rem;
  margin-top: 5px;
  color: var(--primary-color);
  text-transform: uppercase;
}
`
const formatDate = (createdAt, hour=false) => {
  let text = (createdAt.substring(0, 10).split('-').reverse().join('/'))
  if (hour) {
    // 2023-03-30T15:39:02.674Z
    text += " " + (createdAt.substring(11, 16))
  }
  return text
}
const ProjectVersionData = ({ project, version, createdAt }) => (
  <StyledProjectVersionData>
    <ProjectVersion version={version} />
    <ProjectCreationDate createdAt={formatDate(createdAt, true)} />
    <MoreLink >
      <Link href={{ pathname: '/versiones', query: { id: project } }}>Todas las versiones ➔</Link>
    </MoreLink>
  </StyledProjectVersionData>
)

ProjectVersionData.propTypes = {
  project: PropTypes.string,
  version: PropTypes.number.isRequired,
  createdAt: PropTypes.string
}

export default ProjectVersionData
