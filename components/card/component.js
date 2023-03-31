import React, {useState} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardHeader from '../../elements/card-header/component'
import CardSocial from '../../elements/card-social/component'
import CardApoyos from '../../elements/card-apoyos/component'
import CardContent from '../../elements/card-content/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const CardContainer = styled.div`
margin: 0 1% 30px;
width: 23%;
box-shadow: 0 4px 20px 0 rgba(0,0,0,0.05);
background-color: var(--white);
border: solid 1px #e9e9e9;
box-sizing: border-box;
// cursor: pointer;
display: block;
position: relative;
@media (max-width: 1408px) {
  width: 31%;
  }
@media (max-width: 1216px) {
  width: 48%;
  }
@media (max-width: 600px) {
  width: 100%;
  }
`

const Hr = styled.hr`
border: 1px solid var(--gray);
border-bottom: none:
`

const EmoteCount = styled.div`
  display: flex;
  // justify-content: ;
  align-items: center;
  border-top: 1px solid #cacaca;
  padding: 0.8rem 1rem;
`

const TagCount = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.reacted ? 'var(--primary-color)' : '#AD9CDA'};
  border-radius: 50px;
  padding: 3px 10px 2px 10px;
  margin-right: 1rem;
  color: var(--white);
`
const TagIcon = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 0.5rem;
  margin-bottom: 1px;
`

const TagNumber = styled.span`
  font-size: 1.2rem;
  line-height: 0;
  font-family: var(--bold);
  padding-top: 1px;
  // font-weight: 600;
`

const Card = ({ project, tags }) => {

  const [reaction, setReaction] = useState(project.userReaction);
  const [emoteCount, setEmoteCount] = useState(project.emoteCount || {
    like: 0,
    dislike: 0,
    love: 0,
    improve: 0,
    total: 0
  });
  
  const handleReaction = (reaction, emoteCount) => {
    setReaction(reaction)
    setEmoteCount(emoteCount)
  }

  return (
    <CardContainer>
      <Link href={{ pathname: '/propuesta', query: { id: project._id } }} style={{ cursor: 'pointer' }}>
        <a>
          {/* <CardHeader img={project.currentVersion.content.imageCover} published={project.published} /> */}
          {/* <CardHeader hasImage={project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0} img={`/static/assets/images/${tags && project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0 ? tags.find(x => project.currentVersion.content.tags[0] == x.value).key : 'trama-default'}.jpg`} published={project.published} /> */}
          <CardHeader published={project.published} project={project} />
          <CardContent
            project={project}
            closed={project.closed}
            closingDate={project.currentVersion.content.closingDate}
            creationDate={project.currentVersion.createdAt}
            tags={project.currentVersion.content.tags}
            tagList={tags} />
          <EmoteCount>
            <TagCount reacted={reaction === 'like'}>
              <TagIcon src='/static/assets/thumb-up-white.svg' />
              <TagNumber>{(emoteCount && emoteCount.likes) || 0}</TagNumber>
            </TagCount>
            <TagCount reacted={reaction === 'love'}>
              <TagIcon src='/static/assets/heart-white.svg' />
              <TagNumber>{(emoteCount && emoteCount.loves) || 0}</TagNumber>
            </TagCount>
            <TagCount reacted={reaction === 'improve'}>
              <TagIcon src='/static/assets/lightbulb-white.svg' />
              <TagNumber>{(emoteCount && emoteCount.improve) || 0}</TagNumber>
            </TagCount>
            <TagCount reacted={reaction === 'dislike'}>
              <TagIcon src='/static/assets/thumb-down-white.svg' />
              <TagNumber>{(emoteCount && emoteCount.dislike) || 0}</TagNumber>
            </TagCount>
          </EmoteCount>
        </a>
      </Link>
      <CardSocial commentaries={project.commentsCount}
        projectId={project._id}
        reaction={reaction}
        handleReaction={handleReaction}
        apoyosCount={project.apoyosCount}
        userIsApoyado={project.userIsApoyado} 
        closed={project.closed}/>
    </CardContainer>
  )
}

Card.propTypes = {
  project: PropTypes.object.isRequired,
  tags: PropTypes.array
}

export default Card
