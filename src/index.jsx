import App from "./App.jsx"

if(module.hot){
  module.hot.accept(error=>{
    if(error){
      console.log('热替换出 bug 了' );
    }
  })
}