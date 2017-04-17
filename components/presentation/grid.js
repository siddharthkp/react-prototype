import styled from 'styled-components'

const Grid = styled.div`
  float: left;
  background: #FFF;
  width: 1024px;
  height: calc(100% - 20px);
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 31px, #EEE 31px, #EEE 32px),
    repeating-linear-gradient(-90deg, transparent, transparent 31px, #EEE 31px, #EEE 32px);
  background-position: left -7px;
`

export default Grid
