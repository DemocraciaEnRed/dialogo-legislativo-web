import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import { version } from '../../package.json'

const Label = styled.span`
  width: 95px;
  height: 20px;
  border-radius: 4px;
  background-color: var(--secondary-color);
  font-size: 1.0rem;
  font-weight: 500;
  color: #4a5d68;
  padding: 5px 8px;
  text-transform: uppercase;
  align-self: flex-end;
  margin-bottom: 8px;
  position: relative;
  bottom: 7px
  &:hover {
    > .version {
      display: block;
      top: 5px;
    }
  }
`
const Version = styled.span`
  font-size: 1.0rem;
  font-weight: 500;
  color: var(--primary-color);
  font-family: var(--bold);
  text-transform: uppercase;
  position: absolute;
  left: 70px;
  display: none;
`

const BetaLabelContainer = styled.div`
  width:33%;
  display:flex;
  align-items:flex-end;
  `

const BetaLabel = () => (
  <BetaLabelContainer>
    <Link href='/info?section=sobre-el-sitio'>
      <a>
        <Label>Versión
          <Version className='version'>{version}</Version>
        </Label>
      </a>
    </Link>
  </BetaLabelContainer>
)

export default BetaLabel
