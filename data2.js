window.courseData.push(
    {
        id: "aircraft-components",
        title: "Aircraft Components",
        hasVideo: true,
        videoPlaceholder: "components_poster.png",
        textContent: \`
            <h2>Aircraft Components (Systems Architecture)</h2>
            <p>To understand "everything" about aircraft components, it is best to view an airplane not as a collection of parts, but as a hierarchical Systems Architecture.</p>
            
            <h3>1. Structural Architecture (The Airframe)</h3>
            <p>The airframe is the skeleton that handles the mechanical loads. Modern aircraft are designed to be "monocoque" or "semi-monocoque," where the skin itself carries a portion of the structural load.</p>
            <ul>
                <li><strong>Fuselage:</strong> Uses frames (circular formers) and stringers (longitudinal members) to maintain shape.</li>
                <li><strong>Wing Structure:</strong>
                    <ul>
                        <li><strong>Spars:</strong> Primary longitudinal beams that carry bending loads.</li>
                        <li><strong>Ribs:</strong> Shape the airfoil and transfer loads.</li>
                        <li><strong>Skin:</strong> The outer surface, resisting torsional loads.</li>
                    </ul>
                </li>
            </ul>

            <h3>2. Propulsion Architecture</h3>
            <p>Defined by the <span class="physics-term" data-definition="A thermodynamic cycle describing the workings of a constant-pressure heat engine (like a jet).">Brayton Cycle</span> (Intake, Compression, Combustion, Exhaust).</p>
            <ul>
                <li><strong>Intake/Fan:</strong> Accelerates a large mass of air.</li>
                <li><strong>Compressor:</strong> Increases pressure and temperature of the air.</li>
                <li><strong>Combustor:</strong> Where fuel is injected and burned.</li>
                <li><strong>Turbine:</strong> Extracts energy from the high-velocity gas to drive the compressor.</li>
                <li><strong>Nozzle:</strong> Accelerates the exhaust gas to create reactive thrust.</li>
            </ul>

            <h3>3. Avionics & Flight Control</h3>
            <p>A high-reliability distributed control system.</p>
            <ul>
                <li><strong>Flight Control Computers (FCCs):</strong> The core processors. They take inputs from the pilot and sensors to compute the exact deflection required for control surfaces.</li>
                <li><strong>Actuation Systems:</strong> Converts the digital signal into physical movement via electro-hydrostatic actuators (EHAs).</li>
            </ul>

            <h3>4. Materials Science</h3>
            <p>The choice of materials is driven by the <span class="physics-term" data-definition="The ratio of a material's strength to its mass.">Strength-to-Weight Ratio</span>.</p>
            <ul>
                <li>Aluminum Alloys: Classic, easy to manufacture.</li>
                <li>Titanium: Used in high-temperature areas.</li>
                <li>Carbon Fiber Reinforced Polymer (CFRP): Used in modern airframes to reduce weight.</li>
            </ul>
        \`,
        quiz: [
            { q: "What does 'semi-monocoque' refer to?", options: ["A type of engine", "A structure where the skin carries part of the load", "A flight control software", "A landing gear system"], answer: 1, exp: "In semi-monocoque construction, the aircraft's outer skin shares the structural load with internal frames." },
            { q: "What is the primary function of wing spars?", options: ["Hold fuel", "Shape the airfoil", "Carry bending loads", "Provide thrust"], answer: 2, exp: "Spars are the main longitudinal backbone of the wing, designed specifically to carry bending stress." },
            { q: "Which cycle defines most modern aircraft propulsion?", options: ["Otto Cycle", "Rankine Cycle", "Brayton Cycle", "Carnot Cycle"], answer: 2, exp: "Jet engines operate on the Brayton Cycle (Intake, Compression, Combustion, Exhaust)." },
            { q: "What does the compressor do in a jet engine?", options: ["Burns fuel", "Extracts energy", "Increases air pressure and temperature", "Steers the aircraft"], answer: 2, exp: "The compressor squeezes incoming air, drastically raising its pressure and temperature before it enters the combustor." },
            { q: "What extracts energy from exhaust gas to drive the compressor?", options: ["The Fan", "The Combustor", "The Nozzle", "The Turbine"], answer: 3, exp: "The hot expanding gases spin the turbine, which is connected via a shaft to the compressor at the front." },
            { q: "What do Flight Control Computers (FCCs) do?", options: ["Serve passengers Wi-Fi", "Compute required control surface deflections", "Pump hydraulic fluid", "Burn fuel"], answer: 1, exp: "FCCs take pilot and sensor inputs and calculate the exact required movements for the control surfaces." },
            { q: "What does EHA stand for in aviation?", options: ["Electro-Hydrostatic Actuator", "Emergency Hover Altitude", "Engine Heat Assembly", "Electrical Hub Area"], answer: 0, exp: "EHAs convert digital signals into powerful mechanical movements using localized hydraulics driven by electricity." },
            { q: "Why is Titanium used in certain parts of an aircraft?", options: ["It is cheap", "It is flexible", "It handles high temperatures well", "It dissolves in water"], answer: 2, exp: "Titanium maintains strength at extreme temperatures, making it ideal for engine exhausts and leading edges." },
            { q: "What is a major benefit of Carbon Fiber Reinforced Polymer (CFRP)?", options: ["High weight", "Corrosion resistance and low weight", "It melts easily", "It is fully transparent"], answer: 1, exp: "CFRP is incredibly strong, lightweight, and does not corrode like traditional aluminum alloys." },
            { q: "What does redundancy ensure in aerospace engineering?", options: ["The plane looks good", "No single point of failure can crash the aircraft", "The plane flies faster", "Fuel is cheaper"], answer: 1, exp: "Redundancy means having multiple backups so that if one component fails, others take over safely." }
        ]
    },
    {
        id: "parts-vs-components",
        title: "Parts vs. Components",
        hasVideo: false,
        textContent: \`
            <h2>The difference between 'Parts of Plane' and 'Airflight Components'</h2>
            <p>The distinction lies in how you view the aircraft: as a collection of physical matter (the plane) versus a collection of functional capabilities (the flight system).</p>
            
            <h3>The Computer Science Analogy</h3>
            <ul>
                <li><strong>Parts of a Plane are the Hardware:</strong> These are the physical pieces you can hold. If a capacitor pops, that is a hardware failure.</li>
                <li><strong>Components of Airflight are the Software/System Stack:</strong> They define what the hardware does. Even if hardware is perfect, if the scheduler has a bug, the system fails.</li>
            </ul>

            <h3>Breakdown of the Distinction</h3>
            <p><strong>1. "Parts of a Plane" (The Physicality)</strong></p>
            <p>When engineers talk about parts, they are talking about the Bill of Materials (BOM). This is granular and specific.</p>
            <ul>
                <li>Structural: Skin panels, spars, stringers, fasteners.</li>
                <li>Mechanical: Landing gear struts, control surface hinges.</li>
                <li>Purpose: To define the "what."</li>
            </ul>

            <p><strong>2. "Components of Airflight" (The Logic/Function)</strong></p>
            <p>When engineers talk about components of airflight, they are referring to the Systemic Functions. A single "component" often requires multiple physical parts to work in harmony.</p>
            <ul>
                <li><strong>The "Pressurization System":</strong> Consists of engine bleed valves (hardware), Air Cycle Machine (hardware), sensors, and ECS logic (software).</li>
                <li><strong>The "Flight Control System":</strong> Combines pilot input (hardware), flight computer (processing), and actuators (hardware).</li>
                <li>Purpose: To define the "how."</li>
            </ul>
        \`,
        quiz: [
            { q: "In the computer analogy, what do 'Parts' represent?", options: ["Software", "Hardware", "Network", "Users"], answer: 1, exp: "Parts are the physical, tangible items on the aircraft, much like computer hardware." },
            { q: "In the computer analogy, what do 'Components of Airflight' represent?", options: ["Hardware", "The physical casing", "The Software/System Stack", "The monitor"], answer: 2, exp: "Components represent the integrated functional capabilities and logic, akin to software and operating systems." },
            { q: "Which of the following is considered a 'Part' rather than a 'System Component'?", options: ["The Environmental Control System", "The Flight Control Laws", "A physical titanium fastener (rivet)", "The Auto-pilot"], answer: 2, exp: "A fastener is a single, static physical piece of hardware (a Part)." },
            { q: "What is a Bill of Materials (BOM)?", options: ["A list of flight laws", "A comprehensive list of physical parts", "A passenger manifest", "A fuel calculation"], answer: 1, exp: "The BOM is the exhaustive list of every single physical piece required to build the aircraft." },
            { q: "The Pressurization System is considered a:", options: ["Component of Airflight", "Single Part", "Unnecessary", "Structural element only"], answer: 0, exp: "It is a complex integration of valves, sensors, and software working together to fulfill a function." },
            { q: "What does the 'Parts' perspective define?", options: ["The 'why'", "The 'how'", "The 'what'", "The 'when'"], answer: 2, exp: "Parts define 'what' the aircraft is physically made of." },
            { q: "What does the 'Components of Airflight' perspective define?", options: ["The 'what'", "The 'how'", "The cost", "The weight"], answer: 1, exp: "Components define 'how' the aircraft actually operates and performs its functions." },
            { q: "If a single hinge on a door breaks, this is primarily a failure of a:", options: ["Part", "Flight Law", "System Architecture", "Navigation System"], answer: 0, exp: "A broken physical hinge is a localized hardware (part) failure." },
            { q: "If the plane is structurally perfect but the fly-by-wire software has a bug, what has failed?", options: ["A Part", "A Component of Airflight / System Stack", "The BOM", "The fuselage"], answer: 1, exp: "The logical function (software) has failed, even though the physical hardware is intact." },
            { q: "Which document would an engineer use to find a physical replacement strut?", options: ["Flight Manual", "Software Codebase", "Maintenance Manual (Parts Catalog)", "System Design Document"], answer: 2, exp: "Maintenance manuals list the specific physical parts for replacement and inspection." }
        ]
    },
    {
        id: "how-it-flies",
        title: "How does an Airplane Fly?",
        hasVideo: true,
        videoPlaceholder: "flies_poster.png",
        textContent: \`
            <h2>How does an Airplane flies?</h2>
            <p>Flight is simply the management of four vectors to control the aircraft's state.</p>
            
            <h3>1. The Four Forces of Flight</h3>
            <ul>
                <li><strong>Lift (L):</strong> The upward force generated primarily by the wings.</li>
                <li><strong>Weight (W):</strong> The downward force due to gravity.</li>
                <li><strong>Thrust (T):</strong> The forward force generated by the engines.</li>
                <li><strong>Drag (D):</strong> The backward force (air resistance).</li>
            </ul>
            <p>For steady, level flight: Lift = Weight, and Thrust = Drag.</p>

            <h3>2. The Physics of Lift</h3>
            <p>Lift is generated by two phenomena:</p>
            <p><strong>A. Bernoulli’s Principle (Pressure Differential)</strong></p>
            <p>As air flows over the curved upper surface of the <span class="physics-term" data-definition="The cross-sectional shape of a wing.">airfoil</span>, it travels faster. According to <span class="physics-term" data-definition="An increase in the speed of a fluid occurs simultaneously with a decrease in pressure.">Bernoulli’s Equation</span>, faster-moving fluid exerts lower pressure. The high pressure below the wing pushes it upward.</p>
            
            <p><strong>B. Newton’s Third Law (Action and Reaction)</strong></p>
            <p>The wing meets the air at an <span class="physics-term" data-definition="The angle between the oncoming air and a reference line on the wing.">Angle of Attack</span>, deflecting air downward (downwash). By <span class="physics-term" data-definition="For every action, there is an equal and opposite reaction.">Newton's Third Law</span>, pushing air down results in the air pushing the wing up.</p>

            <h3>3. The Math of Lift</h3>
            <p>The Lift Equation: <code>L = 1/2 * ρ * v^2 * S * CL</code></p>
            <ul>
                <li><strong>ρ (rho):</strong> air density.</li>
                <li><strong>v:</strong> velocity.</li>
                <li><strong>S:</strong> surface area of the wing.</li>
                <li><strong>CL:</strong> Coefficient of Lift.</li>
            </ul>

            <h3>4. Control and Stability</h3>
            <p>The Angle of Attack (α) is critical. Increasing it increases lift, but also drag. If the angle is too steep, airflow detaches, causing a <span class="physics-term" data-definition="A sudden reduction in lift caused by exceeding the critical angle of attack.">stall</span>.</p>
        \`,
        quiz: [
            { q: "What are the four forces of flight?", options: ["Lift, Weight, Thrust, Drag", "Speed, Mass, Gravity, Friction", "Up, Down, Forward, Backward", "Altitude, Velocity, Mass, Energy"], answer: 0, exp: "The four fundamental forces acting on an aircraft are Lift, Weight, Thrust, and Drag." },
            { q: "For a plane to fly at a constant speed and altitude, what must be true?", options: ["Lift > Weight", "Thrust > Drag", "Lift = Weight AND Thrust = Drag", "Thrust = Weight"], answer: 2, exp: "In steady, unaccelerated flight, the opposing forces are in perfect equilibrium." },
            { q: "According to Bernoulli's Principle, faster-moving air over the top of the wing creates:", options: ["Higher pressure", "Lower pressure", "More weight", "Less thrust"], answer: 1, exp: "Bernoulli's principle states that an increase in fluid velocity results in a decrease in pressure." },
            { q: "How does Newton's Third Law apply to lift?", options: ["The engine pushes the plane forward", "The wing deflects air downwards, so the air pushes the wing upwards", "Gravity pulls the plane down", "Friction slows the plane"], answer: 1, exp: "Action (wing pushing air down) results in an equal and opposite reaction (air pushing wing up)." },
            { q: "What is the Angle of Attack?", options: ["The angle the plane takes off", "The angle between the wing's chord line and the oncoming air", "The angle of the jet engines", "The steepness of a dive"], answer: 1, exp: "Angle of Attack is the angle at which the wing meets the relative wind." },
            { q: "In the Lift Equation, what does 'v' represent?", options: ["Volume", "Viscosity", "Velocity", "Vectors"], answer: 2, exp: "In the lift equation, 'v' stands for the velocity (speed) of the aircraft relative to the air." },
            { q: "What happens if the Angle of Attack becomes too steep?", options: ["The plane goes to space", "The plane experiences a stall", "Thrust increases infinitely", "Drag drops to zero"], answer: 1, exp: "If the angle is too steep, the smooth airflow separates from the wing, causing a sudden loss of lift known as a stall." },
            { q: "Which force directly opposes Lift?", options: ["Thrust", "Drag", "Weight", "Momentum"], answer: 2, exp: "Lift pulls the aircraft up, while Weight (gravity) pulls it down." },
            { q: "What does 'rho' (ρ) represent in the lift equation?", options: ["Wing area", "Coefficient of lift", "Air density", "Radius"], answer: 2, exp: "Rho (ρ) represents the density of the air the plane is flying through." },
            { q: "To accelerate forward, what must the pilot do?", options: ["Increase Drag > Thrust", "Increase Thrust > Drag", "Increase Weight", "Decrease Lift"], answer: 1, exp: "To accelerate, the forward force (Thrust) must exceed the backward force (Drag)." }
        ]
    }
);
