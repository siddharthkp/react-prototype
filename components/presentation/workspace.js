import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

const Workspace = styled.div`
  background: #eee;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`

export default Workspace
