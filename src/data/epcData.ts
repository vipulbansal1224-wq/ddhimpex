export interface EPCService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
}

export const EPC_SERVICES: EPCService[] = [
  {
    id: 'engineering-services',
    title: 'Basic & Detailed Engineering',
    shortDesc: 'Bespoke engineering, plant layout design, and CAD modeling using advanced software standards.',
    fullDesc: 'DDH Impex delivers basic and detailed engineering design for industrial plants on a Lumpsum Turnkey (LSTK) basis. Our expert engineers specialize in process design, 3D piping, electrical & instrumentation, civil & structural design for chemical, specialty chemical, and commodity manufacturing units.',
    iconName: 'Cpu',
    highlights: [
      'In-house team of certified design experts',
      'Implementation of state-of-the-art 3D CAD engineering software',
      'Compliance with international codes (ASME, API, ISO, DIN)',
      'Optimized layout design for maximum operational safety & efficiency'
    ]
  },
  {
    id: 'technology-process-evaluation',
    title: 'Technology & Process Evaluation',
    shortDesc: 'Systematic technical audit, functionality assessment, ROI analysis, and workflow optimization.',
    fullDesc: 'We perform comprehensive evaluations of manufacturing technologies and operational processes. Our systematic assessment covers functionality, performance benchmarking, security/compliance, vendor evaluation, cycle time reduction, and strategic alignment with corporate growth objectives.',
    iconName: 'BarChart3',
    highlights: [
      'Functional & Performance metrics evaluation',
      'Cost-Benefit & ROI feasibility analysis',
      'Process mapping & bottleneck identification',
      'Change management & seamless technology adoption'
    ]
  },
  {
    id: 'technology-know-how',
    title: 'Technology Know-How & Infrastructure',
    shortDesc: 'Smart infrastructure, IoT integration, power generation, district cooling, and water distribution networks.',
    fullDesc: 'Leveraging cutting-edge innovations, DDH Impex provides infrastructure master planning for industrial parks and tech-cities. Our expertise encompasses IoT energy management, sustainable building HVAC systems, large-scale district cooling, and agricultural irrigation infrastructure.',
    iconName: 'Zap',
    highlights: [
      'Smart Infrastructure & IoT energy grids',
      'High-capacity District Cooling Systems for industrial complexes',
      'Master planning for power generation & water distribution',
      'Sustainable green building technologies and carbon footprint reduction'
    ]
  },
  {
    id: 'turnkey-epc-projects',
    title: 'Turnkey & EPC Project Execution',
    shortDesc: 'End-to-end execution from concept, civil works, equipment erection to commissioning & handover.',
    fullDesc: 'From greenfield project conceptualization to complete plant commissioning, DDH Impex handles all EPC phases. We ensure single-point responsibility, strict adherence to timelines, safety protocols, and performance guarantee test runs prior to final facility handover.',
    iconName: 'Factory',
    highlights: [
      'Turnkey LSTK execution for chemical & processing units',
      'Precision civil, structural steel erection, and heavy machinery placement',
      'Pre-commissioning quality checks and trial runs',
      'Performance Guarantee test runs for guaranteed plant output'
    ]
  },
  {
    id: 'procurement-manufacturing',
    title: 'Strategic Procurement & Supply Chain',
    shortDesc: 'Global machinery sourcing, mine equipment, stockyard construction, and port logistics.',
    fullDesc: 'Our strategic procurement division handles the global sourcing of heavy machinery, specialized chemical reactors, heat exchangers, mining equipment, and port bulk handling facilities. Our certified experts ensure rigorous factory acceptance testing and global compliance.',
    iconName: 'Truck',
    highlights: [
      'Global sourcing network across America, Europe & Asia',
      'Vendor audit & Factory Acceptance Testing (FAT)',
      'Port, stockyard, and heavy equipment logistics management',
      'Optimized inventory management and cost control'
    ]
  }
];

export const EPC_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Technology & Engineering',
    desc: 'Expert tech selection, basic & detailed engineering, 3D modeling, and master planning.'
  },
  {
    step: '02',
    title: 'Procurement & Manufacturing',
    desc: 'Strategic global machinery sourcing, fabrication, quality assurance, and heavy freight dispatch.'
  },
  {
    step: '03',
    title: 'Construction & Commissioning',
    desc: 'Site mobilization, civil & steel erection, equipment installation, pre-commissioning, and startup.'
  },
  {
    step: '04',
    title: 'Performance Handover',
    desc: 'Performance guarantee test runs, operational training, and seamless facility transfer.'
  }
];
