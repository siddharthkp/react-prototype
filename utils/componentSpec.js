export default {
  name:         {default: 'component', type: 'text'},
  width:        {default: 96, type: 'number', min: 32, max: 1024, step: 32},
  height:       {default: 64, type: 'number', min: 32, max: 1024, step: 32},
  background:   {default: '#f47373', type: 'color'},
  border:       {default: 0, type: 'number', min: 0, max: 25, step: 1},
  fill:         {default: 1, type: 'number', min: 0, max: 1, step: 1}
}
