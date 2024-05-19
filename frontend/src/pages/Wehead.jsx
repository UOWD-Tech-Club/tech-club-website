import { useLayoutEffect } from "react";

function Wehead() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <main style={{
                "paddingTop": "min(12rem, 20vh)",
                "padding": "15rem 5rem"
            }}>
                <h1>Wehead</h1>
                <div style={{ "fontSize": "larger", marginTop: "1rem" }}>
                    Wehead is a 3D shaped display that brings AI conversations to life.
                    <br /> <br />
                    Imagine a physical head, crafted with 3D technology, that displays an AI agent. This innovative device allows the AI to mimic human expressions and movements during communication, making virtual interactions feel more natural and engaging. Wehead is particularly designed to enhance hybrid meetings, creating a lifelike virtual presence in the room for remote participants.

                    <br /> <br />

                    Wehead doesn't stop at the hardware; they also offer software solutions called WEHEAD Pro and GPT. WEHEAD Pro caters to businesses, providing AI that can understand a customer's emotions and explore different solutions to personalize interactions.

                    <br /> <br />WEHEAD GPT, aimed at consumers, offers an AI companion for brainstorming ideas, getting insightful feedback, and exploring various perspectives, fostering a more thoughtful and creative approach.
                </div>
            </main>
        </>
    );
}

export default Wehead;
