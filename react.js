const defaultInput = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class App extends React.Component {
  state = {
    input: '',
    output: ''
  }
  
  componentWillMount() {
    this.setState({
      input: defaultInput,
      output: marked(defaultInput, {breaks: true})
    })
  }
  
  handleChange(e) {
    let input = e.target.value
    let output = marked(input, {breaks: true})
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