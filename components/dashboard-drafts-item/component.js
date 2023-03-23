import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import CircularProgressBar from '../../components/circular-progress-bar/component'
import CircularProgressBarTitle from '../../elements/circular-progress-bar-title/component'
import CircularBar from '../../elements/circular-bar/component'

const DraftContainer = styled.div`
  width: 85%;
  margin-left:auto;
  margin-right:auto;
  height:150px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  box-sizing:border-box;
  border-bottom:1px solid #e9e9e9;
  &:last-child {
    border-bottom:none;
    }
`

const LeftContainer = styled.div`
  width: 70%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  box-sizing:border-box;
  padding-top:20px;
`
const RightContainer = styled.div`
  width: 30%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
  padding-left:20px;
`
const TagTitle = styled.div`
  color:var(--primary-color);
  font-size:1.4rem;
  text-align:left;
  text-transform:uppercase;
`

const Title = styled.div`
  font-size:2.4rem;
  font-family:var(--bold);
  padding-bottom:.5em;
  padding-top:.3em;
`

const DateCreated = styled.div`
  font-size:1.4rem;
  text-align:left;
  color:#9b9b9b;
`

const DashboardDraftItem = ({ project }) => (

  <DraftContainer>
    <LeftContainer>
      <TagTitle>{project.tagTitle}</TagTitle>
      <Title>{project.title}</Title>
      <DateCreated>{project.limitDate}</DateCreated>
    </LeftContainer>
    <RightContainer>
      <CircularProgressBar>
        <CircularProgressBarTitle>Estado</CircularProgressBarTitle>
        <CircularBar progress={80 + '%'} />
      </CircularProgressBar>
    </RightContainer>

  </DraftContainer>
)

DashboardDraftItem.propTypes = {
  project: PropTypes.shape({
    DateCreated: PropTypes.string,
    title: PropTypes.string.isRequired,
    tagTitle: PropTypes.string.isRequired
  }).isRequired
}

export default DashboardDraftItem
