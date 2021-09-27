import style from './overlay.module.scss';
import images from '../../../database/periodicTableImages.json'

export default function Overlay({ el, setClicked }) {
    function devokeOverlay(): void {
        setClicked(0);
    }   
    return (
        <div className={style.overlay} id={`overlay${el.symbol}`}>
            <div className={style.topBar}>
                <h1>{el.name}</h1>
                <button onClick={devokeOverlay}>✖</button>
            </div>

            <div className={style.content}>
                <div className={style.sideContent}>
                    <img src={images[el.name] !== undefined ? images[el.name][0] : 'https://miro.medium.com/max/400/1*UL9RWkTUtJlyHW7kGm20hQ.png'} className={images[el.name] === undefined ? style.undefinedImage : 'periodicTableImage'}/>
                    <p>{el.history}</p>
                </div>

                <div className={style.innerContent}>
                    <details>
                        <summary>Important</summary>
                        <ul>
                            <li><span>Alloys:</span> {el.alloys ? el.alloys != '' : 'none'}</li>
                            <li><span>Atomic Mass:</span> {el.atomicMass}</li>
                            <li><span>Atomic Number:</span> {el.atomicNumber}</li>
                            <li><span>Atomic Radius:</span> {el.atomicRadius}</li>
                        </ul>
                    </details>

                    <details>
                        <summary>Chemestry</summary>
                        <ul>
                            <h3><span>Electronic configuration:</span> {el.electronicConfiguration}</h3>
                            <li><span>Electron affinity:</span> {el.electronAffinity}</li>
                            <li><span>Electron negativity:</span> {el.electronegativity} </li>
                            <li><span>Ionization energy:</span> {el.ionizationEnergy}</li>
                            <li><span>Isotopes:</span> {el.isotopes}</li>
                        </ul>
                    </details>

                    <details>
                        <summary>Physic</summary>
                        <ul>
                            <h3><span>Standard state:</span> {el.standardState}</h3>
                            <li><span>Crystal structure:</span> {el.crystalStructure}</li>
                            <li><span>Oxidation states:</span> {el.oxidationStates}</li>
                            <li><span>Molar heat capacity:</span> {el.molarHeatCapacity}</li>
                            <li><span>Melting point:</span> {el.meltingPoint}°C</li>
                            <li><span>Speed of sound:</span> {el.speedOfSound}km/h</li>
                            <li><span>Magnetic ordering:</span> {el.magneticOrdering}</li>
                        </ul>
                    </details>

                    <details>
                        <summary>About</summary>
                        <ul>
                            <li><span>Interesting facts:</span> {el.facts !== "" ? el.facts : 'no interesting facts'}</li>
                            <li><span>Group:</span> {el.group}, {el.groupBlock}</li>
                            <li><span>Period:</span> {el.period}</li>
                            <li><span>Minerals:</span> {el.minerals !== "" ? el.minerals : "none"}</li>
                        </ul>
                    </details>
                </div>
            </div>
        </div> 
    )
}