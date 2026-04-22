window.courseData.push(
    {
        id: "function-gear-brakes",
        title: "Primary Function of Landing Gear & Brakes",
        hasVideo: false,
        textContent: \`
            <h2>What is the primary function of the landing gear and brakes?</h2>
            <p>The landing gear and braking systems are essential components of an aircraft, serving as the interface between the vehicle and the ground.</p>
            
            <h3>1. Primary Function of Landing Gear</h3>
            <p>The landing gear serves as the aircraft's "suspension" and foundation while on the ground.</p>
            <ul>
                <li><strong>Load Bearing:</strong> Supporting the entire weight of the aircraft while stationary or taxiing.</li>
                <li><strong>Energy Absorption:</strong> Cushioning the impact of landing via oleo-pneumatic struts. The gas acts as a spring, and the oil forced through orifices acts as a damper.</li>
                <li><strong>Ground Maneuverability:</strong> Providing physical steering via the nose gear.</li>
            </ul>

            <h3>2. Primary Function of Brakes</h3>
            <p>The primary function is kinetic energy dissipation. A large aircraft touches down with massive kinetic energy ($KE = \\frac{1}{2}mv^2$).</p>
            <ul>
                <li><strong>High-Performance Materials:</strong> Carbon-carbon composite discs maintain integrity at over $1,000^\\circ C$.</li>
                <li><strong>Friction Modulation:</strong> Stator discs are pressed against rotor discs to create friction and slow the wheels.</li>
            </ul>

            <h3>3. Integrated Control Systems</h3>
            <ul>
                <li><strong>Weight-on-Wheels (WoW) Sensors:</strong> Trigger automated systems like spoilers when the gear compresses.</li>
                <li><strong>Anti-Skid Control Unit (ASCU):</strong> Modulates hydraulic pressure to prevent wheel lock-up.</li>
            </ul>
        \`,
        quiz: [
            { q: "What is the primary function of the landing gear?", options: ["Generate lift", "Serve as suspension, absorb impact, and support weight", "Cool the engines", "Steer the plane in the air"], answer: 1, exp: "Landing gear is the structural foundation on the ground, handling massive impact forces during touchdown." },
            { q: "What does the landing gear use to cushion impact?", options: ["Steel springs", "Oleo-pneumatic struts (gas and oil)", "Solid rubber blocks", "Magnetic levitation"], answer: 1, exp: "Oleo-pneumatic struts use highly compressed nitrogen and hydraulic fluid to dampen the shock." },
            { q: "What is the primary function of the aircraft brakes?", options: ["To hold the plane at the gate", "Kinetic energy dissipation (converting speed to heat)", "To look cool", "To steer the plane on the runway"], answer: 1, exp: "The brakes must take the massive forward momentum (kinetic energy) and bleed it off as thermal energy." },
            { q: "Which equation defines the kinetic energy the brakes must handle?", options: ["E = mc^2", "F = ma", "KE = 1/2 * m * v^2", "V = IR"], answer: 2, exp: "Kinetic energy equals one half times the mass times velocity squared." },
            { q: "Why are carbon-carbon composites used for airliner brakes?", options: ["They are heavy", "They survive extreme temperatures ($1,000^\\circ C$) and are light", "They never need replacement", "They are cheap"], answer: 1, exp: "Carbon brakes don't warp or melt like steel does under extreme friction heat." },
            { q: "What is the mechanical action that causes braking?", options: ["Reverse thrust from the engines", "Pressing stator discs against rotor discs", "Deploying a parachute", "Dropping an anchor"], answer: 1, exp: "Hydraulics squeeze stationary discs (stators) against spinning discs (rotors) to create friction." },
            { q: "What do Weight-on-Wheels (WoW) sensors do upon landing?", options: ["Weigh the cargo", "Trigger automated systems like spoilers and autobrakes", "Turn off the engines", "Call air traffic control"], answer: 1, exp: "Once the strut compresses, the WoW sensor tells the computer the plane is on the ground, triggering stopping systems." },
            { q: "What does the Anti-Skid Control Unit (ASCU) prevent?", options: ["Wheel lock-up and skidding", "Engine fires", "Cabin depressurization", "Bird strikes"], answer: 0, exp: "It rapidly pumps the brakes to ensure the tires maintain maximum grip without sliding." },
            { q: "How is ground steering primarily achieved?", options: ["Rudder pedals moving the tail", "Nose gear steering mechanism", "Ailerons", "Opening the doors"], answer: 1, exp: "While taxiing, the pilot steers the physical nose gear wheels using a tiller or rudder pedals." },
            { q: "In the energy absorption process, what dissipates the kinetic energy as heat?", options: ["The nitrogen gas", "The hydraulic oil forced through small orifices", "The rubber tires", "The wind"], answer: 1, exp: "The resistance of forcing oil through a tiny hole creates fluid friction, bleeding off energy." }
        ]
    },
    {
        id: "pressurization",
        title: "Pressurization & Air Conditioning",
        hasVideo: true,
        videoPlaceholder: "pressurization_poster.png",
        textContent: \`
            <h2>Pressurisation and air conditioning. What is the purpose of it?</h2>
            <p>The Environmental Control System (ECS) maintains a habitable internal environment while operating in a thin, freezing, low-pressure atmosphere.</p>
            
            <h3>1. The Pressurization System</h3>
            <p>Maintains a "Cabin Altitude" of 6,000 to 8,000 ft while flying at 35,000 ft.</p>
            <ul>
                <li><strong>The Physics:</strong> Manages Differential Pressure ($\\Delta P$). Too high = structural risk; too low = hypoxia.</li>
                <li><strong>The Outflow Valve:</strong> The "drain" of the system. Bleed air is pumped in, and this computer-controlled valve restricts how much air exits, maintaining pressure.</li>
            </ul>

            <h3>2. Air Conditioning (The "Pack")</h3>
            <p>Cabin air is refreshed using "Bleed Air" from the jet engines.</p>
            <ul>
                <li><strong>The Problem:</strong> Bleed air is $200^\\circ C$ and high pressure.</li>
                <li><strong>The Air Cycle Machine (ACM):</strong> A refrigeration cycle. Hot air passes through heat exchangers, then expands rapidly through a turbine. Expanding gas cools down drastically, often below freezing.</li>
                <li><strong>Mixing:</strong> Cold air is mixed with hot trim air to achieve the desired temperature.</li>
            </ul>

            <h3>3. Safety & Redundancy</h3>
            <ul>
                <li><strong>Dual-Packs:</strong> Redundant systems in case one fails.</li>
                <li><strong>Relief Valves:</strong> Mechanical valves that open automatically if pressure builds too high or drops too low, bypassing computers.</li>
            </ul>
        \`,
        quiz: [
            { q: "What does ECS stand for?", options: ["Engine Control Sequence", "Environmental Control System", "Emergency Crash System", "Electrical Circuit Switch"], answer: 1, exp: "The Environmental Control System manages cabin pressure and temperature." },
            { q: "What is the primary purpose of pressurizing the cabin?", options: ["To keep the windows from cracking", "To prevent hypoxia by maintaining a safe 'cabin altitude'", "To make the plane fly faster", "To keep luggage warm"], answer: 1, exp: "At 35,000 ft, oxygen is too thin for humans to breathe. Pressurizing simulates an altitude of ~8,000 ft." },
            { q: "Where does the fresh air for the cabin originally come from?", options: ["Tanks of compressed air", "'Bleed air' from the jet engine compressors", "Small holes in the windows", "The landing gear bay"], answer: 1, exp: "Fresh, high-pressure air is bled off the engine's compressor section before fuel is added." },
            { q: "What is the state of 'bleed air' when it comes out of the engine?", options: ["Freezing cold", "Room temperature", "Extremely hot ($200^\\circ C$+) and high pressure", "Liquid"], answer: 2, exp: "Compressing air heats it up immensely, making it too hot to pump directly into the cabin." },
            { q: "What physical component regulates the actual pressure inside the cabin?", options: ["The Outflow Valve", "The Pilots", "The windows", "The rudder"], answer: 0, exp: "The outflow valve opens and closes to control how fast the air leaves the aircraft, acting like a drain plug." },
            { q: "What does the Air Cycle Machine (ACM) do?", options: ["It generates electricity", "It rapidly cools the hot bleed air by expanding it through a turbine", "It plays movies", "It heats up cold air"], answer: 1, exp: "The ACM uses thermodynamic expansion to drop the temperature of the bleed air to near freezing." },
            { q: "What happens to a gas when it expands rapidly through a turbine?", options: ["It heats up", "It cools down", "It turns to plasma", "Its mass increases"], answer: 1, exp: "Thermodynamics dictates that expanding a compressed gas rapidly drops its temperature." },
            { q: "What does Differential Pressure ($\\Delta P$) refer to?", options: ["Speed difference between engines", "Pressure difference between the inside cabin and outside atmosphere", "The weight of the plane", "Fuel pressure"], answer: 1, exp: "$\\Delta P$ measures how much higher the pressure inside the aluminum fuselage tube is compared to the thin air outside." },
            { q: "What happens if the outflow valve gets stuck closed?", options: ["The plane stalls", "Pressure builds until the mechanical Positive Pressure Relief Valves pop open", "The cabin gets freezing cold", "The engines shut down"], answer: 1, exp: "Mechanical fail-safes open to prevent the fuselage from popping like a balloon." },
            { q: "Why do aircraft have multiple independent 'Packs' (Air Conditioning units)?", options: ["Because one is too loud", "For redundancy, so if one fails, the other keeps passengers alive", "To run different temperatures in the bathroom", "To make the plane heavier"], answer: 1, exp: "Redundancy ensures a single failure doesn't cause a catastrophic loss of life support." }
        ]
    },
    {
        id: "airplane-engines",
        title: "Airplane Engines",
        hasVideo: true,
        videoPlaceholder: "engines_poster.png",
        textContent: \`
            <h2>Airplane Engines (Gas Turbines)</h2>
            <p>Modern commercial aviation relies almost exclusively on the High-Bypass Turbofan engine. It is a marvel of thermodynamic engineering.</p>
            
            <h3>1. The Core Components</h3>
            <ul>
                <li><strong>The Fan:</strong> The massive blades at the front. It pulls in air. In a high-bypass engine, 80% of this air bypasses the core entirely, providing the majority of the thrust.</li>
                <li><strong>The Compressor:</strong> The remaining 20% of air enters the core, where spinning blades squeeze it, drastically increasing its pressure and temperature.</li>
                <li><strong>The Combustor:</strong> Jet fuel is sprayed into the highly compressed air and ignited. This creates an incredibly hot, expanding exhaust gas.</li>
                <li><strong>The Turbine:</strong> The exhaust blasts through turbine blades, spinning them. The turbine is connected by a shaft to the fan and compressor at the front, keeping the cycle going.</li>
                <li><strong>The Nozzle:</strong> The exhaust is focused and accelerated out the back.</li>
            </ul>

            <h3>2. How Thrust is Produced</h3>
            <p>Thrust is simply an application of <span class="physics-term" data-definition="Every action has an equal and opposite reaction.">Newton's Third Law</span>. The engine accelerates a mass of air backward (Action), which pushes the engine and the airplane forward (Reaction).</p>
            <p>Thrust = Mass * Acceleration (of the air).</p>
        \`,
        quiz: [
            { q: "What type of engine is used on most modern commercial airliners?", options: ["Piston engine", "High-Bypass Turbofan", "Ramjet", "Electric motor"], answer: 1, exp: "Turbofans are highly efficient and quieter than older turbojets, powering almost all modern airliners." },
            { q: "What provides the majority of the thrust in a High-Bypass Turbofan?", options: ["The hot exhaust nozzle", "The large fan at the front pushing bypass air", "The combustor", "The turbine"], answer: 1, exp: "About 80% of the air bypasses the core and acts like a massive propeller, generating most of the thrust." },
            { q: "What is the purpose of the compressor section?", options: ["To cool the air", "To squeeze the air, increasing pressure and temperature", "To burn fuel", "To steer the plane"], answer: 1, exp: "The compressor packs the air tightly so that when fuel is burned, it expands explosively." },
            { q: "Where is the jet fuel actually ignited?", options: ["The Fan", "The Compressor", "The Combustor", "The Nozzle"], answer: 2, exp: "The combustor (or combustion chamber) is where fuel mixes with compressed air and burns continuously." },
            { q: "What spins the large fan and the compressor at the front of the engine?", options: ["An electric motor", "A separate smaller engine", "The turbine at the rear, connected by a shaft", "Wind power"], answer: 2, exp: "The expanding exhaust gases spin the turbine blades, which are physically connected to the front fans via a shaft." },
            { q: "Thrust production is an example of which physical law?", options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law (Action/Reaction)", "Boyle's Law"], answer: 2, exp: "Pushing air backward (action) results in the plane moving forward (reaction)." },
            { q: "Why is it called a 'continuous' combustion cycle?", options: ["Because it has spark plugs firing like a car", "Because the flame burns constantly without stopping", "Because the pilot constantly presses a button", "Because the plane never lands"], answer: 1, exp: "Unlike a car engine with distinct explosive strokes, a jet engine maintains a continuous, raging fire." },
            { q: "What does the nozzle do?", options: ["Sucks air in", "Injects fuel", "Accelerates the exhaust gases out the back", "Cools the engine down"], answer: 2, exp: "The nozzle shapes and accelerates the hot exhaust to maximize reactive thrust." },
            { q: "What percentage of air typically goes through the core (combustion) of a high-bypass engine?", options: ["100%", "80%", "50%", "10-20%"], answer: 3, exp: "Only a small fraction enters the core to keep the engine running; the rest bypasses it to create thrust efficiently." },
            { q: "If the turbine blades melted, what would happen?", options: ["The plane would fly faster", "The engine would stop because the compressor/fan would stop spinning", "The lights would get brighter", "Nothing"], answer: 1, exp: "The turbine is required to extract energy from the exhaust to keep the front compressor spinning." }
        ]
    }
);
