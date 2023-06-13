import styled from 'styled-components'

const SubmitInput = styled.input`
  min-width: 125px;
  max-width: 230px;
  height: 39px;
  background-color: var(--secondary-color);
  font-size: 1.4rem;
  color: var(--white);
  border-style: none;
  cursor: pointer;
  padding: 0 2rem;
  font-family: var(--bold);
  border-radius: 39.0428px;
  &:hover {
    background-color: var(--primary-color);
  }  
`

export default SubmitInput
