import { useContext, useState } from "react"
import { DataContext } from "../../DataContext"
import { Link } from "react-router-dom"
import Container from "../../components/container/Container"
import Logo from "../../assets/images/logo.svg"
import List from "../../components/list/List"
import "./Header.css"
import MenuIcon from "../../components/menuIcon/MenuIcon"


export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const navigationItemsArr = useContext(DataContext).navigation
    const navigationElements = 
        navigationItemsArr.map((item, index) => <List key={index} listTitle={item} />)

    const handleClick= ()=> {
        setIsActive(prevState => !prevState)
    }

  return (
    <header className="header">
        <Container type={'header'}>
            <Link to={"/"}>
                <img src={Logo} alt="logo" />
            </Link>
            <nav className={isActive ? "active" : ""}>
                <ul>{navigationElements}</ul>
            </nav>
            <div 
                onClick={handleClick}
                className={`menu-icon-container ${isActive ? "active" : ""}`}
                >
                    <MenuIcon />
            </div>
        </Container>
    </header>
  )
}

export default Header