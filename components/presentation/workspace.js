import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }
`

const Workspace = styled.div`
  background: #DCE6E9;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`

export default Workspace
