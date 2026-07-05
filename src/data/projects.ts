export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  company: string;
  period: string;
  role: string;
  category: string;
  image: string;
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
};

export const projects: Project[] = [
  {
    slug: "simulation-control-unit",
    title: "Development of a Compact Hardware-in-the-Loop Platform",
    shortTitle: "Compact HiL / Simulation Control Unit",
    company: "Renco GmbH",
    period: "March 2026 - Present",
    role: "Hardware Electronics Engineer",
    category: "Automotive ECU validation",
    image: "/portfolio-pages/simulation-control-unit.png",
    summary:
      "End-to-end development of a compact Simulation Control Unit used as an internal, cost-effective HiL platform for automotive ECU validation.",
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
      "Integrated automotive and embedded communication interfaces: 2 CAN, 2 LIN, Ethernet RMII, USB-UART, SPI and I2C, with associated transceivers and support circuitry.",
      "Built the schematic architecture in Altium Designer using reusable schematic blocks, multi-channel blocks, hierarchical sheets, harnesses and bus structures.",
      "Performed MCU pin assignment in STM32CubeMX and started model-based firmware experiments with MATLAB/Simulink, STM32 Microcontroller Blockset and Embedded Coder.",
      "Started hardware-level validation using an STM32F407G-DISC1 evaluation board, oscilloscope, frequency generator and USART-to-USB bridge.",
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
      "Ethernet RMII",
      "USB-UART",
      "I2C",
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
      "USART-to-USB bridge",
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
