import Nav from '../../containers/layouts/Nav'
// import Footer from '../Footer/foot'
export default function Lay({children}){
    return(
        <div className="content" >
            <Nav/>
            {children}
            {/* <Footer/> */}
        </div>
    )
}
