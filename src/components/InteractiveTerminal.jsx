import { useState, useRef, useEffect } from 'react';

export const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const terminalContainerRef = useRef(null);

  const [history, setHistory] = useState([
    { type: 'system', text: '╔═══════════════════════════════════════════════════════╗' },
    { type: 'system', text: '║   Welcome to Legionite Terminal v1.0‎ ‎ ‎ ‎‎‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎║' },
    { type: 'system', text: '║   Interactive Portfolio Command Line‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎║' },
    { type: 'system', text: '╚═══════════════════════════════════════════════════════╝' },
    { type: 'output', text: '' },
    { type: 'output', text: 'Type "help" to see available commands or just start exploring!' },
    { type: 'output', text: '' },
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Prevent initial auto-scroll on page load. Only scroll after user interacts.
  const hasInteracted = useRef(false);

  // All commands with YOUR accurate details
  const allCommands = {
    help: () => [
      '',
      '📋 Available Commands:',
      '─────────────────────────────────────────────────────',
      '  help      - Show this help message',
      '  about     - Learn about me',
      '  skills    - View my technical skills',
      '  projects  - See my recent work',
      '  contact   - Get my contact information',
      '  experience- View my work experience',
      '  github    - Open my GitHub profile',
      '  linkedin  - Open my LinkedIn profile',
      '  email     - Get my email address',
      '  phone     - Get my phone number',
      '  resume    - Download my resume',
      '  clear     - Clear terminal screen',
      '  whoami    - Guess who?',
      '  date      - Show current date and time',
      '  ls        - List available sections',
      '─────────────────────────────────────────────────────',
      '',
    ],

    about: () => [
      '',
      '👨‍💻 About Samuel Onwuka (Legionite)',
      '─────────────────────────────────────────────────────',
      'Dynamic Frontend Web Developer | Lagos, Nigeria',
      '',
      '💼 Professional Summary:',
      '  Over 4 years of proven expertise in building high-',
      '  performance, user-focused web applications that drive',
      '  measurable business growth.',
      '',
      '🎯 Specialization:',
      '  • Modern front-end frameworks (React.js, Vue.js, Nuxt)',
      '  • Scalable, responsive digital experiences',
      '  • Performance optimization & SEO best practices',
      '  • State management (Redux, Pinia, Zustand)',
      '',
      '💡 Philosophy:',
      '  "Blending technical excellence with strong collaboration',
      '   to consistently exceed project goals and optimize user',
      '   engagement for significant ROI."',
      '',
      '🏆 Track Record:',
      '  • Built apps serving 13,000+ daily active users',
      '  • Reduced page load times from 3s to 800ms',
      '  • Increased user engagement by 25%+',
      '',
    ],

    skills: () => [
      '',
      '🛠️  Technical Skills Arsenal',
      '─────────────────────────────────────────────────────',
      '',
      '⚛️  Frontend Frameworks & Libraries:',
      '  ████████████████████  React.js        (Expert)',
      '  ████████████████████  Vue.js          (Expert)',
      '  ███████████████████░  Nuxt.js         (Advanced)',
      '  ███████████████████░  Next.js         (Advanced)',
      '',
      '🎨 Core Technologies:',
      '  ████████████████████  HTML5           (Expert)',
      '  ████████████████████  CSS3/SCSS       (Expert)',
      '  ████████████████████  JavaScript ES6+ (Expert)',
      '  ███████████████████░  TypeScript      (Advanced)',
      '',
      '📦 State Management:',
      '  ████████████████████  Redux/RTK       (Expert)',
      '  ████████████████████  Pinia           (Expert)',
      '  ███████████████████░  Zustand         (Advanced)',
      '',
      '🔧 Development Tools:',
      '  ████████████████████  Git & GitHub    (Expert)',
      '  ███████████████████░  Responsive Design (Expert)',
      '  ███████████████████░  API Integration (Advanced)',
      '  ██████████████████░░  Agile/Scrum     (Advanced)',
      '',
      '⚡ Specialties:',
      '  • UI/UX Development & Design Implementation',
      '  • Performance Optimization (3s → 800ms load times)',
      '  • SEO Implementation (+30% search rankings)',
      '  • Cross-browser & Mobile Responsiveness',
      '  • JWT Authentication & Security',
      '',
    ],

    projects: () => [
      '',
      '🚀 Featured Projects & Achievements',
      '─────────────────────────────────────────────────────',
      '',
      '1. 🌐 Top Universe (Vue.js & React)',
      '   Multi-application platform serving 13,000+ DAU',
      '   • Led migration from legacy to Nuxt.js',
      '   • Significant SEO improvements',
      '   Tech: Vue.js, React, Nuxt.js',
      '   Link: https://topuniverse.org',
      '',
      '2. 💘 Rendezvouz Dating Platform',
      '   Complete website redesign & optimization',
      '   • 30% higher search engine rankings',
      '   • Implemented SEO best practices',
      '   Tech: Modern Frontend Stack',
      '',
      '3. ⚡ BoltCliq Company Application',
      '   Feature-rich web solutions with state management',
      '   • JWT authentication system (-75% login issues)',
      '   • Mobile engagement improvements',
      '   Tech: Redux, Zustand, Pinia',
      '   Link: https://boltcliq.com',
      '',
      '4. 📱 Betakopa Web Application',
      '   Complete rebuild for performance',
      '   • 25% increase in user engagement',
      '   • Page load optimization (3s → 800ms)',
      '   Tech: Nuxt.js, Pinia, Vue',
      '   Link: https://betakopa.com',
      '',
      '5. ⚖️ Kenna Partners Law Firm (ReactJS)',
      '   Responsive professional web application',
      '   • Intuitive UI for legal services',
      '   • Cross-browser compatibility',
      '   Tech: React.js',
      '   Client: Dosh Services',
      '   Link: https://doshservices.com',
      '',
      '6. 🏨 OJAJA Suites by Perennia',
      '   Official hospitality web application',
      '   Tech: React.js',
      '',
      '📌 Scroll up to see these projects in the Projects section!',
      '',
    ],

    contact: () => [
      '',
      '📬 Contact Information',
      '─────────────────────────────────────────────────────',
      '  📧 Email:    samuelonwuka88@gmail.com',
      '  📱 Phone:    +234 904 368 3675',
      '  📍 Location: Lagos, Nigeria',
      '  🐙 GitHub:   github.com/legionite',
      '  💼 LinkedIn: linkedin.com/in/legionite',
      '',
      '💡 Tip: Use "email" or "phone" commands for quick access',
      '',
    ],

    experience: () => [
      '',
      '💼 Professional Experience',
      '─────────────────────────────────────────────────────',
      '',
      '🏢 Frontend Developer | Dosh Services',
      '   Jan 2025 - Present | Ikeja, Lagos',
      '   https://doshservices.com/',
      '   • Developed Kenna Partners law firm web app (ReactJS)',
      '   • Cross-browser compatibility & mobile responsiveness',
      '   • Collaborated with legal professionals for intuitive UI',
      '',
      '🏢 Frontend Web Developer | Betakopa',
      '   Lagos, Nigeria',
      '   https://betakopa.com/',
      '   • Rebuilt web app using Nuxt.js (+25% engagement)',
      '   • Optimized Vue components (3s → 800ms load time)',
      '   • Implemented Pinia state management',
      '',
      '🏢 Frontend Web Developer | The BoltCliq Company',
      '   Jan 2025 - Aug 2025 | Lagos, Nigeria',
      '   https://boltcliq.com/',
      '   • State management with Pinia, Redux, Zustand',
      '   • Agile development for tight deadlines',
      '   • JWT authentication system (-75% login issues)',
      '   • Responsive design for mobile engagement',
      '',
      '🏢 Frontend Developer | Rendezvouz Dating',
      '   Apr 2024 - Aug 2025 | Lagos, Nigeria',
      '   • Complete website redesign',
      '   • SEO implementation (+30% search rankings)',
      '   • User-friendly experience improvements',
      '',
      '🏢 Front-end Engineer | Top Universe',
      '   Jan 2025 - Aug 2025 | Lagos, Nigeria',
      '   https://topuniverse.org',
      '   • Built apps for 13,000+ daily active users',
      '   • Led migration to Nuxt.js (major SEO improvements)',
      '   • Vue.js & React implementation',
      '',
      '📊 Total Experience: 4+ Years',
      '🎯 Projects Completed: 20+',
      '👥 Daily Users Served: 13,000+',
      '',
    ],

    github: () => {
      window.open('https://github.com/yourusername', '_blank');
      return ['', '🔗 Opening GitHub profile in new tab...', ''];
    },

    linkedin: () => {
      window.open('https://linkedin.com/in/yourusername', '_blank');
      return ['', '🔗 Opening LinkedIn profile in new tab...', ''];
    },

email: () => {
  try {
    const textToCopy = 'samuelonwuka88@gmail.com';
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    return [
      '',
      '📧 Email: samuelonwuka88@gmail.com',
      '✅ Email address copied to clipboard!',
      '',
    ];
  } catch (err) {
    return [
      '',
      '📧 Email: samuelonwuka88@gmail.com',
      '❌ Failed to copy email to clipboard.',
      '',
    ];
  }
},

phone: () => {
  try {
    const textToCopy = '+2349043683675';
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    return [
      '',
      '📱 Phone: +234 904 368 3675',
      '✅ Phone number copied to clipboard!',
      '',
    ];
  } catch (err) {
    return [
      '',
      '📱 Phone: +234 904 368 3675',
      '❌ Failed to copy phone to clipboard.',
      '',
    ];
  }
},

resume: () => {
  const fileId = '1DB3iXrGctwJh1W7BRxvH-p0x34xjz7MmYhrtKQnOe50';
  
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
  // Open view URL in new tab
  window.open(viewUrl, '_blank');
  
  return [
    '',
    '📄 Samuel Onwuka - Resume/CV',
    '─────────────────────────────────────────────────────',
    '📥 Opening resume in new tab...',
    '',
    '✅ You can view or download the PDF from there',
    '',
    '🔗 Quick Links:',
    '  View Online:',
    '    https://drive.google.com/file/d/1zFOtnzufKmG_DR33wF0FruqlNfxGiIU-/view',
    '',
    '  Direct Download:',
    '    https://drive.google.com/uc?export=download&id=1zFOtnzufKmG_DR33wF0FruqlNfxGiIU-',
    '',
    '📧 Or email me at: samuelonwuka88@gmail.com',
    '📱 WhatsApp: +234 904 368 3675',
    '',
    '💡 Tip: Click "Download" button on the Google Drive page',
    '',
  ];
},

clear: () => {
  setHistory([]);
  return [];
},
    whoami: () => [
      '',
      '🤔 You are viewing the portfolio of:',
      '',
      '   ╔════════════════════════════════════╗',
      '   ║    SAMUEL ONWUKA (LEGIONITE)       ║',
      '   ║    Frontend Web Developer          ║',
      '   ║    Lagos, Nigeria                  ║',
      '   ║    4+ Years Experience             ║',
      '   ╚════════════════════════════════════╝',
      '',
      '   Serving 13,000+ daily users worldwide',
      '',
    ],

    date: () => {
      const now = new Date();
      return [
        '',
        `📅 ${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`,
        `⏰ ${now.toLocaleTimeString('en-US')}`,
        `🌍 Timezone: West Africa Time (WAT) - Lagos`,
        '',
      ];
    },

    ls: () => [
      '',
      '📁 Available sections:',
      '  about.txt        - Professional summary',
      '  skills.json      - Technical expertise',
      '  projects/        - Portfolio showcase',
      '  contact.md       - Get in touch',
      '  experience.log   - Work history',
      '  resume.pdf       - Download CV',
      '',
      '💡 Type any section name as a command!',
      '',
    ],
  };

  // Easter eggs / fun commands
  const easterEggs = {
    'sudo': () => ['', '🚫 Nice try! But you don\'t have sudo privileges here. 😄', ''],
    'rm -rf': () => ['', '⚠️  Please don\'t delete my portfolio! 😅', ''],
    'hack': () => ['', '🕵️  Hacking in progress...', 'Just kidding! Nothing to hack here. 😉', ''],
    'exit': () => ['', '👋 There\'s no escape from my portfolio! Just kidding, scroll around! 😊', ''],
    'pwd': () => ['', '/home/legionite/portfolio', ''],
    'cd': () => ['', '📍 You\'re already in the best directory!', ''],
    'lagos': () => ['', '🌍 Representing Lagos, Nigeria! 🇳🇬', '  Tech hub of West Africa 🚀', ''],
    'vue': () => ['', '💚 Vue.js is awesome! Built amazing apps with it.', ''],
    'react': () => ['', '⚛️  React is my go-to! Love the ecosystem.', ''],
  };

  // All executable command names
  const allCommandNames = [...Object.keys(allCommands), ...Object.keys(easterEggs)];

  /* -----------------------
     Handler: Form Submit
     (ENTER key -> run command)
     ----------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    hasInteracted.current = true;

    const promptLine = { type: 'input', text: `legionite@portfolio:~$ ${input}` };
    let newHistory = [...history, promptLine];

    if (!input.trim()) {
      setHistory(newHistory);
      setInput('');
      return;
    }

    const cmd = input.toLowerCase().trim();
    let output;

    if (allCommands[cmd]) {
      output = allCommands[cmd]();
    } else if (easterEggs[cmd]) {
      output = easterEggs[cmd]();
    } else {
      output = [
        '',
        `⚠️  Command not found: ${input}`,
        `💡 Type "help" to see available commands`,
        '',
      ];
      output.forEach(line => newHistory.push({ type: 'error', text: line }));
    }

    if (output && allCommands[cmd]) {
      output.forEach(line => newHistory.push({ type: 'output', text: line }));
    }

    if (output && !allCommands[cmd] && !easterEggs[cmd]) {
      output.forEach(line => newHistory.push({ type: 'output', text: line }));
    }

    setHistory(newHistory);
    setInput('');
  };

  /* -----------------------
     Autocomplete & Key handling
     ----------------------- */
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const currentInput = input.toLowerCase().trim();

      if (currentInput.length === 0) {
        setHistory(prev => ([
          ...prev,
          { type: 'input', text: `legionite@portfolio:~$ ${input}` },
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: allCommandNames.join(' | ') },
          { type: 'output', text: '' },
        ]));
        setInput('');
        inputRef.current?.focus();
        return;
      }

      const matches = allCommandNames.filter(cmd => cmd.startsWith(currentInput));

      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory(prev => ([
          ...prev,
          { type: 'input', text: `legionite@portfolio:~$ ${input}` },
          { type: 'output', text: matches.join(' | ') },
          { type: 'output', text: '' },
        ]));
      }

      inputRef.current?.focus();
    }
  };

  /* ---------------------------------------
     Effect: Scroll terminal to bottom
     --------------------------------------- */
  useEffect(() => {
    if (!hasInteracted.current) return;
    
    const container = terminalContainerRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [history]);

  /* ---------------------------------------
     Click handler focuses input
     --------------------------------------- */
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="mt-16 bg-black border-2 border-primary/50 rounded-xl overflow-hidden shadow-2xl shadow-primary/20 terminal-container">
      {/* Terminal Header */}
      <div className="bg-surface px-4 py-3 flex items-center justify-between border-b border-primary/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors"></div>
          </div>
          <span className="text-muted text-sm font-mono ml-4">legionite@portfolio:~$</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary text-xs font-mono">◉ LIVE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalContainerRef}
        className="p-6 font-mono text-sm h-96 overflow-y-auto cursor-text custom-scrollbar"
        onClick={handleTerminalClick}
        onScroll={(e) => e.stopPropagation()}
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`mb-1 ${
              line.type === 'input'
                ? 'text-white font-bold'
                : line.type === 'error'
                ? 'text-red-400'
                : line.type === 'system'
                ? 'text-cyan-400'
                : 'text-green-400'
            }`}
          >
            {line.text}
          </div>
        ))}

        <div ref={terminalEndRef} />

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-primary mr-2">legionite@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white caret-primary"
            placeholder="Type 'help' for commands..."
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>

      {/* Terminal Footer */}
      <div className="bg-surface px-4 py-2 flex items-center justify-between border-t border-primary/30 text-xs font-mono">
        <span className="text-muted">Press Enter to execute • Type 'clear' to reset</span>
        <span className="text-primary">Press TAB for autocomplete</span>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }

        .terminal-container {
          scroll-margin-top: 0 !important;
        }
      `}</style>
    </div>
  );
};