import ReactDOM from 'react-dom'
import Editor from './editor/Editor'
import { Component, ChangeEvent } from 'react'

const root = document.getElementById('root')!

class App extends Component {
  constructor (props: {}) {
    super(props)
    this.showEditor = this.showEditor.bind(this)
    this.newDesign = this.newDesign.bind(this)
    this.openDesign = this.openDesign.bind(this)
  }

  render () {
    return (
      <div id="App">
        <button onClick={this.newDesign}>New Design</button>
        <br />
        <input type="file" id="fileInput" onChange={this.openDesign} multiple />
      </div>
    )
  }

  showEditor (isBlank: boolean, designFile?: File) {
    ReactDOM.unmountComponentAtNode(root)
    ReactDOM.render(<Editor isBlank={isBlank} designFile={designFile} />, root)
  }

  newDesign () {
    console.log(this)
    this.showEditor(true)
  }

  async openDesign (event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget

    if (files !== null && files[0] instanceof File) {
      this.showEditor(false, files[0])
    }
  }
}

export default App
