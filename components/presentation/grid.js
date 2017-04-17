import styled from 'styled-components'
import {gridContrast} from '../constants.js'

const Grid = styled.div`
  float: left;
  background: #FFF;
  width: 1024px;
  height: calc(100% - 20px);
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0, 0, 0, ${gridContrast}) 31px, rgba(0, 0, 0, ${gridContrast}) 32px),
    repeating-linear-gradient(-90deg, transparent, transparent 31px, rgba(0, 0, 0, ${gridContrast}) 31px, rgba(0, 0, 0, ${gridContrast}) 32px);
  background-position: left -7px;
`

export default Grid
