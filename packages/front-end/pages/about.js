import Head from '../components/Header/head'
import Lay from '../components/Layout/lay'
import About from '../components/containers/layouts/about'
export default function AboutUs() {
    return (
        <div>
            <Head />
            <Lay />
            <h1>About Page</h1>
            <About/>
        </div>
    )
}