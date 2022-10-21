function App(){
ReactDOM.render(
  <React.StrictMode>
    <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
  </React.StrictMode>,
 
  document.getElementById('root')
);
  return  <React.Fragment>
      <index/>
  </React.Fragment>
}
export default  App;
