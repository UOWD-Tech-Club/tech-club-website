import SocialLinks from "../components/SocialLinks/SocialLinks";
import Hero from "../components/HeroSection/Hero";
import styles from "./BackendWSForm.module.css";

function BackendWSForm() {
    return (
        <>
            <main>
                
                <div><br /><br /><br /><br /><br /><br /></div>
                <SocialLinks />

                <h4 className="desc">
                    "Unlocking the Future: An Introduction to the Internet Computer Protocol" is a dynamic training session designed for university students. They will be introduced to the fundamentals of blockchain technology and the innovative Internet Computer Protocol (ICP). Participants can expect to explore ICP’s architecture, engage in hands-on exercises, and discover its real-world applications. Ideal for all disciplines, no prior blockchain experience is required. They will gain insights from industry experts and enhance their knowledge for future career opportunities.
                </h4>
                

                <div className="center">
                    <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=fYm0qplfOUS0QsIExlh1tSZ78OXLGQREhBiLj9KzknxUQzFDT1dOWUgwRzMyQTQ2Wk44OEtSM0EyWS4u" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "5px solid red;", width: "100%", height: "1300px", justifySelf: "center" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
                </div>
            </main>
        </>
    );
}

export default BackendWSForm;
