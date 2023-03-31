import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

const GeneralWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border-right: 1px solid #CACACA;
  margin-right: 20px;
`

const Wrapper = styled.div`
display: flex;
font-size: 18px;
height: 100%;
padding: 0 10px 0 10px;
justify-content: space-around;
align-items: flex-start
flex-direction: column;
@media (max-width:700px){
  display: none;
}
`

const StyledNumber = styled.p`
font-family:var(--light);
padding-right: 5px
font-weight:300;
font-size: 16px;
text-align: center;
color: var(--primary-color);
`

const StyledText = styled(StyledNumber)`
  align-items: center;
  padding-right: 5px
  font-size: 12px;
  color:#333
`
const AnIcon = styled.img`
  width: 16px;
  height: 16px;
`

const AuxFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const StyledCommentsCounter = styled.div`
  // padding: 0 2rem;
  padding-bottom: 3px;
  display: flex;
  align-items: center;
`
const StyledCommentsCounterSpecial = styled.div`
  // padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledApoyoCounter = styled(StyledCommentsCounter)``

const ArticlesCommentsCounter = ({ commentsCount, apoyosCount, emoteCount, project }) => (
  <GeneralWrapper>

  <Wrapper>
    <StyledCommentsCounterSpecial>
      <AuxFlex>
        <StyledNumber>{commentsCount}</StyledNumber>
        <AnIcon src='/static/assets/pencil-black.svg' />
      </AuxFlex>
      <StyledText>Aportes</StyledText>
    </StyledCommentsCounterSpecial>
    {/* <StyledApoyoCounter>
      <StyledNumber>{apoyosCount}</StyledNumber>
      <StyledText>Apoyos</StyledText>
      <AnIcon src='/static/assets/hand-holding-heart-solid.svg' />
    </StyledApoyoCounter> */}
  </Wrapper>
  <Wrapper>
    <StyledCommentsCounter>
      <StyledNumber>{(emoteCount && emoteCount.likes) || 0}</StyledNumber>
      <StyledText>Me gusta</StyledText>
      <AnIcon src='/static/assets/thumb-up.svg' />
    </StyledCommentsCounter>
    <StyledApoyoCounter>
      <StyledNumber>{(emoteCount && emoteCount.loves) || 0}</StyledNumber>
      <StyledText>Me encanta</StyledText>
      <AnIcon src='/static/assets/heart.svg' />
    </StyledApoyoCounter>
  </Wrapper>
  <Wrapper>
    <StyledCommentsCounter>
      <StyledNumber>{(emoteCount && emoteCount.improve) || 0}</StyledNumber>
      <StyledText>Lo mejoraria</StyledText>
      <AnIcon src='/static/assets/lightbulb.svg' />
    </StyledCommentsCounter>
    <StyledApoyoCounter>
      <StyledNumber>{(emoteCount && emoteCount.dislike) || 0}</StyledNumber>
      <StyledText>Me disgusta</StyledText>
      <AnIcon src='/static/assets/thumb-down.svg' />
    </StyledApoyoCounter>
  </Wrapper>
  </GeneralWrapper>
)

ArticlesCommentsCounter.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  apoyosCount: PropTypes.number
}

export default ArticlesCommentsCounter
