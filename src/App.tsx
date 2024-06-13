import './App.css'

function App() {
  return (
    <>
      <div>
        <>{navigator.userAgent}</>
        <button onClick={async () => {
          console.log(navigator.canShare())
          try {
            await navigator.share({ title: 'Test', text: 'Hey, I think you would like this! Register today and receive rewards: ', url: 'http://localhost:8080/login?ref-code=8c28fa32-e005-4241-8286-a41ab22b8d8a' });
          } catch (e) {
            console.log('Failed to share', e);
          }
        }}>Share test1</button>
        <></>
      </div>
    </>
  )
}

export default App
