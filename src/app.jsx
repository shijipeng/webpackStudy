import React from 'react'
import ReactDom from 'react-dom'

// Es6 兼容
const App = () => {
  return (
    <div>
      <h1>React大法好111，哈哈哈哈12121</h1>
    </div>
  )
}
export default App
ReactDom.render(<App />, document.getElementById('app'))
