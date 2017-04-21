import componentSpec from '../utils/componentSpec'

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

const canvas = {
  components: [], active: 0,
  add, remove, update, select, restore, undo, redo
}

export default canvas
