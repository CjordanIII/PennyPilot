import Chat from './componets/Chat'
import './App.css'

function App() {

const loggedin:boolean = true

  return (
    <>
{
  loggedin?<Chat/>:"need to login first"
}
    </>
  )
}

export default App
