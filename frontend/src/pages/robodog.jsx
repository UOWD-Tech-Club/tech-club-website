import styles from './page.module.css'
import SocialLinks from '../components/SocialLinks/SocialLinks';


function Robodog() {

    return (
        <>
            <main className={styles.pad}>
                <h1>Robot Dog</h1>
                <div style={{ "fontSize": "larger", marginTop: "1rem" }}>
                    The Unitree Go1 is a versatile quadruped robot developed by Unitree Robotics, designed for various professional and recreational uses. <br /> <br /> It features advanced sensors, including LiDAR and depth cameras, enabling it to navigate complex environments, avoid obstacles, and maintain balance autonomously or via remote control. The Go1's powerful motors and control algorithms ensure smooth movement across diverse terrains. <br /> <br />  Its impressive payload capacity and customizable nature make it useful for tasks like delivery, security patrols, agricultural monitoring, and research.<br /> <br />  Overall, the Unitree Go1 enhances efficiency and safety in numerous applications, demonstrating significant advancements in robotic technology.
                </div>
            </main>

            <SocialLinks />
        </>
    );
}

export default Robodog;
