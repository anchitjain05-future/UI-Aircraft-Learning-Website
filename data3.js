window.courseData.push(
    {
        id: "winglets",
        title: "Do all Airplanes have Winglets?",
        hasVideo: true,
        videoPlaceholder: "winglets_poster.png",
        textContent: \`
            <h2>Do all Airplanes have winglets? What are they for?</h2>
            <p>No, all Airplanes don't have winglets. While you see them on most modern commercial airliners, their presence is an engineering trade-off between aerodynamic efficiency, structural weight, and operational cost.</p>
            
            <h3>1. What are they for? (The Aerodynamics)</h3>
            <p>To understand winglets, you must understand <span class="physics-term" data-definition="Drag caused by the generation of lift.">Induced Drag</span>.</p>
            <ul>
                <li><strong>The Vortex Problem:</strong> High pressure on the bottom of the wing wants to equalize with low pressure on top at the wingtip. This creates a swirling "tornado" called a <span class="physics-term" data-definition="Swirling air created at the tips of an airplane's wings.">Wingtip Vortex</span>.</li>
                <li><strong>The Cost of Vortices:</strong> They consume kinetic energy from the aircraft's forward motion, creating "lift-induced drag."</li>
                <li><strong>The Winglet Solution:</strong> By extending the wingtip vertically, it disrupts airflow, reducing the size of the vortex and thus reducing induced drag.</li>
            </ul>

            <h3>2. The Math of Efficiency</h3>
            <p>The lift-induced drag equation shows that increasing wingspan ($b$) is the best way to reduce induced drag. However, aircraft are limited by airport gate sizes. Winglets artificially increase the "effective" wingspan without making the physical wing wider.</p>

            <h3>3. Why don't all planes have them?</h3>
            <ul>
                <li><strong>Weight Penalty:</strong> Adding mass to the tip increases bending stress, requiring a heavier, reinforced wing.</li>
                <li><strong>Mission Profile:</strong> Winglets save fuel during long-duration cruises. On short flights, the extra weight cancels out the aerodynamic benefits.</li>
                <li><strong>Alternative Solutions:</strong> Newer planes (like the 787) use "Raked Wingtips" instead of vertical winglets to achieve similar drag reduction.</li>
            </ul>
        \`,
        quiz: [
            { q: "Do all airplanes have winglets?", options: ["Yes", "No", "Only military planes", "Only propeller planes"], answer: 1, exp: "No, winglets are an engineering choice based on whether the fuel savings outweigh the weight penalty." },
            { q: "What primary aerodynamic problem do winglets solve?", options: ["Excess thrust", "Wingtip vortices (Induced Drag)", "Cabin pressure loss", "Skin friction"], answer: 1, exp: "Winglets disrupt the high-pressure air curling over the wingtip, reducing the strength of drag-inducing vortices." },
            { q: "What is a wingtip vortex?", options: ["A weather phenomenon", "Swirling air at the wingtip caused by pressure equalization", "Fuel burning in the engine", "Air flowing directly backward"], answer: 1, exp: "High pressure below the wing tries to roll over the tip to the low pressure above, creating a swirling vortex." },
            { q: "What is the primary benefit of reducing induced drag?", options: ["Lower fuel consumption", "Higher cabin pressure", "Better Wi-Fi", "Louder engines"], answer: 0, exp: "Less drag means the engines don't have to work as hard, which saves a significant amount of fuel over long flights." },
            { q: "Why not just make the wings longer instead of adding winglets?", options: ["Longer wings look bad", "The plane wouldn't fit in airport gates", "Longer wings create more vortices", "Aluminum is too expensive"], answer: 1, exp: "Planes are limited by taxiway and gate dimensions. Winglets increase 'effective' span without extending physical width." },
            { q: "What is a major downside to adding winglets?", options: ["They decrease lift", "They add weight and bending stress to the wing", "They make the plane too fast", "They block the windows"], answer: 1, exp: "Adding mass to the extreme tip of the wing creates a 'moment arm' that requires structural reinforcement, adding overall weight." },
            { q: "On what type of flight are winglets most effective?", options: ["Short 30-minute hops", "Helicopter flights", "Long-haul cruise flights", "Stunt flying"], answer: 2, exp: "The drag reduction pays off over thousands of miles, overcoming the initial weight penalty of having the winglet." },
            { q: "What is an alternative to the traditional vertical winglet?", options: ["Removing the wings", "Raked wingtips", "Square wingtips", "Adding more engines"], answer: 1, exp: "Raked wingtips, like on the Boeing 787, sweep back at a steep angle to achieve similar aerodynamic efficiency." },
            { q: "Induced drag is a byproduct of:", options: ["Generating lift", "Engine exhaust", "Landing gear extension", "Dirty paint"], answer: 0, exp: "You cannot generate lift without creating high and low pressure, which inevitably leads to induced drag." },
            { q: "Which variable in the induced drag equation most heavily reduces drag when increased?", options: ["Lift", "Air Density", "Velocity", "Wingspan"], answer: 3, exp: "Wingspan is squared in the denominator. A small increase in span drastically reduces induced drag." }
        ]
    },
    {
        id: "primary-flying-controls",
        title: "Primary Flying Controls",
        hasVideo: true,
        videoPlaceholder: "controls_poster.png",
        textContent: \`
            <h2>Primary Flying Controls</h2>
            <p>Primary Flight Controls are the essential surfaces that allow a pilot to maneuver the aircraft around its three axes of motion.</p>
            
            <h3>The Three Axes of Flight</h3>
            <p>An aircraft operates in 3D space by controlling <span class="physics-term" data-definition="A rotational force about an axis.">Moment</span>.</p>

            <h3>1. Ailerons (Roll Control)</h3>
            <ul>
                <li><strong>Axis:</strong> Longitudinal Axis (runs from nose to tail).</li>
                <li><strong>Mechanism:</strong> Located on the wings, ailerons move in opposition. Moving the stick left raises the left aileron (decreasing lift) and lowers the right (increasing lift).</li>
                <li><strong>Result:</strong> The aircraft <span class="physics-term" data-definition="Rotation along the longitudinal axis.">rolls</span> left or right.</li>
            </ul>

            <h3>2. Elevators (Pitch Control)</h3>
            <ul>
                <li><strong>Axis:</strong> Lateral Axis (runs from wingtip to wingtip).</li>
                <li><strong>Mechanism:</strong> Located on the horizontal stabilizer, elevators move in tandem. Deflecting them upward pushes the tail down and the nose up.</li>
                <li><strong>Result:</strong> Changes the aircraft's <span class="physics-term" data-definition="Nose up or down movement around the lateral axis.">pitch</span> to manage altitude and speed.</li>
            </ul>

            <h3>3. Rudder (Yaw Control)</h3>
            <ul>
                <li><strong>Axis:</strong> Vertical Axis (runs from top to bottom through the center).</li>
                <li><strong>Mechanism:</strong> Attached to the vertical stabilizer. Pushing a pedal moves the rudder, pushing the tail sideways.</li>
                <li><strong>Result:</strong> Controls <span class="physics-term" data-definition="Side-to-side movement of the nose.">yaw</span>. Essential for counteracting "Adverse Yaw" during turns.</li>
            </ul>

            <h3>The Engineering Perspective: Fly-by-Wire</h3>
            <p>In modern aircraft, a pilot's input isn't a direct mechanical link. The Flight Control Computer calculates the required deflection based on airspeed and altitude, then sends a digital signal to hydraulic actuators to move the surface precisely.</p>
        \`,
        quiz: [
            { q: "What are the three axes of flight?", options: ["Up, Down, Forward", "Pitch, Roll, Yaw", "Longitudinal, Lateral, Vertical", "X, Y, Z coordinates"], answer: 2, exp: "The three axes are Longitudinal (nose to tail), Lateral (wingtip to wingtip), and Vertical (top to bottom)." },
            { q: "Which control surface manages roll?", options: ["Elevators", "Rudder", "Ailerons", "Flaps"], answer: 2, exp: "Ailerons on the trailing edge of the wings control the aircraft's roll." },
            { q: "If the pilot pulls the control stick straight back, which surface moves?", options: ["Ailerons", "Rudder", "Elevators", "Landing Gear"], answer: 2, exp: "Pulling back moves the elevators upward, pushing the tail down and the nose up." },
            { q: "What movement does the rudder control?", options: ["Pitch", "Roll", "Yaw", "Thrust"], answer: 2, exp: "The rudder moves the nose left and right, which is called yaw." },
            { q: "How do ailerons operate?", options: ["In tandem (together)", "In opposition (one up, one down)", "They don't move", "Only at low speeds"], answer: 1, exp: "To roll, one wing must lose lift while the other gains it, so ailerons always move in opposite directions." },
            { q: "What does moving the elevator upward do?", options: ["Pushes the nose down", "Pushes the tail down and nose up", "Turns the plane left", "Slows the plane down"], answer: 1, exp: "Upward elevators create a downward aerodynamic force on the tail, pitching the nose upward." },
            { q: "What is 'Adverse Yaw'?", options: ["The plane flying backward", "The nose pulling away from the direction of a turn due to aileron drag", "Engine failure", "Turbulence"], answer: 1, exp: "When banking, the upward-moving wing creates more lift and therefore more drag, pulling the nose away from the turn." },
            { q: "Which control surface is used to counteract Adverse Yaw?", options: ["Elevator", "Flaps", "Rudder", "Spoilers"], answer: 2, exp: "The pilot applies rudder in the direction of the turn to keep the nose aligned." },
            { q: "In a Fly-by-Wire system, what sits between the pilot's stick and the control surface?", options: ["Steel cables", "A Flight Control Computer", "A co-pilot", "Nothing"], answer: 1, exp: "Computers interpret the pilot's input and digitally command actuators to move the surfaces." },
            { q: "What is the primary danger if Fly-by-Wire control laws are tuned poorly?", options: ["The plane runs out of gas", "Pilot-Induced Oscillation (instability)", "The tires pop", "The windows break"], answer: 1, exp: "If the computer loop has lag or overcompensates, the plane can begin oscillating uncontrollably based on the pilot's inputs." }
        ]
    },
    {
        id: "empennage",
        title: "The Role of the Tailplane / Empennage",
        hasVideo: true,
        videoPlaceholder: "tail_poster.png",
        textContent: \`
            <h2>What role does the tailplane/empennage play in aircraft stability?</h2>
            <p>The empennage, or tail assembly, is critical for the natural stability of the aircraft. Without it, airplanes would be uncontrollably erratic.</p>
            
            <h3>1. The Concept of Stability</h3>
            <p>In aerospace engineering, stability is the tendency of an aircraft to return to its original state after a disturbance (like a gust of wind) without pilot input.</p>

            <h3>2. The Horizontal Stabilizer (Longitudinal Stability)</h3>
            <ul>
                <li><strong>The Problem:</strong> The Center of Lift on the main wings is usually slightly behind the aircraft's Center of Gravity (CG). This creates a natural tendency for the nose to pitch down.</li>
                <li><strong>The Solution:</strong> The horizontal stabilizer is shaped like a small, upside-down wing. It generates a continuous downward force (negative lift) that holds the tail down, balancing the nose-heavy tendency.</li>
                <li><strong>Pitch Stability:</strong> If a gust pushes the nose up, the plane slows down, the tail loses some of its downward force, and the nose naturally drops back to level flight.</li>
            </ul>

            <h3>3. The Vertical Stabilizer (Directional Stability)</h3>
            <ul>
                <li><strong>The Weathervane Effect:</strong> The vertical stabilizer acts exactly like the feathers on an arrow or a weathervane.</li>
                <li>Because it is located far behind the Center of Gravity, any side-slip (yawing) exposes the broad side of the vertical fin to the oncoming wind.</li>
                <li>The wind pushes against the fin, forcing the tail back into alignment and keeping the nose pointed straight ahead.</li>
            </ul>
        \`,
        quiz: [
            { q: "What is another name for the tail assembly?", options: ["Fuselage", "Empennage", "Nacelle", "Avionics"], answer: 1, exp: "Empennage is the technical term for the entire rear tail section." },
            { q: "What does 'stability' mean in aviation?", options: ["Flying fast", "The tendency to return to a balanced state after a disturbance", "Never crashing", "Being heavy"], answer: 1, exp: "A stable aircraft naturally corrects itself when bumped by turbulence." },
            { q: "Where is the Center of Gravity typically located relative to the main wing's Center of Lift?", options: ["Behind it", "Exactly on it", "In front of it", "Above it"], answer: 2, exp: "The CG is usually forward of the Center of Lift, making the plane naturally nose-heavy." },
            { q: "Because planes are naturally nose-heavy, what must the horizontal stabilizer do?", options: ["Generate upward lift", "Generate downward force (negative lift)", "Generate thrust", "Nothing"], answer: 1, exp: "It acts like an upside-down wing, pushing the tail down to lever the nose up." },
            { q: "What type of stability does the horizontal stabilizer provide?", options: ["Directional", "Lateral", "Longitudinal (Pitch)", "Roll"], answer: 2, exp: "It keeps the aircraft stable along its longitudinal axis, controlling pitch." },
            { q: "What happens if a stable aircraft's nose is pushed up by a gust of wind?", options: ["It flips over", "It naturally pitches back down to regain speed", "It stalls immediately", "It accelerates"], answer: 1, exp: "As the nose rises, speed drops, tail downforce decreases, and the heavy nose drops back to level." },
            { q: "What type of stability does the vertical stabilizer provide?", options: ["Pitch", "Roll", "Directional (Yaw)", "Speed"], answer: 2, exp: "The vertical fin keeps the nose pointed straight into the wind, controlling yaw." },
            { q: "The vertical stabilizer works similarly to:", options: ["A car steering wheel", "The feathers on an arrow (weathervane effect)", "A parachute", "A propeller"], answer: 1, exp: "Like arrow feathers, the fin creates drag if the object flies sideways, pulling it back straight." },
            { q: "Why is the vertical stabilizer located at the very back?", options: ["It looks better", "To maximize the 'moment arm' (leverage) from the Center of Gravity", "To keep it away from the pilots", "To balance the fuel weight"], answer: 1, exp: "The further back it is, the more rotational leverage it has to correct yawing motions." },
            { q: "If the horizontal stabilizer fell off, what would the plane do?", options: ["Fly normally", "Pitch violently nose-down", "Roll upside down", "Gain altitude rapidly"], answer: 1, exp: "Without the tail holding it down, the nose-heavy CG would immediately pull the nose straight down." }
        ]
    },
    {
        id: "landing-gear-and-brakes",
        title: "Landing Gear and Brakes",
        hasVideo: true,
        videoPlaceholder: "gear_poster.png",
        textContent: \`
            <h2>Landing Gear and Brakes (Energy Management)</h2>
            <p>From an engineering perspective, the landing gear absorbs massive kinetic energy, while the brakes dissipate that energy as heat.</p>
            
            <h3>1. The Landing Gear (Energy Absorption)</h3>
            <p>The landing gear is a complex spring-damper system.</p>
            <ul>
                <li><strong>Oleo-Pneumatic Struts:</strong> A cylinder filled with oil and nitrogen gas.</li>
                <li><strong>The Spring:</strong> Compressed nitrogen supports the weight during taxiing.</li>
                <li><strong>The Damper:</strong> Upon landing, oil is forced through a small hole. The resistance dissipates the impact energy, preventing the plane from bouncing.</li>
                <li><strong>Weight-on-Wheels (WoW):</strong> Sensors that tell the computer if the plane is on the ground. Prevents accidental retraction.</li>
            </ul>

            <h3>2. The Braking System (Energy Dissipation)</h3>
            <p>Brakes convert Kinetic Energy ($KE = \\frac{1}{2}mv^2$) into Thermal Energy via friction.</p>
            <ul>
                <li><strong>Carbon-Carbon Discs:</strong> Used instead of steel because they maintain structural integrity at over $1,000^\\circ C$ and are lighter.</li>
                <li><strong>Multi-Disc Stack:</strong> Alternating rotors (spin with wheel) and stators (fixed to axle) are pressed together to create massive friction.</li>
            </ul>

            <h3>3. Anti-Skid Systems</h3>
            <p>A digital control system similar to a car's ABS.</p>
            <ul>
                <li>Sensors monitor individual wheel speeds.</li>
                <li>If a wheel locks up (skids), the Anti-Skid Control Unit (ASCU) momentarily releases and re-applies hydraulic pressure to maximize traction.</li>
            </ul>
        \`,
        quiz: [
            { q: "What is the primary function of the oleo-pneumatic strut upon landing?", options: ["To steer the plane", "To absorb impact energy and prevent bouncing", "To cool the brakes", "To generate electricity"], answer: 1, exp: "The strut acts as a shock absorber, using compressed gas as a spring and oil forced through a valve as a damper." },
            { q: "What acts as the 'spring' in an oleo-pneumatic landing gear?", options: ["A coiled steel spring", "Compressed nitrogen gas", "Hydraulic oil", "Carbon fiber"], answer: 1, exp: "The highly compressed nitrogen gas inside the strut compresses further to cushion the plane." },
            { q: "What acts as the 'damper' in the landing gear?", options: ["Oil forced through a small orifice", "Brake pads", "The tires", "The wings"], answer: 0, exp: "The fluid friction of oil passing through a tiny hole turns kinetic energy into heat, damping the bounce." },
            { q: "What does the Weight-on-Wheels (WoW) sensor do?", options: ["Weighs the passengers", "Tells the computer if the plane is touching the ground", "Measures tire pressure", "Turns on the engine"], answer: 1, exp: "WoW sensors are critical logic gates that prevent the gear from retracting while the plane is parked." },
            { q: "Aircraft brakes primarily convert Kinetic Energy into what?", options: ["Electrical Energy", "Potential Energy", "Thermal Energy (Heat)", "Sound Energy"], answer: 2, exp: "Brakes rely on immense friction to stop the plane, which generates massive amounts of heat." },
            { q: "Why are modern airliner brake discs made of Carbon-Carbon composite?", options: ["It is cheaper", "It handles $1,000^\\circ C$ temperatures without failing and is very light", "It never wears out", "It looks cool"], answer: 1, exp: "Carbon brakes are significantly lighter than steel and don't lose their friction properties at extreme temperatures." },
            { q: "What happens in a Multi-Disc brake stack?", options: ["Water is sprayed on the tires", "Rotors and stators are squeezed together to create friction", "Magnets stop the wheel", "The engines run in reverse"], answer: 1, exp: "Multiple rotating discs are squeezed against stationary discs to maximize the surface area for friction." },
            { q: "What is the purpose of the Anti-Skid System?", options: ["To make the tires squeal", "To prevent the wheels from locking up, maximizing traction", "To steer the plane", "To warm up the tires"], answer: 1, exp: "Like a car's ABS, it modulates brake pressure to keep the tire at the edge of traction without sliding." },
            { q: "If the Anti-Skid system detects a wheel speed dropping to zero while the plane is moving fast, what does it do?", options: ["Applies more pressure", "Releases brake pressure on that specific wheel momentarily", "Shuts down the engine", "Deploys parachutes"], answer: 1, exp: "It rapidly pumps the brake, releasing it so the wheel can spin again and regain grip on the runway." },
            { q: "What equation governs the energy the brakes must dissipate?", options: ["E=mc^2", "V = IR", "KE = 1/2 mv^2", "F = ma"], answer: 2, exp: "Kinetic energy depends on the mass of the plane and the square of its landing velocity." }
        ]
    }
);
