import styled from 'styled-components'
import constants from '../constants.js'

const {gridAlpha} = constants

const Grid = styled.div`
  float: left;
  background: #FFF;
  width: 1024px;
  height: calc(100% - 20px);
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0, 0, 0, ${gridAlpha}) 31px, rgba(0, 0, 0, ${gridAlpha}) 32px),
    repeating-linear-gradient(-90deg, transparent, transparent 31px, rgba(0, 0, 0, ${gridAlpha}) 31px, rgba(0, 0, 0, ${gridAlpha}) 32px);
  background-position: left -7px;
  border-radius: 5px 0 0 5px;
`

export default Grid
