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
  homepageImageLayout?: "wide-left" | "portrait-left";
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
          displayWidth?: "default" | "medium" | "wide";
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
        displayWidth?: "default" | "medium" | "wide";
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
        fit: "cover",
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
    title: "Resolving EMI on an RS-485 BMS Link",
    shortTitle: "RS-485 EMI Diagnosis",
    company: "ESTACARS Formula Student - France",
    homepageCompany: "ESTACARS Formula Student (France)",
    period: "September 2023 – January 2026",
    role: "Hardware & Embedded Systems Engineer",
    category: "EMI Diagnosis · Vehicle Integration",
    image: "/portfolio-pages/rs485-emi-diagnosis.png",
    homepageImages: [
      {
        src: "/portfolio-pages/emi/diagnostic-session.jpg",
        alt: "Engineer diagnosing the RS-485 communication with an oscilloscope and BMS logs",
      },
      {
        src: "/portfolio-pages/emi/disturbed-rs485-waveform.jpg",
        alt: "Oscilloscope capture showing transient interference on the RS-485 conductors",
        fit: "cover",
      },
      {
        src: "/portfolio-pages/emi/filter-hardware-implementation.jpg",
        alt: "Engineer soldering the RC filter inside the accumulator",
        fit: "cover",
      },
    ],
    homepageImageLayout: "wide-left",
    summary:
      "Oscilloscope-led diagnosis of inverter-induced interference, followed by hardware changes that restored reliable communication during high-voltage operation.",
    summaryFullWidth: true,
    approach: {
      problem: {
        paragraphs: [
          "During high-voltage power delivery, the BMS RS-485 link became unstable and stopped delivering battery voltage, temperature, and current data. The vehicle safety system correctly reacted to the missing BMS communication by opening the Accumulator Isolation Relays (AIRs), but the repeated unintended shutdowns prevented reliable vehicle operation.",
          "Because the link behaved normally outside these operating conditions, the investigation had to distinguish between a software or protocol failure and a physical-layer disturbance created by the powertrain. The work therefore focused on reproducing the fault, measuring both RS-485 conductors during HV operation, identifying the interference signature, and implementing a mitigation that preserved the communication waveform.",
        ],
        requirements: [
          "Reproduce the communication failure under controlled high-voltage operating conditions.",
          "Measure the RS-485 physical layer and correlate electrical disturbances with BMS communication errors.",
          "Identify the dominant interference frequency and its relationship with powertrain operation.",
          "Attenuate the interference without excessively degrading the RS-485 differential amplitude or edge timing.",
          "Restore continuous BMS sensor data and eliminate AIR openings caused by communication loss.",
        ],
      },
      solution: {
        paragraphs: [
          "I instrumented the RS-485 link with a Tektronix DPO4054 oscilloscope while monitoring the BMS diagnostic logs and repeatedly operating the high-voltage system. The disturbed captures contained repetitive high-frequency spikes at approximately 25 kHz. Their appearance during power delivery and correspondence with the inverter IGBT switching frequency strongly indicated EMI coupling from the powertrain into the communication path.",
          "I developed a passive RC filtering solution for the RS-485 path and tuned it experimentally. Each iteration balanced high-frequency attenuation against differential-signal amplitude, transition time, and reliable frame reception. I also reviewed the grounding and shielding arrangement to reduce the available coupling paths.",
          "After implementing the selected filter network in the accumulator wiring, I repeated the same high-voltage operating sequence. The filtered waveform retained clearly distinguishable communication states, BMS sensor messages remained available, and communication loss no longer triggered unintended AIR opening during the tested conditions.",
        ],
        features: [
          "Oscilloscope-based diagnosis under representative HV operation.",
          "Frequency correlation between the measured interference and inverter switching.",
          "Passive RC mitigation tuned against both noise attenuation and signal integrity.",
          "Grounding and shielding improvements within the accumulator installation.",
          "Before-and-after validation using waveforms, BMS logs, and vehicle behavior.",
        ],
      },
      method: [
        {
          title: "Step 1 — Reproduce and isolate the HV-dependent failure",
          paragraphs: [
            "I reproduced the fault with the accumulator, BMS, and RS-485 wiring installed in their operating configuration. Communication remained stable before power delivery, but valid BMS messages were lost when the powertrain became active. Repeating the operating sequence produced the same behavior, establishing a clear relationship between powertrain operation and the communication failure.",
            "The failure was identified through a consistent event chain: voltage, temperature, and current messages stopped arriving, the diagnostic logs reported lost BMS communication, and the safety system opened the AIRs because valid battery data was no longer available. This made a permanent protocol or software defect less likely and provided a repeatable test condition for the physical-layer measurements performed in Step 2.",
          ],
          images: [
            {
              src: "/portfolio-pages/emi/accumulator-bms-test-setup.jpg",
              alt: "Formula Student accumulator and BMS wiring configured for EMI reproduction tests",
              caption:
                "Accumulator and BMS test configuration used to reproduce the RS-485 communication loss during powertrain operation.",
              width: 1024,
              height: 768,
              displayWidth: "wide",
              fit: "contain",
            },
          ],
          details: [
            "Reproduced the same communication failure across repeated powertrain operating sequences.",
            "Tracked the failure from missing BMS sensor messages to diagnostic errors and the resulting AIR opening.",
          ],
        },
        {
          title: "Step 2 — Measure and correlate the interference signature",
          paragraphs: [
            "I monitored both conductors of the RS-485 pair with a Tektronix DPO4054 oscilloscope while recording BMS diagnostic messages and repeating the powertrain operating sequence established in Step 1. This allowed the conductor voltages, communication errors, and inverter operating state to be compared during the same failure event.",
            "The captures showed fast transient spikes recurring at approximately 25 kHz while the inverter was operating. This repetition rate matched the inverter IGBT switching frequency, and the disturbance appeared during the same events as the loss of BMS messages. The combined electrical and functional evidence identified inverter-generated EMI as the likely source of the RS-485 communication failure, rather than an independent application-layer fault.",
          ],
          images: [
            {
              src: "/portfolio-pages/emi/disturbed-rs485-waveform.jpg",
              alt: "Oscilloscope capture of the RS-485 pair disturbed by repetitive high-frequency spikes",
              caption:
                "Repetitive transient interference on the RS-485 conductors, recurring at approximately 25 kHz during inverter operation.",
              width: 768,
              height: 1024,
              displayWidth: "medium",
              fit: "contain",
            },
          ],
          details: [
            "Captured transient interference on both RS-485 conductors during communication loss.",
            "Measured an approximately 25 kHz repetition rate matching the inverter IGBT switching frequency.",
            "Correlated the physical-layer disturbance with BMS communication errors.",
          ],
        },
        {
          title: "Step 3 — Design and tune the RS-485 filter",
          paragraphs: [
            "Based on the measured transient waveform and its effect on the RS-485 communication levels, I developed a first-order RC filter to attenuate the interference. The design had to reduce the transient amplitude while preserving sufficient differential voltage, transition speed, and timing margin for reliable frame detection.",
            "I evaluated candidate component values under the same inverter operating conditions used during diagnosis. After each iteration, I compared the conductor waveforms, BMS messages, and diagnostic errors to determine whether the interference was reduced without excessively degrading the communication signal. In parallel, I reviewed the grounding and shielding arrangement to reduce the coupling paths rather than relying on filtering alone.",
          ],
          images: [
            {
              src: "/portfolio-pages/emi/rs485-rc-filter-schematic.png",
              alt: "Schematic of the RC network added to the RS-485 communication path",
              caption:
                "First-order RC filter developed to reduce transient interference while preserving the RS-485 communication waveform.",
              width: 1080,
              height: 720,
              displayWidth: "wide",
              fit: "contain",
            },
          ],
          details: [
            "Evaluated candidate RC values under the same inverter operating conditions used during diagnosis.",
            "Balanced transient attenuation against differential amplitude and edge timing.",
            "Verified each iteration using oscilloscope captures and BMS diagnostic messages.",
            "Reviewed grounding and shielding to reduce the underlying interference-coupling paths.",
          ],
        },
        {
          title: "Step 4 — Integrate the filter into the accumulator",
          paragraphs: [
            "I integrated the selected RC network into the accumulator communication wiring while keeping the added conductor lengths short to limit parasitic effects and additional interference pickup. The connections were soldered, mechanically secured, and visually inspected before the system was energized.",
            "I also reviewed and adjusted the local grounding and shielding arrangement to reduce interference coupling into the communication path. After inspection, the completed installation was prepared for validation using the same powertrain operating sequence and measurement points established during diagnosis.",
          ],
          images: [
            {
              src: "/portfolio-pages/emi/filter-hardware-implementation.jpg",
              alt: "Hardware rework implementing the RS-485 filter inside the accumulator",
              caption:
                "Installed RC filter inside the accumulator before high-voltage validation.",
              width: 768,
              height: 1024,
              fit: "contain",
            },
          ],
          details: [
            "Integrated the selected RC network into the accumulator communication wiring.",
            "Kept added conductor lengths short and mechanically secured the installation.",
            "Reviewed the completed hardware before high-voltage validation.",
            "Prepared the system for testing under the original failure conditions.",
          ],
        },
        {
          title: "Step 5 — Validate electrical and system-level performance",
          paragraphs: [
            "I repeated the original powertrain operating sequence using the same oscilloscope connection points and BMS monitoring established during diagnosis. Comparing the pre- and post-mitigation captures showed that the repetitive transient bursts were substantially attenuated while the RS-485 communication levels remained clearly distinguishable.",
            "The improvement was then confirmed at system level throughout the tested sequence: BMS voltage, temperature, and current messages remained available, the diagnostic communication errors no longer appeared, and communication loss did not cause an unintended AIR opening.",
          ],
          images: [
            {
              src: "/portfolio-pages/emi/diagnostic-session.jpg",
              alt: "Engineer validating the filtered RS-485 communication with an oscilloscope and BMS logs",
              caption:
                "Concurrent oscilloscope and BMS-log monitoring during post-mitigation high-voltage validation.",
              width: 768,
              height: 1024,
              displayHeightRem: 23.4,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/emi/filtered-rs485-waveform.jpg",
              alt: "Oscilloscope capture of the RS-485 communication after filtering",
              caption:
                "Post-mitigation RS-485 waveform showing reduced transient interference and preserved communication levels.",
              width: 1024,
              height: 768,
              displayHeightRem: 23.4,
              fit: "equal-height",
            },
          ],
          details: [
            "Repeated the original failure conditions using the same measurement points.",
            "Compared pre- and post-mitigation waveforms under equivalent operating conditions.",
            "Confirmed that BMS sensor data remained available without communication errors.",
            "Verified that no communication-related AIR opening occurred during the tested sequence.",
          ],
        },
      ],
      results: {
        paragraphs: [
          "Under the same powertrain conditions used to reproduce the original fault, the installed RC filter substantially reduced the transient interference while preserving distinguishable RS-485 communication levels. BMS sensor data remained available, no communication errors were observed, and no communication-related AIR opening occurred during the validation sequence.",
        ],
        completedTitle: "Validated outcomes",
        completed: [
          {
            title: "Interference source identified",
            items: [
              "Communication loss was repeatedly reproduced during powertrain operation.",
              "Transient interference recurring at approximately 25 kHz matched the inverter IGBT switching frequency.",
              "The physical-layer disturbance coincided with the loss of BMS messages.",
            ],
          },
          {
            title: "Mitigation designed and integrated",
            items: [
              "A first-order RC filter was tuned against interference attenuation and RS-485 signal integrity.",
              "The selected filter was integrated into the accumulator communication wiring.",
              "The grounding and shielding arrangement was reviewed and adjusted to reduce interference coupling.",
            ],
          },
          {
            title: "System behavior validated",
            items: [
              "Post-mitigation captures showed substantially reduced transient interference.",
              "RS-485 communication levels remained distinguishable and BMS sensor data remained available.",
              "No communication errors or communication-related AIR openings occurred during the tested sequence.",
            ],
          },
        ],
      },
    },
    homepageProof: [
      "25 kHz transient interference correlated with inverter IGBT switching",
      "RC filter tuned to attenuate EMI while preserving RS-485 signal integrity",
      "BMS data maintained with no communication-related AIR opening during validation",
    ],
    context:
      "During high-voltage power delivery, EMI disrupted the RS-485 BMS link, interrupted battery sensor data, and caused the vehicle safety system to open the AIRs.",
    roleDescription:
      "I reproduced the failure, measured and correlated the interference, developed the RC mitigation, implemented the hardware changes, and validated the corrected system under high-voltage operation.",
    implementation: [
      "Reproduced the RS-485 communication loss during high-voltage power delivery.",
      "Measured both communication conductors and correlated a 25 kHz disturbance with the inverter IGBT switching frequency.",
      "Designed and tuned a passive RC network while monitoring waveform quality and BMS logs.",
      "Implemented the filter and improved grounding and shielding inside the accumulator.",
      "Repeated the operating sequence and confirmed reliable communication and AIR behavior.",
    ],
    proof: [
      "The diagnosis combined oscilloscope captures, BMS logs, and repeatable HV operating events.",
      "The correction targeted the measured interference while preserving the communication waveform.",
      "The final behavior was verified using the same conditions that reproduced the original failure.",
    ],
    results: [
      "Reliable RS-485 communication was restored under the tested HV operating conditions.",
      "BMS voltage, temperature, and current data remained available.",
      "Communication-related AIR openings were eliminated during validation.",
    ],
    technologies: [
      "RS-485 physical-layer diagnostics",
      "Battery management systems (BMS)",
      "Electromagnetic compatibility (EMC)",
      "Inverter-induced EMI analysis",
      "Differential signal integrity",
      "First-order RC filter design",
      "Grounding and shielding",
      "High-voltage accumulator integration",
      "Vehicle-level fault validation",
    ],
    toolsTitle: "Tools & equipment",
    tools: [
      "Tektronix DPO4054 oscilloscope",
      "PuTTY serial terminal and BMS diagnostic logs",
      "High-voltage accumulator test setup",
      "Vehicle inverter and powertrain",
      "KiCad schematic capture",
      "Soldering and rework equipment",
      "RC filter prototype hardware",
    ],
  },
  {
    slug: "bearingsolver",
    title: "BearingSolver: Physics-Based Bearing Analysis",
    shortTitle: "BearingSolver",
    company: "Involute Transmissions - France",
    homepageCompany: "Involute Transmissions (France)",
    period: "May 2025 – September 2025",
    role: "R&D Engineer",
    category: "Bearing Modeling · Engineering Software",
    image: "/portfolio-pages/bearingsolver.png",
    homepageImages: [
      {
        src: "/portfolio-pages/bearingsolver/harris-bearing-reference.png",
        alt: "Essential Concepts of Bearing Technology reference book by Harris and Kotzalas",
        fit: "contain",
      },
      {
        src: "/portfolio-pages/bearingsolver/gui-mechanical-results.png",
        alt: "BearingSolver load cases and calculated mechanical results",
        fit: "cover",
      },
      {
        src: "/portfolio-pages/bearingsolver/bearing-equations.png",
        alt: "Bearing geometry, contact-angle, and equilibrium equations",
        fit: "contain",
      },
    ],
    homepageImageLayout: "portrait-left",
    summary:
      "Scilab engineering tool for deep-groove ball bearing sizing, combining traceable physics models, a reusable GUI, and validated outputs in under three seconds.",
    summaryFullWidth: true,
    approach: {
      problem: {
        paragraphs: [
          "Early bearing-sizing studies required repeated calculations of life, operating clearance, stiffness, contact pressure, and frictional losses across multiple operating conditions. A complete manual analysis could take approximately 5–10 hours and had to be repeated whenever the bearing geometry, material, fit, temperature, lubrication, or loading changed.",
          "Commercial tools reduced calculation time but introduced license costs, complex workflows, and limited visibility into their equations, assumptions, and accuracy. Involute Transmissions therefore needed an internal engineering application that was fast and easy to use while keeping every model traceable and its validation margin known.",
        ],
        requirements: [
          "Calculate bearing life, operating clearance, radial and axial response, contact pressure, frictional losses, and lubrication indicators.",
          "Support multiple operating cases with axial, radial, and combined loads and prescribed misalignment.",
          "Provide a Scilab GUI with study-file management, input checks, contextual help, and model-validity warnings.",
          "Document every equation, assumption, symbol, applicability limit, and known model boundary.",
          "Validate the implemented models against standards, literature, commercial software, and available physical-test evidence.",
        ],
      },
      solution: {
        paragraphs: [
          "I developed BearingSolver as a modular Scilab application that consolidates the complete deep-groove ball bearing analysis workflow into one traceable engineering interface. Engineers can define bearing geometry and materials, create multiple operating cases, run the implemented models, compare performance, and save studies for later reuse.",
          "The computational core combines documented bearing theory, standards-based calculations, and nonlinear numerical solving. Each result remains connected to known equations, assumptions, applicability limits, and validation evidence. Input controls, contextual help, detailed result views, and model-validity warnings help engineers interpret the outputs rather than treating every calculated value as automatically trustworthy.",
        ],
        features: [
          "Study-file creation, saving, reopening, and comparison.",
          "Bearing geometry, material, fit, temperature, lubrication, and multi-case load definition.",
          "Life, damage, operating-clearance, viscosity-ratio, deformation, stiffness, contact-pressure, and frictional-loss calculations.",
          "Result tables, load-distribution charts, contact-surface views, and operating-case comparisons.",
          "Input verification, contextual help, detailed calculation views, and model-validity warnings.",
        ],
      },
      method: [
        {
          title: "Step 1 — Establish the modeling foundation",
          paragraphs: [
            "Before programming, I identified the physical phenomena and outputs that BearingSolver had to model. I then conducted a structured literature review using SKF technical resources, British Gear Association training, the Harris bearing-analysis references, ISO 281:2007, and relevant scientific publications.",
            "For each candidate model, I documented its required inputs, calculated outputs, assumptions, applicability limits, and available validation references. This established a traceable calculation chain covering bearing geometry, operating clearance, Hertzian contact behavior, load distribution, deformation, stiffness, life, lubrication indicators, and frictional losses. The resulting 65-page technical note became the implementation specification for the computational models.",
          ],
          images: [
            {
              src: "/portfolio-pages/bearingsolver/harris-bearing-reference.png",
              alt: "Essential Concepts of Bearing Technology reference book by Harris and Kotzalas",
              caption:
                "Harris and Kotzalas reference used to establish the bearing-modeling foundation.",
              width: 366,
              height: 556,
              displayHeightRem: 24,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/bearingsolver/bearing-equations.png",
              alt: "Bearing geometry, contact-angle, and equilibrium equations",
              caption:
                "Bearing geometry and equilibrium equations reviewed before implementation in Scilab.",
              width: 742,
              height: 647,
              displayHeightRem: 24,
              fit: "equal-height",
            },
          ],
          details: [
            "Defined the calculation chain from bearing geometry and operating conditions to mechanical performance.",
            "Selected generalized Hertzian theory for contact behavior and ISO 281:2007 for bearing-life calculations.",
            "Documented each model's inputs, outputs, assumptions, equations, and applicability limits.",
            "Converted known model boundaries into requirements for software checks and user warnings.",
          ],
        },
        {
          title: "Step 2 — Translate theory into computational models",
          paragraphs: [
            "I converted the selected physical models into modular Scilab functions, progressing from bearing geometry and operating clearance to Hertzian contact, radial and axial response, combined loading, life, and frictional losses. Each function used defined engineering inputs and returned traceable outputs that could be reused by the interface and tested independently during validation.",
            "Radial equilibrium was solved iteratively by adjusting bearing displacement until the forces generated by the loaded rolling elements balanced the applied load. Axial response used the Jones stiffness formulation and Scilab's nonlinear solver to determine contact angle and deformation. Combined loading required a coupled three-equation equilibrium system for axial, radial, and angular behavior.",
            "I reformulated the coordinate system to make the internal kinematics easier to interpret and used prescribed misalignment as a practical engineering input. When the advanced ISO fatigue-limit formulation did not converge reliably, I retained the documented simplified method instead of delivering an unstable solver. The excluded capability and its consequences remained visible in the model documentation and interface warnings.",
          ],
          details: [
            "Implemented modular functions for clearance, contact, deformation, stiffness, life, and frictional losses.",
            "Used iterative equilibrium and nonlinear numerical solving for radial, axial, and combined-load response.",
            "Standardized model inputs and outputs for reuse by the GUI and independent validation.",
            "Documented numerical simplifications and exposed their applicability limits to users.",
          ],
        },
        {
          title: "Step 3 — Build the Engineering GUI",
          paragraphs: [
            "I transformed the computational models into a Scilab GUI organized around the engineer’s complete analysis sequence: define the bearing geometry and materials, create multiple operating cases, execute the calculations, inspect the results, and explore the detailed contact behavior.",
            "Every field, control, and result panel was programmed and connected to the underlying calculation functions. The interface presents load distribution, deformation, stiffness, contact pressure, and validity information through structured tables and plots. Contextual help, input checks, and explicit warnings—such as identifying truncated contact surfaces—help users distinguish a numerical result from one that is valid for engineering use.",
          ],
          images: [
            {
              src: "/portfolio-pages/bearingsolver/gui-bearing-definition.png",
              alt: "BearingSolver interface for bearing geometry and material definition",
              caption:
                "Bearing geometry and material definition for the rings and rolling elements.",
              width: 940,
              height: 515,
              displayHeightRem: 15.5,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/bearingsolver/gui-mechanical-results.png",
              alt: "BearingSolver load cases and calculated mechanical results",
              caption:
                "Load cases, load distribution, calculated mechanical results, and contact-validity warning.",
              width: 1116,
              height: 544,
              displayHeightRem: 15.5,
              fit: "equal-height",
            },
            {
              src: "/portfolio-pages/bearingsolver/gui-contact-surfaces.png",
              alt: "BearingSolver visualization of individual contact surfaces",
              caption:
                "Individual contact-surface visualization across the inner and outer rings.",
              width: 1137,
              height: 550,
              displayHeightRem: 15.5,
              fit: "equal-height",
            },
          ],
          details: [
            "Structured the application around bearing definition, operating cases, calculation, and result review.",
            "Connected standardized GUI inputs and outputs to the modular Scilab models.",
            "Visualized load distribution, mechanical results, and individual contact surfaces.",
            "Integrated input checks, contextual help, detailed views, and model-validity warnings.",
            "Enabled study files to be saved and reopened for repeatable analysis.",
          ],
        },
        {
          title: "Step 4 — Validate the Models and Quantify Their Precision",
          paragraphs: [
            "I validated BearingSolver through a progressive chain of independent evidence. I first benchmarked the implemented calculations against SKF SimPro, then cross-checked their physical behavior and reference cases against NASA technical publications, Harris bearing-analysis examples, and the ISO 281 bearing-life standard. The final stage compared the model predictions with the available evidence from the company’s bearing test-bench process.",
            "The test-bench results were not used to calibrate or correct the computational models. Instead, I recorded every validation test, its reference conditions, its results, and the observed differences in a 200-page validation note covering the complete campaign. This body of evidence allowed me to quantify the precision of each model and make its expected accuracy traceable to the engineering team. A separate user guide documented the complete application workflow.",
          ],
          images: [
            {
              src: "/portfolio-pages/bearingsolver/validation-workflow.png",
              alt: "BearingSolver validation workflow from SKF SimPro and NASA comparisons to bearing test-bench validation",
              caption:
                "Progressive validation using commercial software, scientific publications, and test-bench evidence.",
              width: 1319,
              height: 121,
              displayWidth: "wide",
              fit: "contain",
            },
          ],
          details: [
            "Benchmarked the implemented calculations against SKF SimPro commercial software.",
            "Cross-checked model behavior with NASA publications, Harris examples, and ISO 281.",
            "Compared model predictions with the available company test-bench evidence.",
            "Recorded every validation test, reference result, and observed difference in a 200-page validation note.",
            "Used the measured differences to define the precision of each model without calibrating it against the test-bench results.",
          ],
        },
      ],
      results: {
        paragraphs: [
          "BearingSolver was delivered as a reusable internal Scilab application for deep-groove ball bearing analysis. Calculations that could require approximately 5–10 hours when performed manually were reduced to around 20 ms for selected models, while the complete result set could be generated in under three seconds. Each model’s precision was established through documented comparisons rather than test-bench calibration.",
        ],
        completedTitle: "Delivered outcomes",
        completed: [
          {
            title: "Complete engineering workflow",
            items: [
              "Life, damage, clearance, deformation, stiffness, contact-pressure, and frictional-loss calculations.",
              "Axial, radial, and combined loading with prescribed misalignment.",
              "Multi-case studies, detailed results, load-distribution plots, and contact-surface visualization.",
            ],
          },
          {
            title: "Calculation time reduced",
            items: [
              "Selected calculations reduced from approximately 5–10 hours of manual work to around 20 ms.",
              "Complete application outputs generated in under three seconds.",
              "Study files made analyses repeatable and easier to compare.",
            ],
          },
          {
            title: "Precision and traceability documented",
            items: [
              "Predictions compared with SKF SimPro, NASA publications, Harris references, ISO 281, and available test-bench results.",
              "Model precision defined from the observed differences and recorded in a 200-page validation note.",
              "Modeling theory documented in a 65-page technical note, with a separate user guide for engineering reuse.",
            ],
          },
        ],
      },
    },
    homepageProof: [
      "Selected calculations reduced from 5–10 hours to approximately 20 ms",
      "Complete bearing-analysis workflow delivered as a standalone Scilab application",
      "Model precision established through multi-source validation and a 200-page validation note",
    ],
    context:
      "Bearing sizing required a faster, transparent alternative to repeated manual calculations and opaque commercial workflows.",
    roleDescription:
      "I researched, modeled, programmed, validated, and documented a Scilab application for deep-groove ball bearing analysis.",
    implementation: [
      "Defined the engineering requirements and planned the work from research through validation.",
      "Built bearing models from Hertzian theory, ISO 281, Harris references, and nonlinear equilibrium methods.",
      "Developed the Scilab GUI, case management, result visualisations, and model-validity safeguards.",
      "Validated results against SKF SimPro, NASA publications, reference literature, standards, and test evidence.",
      "Documented the models, validation cases, error margins, and user workflow.",
    ],
    proof: [
      "The project produced a functional application rather than a one-off calculation workbook.",
      "Independent comparison paths established known validation margins for the implemented models.",
      "Technical, validation, and user documentation made the calculations traceable and reusable.",
    ],
    results: [
      "Delivered a reusable internal bearing-analysis application with complete outputs in under three seconds.",
      "Reduced selected calculations from hours of manual work to millisecond-scale execution.",
      "Made model assumptions, limitations, and validation evidence visible to the engineering team.",
    ],
    technologies: [
      "Deep-groove ball bearing mechanics",
      "Hertzian contact mechanics",
      "Load distribution & contact pressure",
      "Operating clearance & thermal fits",
      "Radial, axial & combined-load equilibrium",
      "Deformation & stiffness modeling",
      "Bearing life & damage prediction",
      "Lubrication & frictional-loss modeling",
      "Nonlinear numerical solving",
      "Engineering GUI development",
      "Model verification & precision assessment",
    ],
    toolsTitle: "Tools, standards & validation references",
    tools: [
      "Scilab",
      "SKF SimPro",
      "ISO 281:2007",
      "Harris & Kotzalas bearing references",
      "NASA bearing-analysis publications",
      "SKF technical resources",
      "British Gear Association training material",
      "Involute Transmissions test-bench results",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
