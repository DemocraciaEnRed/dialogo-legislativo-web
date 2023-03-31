import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.div`
  width: ${(props) => props.small ? '15px' : '30px'};
  height: ${(props) => props.small ? '15px' : '30px'};
  background-image: url('${(props) => props.img}');
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 15px;
  @media (max-width: 700px) {
    width: ${(props) => props.small ? '15px' : '20px'};
    height: ${(props) => props.small ? '15px' : '20px'};
  }
`

const ActivityIcon = ({ img, size }) => (
  <StyledIcon img={img} size={size} />
)

ActivityIcon.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.string
}

export default ActivityIcon
