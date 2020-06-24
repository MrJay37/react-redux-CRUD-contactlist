import React, {useEffect} from 'react'
import {QuillEditor, QuillViewer} from './quill'

export const QuillEditorComponent = props => {
  useEffect(() =>{
    const quill = QuillEditor(".quillEditor")
    quill.setContents(props.delta)
    quill.on("text-change", function(delta, oldDelta, source){
      props.onChange(quill.getContents())
    })
  }, [props])

  return <div className='Container'>
          <div className="quillEditor"></div>
        </div>
}

export const QuillViewerComponent = props => {
  useEffect(() =>{
    const quillV = QuillViewer(('.' + props.classID))
    quillV.setContents(props.delta)
  }, [props])

  return <div className='Container'>
          <div className={props.classID}></div>
        </div>
}
