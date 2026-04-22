const courseData = [
    {
        id: "intro",
        title: "Introduction",
        hasVideo: true,
        videoPlaceholder: "intro_poster.png",
        textContent: `
            <h2>Welcome to Understanding the Airplane</h2>
            <p>In this interactive course, you will learn the fundamental principles of flight, the complex engineering behind aircraft design, and the intricate systems that keep modern airplanes in the sky.</p>
            <p><strong>How to use this course:</strong></p>
            <ul>
                <li>Navigate through the sections using the sidebar.</li>
                <li>Watch the animated physics videos (simulated in this demo).</li>
                <li>Read the comprehensive textual content. Hover over or click on highlighted terms (e.g. <span class="physics-term" data-definition="A force that directly opposes the weight of an airplane and holds it in the air.">Lift</span>) to see definitions.</li>
                <li>Test your knowledge with the interactive quizzes at the end of each section.</li>
            </ul>
        `,
        quiz: [] // No quiz for intro
    },
    {
        id: "parts-of-plane",
        title: "Parts of a Plane",
        hasVideo: true,
        videoPlaceholder: "parts_poster.png",
        textContent: `
            <h2>Parts of a Plane</h2>
            <p>The design of an airplane is a masterclass in structural engineering and fluid dynamics. Every part is engineered to manage the four forces of flight: <span class="physics-term" data-definition="Upward force acting on the aircraft.">lift</span>, <span class="physics-term" data-definition="Downward force caused by gravity.">weight</span>, <span class="physics-term" data-definition="Forward force produced by the powerplant.">thrust</span>, and <span class="physics-term" data-definition="Backward force caused by air resistance.">drag</span>.</p>
            
            <h3>Primary Structural Components</h3>
            <p><strong>Fuselage:</strong> The main body of the aircraft. It holds the crew, passengers, and cargo. It is designed to be aerodynamic to minimize drag while maintaining structural integrity to withstand pressure changes and aerodynamic loads.</p>
            <p><strong>Wings:</strong> These are the primary lift-generating devices. They are designed with an <span class="physics-term" data-definition="A shape designed to generate lift when fluid flows around it.">airfoil</span> shape, which creates a pressure differential—higher pressure below the wing and lower pressure above—to generate upward force (lift).</p>
            <p><strong>Empennage (Tail Assembly):</strong> Located at the rear of the aircraft, this provides stability and control.</p>
            <ul>
                <li><strong>Vertical Stabilizer:</strong> Prevents unwanted yaw (side-to-side movement).</li>
                <li><strong>Horizontal Stabilizer:</strong> Prevents unwanted pitch (nose-up or nose-down movement).</li>
            </ul>
            <p><strong>Powerplant:</strong> The system responsible for propulsion. This usually consists of jet engines (housed in nacelles) or propellers, which generate the thrust required to overcome drag.</p>
            <p><strong>Landing Gear:</strong> The supporting structure that allows the aircraft to taxi, take off, and land. It typically consists of a combination of wheels, shock absorbers, and struts (often retractable to reduce drag during flight).</p>
            
            <h3>Flight Control Surfaces</h3>
            <p>These are moveable components attached to the main structures that allow the pilot to change the aircraft's attitude and direction.</p>
            <ul>
                <li><strong>Ailerons:</strong> Located on the trailing edge of the wings. They move in opposite directions to roll the airplane left or right.</li>
                <li><strong>Elevators:</strong> Located on the trailing edge of the horizontal stabilizer. They control the pitch of the aircraft (nose up or down).</li>
                <li><strong>Rudder:</strong> Located on the trailing edge of the vertical stabilizer. It controls the yaw of the aircraft (moving the nose left or right).</li>
                <li><strong>Flaps and Slats:</strong> High-lift devices extended during takeoff and landing to increase surface area and wing curvature, allowing for flight at lower speeds without stalling.</li>
            </ul>
            
            <h3>Hidden Engineering</h3>
            <p><strong>1. Avionics (The "Brain"):</strong> Electronic systems used on aircraft.</p>
            <ul>
                <li>Flight Management System (FMS): The central computer that helps the crew navigate, plan routes, and optimize fuel consumption.</li>
                <li>Communication & Navigation: Radios, GPS, and ILS (Instrument Landing System).</li>
                <li>Fly-by-Wire Systems: Electronic signals to a computer, which commands actuators to move the surfaces.</li>
            </ul>
            <p><strong>2. Hydraulic Systems (The "Muscles"):</strong> Control surfaces and heavy components require immense force to move.</p>
            <ul>
                <li>Actuators: Use pressurized hydraulic fluid to convert energy into mechanical motion.</li>
                <li>Redundancy: Most aircraft have multiple independent hydraulic circuits.</li>
            </ul>
            <p><strong>3. Environmental Control System (ECS):</strong> Ensures the aircraft is habitable.</p>
            <ul>
                <li>Pressurization: Pumps "bleed air" into the fuselage.</li>
                <li>Temperature Control: Conditions the air to maintain a stable environment.</li>
            </ul>
            <p><strong>4. Fuel System:</strong> More than just a tank.</p>
            <ul>
                <li>Distribution: Stored in the wings, which helps balance structural weight.</li>
                <li>Management: Pumps balance fuel load across the aircraft to maintain the center of gravity.</li>
            </ul>
        `,
        quiz: [
            { q: "What is the primary function of the fuselage?", options: ["Generate lift", "Provide thrust", "Hold crew, passengers, and cargo", "Control pitch"], answer: 2, exp: "The fuselage is the main body of the aircraft, structurally designed to hold passengers and cargo while being aerodynamic." },
            { q: "Which part of the plane generates the majority of the lift?", options: ["Fuselage", "Wings", "Empennage", "Landing Gear"], answer: 1, exp: "The wings feature an airfoil shape that creates a pressure differential, generating upward lift." },
            { q: "What does the vertical stabilizer prevent?", options: ["Unwanted yaw", "Unwanted pitch", "Unwanted roll", "Stalling"], answer: 0, exp: "The vertical stabilizer is the upright tail piece that stops the nose from swaying left and right (yaw)." },
            { q: "Which control surface is responsible for rolling the airplane?", options: ["Elevators", "Rudder", "Flaps", "Ailerons"], answer: 3, exp: "Ailerons are located on the trailing edge of the wings and move in opposite directions to roll the plane." },
            { q: "What are flaps and slats used for?", options: ["Increasing speed during cruise", "Rolling the aircraft", "Increasing lift at lower speeds", "Decreasing drag"], answer: 2, exp: "Flaps and slats extend surface area and curvature, increasing lift so the plane can fly at slower speeds during takeoff and landing." },
            { q: "What do fly-by-wire systems replace?", options: ["Hydraulic fluid", "Direct mechanical cables", "The autopilot", "Jet engines"], answer: 1, exp: "Instead of physical cables, pilot inputs are sent electronically to computers that then move the control surfaces." },
            { q: "Why do aircraft have multiple independent hydraulic circuits?", options: ["For redundancy in case one fails", "To increase weight", "To mix different types of fluids", "To cool the engines"], answer: 0, exp: "Redundancy ensures that if one hydraulic circuit leaks or fails, the pilot still has control." },
            { q: "Where is 'bleed air' taken from for pressurization?", options: ["The atmosphere directly", "The compressor stage of jet engines", "The hydraulic pumps", "The fuel tanks"], answer: 1, exp: "Bleed air is high-pressure, hot air extracted from the compressor stage before combustion." },
            { q: "Where is fuel typically stored in large commercial aircraft?", options: ["Fuselage only", "Empennage", "The wings", "The landing gear"], answer: 2, exp: "Storing fuel in the wings helps balance the aircraft's structural weight and relieves upward bending stress on the wing roots." },
            { q: "Which component converts hydraulic energy into mechanical motion?", options: ["FMS", "Actuator", "Avionics", "Pitot tube"], answer: 1, exp: "Actuators use pressurized fluid to exert immense force to move heavy control surfaces." }
        ]
    }
];

window.courseData = courseData;
