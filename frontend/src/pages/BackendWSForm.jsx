import SocialLinks from "../components/SocialLinks/SocialLinks";
import Hero from "../components/HeroSection/Hero";
import styles from "./BackendWSForm.module.css";

function BackendWSForm() {
    return (
        <>
            <main>
                <div><br /><br /><br /><br /><br /><br /></div>
                <SocialLinks />
                <div className="center">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdlYhrd-w1Ms6lI6two9j34DJbEjZOZfv-0oZwniYdklO6IWA/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </main>
        </>
    );
}

export default BackendWSForm;
