import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import {timesCircle} from 'react-icons-kit/fa/timesCircle'
import {checkCircle} from 'react-icons-kit/fa/checkCircle'
import {lowVision} from 'react-icons-kit/fa/lowVision'
import {eye} from 'react-icons-kit/fa/eye'

const ClosedProposalWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #cacaca;
  padding: 7px 10px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  font-size:14px;
`

const ItemTitle = styled.div`
  font-size:16px;
  font-family: var(--bold);
  color:var(--black);
  margin-top: 8px;
`
const ProjectsTableRow = styled.tr`
 &:last-child{
   td {
     border-bottom: 0;
   }
 }
`
const ProjectsTableCell = styled.td`
  padding: 5px 2px;
  font-size: 13px;
  text-align: ${(props) => props.centered ? 'center' : 'left'};
  border-bottom: 1px solid #cacaca;
  & > a{
    color: var(--primary-color)
  }
  & > a:hover{
    color: red;
  }
  ${(props) => props.hiddenMobile && '@media(max-width:700px){display: none;}'}
`

const ProjectTitle = styled.p`
  font-size: 16px;
  // font-weight: 500;
  & > a{
    color: var(--primary-color)
  }
  & > a:hover{
    color: #363760;
  }
  @media(max-width:700px){
    font-size: 13px;
  }
`
const WithIcon = styled.p`
  display: flex
  color: ${(props) => props.color};
`
const MobileDetailWithIcon = styled.span`
  color: ${(props) => props.color};
`
const MobileDetail = styled.p`
  display: none;
  @media(max-width:700px){
  margin: 3px 0px 0px;
    display: block;
    font-size: 10px;
  }
`

const TagIcon = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 0.5rem;
  margin-bottom: 1px;
`


const formatDate = (createdAt, hour=false) => {
  let text = (createdAt.substring(0, 10).split('-').reverse().join('/'))
  if (hour) {
    // 2023-03-30T15:39:02.674Z
    text += " " + (createdAt.substring(11, 16))
  }
  return text
}

export default ({ project }) => (
  <ProjectsTableRow>
    <ProjectsTableCell>
      <ProjectTitle>
        <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>{project.currentVersion.content.title}</Link>
      </ProjectTitle>
      <MobileDetail>
        <MobileDetailWithIcon color={project.closed ? 'inherit' : 'green'}>{project.closed ? <Icon icon={timesCircle} size={12} /> : <Icon icon={checkCircle} size={12} /> }&nbsp;&nbsp;{project.closed ? 'Cerrado' : 'Abierto'}</MobileDetailWithIcon>&nbsp;&nbsp;-&nbsp;&nbsp;
        <MobileDetailWithIcon color={project.published ? 'inherit' : 'purple'}>{project.published ? <Icon icon={eye} size={12} /> : <Icon icon={lowVision} size={12} /> }&nbsp;&nbsp;{project.published ? 'Publico' : 'Oculto'}</MobileDetailWithIcon>&nbsp;&nbsp;-&nbsp;&nbsp;
        {project.commentsCount} Aport{project.commentsCount > 1 ? 'es' : 'e'}&nbsp;&nbsp;-&nbsp;&nbsp;
        {project.currentVersion.version} {project.currentVersion.version > 1 ? 'Versiones' : 'Versión'}&nbsp;&nbsp;-&nbsp;&nbsp;
        {project.emoteCount ? project.emoteCount.likes : project.emoteLike.length} <TagIcon src='/static/assets/thumb-up.svg' />;
        {project.emoteCount ? project.emoteCount.loves : project.emoteLove.length} <TagIcon src='/static/assets/heart.svg' />;
        {project.emoteCount ? project.emoteCount.improve : project.emoteImprove.length} <TagIcon src='/static/assets/lightbulb.svg' />;
        {project.emoteCount ? project.emoteCount.dislike : project.emoteDislike.length} <TagIcon src='/static/assets/thumb-down.svg' />
        <br/>
        Fecha de creación: {formatDate(project.createdAt, true)}&nbsp;&nbsp;-&nbsp;&nbsp;
        Fecha de cierre: {formatDate(project.currentVersion.content.closingDate)}
      </MobileDetail>
    </ProjectsTableCell>
    
    <ProjectsTableCell  hiddenMobile centered>
      <WithIcon color={project.closed ? 'inherit' : 'green'}>{project.closed ? <Icon icon={timesCircle} size={15} /> : <Icon icon={checkCircle} size={15} /> }&nbsp;&nbsp;{project.closed ? 'Cerrado' : 'Abierto'}</WithIcon>
      <WithIcon color={project.published ? 'inherit' : 'purple'}>{project.published ? <Icon icon={eye} size={15} /> : <Icon icon={lowVision} size={15} /> }&nbsp;&nbsp;{project.published ? 'Publico' : 'Oculto'}</WithIcon>
    </ProjectsTableCell>
    {window.location.pathname === '/admin' && <ProjectsTableCell>
    <Link href={{ pathname: '/userprofile', query: { id: project.author._id } }}>{project.author.fullname}</Link>
    </ProjectsTableCell>}
    <ProjectsTableCell  hiddenMobile centered>
      <p>
        {project.commentsCount} Aport{project.commentsCount > 1 ? 'es' : 'e'}
      </p>
      <p>{project.currentVersion.version} {project.currentVersion.version > 1 ? 'Versiones' : 'Versión'}</p>
    </ProjectsTableCell>
    <ProjectsTableCell  hiddenMobile centered>
      <p>
        {project.emoteCount ? project.emoteCount.total : project.emoteLike.length + project.emoteLove.length + project.emoteImprove.length + project.emoteDislike.length} Reacciones
      </p>
    </ProjectsTableCell>
    <ProjectsTableCell  hiddenMobile centered>
      <p>
        {project.emoteCount ? project.emoteCount.likes : project.emoteLike.length } <TagIcon src='/static/assets/thumb-up.svg' />
        {project.emoteCount ? project.emoteCount.loves : project.emoteLove.length } <TagIcon src='/static/assets/heart.svg' />
      </p>
      <p>      
        {project.emoteCount ? project.emoteCount.improve : project.emoteImprove.length } <TagIcon src='/static/assets/lightbulb.svg' />
        {project.emoteCount ? project.emoteCount.dislike : project.emoteDislike.length } <TagIcon src='/static/assets/thumb-down.svg' />
      </p>
    </ProjectsTableCell>    
    <ProjectsTableCell  hiddenMobile centered>
      {formatDate(project.createdAt, true)}
    </ProjectsTableCell>
    <ProjectsTableCell  hiddenMobile centered>
      {formatDate(project.currentVersion.content.closingDate)}
    </ProjectsTableCell>
    <ProjectsTableCell  hiddenMobile centered>
      <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>Ir a la propuesta ➔</Link>
    </ProjectsTableCell>
  </ProjectsTableRow>
)
