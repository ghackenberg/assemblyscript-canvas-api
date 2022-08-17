import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './components/Root'

const div = document.createElement('div')

document.body.appendChild(div)

const root = createRoot(div)

root.render(<Root/>)