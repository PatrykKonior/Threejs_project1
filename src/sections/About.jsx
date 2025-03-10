import React from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Cześć, nazywam się Patryk</p>
                            <p className="grid-subtext">Posiadam roczne doświadczenie zawodowe, każdego dnia rozwijając
                                swoje umiejętności z frontendu oraz backendu. Tworzę aplikacje webowe, mobilne oraz
                                desktopowe.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                Mój stack technologiczny
                            </p>
                            <p className="grid-subtext">
                                Specjalizuję się w JavaScript/TypeScript oraz C#. Moje główne frameworki to React.js,
                                Node.js oraz React Native. Pracuję także z Angular, Vue.js oraz Pythonem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 50.2599,
                                    lng: 19.0216,
                                    text: 'Tutaj mieszkam i pracuje :)',
                                    color: 'white',
                                    size: 15
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                Jestem otwarty na współpracę we wszystkich strefach czasowych.
                            </p>
                            <p className="grid-subtext">
                                Mieszkam w Chorzowie i jestem otwarty na pracę stacjonarną oraz zdalną.
                                <Button name="Skontaktuj się ze mną" isBeam containerClass="w-full mt-10 "/>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
