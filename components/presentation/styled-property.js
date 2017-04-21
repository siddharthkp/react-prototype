import styled from 'styled-components'

const StyledProperty = styled.div`
  padding: 10px;
  height: 30px;
  > div:first-child {
    float: left;
    width: 45%;
  }
  > div:nth-child(2) {
    float: left;
    width: 45%
  }
  > div:nth-child(3) {
    clear:both;
  }
`

export default StyledProperty
