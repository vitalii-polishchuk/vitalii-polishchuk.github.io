import './App.css'

function App() {
  const checkIsMobileOrTablet = (): boolean => /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);

  return (
    <>
      <div>
        <>Is mobile {checkIsMobileOrTablet()}</>
        <button onClick={async () => {
          console.log(navigator.canShare())
          try {
            await navigator.share({ title: 'Test', text: 'test text |', url: 'https://vitejs.dev/guide/' });
          } catch (e) {
            console.log('Failed to share', e);
          }
        }}>Share test</button>
      </div>
    </>
  )
}

export default App
