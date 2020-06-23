import {Editor, Transforms } from 'slate';

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const CustomEditor ={
  isMarkActive(editor, format) {
    const [match] = Editor.nodes(editor, {
      match: n => n[format]===true,
      universal:true
    })
    return !!match
  },

  isBlockActive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: n=> n.type === type
    })
    return !!match
  },

  toggleMark(editor,format){
    const isActive = CustomEditor.isMarkActive(editor, format)
     if(isActive){
       Editor.removeMark(editor, format)
     }
     else{
       Editor.addMark(editor, format, true)
     }
    },

  toggleBlock(editor, type){
    const isActive = CustomEditor.isBlockActive(editor, type)
    const isList = LIST_TYPES.includes(type)

    Transforms.unwrapNodes(editor, {
      match: n=> LIST_TYPES.includes(n.type),
      split: true
    })
    Transforms.setNodes(editor,
    { type: isActive ? 'paragraph' : isList ? 'list-item' : type },
    { match: n => Editor.isBlock(editor, n)})

    if(!isActive && isList){
      const listBlock = {type: type, children: []}
      Transforms.wrapNodes(editor, listBlock)
    }
  }
}

export default CustomEditor
