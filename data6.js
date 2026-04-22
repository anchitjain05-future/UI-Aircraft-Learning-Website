window.courseData.push(
    {
        id: "hydraulic-pneumatic",
        title: "Hydraulic and Pneumatic Systems",
        hasVideo: true,
        videoPlaceholder: "hydro_poster.png",
        textContent: \`
            <h2>Hydraulic and Pneumatic Systems</h2>
            <p>Aircraft require massive amounts of force to move heavy control surfaces and landing gear against high-speed aerodynamic loads.</p>
            
            <h3>1. Hydraulic Systems (The "Muscles")</h3>
            <p>Hydraulics use pressurized liquid (incompressible fluid) to transmit power.</p>
            <ul>
                <li><strong>How it works:</strong> Engine-driven pumps pressurize hydraulic fluid (often to 3,000 or 5,000 psi). This fluid is routed through tubes to actuators.</li>
                <li><strong>Actuators:</strong> Convert fluid pressure into immense linear mechanical force.</li>
                <li><strong>Redundancy:</strong> Airliners usually have 3 independent hydraulic systems. If one leaks and fails, the others can still fly the plane.</li>
            </ul>

            <h3>2. Pneumatic Systems</h3>
            <p>Pneumatics use pressurized gas (compressible fluid, usually air).</p>
            <ul>
                <li><strong>Bleed Air:</strong> The primary pneumatic source is hot, high-pressure air from the engine compressors.</li>
                <li><strong>Uses:</strong> Cabin pressurization, air conditioning, engine starting, and anti-icing (blowing hot air on the wing leading edges to melt ice).</li>
            </ul>
        \`,
        quiz: [
            { q: "What is the primary difference between hydraulic and pneumatic systems?", options: ["Hydraulics use gas; pneumatics use electricity", "Hydraulics use pressurized liquid; pneumatics use pressurized gas", "Hydraulics are for heating; pneumatics are for cooling", "There is no difference"], answer: 1, exp: "Hydraulics rely on incompressible liquids (oil/fluid), while pneumatics rely on compressible gases (air)." },
            { q: "Why are hydraulic systems used to move flight control surfaces?", options: ["Because fluid is cheap", "Because they can transmit immense force rapidly and precisely", "Because they are lightweight", "Because they generate electricity"], answer: 1, exp: "Pressurized liquid allows a small pump to exert thousands of pounds of force on a distant actuator." },
            { q: "What generates the hydraulic pressure in most aircraft?", options: ["The pilot pumping a pedal", "Engine-driven and electric pumps", "Gravity", "Windmills"], answer: 1, exp: "Pumps attached to the spinning jet engines provide the continuous high pressure (3,000+ psi) required." },
            { q: "What does a hydraulic actuator do?", options: ["Stores fuel", "Converts fluid pressure into mechanical movement", "Cools the cabin", "Navigates the plane"], answer: 1, exp: "An actuator is basically a piston. Pressurized fluid pushes the piston, moving the heavy control surface." },
            { q: "Why do commercial aircraft have multiple (usually 3) independent hydraulic systems?", options: ["For Redundancy in case one system leaks and fails", "To mix different colored fluids", "To add weight to the plane", "Because one pump isn't strong enough"], answer: 0, exp: "If a pipe bursts and all fluid leaks out of system A, systems B and C will still allow the pilot to steer." },
            { q: "Where does the pneumatic system get its pressurized air?", options: ["From scuba tanks", "From 'Bleed Air' tapped off the jet engine compressor", "From the passenger cabin", "From the landing gear tires"], answer: 1, exp: "The jet engines compress massive amounts of air, some of which is 'bled' off to power pneumatic systems." },
            { q: "Which of the following is typically a Pneumatic system?", options: ["Landing gear retraction", "Brakes", "Cabin Pressurization and Air Conditioning", "Moving the ailerons"], answer: 2, exp: "Air conditioning and pressurization require air, making them pneumatic systems." },
            { q: "How is pneumatic air used for 'Anti-Icing'?", options: ["It freezes the wings", "Hot bleed air is routed through the inside of the wing's leading edge to melt ice", "It sprays chemical fluid", "It blows the ice away with cold air"], answer: 1, exp: "The $200^\\circ C$ bleed air effectively heats the metal wing to prevent ice accumulation." },
            { q: "Is hydraulic fluid compressible?", options: ["Yes, very easily", "No, liquids are practically incompressible, which is why they transmit force so well", "Only at high altitudes", "Only when frozen"], answer: 1, exp: "Because liquid doesn't compress, pushing on one end of a tube instantly pushes out the other end." },
            { q: "Is pneumatic air compressible?", options: ["Yes, gases are compressible, which makes them act like a spring", "No, air is entirely solid", "Only in space", "No, it acts exactly like hydraulic fluid"], answer: 0, exp: "Gases compress under pressure, meaning pneumatic systems have a 'spongier' response compared to rigid hydraulics." }
        ]
    },
    {
        id: "function-hydro-pneumatic",
        title: "Main Function of Hydraulic/Pneumatic",
        hasVideo: false,
        textContent: \`
            <h2>What is the main function of hydraulic and pneumatic systems in an aircraft?</h2>
            <p>The main function of these systems is <strong>Power Transmission</strong>. They take energy generated by the engines and distribute it throughout the aircraft to perform heavy work.</p>
            
            <h3>Hydraulics = Heavy Mechanical Work</h3>
            <p>Because liquids cannot be compressed, they offer rigid, instantaneous force transmission. This is required for systems that handle massive aerodynamic loads:</p>
            <ul>
                <li>Primary Flight Controls (Ailerons, Elevators, Rudder)</li>
                <li>Landing Gear (Extension and Retraction)</li>
                <li>Wheel Brakes</li>
            </ul>

            <h3>Pneumatics = Environmental and Utility Work</h3>
            <p>Because gases are compressible, pneumatics are used where fluid leaks would be messy or where air itself is the desired medium:</p>
            <ul>
                <li>Cabin Pressurization (providing breathable air)</li>
                <li>Thermal Anti-Icing (melting ice on wings)</li>
                <li>Engine Starting (spinning the turbine before fuel is added)</li>
            </ul>
        \`,
        quiz: [
            { q: "What is the overarching main function of both hydraulic and pneumatic systems?", options: ["To generate thrust", "Power Transmission (distributing energy to do work)", "To navigate", "To communicate with ATC"], answer: 1, exp: "Both systems transmit power from the engines to different parts of the plane to do physical or environmental work." },
            { q: "Which system is used when rigid, instantaneous, and massive mechanical force is needed?", options: ["Pneumatic", "Hydraulic", "Electrical", "Acoustic"], answer: 1, exp: "Hydraulics use incompressible liquids, providing a solid link to push heavy objects." },
            { q: "Which system is primarily responsible for retracting the heavy landing gear?", options: ["Pneumatics", "Hydraulics", "Gravity", "Wind"], answer: 1, exp: "Lifting the heavy landing gear against the wind requires the massive force of hydraulic actuators." },
            { q: "Which system provides the air you breathe in the passenger cabin?", options: ["Hydraulics", "Pneumatics (Bleed air)", "The fuel system", "The brakes"], answer: 1, exp: "The pneumatic system taps pressurized air from the engines to pressurize the cabin." },
            { q: "Why are wheel brakes operated by hydraulics rather than pneumatics?", options: ["Air would cause the brakes to be 'spongy' and slow to react; liquids provide instant, hard pressure", "Pneumatics are too heavy", "Liquids cool the brakes better", "Brakes need air to burn"], answer: 0, exp: "You need instant, rigid force to squeeze the brake discs. Compressible air would cause a delay in braking." },
            { q: "Which system is used to melt ice on the wings?", options: ["Hydraulic fluid sprayed on the wings", "Pneumatics (routing hot bleed air through the wing edges)", "Electric blankets", "Scraping it off manually"], answer: 1, exp: "Hot pneumatic bleed air is routed through ducts to heat the metal skin." },
            { q: "If a system requires a compressible medium to act as a spring, which is used?", options: ["Hydraulics", "Pneumatics", "Solid steel", "Water"], answer: 1, exp: "Gases (pneumatics) are compressible and can absorb shocks or store energy as a spring." },
            { q: "What moves the elevators and ailerons on large commercial jets?", options: ["Pilot's raw physical strength", "Pneumatic air pressure", "Hydraulic actuators", "Electric window motors"], answer: 2, exp: "The aerodynamic forces on large jets are too strong for human arms, so hydraulic actuators do the heavy lifting." },
            { q: "How is an engine typically started before fuel is ignited?", options: ["By pushing the plane", "A pneumatic starter uses high-pressure air to spin the turbine", "A pull-cord like a lawnmower", "Hydraulic fluid floods the engine"], answer: 1, exp: "High-pressure air from the APU or another engine is blown into a starter turbine to get the main engine spinning." },
            { q: "If you need to move a heavy object exactly 2 inches with no bounce, you use:", options: ["Pneumatics", "Hydraulics", "A balloon", "A spring"], answer: 1, exp: "Hydraulics provide exact, rigid positioning because the liquid cannot compress or bounce." }
        ]
    },
    {
        id: "electrical-ignition",
        title: "Electrical & Ignition Systems",
        hasVideo: true,
        videoPlaceholder: "electric_poster.png",
        textContent: \`
            <h2>Electrical and Ignition Systems</h2>
            
            <h3>1. The Electrical System</h3>
            <p>Modern aircraft are flying data centers. They require massive amounts of electricity for avionics, lighting, galley ovens, and fly-by-wire computers.</p>
            <ul>
                <li><strong>Generators:</strong> Attached to the accessory gearbox of each jet engine. As the engine spins, it spins the generator, producing AC power.</li>
                <li><strong>APU (Auxiliary Power Unit):</strong> A small jet engine in the tail. It provides electrical power and pneumatic air when the main engines are off (e.g., parked at the gate).</li>
                <li><strong>Batteries:</strong> Provide emergency DC power if all generators fail.</li>
            </ul>

            <h3>2. The Ignition System</h3>
            <p>Unlike a car engine which sparks continuously, a jet engine only needs spark plugs (igniters) to start.</p>
            <ul>
                <li><strong>Starting Sequence:</strong> A pneumatic starter spins the engine compressor. Once it reaches a certain RPM, high-energy igniters begin sparking, and fuel is introduced.</li>
                <li><strong>Continuous Fire:</strong> Once the fire is lit, the igniters are turned off. The fire is self-sustaining as long as fuel and compressed air are supplied.</li>
                <li><strong>In-Flight Relight:</strong> Igniters can be turned back on during heavy rain or turbulence to prevent the flame from blowing out.</li>
            </ul>
        \`,
        quiz: [
            { q: "Where does an airplane get its primary electrical power while flying?", options: ["From solar panels", "From Engine-Driven Generators", "From batteries only", "From static electricity in the clouds"], answer: 1, exp: "Generators attached to the spinning jet engines provide continuous AC power." },
            { q: "What is an APU?", options: ["Airliner Primary Unit", "Auxiliary Power Unit (a small jet engine in the tail)", "Aviation Pump Unit", "Automated Pilot Utility"], answer: 1, exp: "The APU provides electricity and bleed air when the main engines are off." },
            { q: "What is the primary purpose of the aircraft batteries?", options: ["To start the main engines", "To provide emergency power if all generators fail", "To power the ovens", "To make the plane heavier"], answer: 1, exp: "Batteries don't hold enough charge for long flights; they are strictly a last-resort backup to keep critical instruments alive." },
            { q: "Does a jet engine use spark plugs continuously while flying?", options: ["Yes, just like a car", "No, once the fire is lit, it is self-sustaining", "Only on the left engine", "Only at night"], answer: 1, exp: "The fire in the combustor burns continuously on its own; igniters are only used to start the fire." },
            { q: "When might a pilot turn the igniters back on during flight?", options: ["To fly faster", "During heavy rain or severe turbulence to prevent a 'flameout'", "To save fuel", "To warm up the cabin"], answer: 1, exp: "Continuous ignition ensures that if a gulp of water extinguishes the flame, it instantly reignites." },
            { q: "What actually physically spins the engine initially during the starting sequence?", options: ["The battery", "The pilot", "A pneumatic starter using high-pressure air", "Gravity"], answer: 2, exp: "High-pressure air from the APU is routed into a starter motor that physically spins the heavy engine shafts." },
            { q: "What type of power do engine generators primarily produce?", options: ["DC Power", "AC Power", "Nuclear Power", "Hydroelectric Power"], answer: 1, exp: "They produce Alternating Current (AC), which is then converted to DC for certain instruments via a Transformer Rectifier Unit (TRU)." },
            { q: "Why are aircraft electrical systems heavily redundant?", options: ["Because wires are cheap", "Because 'Fly-by-Wire' aircraft cannot fly without electricity", "To make the plane glow in the dark", "To power passenger laptops only"], answer: 1, exp: "Modern planes rely entirely on computers to interpret pilot inputs; losing all power means losing control." },
            { q: "What happens if you introduce fuel into a jet engine before it is spinning fast enough?", options: ["It starts perfectly", "A 'Hot Start' occurs, causing catastrophic fire damage to the turbine", "It freezes", "Nothing"], answer: 1, exp: "Without enough airflow to push the heat out the back, the fuel ignites and melts the internal components." },
            { q: "What provides power to the aircraft while it is parked at the gate with main engines off?", options: ["The APU or a Ground Power cord", "The main batteries", "Solar power", "Windmills"], answer: 0, exp: "The APU runs in the tail, or the airport plugs a massive power cord into the nose." }
        ]
    },
    {
        id: "engine-start",
        title: "Which part initiates the engine start?",
        hasVideo: false,
        textContent: \`
            <h2>Which part initiates the engine start by turning the crankshaft?</h2>
            <p><em>Note: Jet engines do not have a "crankshaft" like a piston engine, they have a "spool" or "shaft". However, for small piston aircraft (like a Cessna), the concept is the same as a car.</em></p>
            
            <h3>Piston Engines (General Aviation)</h3>
            <p>In a small aircraft with a piston engine, the engine start is initiated by the <strong>Electric Starter Motor</strong>. Powered by the aircraft's battery, a small gear engages the flywheel on the engine's crankshaft, physically forcing the pistons to move up and down to begin the intake/compression cycle until the spark plugs ignite the fuel.</p>

            <h3>Jet Engines (Commercial Aviation)</h3>
            <p>In a large turbofan, the start is initiated by the <strong>Pneumatic Air Starter</strong> (or sometimes an electric starter/generator on newer planes like the 787).</p>
            <ul>
                <li>High-pressure air (from the APU or a ground cart) is blasted into the starter turbine.</li>
                <li>This starter is geared to the engine's high-pressure spool/shaft.</li>
                <li>It forcibly spins the massive compressor blades to suck in air until 20% RPM is reached, at which point fuel and spark are introduced.</li>
            </ul>
        \`,
        quiz: [
            { q: "In a small piston aircraft, what physically turns the crankshaft to start the engine?", options: ["The pilot pulling a cord", "An electric starter motor", "A jet of compressed air", "The wind"], answer: 1, exp: "Just like a car, an electric motor powered by the battery cranks the engine to start it." },
            { q: "Do large jet engines have a crankshaft?", options: ["Yes, exactly like a car", "No, they have a central shaft (or spool) connecting the turbines and compressors", "Yes, but it is made of plastic", "No, they have no moving parts"], answer: 1, exp: "Jet engines use a continuous spinning shaft rather than the reciprocating crankshaft found in piston engines." },
            { q: "In a large commercial jet, what typically initiates the engine start?", options: ["An electric battery", "A Pneumatic Air Starter", "A hand crank", "Gravity"], answer: 1, exp: "High-pressure air spins a small starter turbine, which is geared to the massive main engine shaft." },
            { q: "Where does the pneumatic starter get its high-pressure air from?", options: ["The passenger cabin", "The Auxiliary Power Unit (APU) or a ground cart", "The fuel tank", "The landing gear struts"], answer: 1, exp: "The APU is typically started first specifically to provide the massive air pressure needed to crank the main engines." },
            { q: "Why don't large jets use battery-powered electric starters (usually)?", options: ["Batteries are too loud", "The engine is too heavy; it requires the immense torque of compressed air", "Electricity is banned on planes", "Air starters are heavier"], answer: 1, exp: "Turning a multi-ton jet engine requires massive torque. Until recently (e.g., Boeing 787), electric motors strong enough were too heavy." },
            { q: "At what point during a jet engine start is fuel introduced?", options: ["Immediately upon pressing start", "Only after the starter has spun the compressor to a sufficient RPM (e.g., 20%) to ensure airflow", "After takeoff", "When the engine is hot"], answer: 1, exp: "If fuel is burned without enough airflow to push the heat out, the engine will melt." },
            { q: "What component introduces the spark to ignite the fuel in a jet engine?", options: ["A match", "High-energy Igniters", "Friction", "Lightning"], answer: 1, exp: "Igniters act like heavy-duty spark plugs, creating a continuous electric arc to light the fuel." },
            { q: "What is the gear called that the starter motor engages on a piston engine?", options: ["The propeller", "The Flywheel", "The alternator", "The brake disc"], answer: 1, exp: "The starter's small pinion gear extends to mesh with the large ring gear on the flywheel." },
            { q: "What happens to the starter once the engine is running on its own power?", options: ["It explodes", "It disengages or is shut off so the engine can spin freely", "It stays engaged and generates electricity", "It falls off the plane"], answer: 1, exp: "Once self-sustaining speed is reached, the starter valve closes and the mechanism disengages." },
            { q: "On the modern Boeing 787, what replaces the traditional pneumatic air starter?", options: ["A giant spring", "Powerful electric Starter/Generators", "A hand crank", "Nothing, it's still pneumatic"], answer: 1, exp: "The 787 uses a 'more electric' architecture, utilizing powerful electric motors to start the engines instead of bleed air." }
        ]
    }
);
