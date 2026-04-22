document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    
    const sidebar = document.getElementById("sidebar");
    const navMenu = document.getElementById("nav-menu");
    const contentArea = document.getElementById("content-area");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            sidebar.classList.remove("open");
        }
    });

    let currentSectionId = courseData[0].id;
    
    // Initialize Navigation
    function initNav() {
        navMenu.innerHTML = '';
        courseData.forEach(section => {
            const btn = document.createElement("button");
            btn.className = \`nav-item \${section.id === currentSectionId ? 'active' : ''}\`;
            btn.textContent = section.title;
            btn.onclick = () => loadSection(section.id);
            navMenu.appendChild(btn);
        });
    }

    // Load a specific section
    window.loadSection = function(id) {
        currentSectionId = id;
        initNav(); // Update active state
        
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("open");
        }
        
        const section = courseData.find(s => s.id === id);
        renderSection(section);
    }

    function renderSection(section) {
        contentArea.innerHTML = '';
        
        // Video Section
        if (section.hasVideo) {
            const videoHtml = \`
                <div class="video-container" onclick="playVideoSimulation()">
                    <img src="assets/\${section.videoPlaceholder}" alt="Video placeholder for \${section.title}" onerror="this.src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80'">
                    <div class="play-button"><i data-lucide="play" style="width: 36px; height: 36px;"></i></div>
                    <div class="video-overlay">Animated Physics: \${section.title}</div>
                </div>
            \`;
            contentArea.innerHTML += videoHtml;
        }

        // Tabs
        if (section.quiz && section.quiz.length > 0) {
            const tabsHtml = \`
                <div class="tabs-container">
                    <div class="tabs-header">
                        <button class="tab-btn active" onclick="switchTab('text')"><i data-lucide="file-text"></i> Textual Content</button>
                        <button class="tab-btn" onclick="switchTab('quiz')"><i data-lucide="check-square"></i> Knowledge Check</button>
                    </div>
                    <div id="tab-text" class="tab-content active textual-content">
                        \${section.textContent}
                    </div>
                    <div id="tab-quiz" class="tab-content">
                        <div id="quiz-container" class="quiz-container"></div>
                    </div>
                </div>
            \`;
            contentArea.innerHTML += tabsHtml;
            initQuiz(section.quiz);
        } else {
            // Just text if no quiz
            const textHtml = \`
                <div class="tabs-container">
                    <div id="tab-text" class="tab-content active textual-content">
                        \${section.textContent}
                    </div>
                </div>
            \`;
            contentArea.innerHTML += textHtml;
        }

        lucide.createIcons();
        initTooltips();
        
        // Scroll to top
        document.getElementById('main-content').scrollTop = 0;
    }

    // Tab Switching
    window.switchTab = function(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        const activeBtn = event.currentTarget;
        activeBtn.classList.add('active');
        document.getElementById(\`tab-\${tabName}\`).classList.add('active');
    }

    // Video Simulation
    window.playVideoSimulation = function() {
        alert("This is an animated video placeholder showcasing the physics of this section.");
    }

    // Quiz Logic
    function initQuiz(questions) {
        const container = document.getElementById('quiz-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        questions.forEach((q, index) => {
            const questionHtml = \`
                <div class="question-block" id="q-block-\${index}">
                    <div class="question-text">\${index + 1}. \${q.q}</div>
                    <div class="options-grid" id="options-\${index}">
                        \${q.options.map((opt, i) => \`
                            <button class="option-btn" onclick="selectOption(\${index}, \${i}, \${q.answer}, '\${q.exp.replace(/'/g, "\\'")}')">
                                \${opt}
                            </button>
                        \`).join('')}
                    </div>
                    <div class="explanation-box" id="exp-\${index}">
                        <h4>Explanation</h4>
                        <p>\${q.exp}</p>
                    </div>
                </div>
            \`;
            container.innerHTML += questionHtml;
        });
        
        container.innerHTML += \`
            <div id="quiz-results" class="quiz-results">
                <h2>Quiz Complete!</h2>
                <p>Score: <span id="score-display">0</span> / \${questions.length}</p>
            </div>
        \`;
        
        // Store quiz state globally for simplicity
        window.currentQuizState = {
            total: questions.length,
            answered: 0,
            score: 0
        };
    }

    window.selectOption = function(qIndex, selectedOptionIndex, correctOptionIndex, explanation) {
        const optionsGrid = document.getElementById(\`options-\${qIndex}\`);
        const buttons = optionsGrid.querySelectorAll('.option-btn');
        
        // Prevent multiple answers
        if (buttons[0].disabled) return;
        
        buttons.forEach(btn => btn.disabled = true);
        
        buttons[selectedOptionIndex].classList.add('selected');
        
        if (selectedOptionIndex === correctOptionIndex) {
            buttons[selectedOptionIndex].classList.add('correct');
            window.currentQuizState.score++;
        } else {
            buttons[selectedOptionIndex].classList.add('wrong');
            buttons[correctOptionIndex].classList.add('correct');
        }
        
        const expBox = document.getElementById(\`exp-\${qIndex}\`);
        expBox.classList.add('show');
        
        window.currentQuizState.answered++;
        
        if (window.currentQuizState.answered === window.currentQuizState.total) {
            const results = document.getElementById('quiz-results');
            document.getElementById('score-display').textContent = window.currentQuizState.score;
            results.style.display = 'block';
        }
    }

    // Tooltip Logic
    const tooltip = document.getElementById('physics-tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDesc = document.getElementById('tooltip-desc');

    function initTooltips() {
        const terms = document.querySelectorAll('.physics-term');
        
        terms.forEach(term => {
            term.addEventListener('mouseenter', (e) => {
                const rect = e.target.getBoundingClientRect();
                const text = e.target.textContent;
                const def = e.target.getAttribute('data-definition');
                
                tooltipTitle.textContent = text;
                tooltipDesc.textContent = def;
                
                tooltip.style.left = \`\${rect.left}px\`;
                tooltip.style.top = \`\${rect.bottom + window.scrollY + 10}px\`;
                tooltip.classList.remove('hidden');
            });
            
            term.addEventListener('mouseleave', () => {
                tooltip.classList.add('hidden');
            });
        });
    }

    // Initialize the app
    initNav();
    loadSection(currentSectionId);
});
