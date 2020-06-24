import Quill from 'quill'
import 'quill/dist/quill.snow.css'

var EditorOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'code', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['image', 'code-block']
    ]
  },
  placeholder: 'Enter description here',
  theme: 'snow',
}

var ViewerOptions = {
  readOnly: true,
  placeholder: 'No description yet'
}

export const QuillEditor = divid =>  new Quill(divid, EditorOptions);

export const QuillViewer = divid => new Quill(divid, ViewerOptions)
