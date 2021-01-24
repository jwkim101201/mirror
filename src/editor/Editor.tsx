import { Component } from 'react'

interface EditorProps {
  isBlank: boolean,
  designFile?: File
}

class Editor extends Component<EditorProps> {
  render () {
    return (
      <h1>developing....</h1>
    )
  }
}

export default Editor
