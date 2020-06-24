import React, { useMemo, useCallback } from 'react'
import {createEditor} from 'slate'
import {Slate, Editable, withReact } from 'slate-react'
import { CustomEditor } from './customeditor'
import {MenuButton, BlockButton} from './menubuttons'
import {ButtonToolbar, ButtonGroup } from 'react-bootstrap'

const SlateComponent = (props) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback(props => {
      return <Element {...props} />
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <Slate editor={editor} value={props.value} onChange={props.onChange}>
      <ButtonToolbar><ButtonGroup>
        <MenuButton editor={editor} format='bold' label={<strong>B</strong>} />{' '}
        <MenuButton editor={editor} format="italic" label={<em>i</em>} />{' '}
        <MenuButton editor={editor} format="underline" label={<u>U</u>}/>{' '}
        <BlockButton editor={editor} format="code" label='&lt;&gt;' />{' '}
        <BlockButton editor={editor} format="heading" label='H' />{' '}
        <BlockButton editor={editor} format="subheading" label='h' />{' '}
        <BlockButton editor={editor} format="numbered-list" label='123' />{' '}
        <BlockButton editor={editor} format="bulleted-list" label='&#x26AB;' />{' '}
      </ButtonGroup></ButtonToolbar><hr />
     <Editable
        renderElement={renderElement}
        renderLeaf = {renderLeaf}
        onKeyDown={(e)=> {
        if(! e.ctrlKey){
          return
        }
        switch(e.key){
          case '`':
          e.preventDefault();
          CustomEditor.toggleBlock(editor, 'code')
          break
          case 'b':
          e.preventDefault()
          CustomEditor.toggleMark(editor, 'bold')
          break
          case 'i':
          e.preventDefault();
          CustomEditor.toggleMark(editor, 'italic')
          break;
          case 'u':
          e.preventDefault();
          CustomEditor.toggleMark(editor, 'underline');
          break;
          default:
          break
        }}} autoFocus />
    </Slate>
  )}

const Leaf = ({attributes, children, leaf }) => {
  if(leaf.bold){children=<strong>{children}</strong>}
  if(leaf.italic){children=<em>{children}</em>}
  if(leaf.underline){children=<u>{children}</u>}
  return(<span {...attributes}>{children}</span>)
}

const Element = ({element, children, attributes}) => {
  switch(element.type){
    case 'code': return(<pre {...attributes}><code>{children}</code></pre>)
    case 'heading': return (<h1 {...attributes}>{children}</h1>)
    case 'subheading': return (<h2 {...attributes}>{children}</h2>)
    case 'numbered-list': return (<ol {...attributes}>{children}</ol>)
    case 'bulleted-list': return (<ul {...attributes}>{children}</ul>)
    case 'list-item': return(<li {...attributes}>{children}</li>)
    default: return <p {...attributes}>{children}</p>
  }
}

export default SlateComponent
