export interface ProductRecord {
  slug: string;
  name: string;
  category: "Industrial" | "Commercial";
  short: string;
  description: string;
  features?: string[];
  applications?: string[];
  images: string[]; // relative to /public
}

// Public facing simple alias used in UI components
export type Product = ProductRecord;

// Helper to build image paths (raw directory names kept to match existing public folder)
const i = (p: string) => p; // identity for readability

export const industrialProducts: ProductRecord[] = [
  {
    slug: "polycarbonate-labels-pc-stickers",
    name: "Polycarbonate Labels (PC Stickers)",
    category: "Industrial",
    short: "Durable, chemical & abrasion‑resistant identification labels.",
    description:
      "Engineered polycarbonate overlays and label solutions offering outstanding durability, clarity and resistance to chemicals, abrasion and UV exposure. Ideal for demanding industrial and electronics environments where longevity and aesthetics both matter.",
    features: [
      "High impact & abrasion resistance",
      "Chemical & solvent tolerance",
      "Excellent print fidelity",
      "Back / sub-surface printing options",
    ],
    applications: [
      "Control panels",
      "Membrane interfaces",
      "Electronics",
      "Industrial machinery",
    ],
    images: [
      i(
        "/industrial/Polycarbonate Labels (PC Stickers)/polycarbonate-labels-pc-stickers-1.jpg"
      ),
      i(
        "/industrial/Polycarbonate Labels (PC Stickers)/polycarbonate-labels-pc-stickers-2.jpg"
      ),
      i(
        "/industrial/Polycarbonate Labels (PC Stickers)/polycarbonate-labels-pc-stickers-3.jpg"
      ),
    ],
  },
  {
    slug: "self-adhesive-labels",
    name: "Self Adhesive Labels",
    category: "Industrial",
    short: "Versatile pressure‑sensitive labeling for broad surfaces.",
    description:
      "Custom self‑adhesive labels produced in multiple material & adhesive combinations for packaging, compliance, branding and workflow identification.",
    images: [
      i("/industrial/Self Adhesive Labels/self-adhesive-labels-1.jpg"),
      i("/industrial/Self Adhesive Labels/self-adhesive-labels-2.jpg"),
      i("/industrial/Self Adhesive Labels/self-adhesive-labels-3.jpg"),
    ],
  },
  {
    slug: "esd-labels",
    name: "ESD Labels",
    category: "Industrial",
    short:
      "Static‑safe traceability & warning labels for sensitive assemblies.",
    description:
      "ESD compliant labeling for electronics manufacturing, ensuring safe identification & process control in static‑critical zones.",
    images: [
      i("/industrial/ESD Labels/esd-labels-isd-1.jpg"),
      i("/industrial/ESD Labels/esd-labels-isd-2.jpg"),
      i("/industrial/ESD Labels/esd-labels-isd-4.jpg"),
    ],
  },
  {
    slug: "bar-code-labels",
    name: "Bar Code Labels",
    category: "Industrial",
    short: "High contrast, precision barcoding for logistics & assets.",
    description:
      "Barcode & data capture label solutions optimized for scan accuracy, durability and integration with enterprise inventory systems.",
    images: [
      i("/industrial/Bar Code Labels/bar-code-labels-isd-1.jpg"),
      i("/industrial/Bar Code Labels/bar-code-labels-isd-2.jpg"),
    ],
  },
  {
    slug: "roll-form-labels",
    name: "Roll Form Labels",
    category: "Industrial",
    short: "High‑volume continuous roll production for automation.",
    description:
      "Roll format labels manufactured for automated application lines, offering consistency, low waste and throughput efficiency.",
    images: [
      i("/industrial/Roll From Labels/roll-form-labels-1.jpg"),
      i("/industrial/Roll From Labels/roll-form-labels-2.jpg"),
      i("/industrial/Roll From Labels/roll-form-labels-3.jpg"),
    ],
  },
  {
    slug: "high-temperature-labels",
    name: "High Temperature Labels",
    category: "Industrial",
    short: "Heat‑resistant identification up to extreme process temps.",
    description:
      "Specialty materials & coatings enabling labels to survive elevated thermal cycles in manufacturing & assembly operations.",
    images: [
      i("/industrial/High Temperature Labels/high-temperature-labels-1.jpg"),
      i("/industrial/High Temperature Labels/high-temperature-labels-2.jpg"),
      i("/industrial/High Temperature Labels/high-temperature-labels-3.jpg"),
    ],
  },
  {
    slug: "key-pad-labels",
    name: "Key Pad Labels",
    category: "Industrial",
    short: "Tactile & durable interface / membrane switch graphics.",
    description:
      "Precision die‑cut keypad & interface graphics with hard‑coat, embossing & back‑lighting options for equipment control surfaces.",
    images: [
      i("/industrial/Key Pad Labels/key-pad-labels-1.jpg"),
      i("/industrial/Key Pad Labels/key-pad-labels-2.jpg"),
    ],
  },
  {
    slug: "dome-labels",
    name: "Dome Labels",
    category: "Industrial",
    short: "3D polyurethane domed branding elements with depth.",
    description:
      "Crystal clear domed labels providing a premium dimensional branding effect with UV & scratch resistance.",
    images: [
      i("/industrial/Dome Labels/dome-labels-1.jpg"),
      i("/industrial/Dome Labels/dome-labels-2.jpg"),
    ],
  },
  {
    slug: "automotive-labels",
    name: "Automotive Labels",
    category: "Industrial",
    short: "OEM grade identification for harsh vehicular environments.",
    description:
      "Automotive compliance & durability focused label constructions suitable for under‑hood, cabin and component marking.",
    images: [
      i("/industrial/Automotive Labels/automotive-labels-1.jpg"),
      i("/industrial/Automotive Labels/automotive-labels-2.jpg"),
    ],
  },
  {
    slug: "security-labels",
    name: "Security Labels",
    category: "Industrial",
    short: "Tamper evident & anti‑counterfeit authentication media.",
    description:
      "Security labeling utilizing void patterns, destructible stocks and serialization to protect brand & asset integrity.",
    images: [i("/industrial/Security Labels/security-labels-1.jpg")],
  },
  {
    slug: "polyester-labels",
    name: "Polyester Labels",
    category: "Industrial",
    short: "Chemical & tear resistant film labels for longevity.",
    description:
      "Industrial polyester substrates delivering dimensional stability, print clarity and chemical resistance indoors & out.",
    images: [
      i("/industrial/Polyster Labels/polyester-labels-1.jpg"),
      i("/industrial/Polyster Labels/polyester-labels-2.jpg"),
    ],
  },
  {
    slug: "warning-caution-labels",
    name: "Warning & Caution Labels",
    category: "Industrial",
    short: "ANSI compliant safety communication markers.",
    description:
      "High visibility hazard & instruction labels improving safety compliance across facilities and equipment fleets.",
    images: [
      "/industrial/Warning and Caution Labels/warning-caution-labels-1.jpg",
    ],
  },
  {
    slug: "aluminum-labels",
    name: "Aluminum Labels",
    category: "Industrial",
    short: "Metal substrate identification with professional finish.",
    description:
      "Anodized & coated aluminum label and plate solutions combining ruggedness with crisp engraving or print.",
    images: [
      i("/industrial/Aluminum Labels/aluminum-labels-1.jpg"),
      i("/industrial/Aluminum Labels/aluminum-labels-2.jpg"),
    ],
  },
  {
    slug: "insulator-gaskets",
    name: "Insulator & Gaskets",
    category: "Industrial",
    short: "Custom die‑cut thermal & electrical isolation components.",
    description:
      "Precision converted insulation and gasket components for electrical panels, electronics and mechanical assemblies.",
    images: [
      i("/industrial/Insulator and Gaskets/insulator-and-gaskets-1.jpg"),
      i("/industrial/Insulator and Gaskets/insulator-and-gaskets-2.jpg"),
    ],
  },
  {
    slug: "safety-signs",
    name: "Safety Signs",
    category: "Industrial",
    short: "Facility visual safety & regulatory compliance media.",
    description:
      "Industrial & workplace safety signage produced with durable inks and substrates for indoor/outdoor longevity.",
    images: [
      i("/industrial/Safety Signs/safety-signs-1.jpg"),
      i("/industrial/Safety Signs/safety-signs-2.jpg"),
    ],
  },
  {
    slug: "laser-marking-labels",
    name: "Laser Marking Labels",
    category: "Industrial",
    short: "High contrast substrates optimized for laser imaging.",
    description:
      "Laser receptive label constructions enabling sharp, permanent identification & traceability codes.",
    images: [
      i("/industrial/Laser marking Labels/laser-marking-labels-1.jpg"),
      i("/industrial/Laser marking Labels/laser-marking-labels-2.jpg"),
    ],
  },
  {
    slug: "branding-solutions",
    name: "Branding Solutions",
    category: "Industrial",
    short: "Holistic promotional & visual identity label systems.",
    description:
      "End‑to‑end branded label, emblem & graphic solutions reinforcing product and corporate identity cohesion.",
    images: [
      i("/industrial/Branding Solutions/branding-solutions-1.jpg"),
      i("/industrial/Branding Solutions/branding-solutions-2.jpg"),
    ],
  },
];

