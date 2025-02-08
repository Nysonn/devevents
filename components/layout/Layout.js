import Header from "./Header";
// import Footer from "./Footer";
import "@fontsource/roboto"; 

export default function Layout(props) {
    return (
        <>
            <Header />
            <main className="container mx-auto my-7">{props.children}</main>
            {/* <Footer /> */}
        </>
    )
}