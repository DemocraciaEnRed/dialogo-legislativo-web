import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBarSubtitle = styled.div`
  height:2.9rem;
  max-width:25rem;
  display:flex;
  flex-direction:row;
  align-items:center;
`
const Span = styled.span`
  font-size:4rem;
  padding-right:0.5rem;
  padding-left:1rem;
  color:var(--primary-color);
  line-height:3.4rem;
  font-family:var(--bold);
  margin:0;
`
const ItemStyle = styled.p`
  width: 100px;
  height: 40px;
  font-size: 1.4rem;
  line-height: 1.43;
  color: #203340;
  margin:0;

`
const BarActivitySubtitle = ({ number, itemStyle }) => (
  <StyledBarSubtitle>
    <Span>{number}</Span>
    <ItemStyle>
      {number === 1 ? 'aporte' : 'aportes'} de usuarios
    </ItemStyle>
  </StyledBarSubtitle>
)

BarActivitySubtitle.propTypes = {
  number: PropTypes.number.isRequired,
  itemStyle: PropTypes.string.isRequired
}

export default BarActivitySubtitle
