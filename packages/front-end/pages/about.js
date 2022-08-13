import Head from '../components/containers/layouts/Head'
import Lay from '../components/containers/layouts/Lay'
import About from '../components/containers/layouts/about'
import Footer from '../components/containers/layouts/Footer/foot'
import LastFoot from '../components/containers/layouts/Footer/lastfoot'
export default function AboutUs() {
    return (
        <div>
            <Head/>
            <Lay />
            <About/>
            <Footer/>
            <LastFoot/>
        </div>
    )
}