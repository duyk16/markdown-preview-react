const defaultInput = `# Hello, This is Markdown Live Preview

----
## what is Markdown?
see [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----
## usage
1. Write markdown text in this textarea.
2. Click 'HTML Preview' button.

----
## markdown quick reference
# headers

*emphasis*

**strong**

* list

>block quote

    code (4 spaces indent)
[links](https://wikipedia.org)

----
## changelog
* 17-Feb-2013 re-design

----
## thanks
`
class App extends React.Component {
  state = {
    input: '',
    output: ''
  }
  
  componentWillMount() {
    this.setState({
      input: defaultInput,
      output: marked(defaultInput)
    })
  }
  
  handleChange(e) {
    let input = e.target.value
    let output = marked(input)
    this.setState({
      input,
      output
    })
  }
  render() {
    return (
      <div className="app markdown-body">
        <h2 className="title">Mardown Preview</h2>
        <div className="wrapper">
          <Editor 
            handleChange={(e) => this.handleChange(e)} 
            input={this.state.input}
          />
          <Preview output={this.state.output}/>
        </div>
      </div>
    )
  }
}
class Editor extends React.Component {
  render() {
    return (
      <div className="editor">
        <textarea 
          className="input" 
          id="editor" 
          defaultValue={defaultInput}
          onChange={this.props.handleChange}
        >
        </textarea>
      </div>
    )
  }
}
class Preview extends React.Component {

  render() {
    console.log('render', this.props);
    
    return (
      <div className="preview">
        <div 
          className="input" 
          id="preview" 
          dangerouslySetInnerHTML={{__html: this.props.output}}
        >
        </div>
      </div>
    ) 
  }
}

React.createElement("div", {key: "value"}, )
ReactDOM.render(<App />, document.getElementById('root'));