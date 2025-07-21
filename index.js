import { createRoot } from "react-dom/client"

const App =()=>{
    return <>
        <div>App is working</div>
    </>
}
const root = createRoot(document.getElementById('root'))
root.render(<App></App>)

