export interface ExperiencePoint {
  index: string;
  title: string;
  description: string;
}

export interface ServiceModel {
  id: 'model-a' | 'model-b' | 'model-c';
  code: string;
  title: string;
  targetBuyers: string;
  summary: string;
  scopePoints: string[];
  customerBenefit: string;
  freightModes: string;
}

export interface WorkflowStep {
  step: number;
  code: string;
  title: string;
  activity: string;
  deliverables: string[];
  checkpoint: string;
}

export interface SpecialistBlock {
  index: string;
  title: string;
  subtitle: string;
  points: string[];
}

export const HERO_FACTS = [
  {
    value: '15+ Years',
    label: 'Direct China purchasing trips, factory meetings & order coordination',
  },
  {
    value: '~40 Years',
    label: 'Aligned UAE importing, wholesale & retail trading background',
  },
  {
    value: '3 Models',
    label: 'Consolidation, technical factory sourcing & project procurement',
  },
  {
    value: '7 Stages',
    label: 'Structured execution from buyer brief through post-delivery resolution',
  },
];

export const EXPERIENCE_PILLARS: ExperiencePoint[] = [
  {
    index: '01',
    title: 'We have sourced from China as buyers',
    description:
      'Years of purchasing visits have given us direct familiarity with product selection, supplier communication, quotation comparison, negotiation, and the importance of confirming requirements before an order is placed.',
  },
  {
    index: '02',
    title: 'We understand what happens after importation',
    description:
      'Our background includes handling goods and shipments arriving in the UAE, where packing, quantities, specifications, delivery coordination, and product condition have real consequences. This downstream perspective helps us identify the details that deserve attention before dispatch.',
  },
  {
    index: '03',
    title: 'We know the commercial realities of wholesale distribution',
    description:
      'Experience supplying hypermarkets, department stores, supermarkets, retailers, and wholesale customers has built a practical understanding of price positioning, stock availability, presentation, customer expectations, and the pressures of maintaining dependable supply.',
  },
  {
    index: '04',
    title: 'We pay attention to market demand',
    description:
      'Continual exposure to UAE buying behavior, competing products, and wholesale market requirements has strengthened our ability to assess product relevance and commercial opportunity. We recognize that a product must be suitable for its intended market, not merely inexpensive at the factory.',
  },
  {
    index: '05',
    title: 'We approach purchases with financial and operational discipline',
    description:
      'Trading experience reinforces the importance of accurate specifications, clear documentation, transparent commercial terms, and timely follow-up. These principles guide how we aim to coordinate sourcing assignments and communicate with customers.',
  },
];

