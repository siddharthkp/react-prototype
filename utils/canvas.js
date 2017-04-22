import componentSpec from '../utils/componentSpec'
import getCSS from '../utils/css'

const defaultComponent = {}
for (let key in componentSpec) defaultComponent[key] = componentSpec[key].default

const add = () => {
  states.push({state: canvas.components.slice(0)})
  const component = Object.assign({}, defaultComponent)
  canvas.components.push(component)
  canvas.active = canvas.components.length - 1
  persist()
  return canvas
}

const remove = () => {
  states.push({state: canvas.components.slice(0)})
  canvas.components[canvas.active].display = 'none'
  canvas.components[canvas.active].hidden = true
  canvas.active = canvas.components.length - 1
  persist()
  return canvas
}

const select = (index) => {
  canvas.active = index
  return canvas
}

const states = []
if (typeof window !== 'undefined') window.states = states

const update = (properties) => {
  states.push({state: canvas.components.slice()})
  Object.assign(canvas.components[canvas.active], properties)
  persist()
  return canvas
}

const undo = () => {
  if (states.length) {
    canvas.components = states[states.length - 1].state
    persist()
  }
  return canvas
}

const redo = () => {

}

const persist = () => {
  const state = canvas.components.slice().filter(component => !component.hidden)
  localStorage.setItem('components', JSON.stringify(state))
}

const restore = () => {
  if (localStorage.components) canvas.components = JSON.parse(localStorage.components)
  if (!canvas.components.length) canvas.add()
  return canvas
}

const getComponents = () => {
  let string = `
import React from 'react'
import styled from 'styled-components'
  `
  canvas.components.map(component => {
    const styles = getCSS(component)
    const name = styles.name

    delete styles.name
    delete styles.transition
    delete styles.position
    delete styles.display
    delete styles.fill

    string += `
const ${name.charAt(0).toUpperCase() + component.name.slice(1)} = styled.div\`
  ${JSON.stringify(styles, null, 2).slice(1).slice(0, -1)}
\`
    `
  })
  return string
}

const download = () => {
  const a = document.createElement("a")
  const data = getComponents()
  const file = new Blob([data], {type: 'text'})

  const url = URL.createObjectURL(file)
  a.href = url
  a.download = 'components.js'
  document.body.appendChild(a)
  a.click()
  setTimeout(function() {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 0)
}

const canvas = {
  components: [], active: 0,
  add, remove, update, select, restore, undo, redo, export: download
}

export default canvas
