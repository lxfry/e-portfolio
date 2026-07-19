export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  company: string;
  period: string;
  role: string;
  category: string;
  image: string;
  homepageImages?: {
    src: string;
    alt: string;
  }[];
  summary: string;
  homepageProof: string[];
  context: string;
  roleDescription: string;
  implementation: string[];
  proof: string[];
  results: string[];
  technologies: string[];
  tools: string[];
  nextSteps?: string[];
  approach?: {
    problem: {
      paragraphs: string[];
      requirements: string[];
    };
    solution: {
      paragraphs: string[];
      features: string[];
    };
    method: {
      title: string;
      paragraphs: string[];
      details?: string[];
      images?: {
        src: string;
        alt: string;
        width: number;
        height: number;
        displayWidth?: "default" | "wide";
        fit?: "contain" | "cover" | "equal-height";
      }[];
    }[];
    results: {
      paragraphs: string[];
      completed: string[];
    };
    nextSteps: {
      title: string;
      actions: string[];
    }[];
  };
};

export const projects: Project[] = [
  {
    slug: "simulation-control-unit",
    title: "Development of a Compact Hardware-in-the-Loop Platform",
    shortTitle: "Compact HiL / Simulation Control Unit",
    company: "Renco GmbH — Germany",
    period: "March 2026 - Present",
    role: "Electronics Hardware Engineer",
    category: "Automotive VCU validation",
    image: "/portfolio-pages/compact-hil-project-hero.png",
    homepageImages: [
      {
        src: "/portfolio-pages/compact-hil-oscilloscope-testing.jpeg",
        alt: "STM32 prototype undergoing oscilloscope validation",
      },
      {
        src: "/portfolio-pages/compact-hil-system-architecture.png",
        alt: "Compact HiL system architecture",
      },
      {
        src: "/portfolio-pages/compact-hil-top-level-schematic.png",
        alt: "Compact HiL top-level schematic",
      },
    ],
    summary:
      "End-to-end development of a compact, cost-effective HiL platform enabling engineers to validate VCU software in parallel from their own workstations.",
    approach: {
      problem: {
        paragraphs: [
          "The company needed a faster and more automated way to validate embedded software on its VCUs. Several employees may need to test VCU software at the same time, and sharing one validation system creates waiting time and limits parallel development. The long-term objective is therefore to provide one validation platform per employee.",
          "Commercial Hardware-in-the-Loop systems provide the required functionality, but purchasing several systems is not financially realistic. In addition to the hardware cost, these systems generally require dedicated software licences. The company therefore needed an internal platform that covers its three main VCUs without requiring a hardware modification when switching between test configurations.",
        ],
        requirements: [
          "Cost-effective enough to deploy at multiple employee workstations.",
          "Compact, easy to transport by hand, and simple to install and operate.",
          "Suitable for fast and automated embedded-software validation.",
          "Compatible with the electrical and communication requirements of the company's three main VCUs.",
          "Configurable through CAN, LIN, Ethernet, or USART without manual hardware changes.",
          "Powered from the grid without requiring an external laboratory supply.",
          "Extendable so additional functions and interfaces can be added later.",
        ],
      },
      solution: {
        paragraphs: [
          "I proposed a compact Hardware-in-the-Loop platform designed for individual use at an engineer's workstation. It can be transported by hand, installed directly on a desk, and fully configured through software.",
          "The system is designed to cover all the I/O and functions of the company's three VCUs, with additional capacity for external devices such as sensors and other ECUs.",
          "The objective is to deploy identical units across the engineering team so employees can develop and validate VCU software in parallel without the delays, cost, and licensing constraints associated with multiple commercial HiL systems.",
        ],
        features: [
          "Enough analog and digital I/O channels to fully cover the company's three VCUs.",
          "PWM signal generation and measurement.",
          "CAN, CAN FD, LIN, Ethernet, SPI, USART, and I²C interfaces.",
          "Compatible with both 12 V and 24 V systems.",
          "Software-configurable pull-up and pull-down selection, signal generation, and measurement.",
          "An extensible architecture that supports additional functions and interface boards.",
        ],
      },
      method: [
        {
          title: "Step 1 — Requirements definition",
          paragraphs: [
            "I collected and structured the validation requirements for the company's three target VCUs. This included signal types, channel counts, voltage and current levels, PWM capabilities, communication interfaces, power supply requirements, physical constraints, and future extension needs.",
            "I then created a high-level system diagram in draw.io showing the processing architecture and all required driver blocks, with the requirements for each block documented directly in the diagram.",
          ],
          images: [
            {
              src: "/portfolio-pages/compact-hil-system-architecture.png",
              alt: "High-level architecture diagram of the compact Hardware-in-the-Loop platform",
              width: 1193,
              height: 865,
            },
            {
              src: "/portfolio-pages/compact-hil-physical-architecture.png",
              alt: "Physical architecture diagram of the compact Hardware-in-the-Loop platform",
              width: 820,
              height: 715,
            },
          ],
        },
        {
          title: "Step 2 — Driver and microcontroller selection",
          paragraphs: [
            "I selected the main components based on the required digital and analog signal channels and their performance requirements, as well as the necessary PWM, timer and communication interfaces, processing performance, electrical specifications, availability, and cost.",
            "A dual-STM32F407ZGT7 architecture was selected because one microcontroller did not provide enough pins, timers, and peripheral resources for the complete system. I selected the principal interface drivers, fixed the first detailed architecture, and prepared a preliminary BOM estimate to verify the cost direction.",
          ],
          images: [
            {
              src: "/portfolio-pages/compact-hil-component-selection.png",
              alt: "Component selection and preliminary bill of materials for the compact Hardware-in-the-Loop platform",
              width: 1483,
              height: 732,
            },
          ],
        },
        {
          title: "Step 3 — Schematic design",
          paragraphs: [
            "I created the first complete schematic in Altium Designer using the selected microcontrollers, interface drivers, and communication components. Placeholder passive components were initially used around the main drivers so the circuit architecture could be defined before every value and reference was fixed.",
            "I used hierarchical sheets, repeated functional blocks, multi-channel structures, harnesses, buses, reusable circuits, and centralized component-parameter management. I then sized and selected the remaining filters, protection devices, resistors, capacitors, connectors, and supporting components for the complete project.",
          ],
          images: [
            {
              src: "/portfolio-pages/compact-hil-schematic-hierarchy.png",
              alt: "Hierarchical schematic document structure in Altium Designer",
              width: 315,
              height: 678,
            },
            {
              src: "/portfolio-pages/compact-hil-top-level-schematic.png",
              alt: "Top-level compact Hardware-in-the-Loop schematic in Altium Designer",
              width: 1198,
              height: 797,
            },
            {
              src: "/portfolio-pages/compact-hil-repeated-analog-output.png",
              alt: "Repeated analog-output schematic block in Altium Designer",
              width: 1047,
              height: 170,
            },
          ],
        },
        {
          title: "Step 4 — BOM development and cost control",
          paragraphs: [
            "I developed the BOM in parallel with the schematic using Altium ActiveBOM. Each schematic update was reflected in the cost and sourcing view, allowing me to monitor supplier references, component availability, alternatives, missing parameters, individual component prices, and the resulting total hardware cost.",
            "This continuous process reduces the risk of discovering expensive or unavailable components after the schematic is complete. The BOM remains preliminary and will be finalized after the ongoing circuit validation.",
          ],
          images: [
            {
              src: "/portfolio-pages/compact-hil-activebom.png",
              alt: "Altium ActiveBOM cost and component sourcing view for the compact Hardware-in-the-Loop platform",
              width: 1581,
              height: 646,
              displayWidth: "wide",
            },
          ],
        },
        {
          title: "Step 5 — Prototyping and experimental validation",
          paragraphs: [
            "The project is currently in the prototyping phase. Using one STM32F407G-DISC1 evaluation board, I have tested the microcontroller’s digital and analog I/O, PWM generation and measurement, timer resources, timing precision, GPIO speed, and peripheral behavior.",
            "Communication and resource coordination between the two microcontrollers have not yet been tested. Validation of the interface drivers, signal-conditioning stages, protection circuits, and other representative circuit sections will be performed in the next phase. The purpose is to identify limitations before PCB layout and manufacturing, while corrections can still be made at schematic level.",
          ],
          images: [
            {
              src: "/portfolio-pages/compact-hil-oscilloscope-testing.jpeg",
              alt: "STM32F407G-DISC1 prototype undergoing signal measurements with an oscilloscope",
              width: 1536,
              height: 2048,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/compact-hil-simulink-testing.jpeg",
              alt: "STM32 prototype connected to a Simulink test setup during experimental validation",
              width: 2048,
              height: 1536,
              fit: "equal-height",
            },
          ],
        },
      ],
      results: {
        paragraphs: [
          "The project has progressed from requirements definition to a complete first schematic-level architecture. The final PCB has not yet been manufactured; current tests are being used to confirm the critical design assumptions before the schematic is frozen.",
        ],
        completed: [
          "Requirements collected for the company's three main ECUs.",
          "High-level system architecture and dual-STM32F407ZGT7 processing architecture defined.",
          "Architecture established for 74 analog I/O, 108 digital I/O, and 36 PWM channels up to 2 kHz.",
          "Two CAN, two LIN, Ethernet, SPI, USART, and I²C interfaces included.",
          "24 V-compatible interface, signal-conditioning, and protection circuits designed.",
          "Hierarchical schematic architecture created in Altium Designer.",
          "Main components selected and a preliminary BOM and cost estimate prepared.",
          "MCU pin and peripheral allocation prepared in STM32CubeMX.",
          "Experimental validation started with an STM32 evaluation board and representative circuit sections.",
        ],
      },
      nextSteps: [
        {
          title: "1. Complete MCU resource validation",
          actions: [
            "Finalize the pin and timer allocation for both microcontrollers.",
            "Validate PWM generation and measurement under representative operating conditions.",
            "Verify inter-MCU communication speed, stability, and synchronization.",
          ],
        },
        {
          title: "2. Complete circuit-level prototyping",
          actions: [
            "Test representative analog, digital, driver, and communication channels.",
            "Verify 24 V compatibility, filtering, voltage scaling, and protection behavior.",
            "Correct any limitations identified during testing.",
          ],
        },
        {
          title: "3. Finalize the schematic and BOM",
          actions: [
            "Integrate the prototype results and complete the remaining component selections.",
            "Review all repeated blocks, component ratings, tolerances, availability, and alternatives.",
            "Freeze the schematic and confirm that the cost supports the one-HiL-per-employee objective.",
          ],
        },
        {
          title: "4. Design, manufacture, and bring up the PCB",
          actions: [
            "Complete placement and routing with attention to signal integrity, EMC, grounding, and thermal constraints.",
            "Manufacture and assemble the first prototype.",
            "Validate the power rails, both microcontrollers, inter-MCU communication, and each I/O section progressively.",
          ],
        },
        {
          title: "5. Develop the control and validation software",
          actions: [
            "Implement control of the analog, digital, PWM, and communication functions.",
            "Create software configurations for the three target ECUs, including diagnostics and error reporting.",
            "Provide a simple setup workflow and an interface for automated validation sequences.",
          ],
        },
        {
          title: "6. Validate the complete system",
          actions: [
            "Test all three ECUs without changing the HiL hardware.",
            "Run normal-operation and controlled fault scenarios.",
            "Measure timing, accuracy, reliability, and repeatability against the original requirements.",
          ],
        },
      ],
    },
    homepageProof: [
      "Dual STM32F407ZGT7 architecture",
      "74 analog and 108 digital I/O channels",
      "24 V-compatible circuitry and automotive interfaces",
    ],
    context:
      "Automotive ECUs need Hardware-in-the-Loop validation to test analog I/O, digital I/O, communication interfaces, timing behavior and fault responses before vehicle-level integration. Commercial HiL systems are powerful but expensive, so the objective is to create a compact internal Simulation Control Unit that can reproduce the I/O behavior needed for ECU validation at lower cost.",
    roleDescription:
      "I am responsible for the compact HiL development from scratch: requirements definition, architecture, schematic design, component choice, MCU pin assignment, validation planning and early experimental tests. This is an individual end-to-end hardware electronics project.",
    implementation: [
      "Defined the functional and electrical requirements: channel count, voltage levels, interface needs, protection strategy, validation constraints and cost direction.",
      "Architected a dual-STM32F407ZGT7 hardware platform with inter-MCU SPI communication specified up to 42 Mbit/s.",
      "Designed 24 V-compatible I/O circuitry covering 74 analog channels and 108 digital channels, including voltage scaling, filtering, ESD protection and driver stages.",
      "Planned PWM generation and measurement capability on 36 channels up to 2 kHz, using STM32 timer allocation analysis before committing to PCB layout.",
      "Integrated automotive and embedded communication interfaces: 2 CAN, 2 LIN, Ethernet, SPI and I²C, with associated transceivers and support circuitry.",
      "Built the schematic architecture in Altium Designer using reusable schematic blocks, multi-channel blocks, hierarchical sheets, harnesses and bus structures.",
      "Performed MCU pin assignment in STM32CubeMX and started model-based firmware experiments with MATLAB/Simulink, STM32 Microcontroller Blockset and Embedded Coder.",
      "Started hardware-level validation using an STM32F407G-DISC1 evaluation board, oscilloscope and frequency generator.",
    ],
    proof: [
      "Complete SCU hardware architecture defined.",
      "Schematic design and main component selection validated at draft stage.",
      "Preliminary BOM and cost model prepared for a cost-effective internal HiL platform.",
      "Experimental validation is ongoing to reduce risk before PCB layout and hardware bring-up.",
    ],
    results: [
      "The project has progressed from concept to complete schematic-level architecture.",
      "Component choices and MCU pin allocation have been validated enough to begin targeted hardware tests.",
      "The current focus is de-risking timer allocation, PWM generation and PWM measurement before the final PCB layout phase.",
    ],
    technologies: [
      "STM32F407ZGT7",
      "SPI",
      "CAN",
      "LIN",
      "Ethernet",
      "I²C",
      "PWM",
      "ADC / DAC",
      "24 V I/O",
      "Model-based design",
    ],
    tools: [
      "Altium Designer",
      "STM32CubeMX",
      "STM32CubeProgrammer",
      "MATLAB / Simulink",
      "STM32 Microcontroller Blockset",
      "Embedded Coder",
      "Oscilloscope",
      "Frequency generator",
      "STM32F407G-DISC1",
    ],
    nextSteps: [
      "Finish experimental validation of PWM generation and measurement.",
      "Freeze schematic revisions before PCB layout.",
      "Move toward PCB layout, bring-up, firmware validation and ECU simulation test scenarios.",
    ],
  },
  {
    slug: "bspd-safety-critical-pcb",
    title: "BSPD Safety-Critical PCB Design",
    shortTitle: "BSPD Safety PCB",
    company: "ESTACARS - Formula Student",
    period: "September 2023 - January 2026",
    role: "Hardware / Embedded Systems Engineer",
    category: "Safety-critical PCB design",
    image: "/portfolio-pages/bspd-safety-critical-pcb.png",
    summary:
      "Design, simulation, validation and vehicle integration of a Brake System Plausibility Device for an electric Formula Student race car.",
    homepageProof: [
      "FSG2025 regulation-focused validation",
      "LTspice simulation with real component models",
      "Validated shutdown behavior under tested fault scenarios",
    ],
    context:
      "Formula Student electric vehicles require a Brake System Plausibility Device to monitor brake pressure and motor torque demand. If the driver brakes while torque demand remains implausibly high, the board must safely disable the tractive system.",
    roleDescription:
      "I had end-to-end responsibility for the BSPD PCBA: circuit understanding, analog simulation, schematic design, PCB layout, validation test planning and vehicle integration.",
    implementation: [
      "Recreated the complete BSPD circuit in LTspice using real component models.",
      "Simulated analog brake pressure and current sensor inputs to evaluate comparator thresholds, output behavior and safety logic.",
      "Designed the complete schematic and PCB layout, including signal conditioning, comparators and shutdown logic.",
      "Prepared and executed a structured validation test plan aligned with Formula Student Germany 2025 technical regulation expectations.",
      "Integrated the validated PCBA into the race car low-voltage system and verified tractive system shutdown behavior.",
    ],
    proof: [
      "The board was simulated before manufacturing to reduce design risk.",
      "The validation plan covered expected safety behavior and fault scenarios.",
      "The PCBA passed safety checks and was integrated into the vehicle electrical system.",
    ],
    results: [
      "The BSPD board was validated and successfully integrated into the vehicle low-voltage system.",
      "The design ensured reliable tractive system shutdown under all tested fault scenarios.",
      "The project demonstrates PCB design discipline for safety-critical automotive-style functions.",
    ],
    technologies: [
      "Analog signal conditioning",
      "Comparators",
      "Safety logic",
      "Brake pressure sensing",
      "Current sensing",
      "Low-voltage vehicle electronics",
    ],
    tools: ["KiCad", "LTspice", "Oscilloscope", "Bench power supply"],
  },
  {
    slug: "rs485-emi-diagnosis",
    title: "EMI Issue Diagnosis on RS-485 BMS Communication",
    shortTitle: "RS-485 EMI Diagnosis",
    company: "ESTACARS - Formula Student",
    period: "September 2023 - January 2026",
    role: "Hardware / Embedded Systems Engineer",
    category: "EMI debugging and vehicle integration",
    image: "/portfolio-pages/rs485-emi-diagnosis.png",
    summary:
      "Root-cause diagnosis and correction of RS-485 BMS communication loss during high-voltage power delivery on an electric race car.",
    homepageProof: [
      "Oscilloscope-based differential signal diagnosis",
      "Noise matched to inverter IGBT switching frequency",
      "Communication restored under operating conditions",
    ],
    context:
      "During high-voltage power delivery, the vehicle experienced RS-485 BMS communication loss that triggered unintended AIR opening. The failure was system-level: electrical noise, communication integrity, grounding and powertrain operation interacted under real vehicle conditions.",
    roleDescription:
      "I diagnosed the communication failure, measured the RS-485 differential signals under operating conditions and implemented a hardware mitigation strategy to restore robust communication.",
    implementation: [
      "Reproduced and observed communication failures during high-voltage operating conditions.",
      "Measured the RS-485 differential pair using an oscilloscope and correlated the failures with power delivery events.",
      "Identified noise components matching the inverter IGBT switching frequency, indicating EMI coupling into the communication lines.",
      "Designed and implemented a first-order RC filter on the RS-485 lines to attenuate high-frequency noise.",
      "Iteratively tuned filter values to balance noise attenuation with signal integrity.",
      "Improved grounding and shielding strategy to reduce coupling paths.",
    ],
    proof: [
      "The failure mechanism was supported by oscilloscope measurements, not only by software logs.",
      "The implemented correction targeted the measured noise frequency content.",
      "The final behavior was validated under operating conditions.",
    ],
    results: [
      "Reliable RS-485 communication was restored under all operating conditions tested.",
      "Unintended AIR openings caused by communication loss were eliminated.",
      "The vehicle system robustness improved through a combined filtering, grounding and shielding correction.",
    ],
    technologies: [
      "RS-485",
      "BMS communication",
      "High-voltage powertrain",
      "EMI filtering",
      "Grounding strategy",
      "Signal integrity",
    ],
    tools: ["Oscilloscope", "Vehicle test bench", "Filter prototyping"],
  },
  {
    slug: "bearingsolver",
    title: "BearingSolver Engineering Modeling Tool",
    shortTitle: "BearingSolver",
    company: "Involute Transmissions",
    period: "May 2025 - October 2025",
    role: "R&D Engineer",
    category: "Engineering software and modeling",
    image: "/portfolio-pages/bearingsolver.png",
    summary:
      "Scilab-based engineering tool for bearing selection, lifetime prediction and performance trade-off analysis.",
    homepageProof: [
      "Physics-based models for lifetime, losses and stiffness",
      "GUI for repeatable engineering calculations",
      "Validation against software, literature and ISO standards",
    ],
    context:
      "Accurate bearing selection requires evaluating several performance parameters early in the mechanical design process: lifetime, power losses, deflections, stresses, stiffness and contact behavior.",
    roleDescription:
      "I developed a custom engineering tool to automate bearing performance calculations and support design decisions during early-stage engineering studies.",
    implementation: [
      "Conducted a structured literature review to define modeling assumptions, limits and relevant calculation methods.",
      "Built physics-based computational models for bearing lifespan, power losses, deflections, stresses and stiffness.",
      "Designed and programmed a Scilab-based GUI to make calculations fast, repeatable and usable by engineers.",
      "Created result views and calculation screens to compare behavior across operating conditions.",
      "Validated model outputs against commercial software, scientific literature and ISO standards.",
    ],
    proof: [
      "The tool combined theoretical modeling with a usable engineering interface.",
      "The calculation output was cross-checked against external references.",
      "The project produced a reusable internal tool rather than a one-off spreadsheet.",
    ],
    results: [
      "Delivered a reusable engineering tool supporting bearing selection and early-stage design decisions.",
      "Improved calculation repeatability across operating conditions.",
      "Built practical knowledge in mechanical reliability, fatigue mechanisms and high-load failure modes.",
    ],
    technologies: [
      "Scilab",
      "GUI development",
      "Bearing lifespan modeling",
      "Power loss modeling",
      "Stress and stiffness calculation",
      "ISO-based validation",
    ],
    tools: ["Scilab", "Scientific literature", "ISO standards", "Commercial validation software"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
