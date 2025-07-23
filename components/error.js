import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
  return (
    <div>
      <div>Oops!</div>
      <div>Something went wrong</div>
      <div>{err.status}: {err.statusText}</div>
    </div>
  )
}

export default Error
