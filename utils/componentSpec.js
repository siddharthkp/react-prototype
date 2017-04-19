const spec = {
  name:             {default: 'component', type: 'text'},
  width:            {default: 96, type: 'number', min: 0, max: 1024, step: 32, unit: 'px'},
  height:           {default: 64, type: 'number', min: 0, max: 1024, step: 32, unit: 'px'},
  background:       {default: '#f47373', type: 'color'},
  fill:             {default: 1, type: 'number', min: 0, max: 1, step: 1},
  'border-radius':  {default: 0, type: 'number', min: 0, max: 25, step: 1, displayName: 'rounded', unit: 'px'},
  'border-color':   {default: '#f47373', type: 'color'},
  'border-width':   {default: 0, type: 'number', min: 0, max: 12, step: 1, unit: 'px'},
  'border-style':   {default: 'solid', type: 'text'},
  'opacity':        {default: 100, type: 'number', min: 0, max: 100, step: 10},
  'position':       {default: 'absolute', type: 'text'},
  'top':            {default: 42, type: 'number', unit: 'px', min: 0, max: 1024, step: 32},
  'left':           {default: 42, type: 'number', unit: 'px', min: 0, max: 1024, step: 32},
  'transition':     {default: 'all 0.1s', type: 'text'}
}

export default spec