export const SERVICE_MODELS: ServiceModel[] = [
  {
    id: 'model-a',
    code: 'Model A',
    title: 'Mixed-carton electronics consolidation',
    targetBuyers: 'Phone-accessory wholesalers · CCTV distributors · Smaller IT traders',
    summary:
      'Designed for buyers purchasing varied quantities across multiple China suppliers who need unified receiving, verification, and dispatch.',
    scopePoints: [
      'Receipt and consolidation of multiple supplier orders into one coordinated consignment',
      'Basic physical checks against agreed product requirements and carton counts',
      'Carton labelling and shipment preparation for air freight or LCL sea freight',
    ],
    customerBenefit:
      'Fewer fragmented shipments, more coordinated handling, and a single accountable point of contact for the combined order.',
    freightModes: 'Air Freight / LCL Sea Freight',
  },
  {
    id: 'model-b',
    code: 'Model B',
    title: 'Technical factory sourcing and inspection',
    targetBuyers: 'Industrial automation importers · Electrical distributors · IT system integrators',
    summary:
      'Focused on exact technical specification, model identification, component authenticity, and verified quality requirements rather than unit price alone.',
    scopePoints: [
      'Shortlisting qualified factory options matched to technical model and rating requirements',
      'Sample coordination and verification of component authenticity before bulk commitment',
      'Agreed pre-dispatch inspection checkpoints to catch specification mismatches early',
    ],
    customerBenefit:
      'Better control of specification mismatches and stronger visibility into supplier capability and product suitability before dispatch.',
    freightModes: 'Sample Verification · Air / Sea Freight',
  },
  {
    id: 'model-c',
    code: 'Model C',
    title: 'Direct-factory project procurement',
    targetBuyers: 'Solar installers · Infrastructure contractors · Larger equipment distributors',
    summary:
      'Structured support for high-value or project-specific equipment requiring longer manufacturing timelines and closer technical coordination.',
    scopePoints: [
      'Factory qualification and formal procurement coordination against project BoQs',
      'Ongoing production milestone follow-up and pre-shipment inspection arrangements',
      'Container loading and shipment planning aligned with project delivery schedules',
    ],
    customerBenefit:
      'A disciplined purchasing process for complex orders with clearly defined specifications, milestones, and documentation needs.',
    freightModes: 'FCL Container · Project Cargo Planning',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    code: '01',
    title: 'Understand',
    activity:
      'Meet the buyer and document products, specification, quantities, packaging, certificates, delivery target and budget.',
    deliverables: [
      'Product & technical specification sheet',
      'Target quantities, packaging & certification scope',
      'Delivery schedule & budget alignment',
    ],
    checkpoint: 'Written sourcing brief confirmed before market outreach',
  },
  {
    step: 2,
    code: '02',
    title: 'Source',
    activity:
      'Identify possible products and manufacturers; collect and compare quotations and supplier information.',
    deliverables: [
      'Shortlist of vetted manufacturers & suppliers',
      'Side-by-side quotation & MOQ comparison',
      'Commercial lead-time & capability notes',
    ],
    checkpoint: 'Comparable supplier options presented cleanly to the buyer',
  },
  {
    step: 3,
    code: '03',
    title: 'Verify',
    activity:
      'Check supplier credentials, request samples or arrange a factory visit where appropriate; confirm technical and compliance requirements.',
    deliverables: [
      'Supplier credential & operating checks',
      'Physical sample evaluation or factory visit notes',
      'Technical & destination compliance confirmation',
    ],
    checkpoint: 'Supplier and sample suitability verified prior to order lock',
  },
  {
    step: 4,
    code: '04',
    title: 'Agree',
    activity:
      'Obtain buyer approval on specifications, commercial terms, payment stages and inspection scope before purchase.',
    deliverables: [
      'Final approved product & packing specifications',
      'Documented commercial terms & payment milestones',
      'Defined pre-dispatch inspection criteria',
    ],
    checkpoint: 'Explicit buyer sign-off before funds or production move forward',
  },
  {
    step: 5,
    code: '05',
    title: 'Execute',
    activity:
      'Coordinate production or stock pickup, inspections, packing, labelling, consolidation and shipment documents.',
    deliverables: [
      'Production follow-up or multi-supplier stock collection',
      'Agreed quality, quantity & spec checks',
      'Labelling, consolidation & export documentation prep',
    ],
    checkpoint: 'Goods verified and consolidated prior to carrier handover',
  },
  {
    step: 6,
    code: '06',
    title: 'Dispatch',
    activity:
      'Arrange shipment coordination through agreed logistics providers and share relevant tracking and shipping records.',
    deliverables: [
      'Coordination with nominated air, LCL, or FCL forwarders',
      'Commercial invoice, packing list & shipping records',
      'Active dispatch tracking updates to destination',
    ],
    checkpoint: 'Complete shipping file transmitted to buyer import team',
  },
  {
    step: 7,
    code: '07',
    title: 'Resolve',
    activity:
      'Document shortages, damages, nonconformities or delays; coordinate follow-up and claim handling.',
    deliverables: [
      'Structured documentation of shortages or nonconformities',
      'Direct supplier follow-up on corrective actions',
      'Coordinated claim or replacement resolution support',
    ],
    checkpoint: 'Post-arrival accountability until commercial closure',
  },
];

export const SPECIALIST_SUPPORT: SpecialistBlock[] = [
  {
    index: '01',
    title: 'Marketplace Preparation & Logistics Options',
    subtitle: 'Destination-ready labelling, customs & compliant settlement',
    points: [
      'Product labelling and Amazon FBA preparation, when required specifications and partner arrangements are established.',
      'Customs documentation coordination aligned with UAE and GCC import procedures.',
      'Payment collection or settlement coordination only under an agreed, documented and compliant payment arrangement.',
    ],
  },
  {
    index: '02',
    title: 'China Visit & On-the-Ground Assistance',
    subtitle: 'Structured itineraries & accompanied factory evaluations',
    points: [
      'Coordinate supplier meetings, factory visits, sampling, and practical quality-check itineraries.',
      'Provide assistance with travel scheduling, local hospitality, and accompanied visits where agreed.',
      'Offer administrative guidance or referrals relating to local accommodation and residence procedures; approvals remain with the relevant authorities.',
    ],
  },
  {
    index: '03',
    title: 'Private Label & Packaging Solutions',
    subtitle: 'Retail-ready presentation built for wholesale & store shelves',
    points: [
      'Custom logos and packaging designed to help your products stand out in competitive retail and wholesale channels.',
      'Direct factory connections to produce branded cartons, sleeves, and product markings at competitive prices.',
    ],
  },
  {
    index: '04',
    title: 'Develop Your Product from Scratch',
    subtitle: 'Prototype-to-launch manufacturing coordination',
    points: [
      'Bringing a new product to life is challenging—we guide you through supplier engineering, prototyping, sampling iterations, and commercial launch.',
      'Grounded in UAE market relevance so new concepts are commercially viable before tooling and bulk production.',
    ],
  },
];
