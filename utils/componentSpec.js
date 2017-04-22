const spec = {
  name:             {default: 'component', type: 'text'},

  top:              {default: 62, type: 'number', unit: 'px', min: 0, max: 1024, step: 32},
  left:             {default: 190, type: 'number', unit: 'px', min: 0, max: 1024, step: 32},
  width:            {default: 96, type: 'number', min: 0, max: 1024, step: 32, unit: 'px'},
  height:           {default: 64, type: 'number', min: 0, max: 1024, step: 32, unit: 'px'},

  fill:             {default: 1, type: 'number', min: 0, max: 1, step: 1},
  background:       {default: '#13CE66', type: 'color'},

  'border-radius':  {default: 0, type: 'number', min: 0, max: 25, step: 1, displayName: 'rounded', unit: 'px'},
  'border-color':   {default: '#f47373', type: 'color'},
  'border-width':   {default: 0, type: 'number', min: 0, max: 12, step: 1, unit: 'px'},

  opacity:          {default: 100, type: 'number', min: 0, max: 100, step: 10},

  'border-style':   {default: 'solid', type: 'text', hidden: true},
  position:         {default: 'absolute', type: 'text', hidden: true},
  display:          {default: 'block', type: 'text', hidden: true},
  transition:       {default: 'all 0.1s', type: 'text', hidden: true}
}

export default spec
