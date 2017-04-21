import componentSpec from '../utils/componentSpec'

const defaultComponent = {}
for (let key in componentSpec) defaultComponent[key] = componentSpec[key].default

const add = () => {
  const component = Object.assign({}, defaultComponent)
  canvas.components.push(component)
  canvas.active = canvas.components.length - 1
  return canvas
}

const remove = () => {
  canvas.components[canvas.active].left = -2000
  canvas.active = canvas.components.length - 1
  return canvas
}

const select = (index) => {
  canvas.active = index
  return canvas
}

const update = (properties) => {
  Object.assign(canvas.components[canvas.active], properties)
  persist()
  return canvas
}

const persist = () => {
  localStorage.setItem('components', JSON.stringify(canvas.components))
}

const restore = () => {
  if (localStorage.components) canvas.components = JSON.parse(localStorage.components)
  else canvas.add()
  return canvas
}

const canvas = {components: [], active: 0, add, remove, update, select, restore}

export default canvas
