import "./Container.css"

export const Container = (props) => {
  return <div className={`container ${props.type}`}>{props.children}</div>

}

export default Container
