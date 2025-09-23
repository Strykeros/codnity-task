import Layout from "../components/Layout";
import GlassCard from "../components/GlassCard";
import AboutSection from "../components/about/AboutSection";


const About = () => {
    const aboutHeadings: string[] = ["Mission & Vision", "What We Offer", "Technology & Commitment"];
        const aboutParagraphs: string[] = ["We are passionate space enthusiasts dedicated to bringing you the latest information about SpaceX's groundbreaking missions and revolutionary rocket technology. Our platform serves as your gateway to the cosmos, providing real-time updates on upcoming launches, detailed specifications of cutting-edge rockets, and comprehensive coverage of humanity's journey to become a multi-planetary species. Through SpaceX's remarkable achievements, we witness the transformation of space exploration from science fiction to reality.", "Our website provides comprehensive access to SpaceX's mission data, featuring detailed launch schedules that keep you informed about upcoming and past missions. Explore our extensive rocket database showcasing the technical marvels of Falcon 9, Falcon Heavy, and Starship vehicles, complete with specifications, capabilities, and stunning imagery. Whether you're tracking the next Starlink deployment, a crewed mission to the International Space Station, or a historic planetary mission, we ensure you have access to accurate, up-to-date information directly from SpaceX's official API.", "Built with modern web technologies including React and Material-UI, our platform delivers a seamless user experience across all devices. We leverage SpaceX's public API to provide real-time data, ensuring you receive the most current information about launch statuses, mission outcomes, and rocket specifications. Our commitment extends beyond just displaying data – we aim to inspire the next generation of engineers, scientists, and space explorers by making space exploration accessible and engaging for everyone, from casual observers to aerospace professionals."];
        const aboutImgs: string[] = ["https://img.freepik.com/premium-photo/spacex-crew-dragon-can-transport-7-passengers-from-earth-orbit-beyond-elements-included_1007204-26619.jpg?semt=ais_hybrid&w=740", "https://media.gettyimages.com/id/1291173179/photo/business-report-on-digital-tablet.jpg?s=612x612&w=0&k=20&c=u97PiC9DBTy-PWDWv7jpkrtreRPw_Am9GUIIW13hitU=", "https://img.freepik.com/free-photo/control-table-spacecraft-from-inside_23-2151828167.jpg?semt=ais_hybrid&w=740&q=80"]
    return (
    <Layout>
        {aboutHeadings.map((heading, index) => (
            <GlassCard 
                key={index}
                cardContentSx={{ 
                    display: "flex", 
                    flexDirection: { xs: "column", md: "row" }, 
                    padding: "0 !important", 
                    margin: "0" 
                }} 
                sx={{ padding: "0", margin: "30px 0 0 0" }}
            >
                <AboutSection 
                    imageSrc={aboutImgs[index]} 
                    imageAltStr={`${heading} illustration`}
                    headerTxt={heading}
                    paragraphTxt={aboutParagraphs[index]}
                />
            </GlassCard>                
        ))}
    </Layout>

    );
}

export default About;