export const commercialProducts: ProductRecord[] = [
  {
    slug: "appointment-cards",
    name: "Appointment Cards",
    category: "Commercial",
    short: "Branded scheduling & retention handouts.",
    description:
      "Custom appointment cards supporting brand recall, clarity and return rate improvement for service & professional sectors.",
    images: ["/Commercial/appointment_cards.jpg"],
  },
  {
    slug: "banners",
    name: "Banners",
    category: "Commercial",
    short: "Large format impact graphics.",
    description:
      "Durable indoor / outdoor promotional banners for campaigns, launches and events.",
    images: ["/Commercial/banners.jpg"],
  },
  {
    slug: "brochures",
    name: "Brochures",
    category: "Commercial",
    short: "Multi‑panel marketing narratives.",
    description:
      "High resolution folded collateral communicating product / service value propositions.",
    images: ["/Commercial/brochures_big.jpg"],
  },
  {
    slug: "business-card-magnets",
    name: "Business Card Magnets",
    category: "Commercial",
    short: "Persistent magnetic brand presence.",
    description:
      "Magnet backed business format for long‑term visibility on metal surfaces.",
    images: ["/Commercial/business_card_magnets.jpg"],
  },
  {
    slug: "counter-cards",
    name: "Counter Cards",
    category: "Commercial",
    short: "Point‑of‑sale mini displays.",
    description:
      "Sturdy tabletop promotional displays driving micro‑conversions at service points.",
    images: ["/Commercial/counter_cards.jpg"],
  },
  {
    slug: "door-hangers",
    name: "Door Hangers",
    category: "Commercial",
    short: "Localized physical outreach.",
    description:
      "Die‑cut hanging pieces for targeted geographic marketing & notices.",
    images: ["/Commercial/door_hangers.jpg"],
  },
  {
    slug: "flyers",
    name: "Flyers",
    category: "Commercial",
    short: "High volume campaign sheets.",
    description:
      "Cost‑effective distribution media for offers, events & brand messaging.",
    images: ["/Commercial/flyers.jpg"],
  },
  {
    slug: "greeting-cards",
    name: "Greeting Cards",
    category: "Commercial",
    short: "Branded seasonal / relationship touchpoints.",
    description:
      "Custom greeting formats enabling premium personalization & retention.",
    images: ["/Commercial/greeting_cards.jpg"],
  },
  {
    slug: "letterhead",
    name: "Letterhead",
    category: "Commercial",
    short: "Official branded correspondence.",
    description:
      "Corporate stationery reinforcing identity & consistency across communications.",
    images: ["/Commercial/letterhead.jpg"],
  },
  {
    slug: "mailing-labels",
    name: "Mailing Labels",
    category: "Commercial",
    short: "Address & logistics clarity.",
    description:
      "Efficient, legible addressing & distribution label solutions for operations & marketing.",
    images: ["/Commercial/mailing_labels.jpg"],
  },
  {
    slug: "newsletters",
    name: "Newsletters",
    category: "Commercial",
    short: "Periodic stakeholder publication.",
    description:
      "Printed newsletter production supporting engagement & information dissemination.",
    images: ["/Commercial/newsletters.jpg"],
  },
  {
    slug: "posters",
    name: "Posters",
    category: "Commercial",
    short: "Visual promotional surfaces.",
    description:
      "Large format vivid posters for retail, event and campaign amplification.",
    images: ["/Commercial/posters.jpg"],
  },
  {
    slug: "rack-cards",
    name: "Rack Cards",
    category: "Commercial",
    short: "Compact vertical info formats.",
    description:
      "Travel, tourism & service sector rack collateral for quick scan value messaging.",
    images: ["/Commercial/rack_cards.jpg"],
  },
  {
    slug: "stickers",
    name: "Stickers",
    category: "Commercial",
    short: "Brandable adhesive mini assets.",
    description:
      "Promotional and packaging stickers for identity reinforcement & loyalty.",
    images: ["/Commercial/stickers.jpg"],
  },
  {
    slug: "thank-you-cards",
    name: "Thank You Cards",
    category: "Commercial",
    short: "Retention & appreciation collateral.",
    description:
      "Gratitude messaging vehicle improving customer lifetime perception.",
    images: ["/Commercial/thank_you_cards.jpg"],
  },
  {
    slug: "window-clings",
    name: "Window Clings",
    category: "Commercial",
    short: "Reusable glass surface promotion.",
    description:
      "Static / low‑tac window media for seasonal or rotating campaigns.",
    images: ["/Commercial/window_clings.jpg"],
  },
  {
    slug: "yard-signs",
    name: "Yard Signs",
    category: "Commercial",
    short: "Outdoor stake campaign media.",
    description:
      "Weather‑durable corrugated signage for events, political, real estate & directional usage.",
    images: ["/Commercial/yard_signs.jpg"],
  },
];

export const allProducts: ProductRecord[] = [
  ...industrialProducts,
  ...commercialProducts,
];

export const findProduct = (slug: string) =>
  allProducts.find((p) => p.slug === slug);
