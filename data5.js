window.courseData.push(
    {
        id: "jet-thrust",
        title: "How do jet engines produce thrust?",
        hasVideo: false,
        textContent: \`
            <h2>How do jet engines produce thrust to move an airplane forward?</h2>
            <p>At its core, a jet engine is a reaction engine. It operates on the principle of Newton's Third Law: "For every action, there is an equal and opposite reaction."</p>
            
            <h3>The Mechanics of Thrust</h3>
            <ul>
                <li><strong>The Action:</strong> The engine takes in air, compresses it, mixes it with fuel, and ignites it. This creates a massive, high-velocity stream of hot exhaust gas that is blasted out the rear of the engine.</li>
                <li><strong>The Reaction:</strong> Because the engine is forcefully pushing this large mass of air backward, the air exerts an equal force pushing the engine (and the airplane attached to it) forward.</li>
            </ul>
            
            <h3>The Equation</h3>
            <p>Thrust ($F$) is calculated by multiplying the mass flow rate of the air ($\\dot{m}$) by the change in velocity ($\\Delta v$):</p>
            <p><code>F = \\dot{m} * (v_{exhaust} - v_{intake})</code></p>
            <p>To get more thrust, you can either push a small amount of air very fast (like a fighter jet) or push a massive amount of air relatively slowly (like a commercial turbofan).</p>
        \`,
        quiz: [
            { q: "Which of Newton's laws explains how jet engines produce thrust?", options: ["First Law", "Second Law", "Third Law", "Law of Universal Gravitation"], answer: 2, exp: "Newton's Third Law (Action and Reaction) is the fundamental principle behind reaction engines." },
            { q: "In a jet engine, what is the 'action'?", options: ["The plane moving forward", "The engine blasting high-velocity exhaust gas backward", "The pilot pressing the throttle", "The wheels spinning"], answer: 1, exp: "The engine physically pushes a massive amount of air backward." },
            { q: "What is the 'reaction' to the exhaust gas being pushed backward?", options: ["The engine getting hot", "The plane moving forward", "The plane moving backward", "The wings falling off"], answer: 1, exp: "The air pushes back with an equal force, propelling the aircraft forward." },
            { q: "What two variables primarily determine the amount of thrust produced?", options: ["Color and Shape", "Mass of air and Change in velocity", "Altitude and Temperature", "Fuel price and Weight"], answer: 1, exp: "Thrust equals the mass flow rate of the air multiplied by its acceleration (change in velocity)." },
            { q: "How do commercial airliners (turbofans) achieve high thrust efficiently?", options: ["By pushing a tiny amount of air extremely fast", "By pushing a massive amount of air relatively slowly", "By using electric batteries", "By using propellers only"], answer: 1, exp: "Large front fans move huge volumes of air, which is highly efficient for subsonic speeds." },
            { q: "What happens to the air inside the core of the engine?", options: ["It is cooled down", "It is compressed, mixed with fuel, and ignited", "It is stored for later", "It is filtered for breathing"], answer: 1, exp: "The core drastically increases the energy of the air via combustion." },
            { q: "If an engine takes in air at 500 mph and exhausts it at 500 mph, how much thrust is produced?", options: ["Maximum thrust", "Zero thrust", "Negative thrust", "Infinite thrust"], answer: 1, exp: "If there is no change in velocity ($\\Delta v = 0$), there is no acceleration of the air, hence no thrust." },
            { q: "Where does the hot, expanding gas exit the engine?", options: ["The intake", "The compressor", "The nozzle at the rear", "The fuel tank"], answer: 2, exp: "The exhaust nozzle shapes and accelerates the hot gas as it leaves the engine." },
            { q: "Does a jet engine need air to work?", options: ["No, it works in a vacuum like space", "Yes, it breathes atmospheric air to provide mass for thrust and oxygen for combustion", "Only when starting", "Only below 10,000 ft"], answer: 1, exp: "Unlike rockets that carry their own oxidizer, jets must constantly suck in atmospheric air." },
            { q: "What is the mathematical symbol for Thrust?", options: ["T or F (Force)", "M", "V", "A"], answer: 0, exp: "Thrust is a Force, usually represented by F or T." }
        ]
    },
    {
        id: "oil-fuel-systems",
        title: "Oil and Fuel Systems",
        hasVideo: true,
        videoPlaceholder: "fuel_poster.png",
        textContent: \`
            <h2>Oil and Fuel Systems</h2>
            
            <h3>1. The Fuel System</h3>
            <p>Aviation fuel (Jet-A) is the energy source for the aircraft. It is stored primarily in the wings to save space and reduce structural bending loads on the wing roots.</p>
            <ul>
                <li><strong>Fuel Pumps:</strong> Move fuel from tanks to the engines.</li>
                <li><strong>Crossfeed Valves:</strong> Allow any engine to draw fuel from any tank, maintaining lateral balance if an engine fails.</li>
            </ul>

            <h3>2. The Oil System</h3>
            <p>Jet engines spin at tens of thousands of RPMs. Without oil, the metal bearings would melt from friction in seconds.</p>
            <ul>
                <li><strong>Lubrication:</strong> Reduces friction between moving parts.</li>
                <li><strong>Cooling:</strong> Oil absorbs heat from the engine bearings and is cooled by passing through a Fuel/Oil Heat Exchanger (heating the cold fuel, cooling the hot oil).</li>
            </ul>
        \`,
        quiz: [
            { q: "Where is aviation fuel primarily stored in large commercial aircraft?", options: ["In the tail", "In the wings", "In the passenger cabin", "In the landing gear"], answer: 1, exp: "Storing fuel in the wings saves space and helps counteract the upward lifting force on the wings." },
            { q: "What type of fuel do modern jet airliners use?", options: ["Unleaded gasoline", "Diesel", "Jet-A (Kerosene-based)", "Liquid Hydrogen"], answer: 2, exp: "Jet engines run on highly refined kerosene-based fuels like Jet-A." },
            { q: "What is the primary purpose of the crossfeed valves?", options: ["To dump fuel overboard", "To allow any engine to draw fuel from any tank", "To mix oil and fuel", "To filter water out"], answer: 1, exp: "Crossfeed systems ensure that if one tank leaks or an engine fails, fuel can be balanced to keep the plane level." },
            { q: "Why do jet engines require oil?", options: ["To burn it for extra thrust", "To lubricate bearings spinning at high RPMs and prevent melting", "To make the exhaust darker", "To add weight"], answer: 1, exp: "At tens of thousands of RPMs, unlubricated metal bearings would destroy themselves via friction instantly." },
            { q: "Besides lubrication, what is the other major function of engine oil?", options: ["Adding thrust", "Cooling internal engine parts by absorbing heat", "Cleaning the windows", "Pressurizing the cabin"], answer: 1, exp: "Oil flows over hot bearings, absorbing massive amounts of heat and carrying it away." },
            { q: "How is the hot engine oil typically cooled?", options: ["By spraying it outside", "By passing it through a Fuel/Oil Heat Exchanger", "By putting ice in it", "It never gets cooled"], answer: 1, exp: "Hot oil and freezing cold fuel pass near each other in a heat exchanger. The oil cools down, and the fuel warms up, benefiting both." },
            { q: "What happens if a jet engine loses its oil pressure?", options: ["It flies faster", "The bearings overheat and the engine seizes/fails", "Nothing", "The fuel tank explodes"], answer: 1, exp: "Without oil, catastrophic friction causes the engine to tear itself apart and seize." },
            { q: "Why is it beneficial to heat the fuel using the hot oil before it enters the engine?", options: ["It makes the fuel heavier", "It prevents ice crystals from forming in the fuel at high altitudes", "It changes the fuel color", "It creates more drag"], answer: 1, exp: "At 35,000 ft, fuel gets extremely cold. Heating it ensures ice doesn't clog the fuel filters." },
            { q: "What component moves fuel from the tanks to the engines?", options: ["Gravity alone", "Fuel Pumps", "The pilot blowing into a tube", "Wind"], answer: 1, exp: "Powerful electrical and engine-driven pumps push the fuel through the lines." },
            { q: "Storing fuel in the wings reduces what kind of stress?", options: ["Thermal stress", "Upward bending stress on the wing roots", "Passenger stress", "Electrical stress"], answer: 1, exp: "The weight of the fuel pushes down, counteracting the lift pushing up, relieving stress where the wing meets the fuselage." }
        ]
    },
    {
        id: "monitor-oil-fuel",
        title: "Why monitor oil & fuel?",
        hasVideo: false,
        textContent: \`
            <h2>Why is it critical to monitor oil and fuel systems during flight operations?</h2>
            <p>Aviation is completely unforgiving of system neglect. Monitoring fluids is a matter of life and death.</p>
            
            <h3>1. Fuel Monitoring</h3>
            <p>Running out of fuel turns a highly maneuverable aircraft into a very heavy glider. Pilots must constantly monitor:</p>
            <ul>
                <li><strong>Quantity:</strong> Is there enough to reach the destination plus reserves?</li>
                <li><strong>Distribution:</strong> An imbalance of fuel in the wings can cause the aircraft to roll uncontrollably.</li>
                <li><strong>Leaks:</strong> A sudden drop in fuel quantity indicates a leak that requires immediate diversion.</li>
            </ul>

            <h3>2. Oil Monitoring</h3>
            <p>Oil is the lifeblood of the engine hardware.</p>
            <ul>
                <li><strong>Pressure:</strong> Low pressure means oil isn't reaching the bearings. The engine will fail shortly.</li>
                <li><strong>Temperature:</strong> High temperature indicates excessive friction or a failure in the cooling system.</li>
                <li><strong>Quantity:</strong> A steady drop indicates an oil leak.</li>
            </ul>
        \`,
        quiz: [
            { q: "What happens if a commercial jet runs completely out of fuel?", options: ["It stops mid-air", "It becomes a glider and loses powered thrust", "It reverses direction", "The engines switch to electric power"], answer: 1, exp: "Without fuel, the engines stop, thrust drops to zero, and the plane must glide to a landing." },
            { q: "Why must fuel distribution between the left and right wings be monitored?", options: ["To ensure the paint doesn't peel", "To prevent a lateral weight imbalance that could cause uncontrollable rolling", "To keep the fuel warm", "To make the plane heavier"], answer: 1, exp: "If one wing has 5,000 lbs more fuel than the other, the plane will heavily bank to that side." },
            { q: "What does a sudden, unexplained drop in fuel quantity indicate?", options: ["The plane is flying faster", "A severe fuel leak", "The passengers are breathing too much", "Normal operation"], answer: 1, exp: "Fuel should burn at a predictable rate. A sudden drop means fuel is leaking overboard." },
            { q: "Why is low engine oil pressure a critical emergency?", options: ["The oil is too cold", "Oil isn't reaching the rapidly spinning bearings, leading to imminent engine failure", "The plane will fly too high", "The cabin will depressurize"], answer: 1, exp: "Without pressurized oil flow, the metal-on-metal friction will destroy the engine in minutes." },
            { q: "What does abnormally high engine oil temperature indicate?", options: ["The engine is working perfectly", "Excessive internal friction or a failure of the heat exchanger", "The outside air is hot", "The fuel is too cold"], answer: 1, exp: "High temps mean the oil isn't cooling properly or an internal part is rubbing severely." },
            { q: "What must a pilot ensure regarding fuel before taking off?", options: ["That it smells good", "That they have enough to reach the destination, plus legal emergency reserves", "That the tanks are completely full no matter what", "That it is frozen"], answer: 1, exp: "Aviation regulations require destination fuel plus enough to reach an alternate airport and circle for 45 minutes." },
            { q: "If an engine's oil quantity is steadily dropping, what is the likely cause?", options: ["Evaporation", "An oil leak in the engine", "The pilot drank it", "Normal consumption over a 10-minute flight"], answer: 1, exp: "While engines consume a tiny amount of oil, a noticeable steady drop indicates a leak." },
            { q: "What system allows pilots to correct a fuel imbalance?", options: ["The rudder", "The Crossfeed system", "The landing gear", "The flaps"], answer: 1, exp: "Crossfeed valves allow fuel to be pumped from the heavier wing to the engines on the lighter wing." },
            { q: "Is it safe to continue a long ocean flight if engine oil pressure drops to zero?", options: ["Yes", "No, the engine must be shut down immediately to prevent catastrophic failure or fire", "Only if flying low", "Only if it is raining"], answer: 1, exp: "Zero oil pressure means guaranteed engine destruction. The engine is shut down, and the plane diverts." },
            { q: "What is the primary indicator of the 'health' of an engine's mechanical internals?", options: ["Fuel color", "Cabin temperature", "Oil Pressure and Temperature gauges", "Radio volume"], answer: 2, exp: "Oil gauges are the primary way a pilot knows if the mechanical parts of the engine are surviving." }
        ]
    }
);
