export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  company: string;
  homepageCompany?: string;
  period: string;
  role: string;
  category: string;
  image: string;
  homepageImages?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  }[];
  homepageImageLayout?: "wide-left";
  summary: string;
  summaryFullWidth?: boolean;
  homepageProof: string[];
  context: string;
  roleDescription: string;
  implementation: string[];
  proof: string[];
  results: string[];
  technologies: string[];
  tools: string[];
  toolsTitle?: string;
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
      inlineImages?: {
        afterParagraph: number;
        images: {
          src: string;
          alt: string;
          caption?: string;
          width: number;
          height: number;
          displayWidth?: "default" | "wide";
          displayHeightRem?: number;
          fit?: "contain" | "cover" | "equal-height";
        }[];
      }[];
      images?: {
        src: string;
        alt: string;
        caption?: string;
        width: number;
        height: number;
        displayWidth?: "default" | "wide";
        displayHeightRem?: number;
        fit?: "contain" | "cover" | "equal-height";
      }[];
    }[];
    results: {
      paragraphs: string[];
      completedTitle?: string;
      completed: {
        title: string;
        items: string[];
      }[];
    };
    nextSteps?: {
      title: string;
      actions: string[];
    }[];
    nextStepsTitle?: string;
    nextStepsIntro?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "simulation-control-unit",
    title: "Development of a Compact Hardware-in-the-Loop Platform",
    shortTitle: "Compact HiL / Simulation Control Unit",
    company: "Renco GmbH — Germany",
    homepageCompany: "Renco GmbH (Germany)",
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
          "I developed a compact Hardware-in-the-Loop platform designed for individual use at an engineer's workstation. It can be transported by hand, installed directly on a desk, and fully configured through software.",
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
          {
            title: "System definition and architecture",
            items: [
              "Requirements defined for the company's three main VCUs, including channel counts, electrical levels, communication interfaces, power, and physical constraints.",
              "High-level system architecture and dual-STM32F407ZGT7 processing architecture established.",
              "I/O architecture completed for 66 analog channels—33 inputs and 33 outputs—and 116 digital and power I/O channels—50 digital inputs, 25 high-side outputs, 25 low-side outputs, and 16 half-bridge outputs.",
              "PWM capability allocated across 44 channels up to 2 kHz: 14 PWM inputs and 30 PWM outputs.",
              "Two CAN/CAN FD interfaces with switchable termination, two LIN interfaces, Ethernet, SPI, USART, and I²C.",
            ],
          },
          {
            title: "Detailed hardware design",
            items: [
              "12 V and 24 V-compatible signal conditioning, configurable pull-up and pull-down functions, and protection circuits designed.",
              "Complete hierarchical schematic created in Altium Designer using reusable and repeated functional blocks.",
              "Nearly all components selected and sized, including all resistors and capacitors; the remaining revisions will be driven by circuit-validation results.",
            ],
          },
          {
            title: "Engineering readiness and validation",
            items: [
              "Preliminary BOM, sourcing review, and cost estimate prepared.",
              "MCU pin, timer, and peripheral allocation prepared in STM32CubeMX.",
              "Initial MCU-level validation completed for analog and digital I/O, PWM generation and measurement, timer resources, timing precision, GPIO speed, and peripheral behavior.",
            ],
          },
        ],
      },
      nextSteps: [
        {
          title: "1. Prototype and validate critical circuitry",
          actions: [
            "Prototype every circuit identified during the design phase as requiring experimental validation.",
            "Focus testing on complex or performance-critical circuits where functionality, accuracy, or component behavior cannot be confirmed through analysis alone.",
            "Measure performance under representative operating conditions.",
            "Update the schematic and component values according to the test results.",
          ],
        },
        {
          title: "2. Complete the PCB layout and design review",
          actions: [
            "Begin the PCB layout after incorporating the prototyping results and finalizing the schematic.",
            "Define the placement and routing while considering controlled impedance, parasitic track capacitance, signal integrity, grounding, current capacity, and thermal constraints.",
            "Use AI-assisted checks to support the design-review process alongside standard engineering verification.",
          ],
        },
        {
          title: "3. Finalize manufacturing data and prepare the test plan",
          actions: [
            "Complete the PCB design, manufacturing files, assembly data, and final BOM.",
            "Order the PCB and components.",
            "Develop a detailed board bring-up and validation plan in parallel with PCB manufacturing and component procurement.",
            "Define the required equipment, test sequence, expected results, tolerances, and acceptance criteria.",
          ],
        },
        {
          title: "4. Assemble, bring up, and validate the board",
          actions: [
            "Assemble the PCB and perform a controlled initial bring-up.",
            "Test the board against the validation plan.",
            "Verify the functionality, accuracy, timing, communication interfaces, protection circuits, and repeatability of the complete system.",
            "Document the results and correct any issues identified before approving the design.",
          ],
        },
      ],
    },
    homepageProof: [
      "Dual STM32F407ZGT7 architecture",
      "66 analog and 116 digital and power I/O channels",
      "12 V and 24 V-compatible architecture with automotive interfaces",
    ],
    context:
      "Automotive ECUs need Hardware-in-the-Loop validation to test analog I/O, digital I/O, communication interfaces, timing behavior and fault responses before vehicle-level integration. Commercial HiL systems are powerful but expensive, so the objective is to create a compact internal Simulation Control Unit that can reproduce the I/O behavior needed for ECU validation at lower cost.",
    roleDescription:
      "I am responsible for the compact HiL development from scratch: requirements definition, architecture, schematic design, component choice, MCU pin assignment, validation planning and early experimental tests. This is an individual end-to-end hardware electronics project.",
    implementation: [
      "Defined the functional and electrical requirements: channel count, voltage levels, interface needs, protection strategy, validation constraints and cost direction.",
      "Architected a dual-STM32F407ZGT7 hardware platform with inter-MCU SPI communication specified up to 42 Mbit/s.",
      "Designed 12 V and 24 V-compatible I/O circuitry covering 66 analog channels and 116 digital and power I/O channels, including voltage scaling, filtering, ESD protection and driver stages.",
      "Planned PWM generation and measurement capability across 44 channels up to 2 kHz, including 14 PWM inputs and 30 PWM outputs, using STM32 timer allocation analysis before committing to PCB layout.",
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
      "STM32",
      "CAN / CAN FD",
      "LIN",
      "Ethernet",
      "SPI",
      "USART / UART",
      "I²C",
      "ADC / DAC",
      "PWM",
      "HSD",
      "LSD",
      "Half-bridge",
      "Analog signal conditioning",
      "Configurable pull-up / pull-down",
      "Circuit protection",
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
    company: "ESTACARS Formula Student - France",
    homepageCompany: "ESTACARS Formula Student (France)",
    period: "September 2023 - January 2026",
    role: "Hardware / Embedded Systems Engineer",
    category: "Safety-critical PCB design",
    image: "/portfolio-pages/bspd-safety-critical-pcb.png",
    homepageImages: [
      {
        src: "/portfolio-pages/bspd/Layout_PCB_KiCAD.png",
        alt: "Final BSPD printed circuit board layout in KiCad",
        fit: "contain",
      },
      {
        src: "/portfolio-pages/bspd/BSPD_vehicle_integration.jpg",
        alt: "BSPD connected beside the Formula Student vehicle during integration testing",
      },
      {
        src: "/portfolio-pages/bspd/BSPD_driving_validation.png",
        alt: "Formula Student car driving during final BSPD validation",
      },
    ],
    homepageImageLayout: "wide-left",
    summary:
      "End-to-end development of a standalone, non-programmable Brake System Plausibility Device that protects an electric Formula Student race car by detecting unsafe braking and power-delivery conditions.",
    summaryFullWidth: true,
    approach: {
      problem: {
        paragraphs: [
          "A Formula Student electric vehicle needs an independent safety system that continuously checks whether the driver's braking demand is consistent with the power delivered to the motors. If hard braking and excessive propulsion occur simultaneously, the device must open the Shutdown Circuit (SDC), causing the Accumulator Isolation Relays (AIRs) to open and isolate the HV battery from the vehicle. The inverter must then discharge the remaining energy stored in the high-voltage circuit, bringing the vehicle to a safe state.",
          "The challenge was broader than detecting two thresholds. Formula Student rules require a standalone, non-programmable circuit supplied directly from the Low Voltage Master Switch. Brake pressure and DC-link current are System Critical Signals, so disconnections, shorts, and out-of-range behavior must also lead to a safe response. The circuit therefore had to combine precise analog measurement, deterministic timing, fault detection, and fail-safe shutdown logic without relying on software.",
        ],
        requirements: [
          "Detect hard braking from a hydraulic pressure sensor while keeping the selected threshold below the wheel-locking condition and at or below 30 bar.",
          "Detect power delivery above 5 kW; at the vehicle's maximum tractive-system voltage of 404 V, this corresponds to approximately 12 A.",
          "Open the SDC when the braking and power conditions remain implausible, with the required persistence behavior implemented entirely in hardware.",
          "Detect open-circuit, short-to-ground, short-to-supply, and out-of-range sensor faults and drive the system to a safe state.",
          "Use only the minimum required interfaces and allow each sensor signal to be disconnected separately during technical inspection.",
          "Ensure that an unpowered or disconnected BSPD opens the SDC rather than allowing continued tractive-system operation.",
        ],
      },
      solution: {
        paragraphs: [
          "I developed a dedicated analog BSPD PCBA around two independent physical measurements: an EPT3100 brake-pressure sensor and a LEM HASS 200-S Hall-effect current sensor. The board conditions both signals, compares them against adjustable safety thresholds, detects invalid sensor voltages, applies hardware timing, and controls a relay in the vehicle shutdown circuit.",
          "The complete decision path is deterministic and non-programmable. Comparators implement the threshold decisions, wired logic combines the braking and current conditions, dedicated monitoring detects sensor faults, and the output stage keeps the relay energized only while the system is healthy. A detected fault removes relay power and opens the SDC.",
        ],
        features: [
          "Dedicated 12 V and 5 V regulated supplies for the analog circuitry and sensors.",
          "Offset cancellation and approximately x70 amplification of the current-sensor signal.",
          "Adjustable brake-pressure and current thresholds with deliberate safety margin.",
          "Hardware plausibility logic requiring simultaneous braking and excessive current.",
          "Under-range and over-range monitoring for both safety-critical sensor signals.",
          "RC-based persistence and reset timing with a comparator-controlled shutdown request.",
          "Fail-safe relay output stage: loss of command or supply opens the shutdown circuit.",
        ],
      },
      method: [
        {
          title: "Step 1 - Convert regulations into engineering requirements",
          paragraphs: [
            "I began by extracting the BSPD requirements primarily from the Formula Student Germany (FSG) 2025 rulebook, supplemented by the 2025 technical-inspection procedure. I converted these regulatory statements into measurable thresholds, timing constraints, electrical interfaces, fault cases, safe-state behavior, and evidence that the board would need to provide during scrutineering.",
            "The safety function was then decomposed into sensing, signal conditioning, plausibility comparison, sensor-fault detection, deterministic timing, fail-safe shutdown, and regulated power-supply stages. This requirements-first architecture kept every schematic block traceable to a regulatory purpose.",
          ],
          images: [
            {
              src: "/portfolio-pages/bspd/Shutdown_Circuit_Architecture.png",
              alt: "Formula Student shutdown circuit architecture showing the BSPD in the safety chain",
              caption:
                "Required Shutdown Circuit (SDC) architecture defined in the Formula Student Germany (FSG) 2025 rulebook.",
              width: 775,
              height: 423,
              displayWidth: "wide",
            },
          ],
          details: [
            "Standalone, non-programmable implementation with only the necessary supply, sensor, and SDC interfaces.",
            "Safe-state behavior defined for loss or corruption of each system-critical sensor signal.",
            "Technical-inspection needs considered before schematic capture and connector selection.",
          ],
        },
        {
          title: "Step 2 - Select and characterize the sensors",
          paragraphs: [
            "For braking demand, I selected an EPT3100 pressure sensor rated from 0 to 100 bar, with a 0.5-4.5 V output from a 5 V supply. Its sensitivity of 0.04 V/bar provides a direct relationship between hydraulic pressure and output voltage: the selected 20.75 bar threshold corresponds to approximately 1.33 V. Because the valid signal remains separated from both supply rails, open circuits, short circuits, and out-of-range conditions can also be detected by dedicated hardware.",
            "For propulsion power, the BSPD uses DC-link current as the measured quantity. At the vehicle's maximum tractive-system voltage of 404 V, the 5 kW regulatory boundary corresponds to approximately 12.38 A. This maximum-voltage calculation gives the lowest current associated with 5 kW and therefore provides a conservative basis for a fixed hardware threshold across the operating-voltage range.",
            "I selected the LEM HASS 200-S Hall-effect current sensor to cover the vehicle's full current range while providing electrically isolated measurement. Around the BSPD threshold, however, its output changes by only about 38 mV relative to its nominal 2.5 V zero-current reference. I measured the actual reference at approximately 2.49 V, establishing the offset and signal amplitude that the conditioning circuit in the following step needed to process.",
          ],
          images: [
            {
              src: "/portfolio-pages/bspd/EPT3100_H_10000_B_5_A.png",
              alt: "EPT3100 brake pressure sensor selected for hard-braking detection",
              caption:
                "Brake-pressure sensor reference: EPT3100-M10×1-10000-B-5-A",
              width: 462,
              height: 262,
              fit: "contain",
            },
            {
              src: "/portfolio-pages/bspd/HASS_200_S.png",
              alt: "LEM HASS 200-S Hall-effect current sensor selected for power-delivery measurement",
              caption: "Current sensor reference: LEM HASS 200-S",
              width: 603,
              height: 483,
              fit: "contain",
            },
          ],
        },
        {
          title: "Step 3 – Condition the current signal for reliable threshold detection",
          paragraphs: [
            "The HASS 200-S output is centred around a zero-current reference of approximately 2.49 V. At the 12.38 A regulatory boundary calculated in Step 2, the current-dependent variation is only about 38.7 mV. This small differential signal is not suitable for robust direct comparison because sensor offset, electrical noise, and component tolerances could become significant relative to the measured variation.",
            "I buffered the sensor output and its calibrated zero-current reference to prevent loading and impedance interactions. A first-order filter attenuates high-frequency noise before the differential stage subtracts the zero-current offset. The remaining current-dependent signal is then amplified by approximately ×70, producing a voltage range that can be evaluated reliably by the comparator logic in Step 4.",
            "An adjustable offset-calibration network compensates for the measured sensor reference and real component tolerances. This makes the conditioning stage calibratable without software while preserving a deterministic analog signal path.",
          ],
          images: [
            {
              src: "/portfolio-pages/bspd/Impedencefollower_schematic_KiCAD.png",
              alt: "KiCad schematic of the buffered current-sensor reference and offset adjustment",
              caption:
                "Buffered reference and sensor outputs with adjustable offset calibration.",
              width: 753,
              height: 749,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/bspd/Amplifier_schematic_KiCAD.png",
              alt: "KiCad schematic of the differential subtraction and current-signal amplification stage",
              caption:
                "Differential offset-subtraction stage followed by approximately ×70 non-inverting amplification.",
              width: 886,
              height: 408,
              fit: "equal-height",
            },
          ],
        },
        {
          title: "Step 4 – Implement plausibility logic and sensor-fault diagnostics",
          paragraphs: [
            "The conditioned sensor signals are converted into deterministic hardware decisions using LM311 comparators. The brake comparator trips at approximately 1.33 V, corresponding to 20.75 bar and remaining below the 30 bar regulatory limit. The amplified current channel is compared against a 2.50 V threshold, corresponding to approximately 11.52 A. This is deliberately below the 12.38 A associated with 5 kW at 404 V, providing a conservative detection margin for component and calibration tolerances.",
            "The brake and current comparator outputs are combined using hardware AND logic. A plausibility condition is therefore asserted only when hard braking and excessive propulsion current occur simultaneously; braking or propulsion alone does not initiate a shutdown request. The resulting signal is passed to the timing circuit in Step 5, where the required persistence behavior is applied before opening the SDC.",
            "Because brake pressure and DC-link current are System Critical Signals, a separate diagnostic path continuously monitors their electrical validity. Additional comparators detect outputs above or below predefined voltage windows, allowing shorts, disconnections, and implausible sensor behavior to be identified independently of the main plausibility decision. The detected sensor faults are combined through hardware OR logic and routed toward the fail-safe shutdown path.",
          ],
          images: [
            {
              src: "/portfolio-pages/bspd/Plausibility_schematic_KiCAD.png",
              alt: "Comparator-based brake and current plausibility logic in KiCad",
              caption:
                "LM311 thresholds and hardware AND logic for the BSPD plausibility decision.",
              width: 579,
              height: 475,
              displayHeightRem: 23.4,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/bspd/Overrange_schematic_KiCAD.png",
              alt: "Under-range and over-range monitoring for the two safety-critical sensor signals",
              caption:
                "LM311 window comparators for pressure- and current-sensor fault detection.",
              width: 741,
              height: 703,
              displayHeightRem: 23.4,
              fit: "equal-height",
            },
          ],
          details: [
            "Brake-sensor valid window monitored around its nominal 0.5-4.5 V output range.",
            "Current-sensor limits selected to detect disconnection, negative implausibility, and excessive positive output.",
            "A hardware OR stage combines detected failures and provides visible fault feedback on the PCB.",
          ],
        },
        {
          title: "Step 5 – Implement 250 ms persistence timing and fail-safe SDC control",
          paragraphs: [
            "Formula Student regulations require the SDC to open within 500 ms after detecting simultaneous hard braking and excessive propulsion current. To provide sufficient margin below this maximum reaction time, I designed the analog timing stage for a nominal persistence delay of approximately 250 ms. This prevents very brief signal overlap from triggering the shutdown while ensuring that a sustained fault is acted upon within the regulatory limit.",
            "The plausibility signal from Step 4 controls Q2, which enables the charging path from the 12 V supply through R34, Q2, D2, R36, and RV4 to C5. While the fault remains active, C5 charges toward the LM311 comparator threshold. When its voltage reaches this threshold after approximately 250 ms, the timing stage produces a shutdown request. RV4 adjusts only this charging path, allowing the nominal shutdown delay to be calibrated against component and comparator-threshold tolerances at the calibration conditions.",
            "When the plausibility condition disappears, C5 discharges through the separate D3-R37 path, which independently defines how the timing circuit resets. The reset timing must be verified experimentally across component tolerances, supply voltage, and temperature.",
            "When the timing threshold is reached, the comparator and MOSFET output stage release the normally energized BSPD relay and open the SDC. A detected sensor fault, broken command path, or loss of BSPD power also releases the relay. This fail-safe architecture ensures that loss of the command or its supply cannot preserve tractive-system operation.",
          ],
          images: [
            {
              src: "/portfolio-pages/bspd/Timer_schematic_KiCAD.png",
              alt: "RC timing and comparator circuit used for BSPD persistence and recovery behavior",
              caption:
                "Adjustable RC timer implementing the nominal 250 ms persistence delay.",
              width: 736,
              height: 314,
              displayHeightRem: 14,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/bspd/OpenSDC_schematic_KiCAD.png",
              alt: "Fail-safe relay command circuit that opens the shutdown circuit",
              caption:
                "Fail-safe comparator and MOSFET stage controlling the BSPD relay.",
              width: 586,
              height: 291,
              displayHeightRem: 14,
              fit: "equal-height",
            },
          ],
        },
        {
          title: "Step 6 – Finalize and simulate the regulated 12 V and 5 V supplies",
          paragraphs: [
            "After completing the sensing, conditioning, comparator, timing, and relay-control stages, I could determine the BSPD's actual supply requirements. These included the required voltage rails, expected loads, allowable voltage variation, regulator headroom, and the sensitivity of the analog thresholds to supply accuracy. I therefore finalized the power architecture only after defining the complete functional circuit.",
            "The vehicle's low-voltage system supplies the BSPD over an expected range from 12 V to 14.6 V. I selected an adjustable LT1963A regulator for the 12 V analog rail and an LT1117-5 for the regulated 5 V sensor supply. The adjustable 12 V stage allows the nominal output to be calibrated to account for regulator, feedback-resistor, and component tolerances.",
            "I evaluated the 12 V regulator in LTspice by sweeping its input from 14.6 V down to 12 V. With an input above approximately 12.35 V, the simulated output remained between 12.003 V and 12.006 V. Below this point, the regulator no longer has sufficient input-to-output headroom to maintain a regulated 12 V rail, identifying the dropout region that must be considered during vehicle operation.",
            "I then transferred the simulated design into KiCad using the selected component values. The implementation includes input and output filtering, regulator-stability components, minimum-load resistors, and output adjustment. Physical testing must still confirm regulation under the real BSPD load, dropout behavior, thermal dissipation, supply transients, and worst-case component tolerances.",
          ],
          inlineImages: [
            {
              afterParagraph: 3,
              images: [
                {
                  src: "/portfolio-pages/bspd/12VRegulator_schematic_LTSpice.png",
                  alt: "LTspice schematic used to validate the adjustable 12 volt regulator",
                  caption:
                    "LTspice model of the adjustable LT1963A 12 V regulator.",
                  width: 1580,
                  height: 549,
                  displayHeightRem: 15,
                  fit: "equal-height",
                },
                {
                  src: "/portfolio-pages/bspd/12VRegulator_result_LTSpice.png",
                  alt: "LTspice result showing the regulated 12 volt output during an input-voltage sweep",
                  caption:
                    "Input-voltage sweep and regulated output, showing dropout below approximately 12.35 V.",
                  width: 445,
                  height: 391,
                  displayHeightRem: 15,
                  fit: "equal-height",
                },
              ],
            },
            {
              afterParagraph: 4,
              images: [
                {
                  src: "/portfolio-pages/bspd/12VRegulator_schematic_KiCAD.png",
                  alt: "KiCad schematic of the adjustable LT1963A 12 volt regulator",
                  caption:
                    "KiCad implementation of the adjustable LT1963A 12 V regulator.",
                  width: 920,
                  height: 463,
                  displayHeightRem: 15,
                  fit: "equal-height",
                },
                {
                  src: "/portfolio-pages/bspd/5VRegulator_schematic_KiCAD.png",
                  alt: "KiCad schematic of the LT1117-5 regulated 5 volt sensor supply",
                  caption:
                    "KiCad implementation of the LT1117-5 regulated 5 V sensor supply.",
                  width: 714,
                  height: 347,
                  displayHeightRem: 15,
                  fit: "equal-height",
                },
              ],
            },
          ],
          details: [
            "Finalized the regulated supplies after defining the functional loads and rail requirements.",
            "Converted the validated simulation into exact-component KiCad schematics for the 12 V and 5 V rails.",
            "Used an adjustable 12 V stage to preserve threshold accuracy despite manufacturing tolerances.",
          ],
        },
        {
          title: "Step 7 – Integrate the safety architecture into a manufacturable PCB",
          paragraphs: [
            "After completing the functional schematic architecture and the targeted LTspice analyses, I integrated the circuit blocks into a hierarchical KiCad design.",
            "I assigned the final component references, footprints, and vehicle-compatible connectors while preserving traceability between the regulatory requirements and each hardware function.",
            "The resulting 85 mm × 70.5 mm PCB organizes the regulated supplies, current-signal conditioning, plausibility comparison, sensor-fault diagnostics, timing, and relay-control stages into identifiable functional areas. The vehicle connectors are positioned along the board edge, while calibration components and inspection interfaces remain accessible. Four mounting holes define the board's mechanical integration points.",
            "I used the KiCad 3D model to review component orientation, footprint compatibility, connector access, and assembly clearances before manufacturing. I also prepared the complete bill of materials; the project report estimates EUR 361.26 to source enough components and PCBs for three assemblies.",
          ],
          inlineImages: [
            {
              afterParagraph: 1,
              images: [
                {
                  src: "/portfolio-pages/bspd/BSPD_schematic_root.png",
                  alt: "Top-level hierarchical KiCad schematic of the complete BSPD",
                  caption:
                    "Top-level KiCad schematic integrating the BSPD power, sensing, signal-conditioning, logic, and SDC interfaces.",
                  width: 1242,
                  height: 855,
                  displayWidth: "wide",
                  fit: "contain",
                },
              ],
            },
            {
              afterParagraph: 3,
              images: [
                {
                  src: "/portfolio-pages/bspd/Layout_PCB_KiCAD.png",
                  alt: "Completed BSPD printed circuit board layout in KiCad",
                  caption: "Final 85 mm × 70.5 mm BSPD PCB layout in KiCad.",
                  width: 880,
                  height: 742,
                  fit: "equal-height",
                },
                {
                  src: "/portfolio-pages/bspd/3D_PCB_KiCAD.png",
                  alt: "Three-dimensional KiCad model of the assembled BSPD board",
                  caption:
                    "KiCad 3D assembly review of component placement and connector access.",
                  width: 987,
                  height: 624,
                  fit: "equal-height",
                },
              ],
            },
            {
              afterParagraph: 4,
              images: [
                {
                  src: "/portfolio-pages/bspd/BSPD_bill_of_materials.png",
                  alt: "BSPD bill of materials with component references, quantities, pricing, and suppliers",
                  caption:
                    "BSPD bill of materials with sourcing quantities, per-board usage, and supplier pricing.",
                  width: 655,
                  height: 673,
                  displayWidth: "wide",
                  fit: "contain",
                },
              ],
            },
          ],
        },
        {
          title: "Step 8 – Execute the validation plan and qualify the BSPD in the vehicle",
          paragraphs: [
            "I began validation by creating a structured Excel test plan containing approximately 50 test cases. The matrix translated the applicable FSG 2025 rules and technical-inspection procedures into verifiable tests covering functional behavior, detection thresholds, timing, System Critical Signal faults, fail-safe operation, inspection interfaces, and SDC actuation. This created traceability between each technical requirement, its test method, the expected response, and the recorded result.",
            "I first executed the plan at component and subsystem level, beginning with both System Critical Signals. The pressure-sensor channel was tested across its operating range and fault conditions. For the HASS 200-S current sensor, I used a conductor passing 24 times through the sensor aperture so that bench currents between 0 and 0.5 A reproduced vehicle-equivalent currents between 0 and 12 A. At the 12 A-equivalent point, I measured a 37.4 mV variation against the theoretical 37.5 mV result.",
            "After validating both sensor channels, I connected the complete BSPD system to the vehicle with the low-voltage circuit energized. At this stage, the HV system did not need to produce the required propulsion current: more than 0.5 A was injected through the 24-turn test conductor to reproduce a current above the BSPD threshold. This configuration allowed the installed wiring, sensor interfaces, BSPD logic, relay output, and connection to the vehicle SDC to be exercised safely in the vehicle architecture.",
            "The HASS 200-S was then installed around the real high-voltage DC-link conductor. With the BSPD fully integrated, I repeated the complete test plan under representative operating conditions: the low-voltage and high-voltage systems were active, the BSPD was installed in its vehicle configuration, and the car was driven. This final campaign tested the safety function using the real brake-pressure and DC-link current signals rather than simulated current injection.",
            "Repeating the same requirement-based test plan at bench, integrated low-voltage, and fully operational vehicle levels provided progressive evidence from individual sensor behavior to complete-system performance. The BSPD was fully validated in the driving vehicle against the defined functional and technical requirements, including its interaction with the SDC and its fail-safe response.",
            "The resulting validation record provides traceable evidence against the FSG 2025 rulebook and technical-inspection sheets. It demonstrates that the manufactured BSPD, its sensors, vehicle wiring, shutdown interface, and installed behavior were tested as one complete safety system—not only as isolated electronic functions.",
          ],
          inlineImages: [
            {
              afterParagraph: 1,
              images: [
                {
                  src: "/portfolio-pages/bspd/BSPD_assembled_board.jpg",
                  alt: "Freshly assembled BSPD printed circuit board before vehicle integration",
                  caption:
                    "Freshly assembled BSPD PCB used for the requirement-based validation campaign.",
                  width: 1024,
                  height: 576,
                  displayWidth: "wide",
                  fit: "contain",
                },
              ],
            },
            {
              afterParagraph: 2,
              images: [
                {
                  src: "/portfolio-pages/bspd/TestingSetup_CurrentSensor_Validation.png",
                  alt: "Bench setup used to validate the BSPD Hall-effect current sensor",
                  caption:
                    "Current-sensor characterization using 24 primary turns to reproduce vehicle-equivalent currents up to 12 A.",
                  width: 848,
                  height: 383,
                  displayHeightRem: 12.5,
                  fit: "equal-height",
                },
                {
                  src: "/portfolio-pages/bspd/Test6_CurrentSensor_Validation.png",
                  alt: "Oscilloscope measurement at the 12 ampere-equivalent current-sensor validation point",
                  caption:
                    "12 A-equivalent current-sensor test: 37.4 mV measured against a 37.5 mV theoretical variation.",
                  width: 1142,
                  height: 413,
                  displayHeightRem: 12.5,
                  fit: "equal-height",
                },
              ],
            },
            {
              afterParagraph: 3,
              images: [
                {
                  src: "/portfolio-pages/bspd/BSPD_vehicle_integration.jpg",
                  alt: "Assembled BSPD connected beside the vehicle during integration testing",
                  caption:
                    "BSPD connected to the vehicle during low-voltage integration with simulated current injection.",
                  width: 768,
                  height: 1024,
                  fit: "equal-height",
                },
                {
                  src: "/portfolio-pages/bspd/BSPD_vehicle_test_setup.jpg",
                  alt: "Oscilloscope and laboratory supply used for vehicle-integrated BSPD current-channel testing",
                  caption:
                    "Low-voltage integration test using a 24-turn current-injection wire and oscilloscope monitoring.",
                  width: 1024,
                  height: 768,
                  fit: "equal-height",
                },
              ],
            },
            {
              afterParagraph: 4,
              images: [
                {
                  src: "/portfolio-pages/bspd/HASS_200S_HV_DC_link_installation.jpg",
                  alt: "HASS 200-S current sensor installed on the vehicle high-voltage DC link",
                  caption:
                    "HASS 200-S installed around the vehicle's real high-voltage DC-link conductor.",
                  width: 1024,
                  height: 768,
                  fit: "equal-height",
                },
                {
                  src: "/portfolio-pages/bspd/BSPD_driving_validation.png",
                  alt: "Formula Student vehicle driving during final BSPD validation",
                  caption:
                    "Formula Student vehicle during the final driving-validation campaign with the BSPD fully integrated and the HV system active.",
                  width: 759,
                  height: 751,
                  fit: "equal-height",
                },
              ],
            },
          ],
          details: [
            "Approximately 50 traceable test cases derived from the FSG 2025 rules and technical-inspection sheets.",
            "Both System Critical Signal channels validated before complete-system integration.",
            "Complete BSPD and SDC interface tested in the vehicle with the low-voltage system active and simulated current injection.",
            "Full test plan repeated with the BSPD installed, the HV system active, and the vehicle driving.",
            "BSPD fully validated in the operational vehicle against the defined functional and technical requirements.",
          ],
        },
      ],
      results: {
        paragraphs: [
          "The project delivered a manufactured, standalone BSPD that was integrated into the Formula Student vehicle and fully validated from bench testing to operation with the HV system active and the car driving.",
        ],
        completedTitle: "Key outcomes",
        completed: [
          {
            title: "Delivered safety function",
            items: [
              "Non-programmable hardware monitors brake pressure and DC-link current, detects sensor faults, and opens the SDC through fail-safe logic.",
              "Brake and current thresholds were implemented at approximately 20.75 bar and 11.52 A.",
              "The nominal 250 ms persistence delay remains below the 500 ms maximum reaction time.",
            ],
          },
          {
            title: "Manufactured and verified hardware",
            items: [
              "The complete schematic, regulated supplies, analog logic, and 85 mm × 70.5 mm PCB were designed, assembled, and integrated into the vehicle.",
              "The current-sensor response matched theory within 1 mV across the documented test points.",
            ],
          },
          {
            title: "Vehicle-level validation",
            items: [
              "Approximately 50 tests were derived from the FSG 2025 rules and technical-inspection sheets.",
              "Both sensors and the complete BSPD were validated before and after vehicle integration.",
              "The full test plan was repeated successfully with the HV system active and the car driving.",
            ],
          },
        ],
      },
    },
    homepageProof: [
      "BSPD designed, manufactured, and integrated",
      "50 tests traced to FSG 2025 requirements",
      "Fail-safe shutdown validated with HV active",
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
      "Safety-critical analog electronics",
      "Analog signal conditioning",
      "Comparator-based hardware logic",
      "Sensor plausibility and fault diagnostics",
      "Fail-safe shutdown architecture",
      "Deterministic RC timing",
      "Hall-effect current sensing",
      "Hydraulic pressure sensing",
      "Linear power-supply design",
      "PCB design and design for manufacturing",
      "Formula Student SDC integration",
      "Requirements-based verification and validation",
    ],
    toolsTitle: "Tools & references",
    tools: [
      "KiCad",
      "LTspice",
      "Microsoft Excel",
      "Oscilloscope",
      "Laboratory DC power supply",
      "24-turn current-injection test fixture",
      "Component datasheets",
      "FSG 2025 Rulebook",
      "FSG 2025 Technical Inspection Sheets",
    ],
  },
  {
    slug: "rs485-emi-diagnosis",
    title: "EMI Issue Diagnosis on RS-485 BMS Communication",
    shortTitle: "RS-485 EMI Diagnosis",
    company: "ESTACARS - Formula Student",
    homepageCompany: "ESTACARS Formula Student (France)",
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
    homepageCompany: "Involute Transmissions (France)",
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
