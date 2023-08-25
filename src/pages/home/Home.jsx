import { Link } from 'react-router-dom'
import Container from "../../components/container/Container"
import "./Home.css"

export const Home = () => {
  return (
    <section className="home">
        <Container>
            <div className="content">
                <h2 className="title">Transform your Ideas into Digital Solutions</h2>
                <p>Hi, I'm Ibrahim a front-end developer passionate about turning concepts into impactful digital experiences</p>
                <div className="buttons-container">
                    <Link to={'/contact-me'}>contact me</Link >
                    <Link to={'/'}>my resume</Link >
                </div>
            </div>
            <div className="image-container"></div>
        </Container>
    </section>
  )
}

export default Home