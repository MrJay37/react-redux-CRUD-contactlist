import React from 'react'
import {Button} from 'react-bootstrap'
import {CustomEditor} from './customeditor'

export const MenuButton = props => (
  <Button variant="secondary"
    onClick={event => {
      event.preventDefault()
      CustomEditor.toggleMark(props.editor, props.format)
    }}
  >{props.label}</Button>
)

export const BlockButton = props => (
  <Button variant="secondary"
    onClick={event => {
      event.preventDefault()
      CustomEditor.toggleBlock(props.editor, props.format)
    }}
  >{props.label}</Button>
)
