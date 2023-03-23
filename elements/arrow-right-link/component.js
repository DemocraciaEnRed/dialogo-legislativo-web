import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import { arrowRight } from 'react-icons-kit/fa/arrowRight'
import PropTypes from 'prop-types'
import ArrowRight from '../../elements/arrow-right/component'
const StyledArrowLink = styled.div`
  width: 150px;
  height: 30px;
  display:flex;
  align-items: center;

`
const StyledButton = styled.button`
  min-width: 180px;
  max-width: 300px;
  height: 39px;
  font-size: 1.4rem;
  border-radius: 20px;
  cursor: pointer;
  padding: 0 2rem;
  font-family: var(--bold);
  background-color: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  
`

const ArrowRightlink = () => (
  <Link href={'/info?section=acerca-de'}>
    <StyledArrowLink>
      <StyledButton>Conocé más <Icon icon={arrowRight} size={20} /></StyledButton>
    </StyledArrowLink>

  </Link>

)

export default ArrowRightlink
