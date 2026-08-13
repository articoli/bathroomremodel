export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: number;
  benefits: string[];
  process: { title: string; text: string }[];
  whyChoose: string[];
  faqs: { q: string; a: string }[];
  body: string[];
  relatedServices: string[];
  relatedPosts: string[];
};

export const services: Service[] = [
  {
    slug: "complete-bathroom-renovations",
    name: "Complete Bathroom Renovations",
    shortName: "Complete Renovations",
    tagline: "Full-scale bathroom transformations, handled end to end",
    description:
      "From demo to finishing touches, our complete bathroom renovation service delivers a brand-new bathroom designed around how you live in Plano, Texas.",
    image: 5825561,
    benefits: [
      "Single point of contact for the entire project",
      "Custom layouts that maximize space and storage",
      "High-quality materials and professional workmanship",
      "Clear timeline and transparent, fixed pricing",
      "Licensed, insured, and local to Plano",
    ],
    process: [
      {
        title: "Consultation & Measurements",
        text: "We visit your home, measure every inch, and listen to how you use your bathroom so the design fits your routine.",
      },
      {
        title: "Design & Detailed Quote",
        text: "We present layout options, material recommendations, and a fixed-price quote with no surprise costs.",
      },
      {
        title: "Demo & Construction",
        text: "Our crew removes the old bathroom, updates plumbing and electrical where needed, and rebuilds to plan.",
      },
      {
        title: "Final Walkthrough",
        text: "We inspect every detail with you, fix anything you flag, and hand over a bathroom ready to enjoy.",
      },
    ],
    whyChoose: [
      "We do the work ourselves instead of subcontracting blind",
      "Decades of combined remodeling experience in North Texas",
      "Clean job sites and daily communication via text and photos",
      "We respect your budget and your home",
    ],
    faqs: [
      {
        q: "How long does a complete bathroom renovation take?",
        a: "A typical full renovation in Plano takes 3 to 4 weeks, depending on size and scope. See our week-by-week timeline to know what to expect. We give you a detailed schedule before we start and keep you updated every day.",
      },
      {
        q: "Do I need to leave my home during the renovation?",
        a: "No. Your bathroom will be out of service during construction, but the rest of your home stays usable. We keep the work area contained and clean up every day.",
      },
      {
        q: "Can you work within my budget?",
        a: "Yes. We build our quotes around your budget and show you exactly where your money goes. We will suggest smart upgrades and honest alternatives where it counts.",
      },
    ],
    body: [
      "A complete bathroom renovation is the best way to turn a tired, outdated space into the most relaxing room in your [Plano home](/). Instead of patching problems one at a time, we remove the old bathroom down to the studs and rebuild it with modern plumbing, efficient fixtures, and finishes that match the way you actually live.",
      "Every renovation starts with understanding how you use the room. Do you need [double sinks and custom vanities](/custom-vanity-and-storage) for busy mornings? A larger shower for the family? A soaking tub to unwind after work? Your answers shape the layout, and we handle the rest, including demolition, plumbing rough-in, electrical, drywall, tile flooring, fixtures, and final cleanup.",
      "Because we're local to Plano, we know North Texas homes well: the builders, the common layouts, and the quirks that come with them. We also know how to protect your home while we work. Dust barriers, covered floors, daily cleanup, and respectful crews are all part of the job.",
      "The result is a bathroom that adds real value to your home, plus a remodeling experience you will actually enjoy telling your neighbors about. If you are weighing a full renovation against a lighter refresh, our guide to the [cost of a bathroom remodel in Plano](/cost-of-bathroom-remodel-in-plano-tx) is a good place to start.",
    ],
    relatedServices: ["tile-flooring-installation", "custom-vanity-and-storage", "bathroom-lighting-and-ventilation"],
    relatedPosts: ["cost-of-bathroom-remodel-in-plano-tx", "bathroom-remodel-timeline", "how-to-hire-bathroom-remodeler-plano", "bathroom-remodel-increase-home-value"],
  },
  {
    slug: "tub-to-shower-conversion",
    name: "Tub to Shower Conversion",
    shortName: "Tub to Shower",
    tagline: "Trade your old tub for a modern, low-maintenance shower",
    description:
      "Convert an unused bathtub into a spacious, accessible walk-in shower that's easier to use, easier to clean, and better for your Plano home.",
    image: 6899351,
    benefits: [
      "Opens up the bathroom and adds usable floor space",
      "Much easier to get in and out of than a tub",
      "Low-maintenance surfaces that are simple to clean",
      "Removes a water-hazard risk, especially for older homeowners",
      "Completely customizable with tile, fixtures, and glass",
    ],
    process: [
      {
        title: "Tub Removal & Site Prep",
        text: "We remove the old tub safely, check the plumbing, and prep the space for your new shower base.",
      },
      {
        title: "Shower Pan & Waterproofing",
        text: "A solid shower pan goes in with a fully waterproofed system so leaks never reach your subfloor.",
      },
      {
        title: "Tile, Fixtures & Glass",
        text: "We install your chosen tile, shower valve, fixtures, and a clean glass enclosure.",
      },
      {
        title: "Seal & Final Inspection",
        text: "Everything is sealed, caulked, and tested. We walk through the finished shower with you.",
      },
    ],
    whyChoose: [
      "Waterproofing done right the first time",
      "Glass and tile options for every budget",
      "Fast turnaround, most conversions finish in under two weeks",
      "Licensed plumbing included in every quote",
    ],
    faqs: [
      {
        q: "How long does a tub to shower conversion take?",
        a: "Most conversions take 5 to 10 working days. The exact timeline depends on tile choices and whether plumbing needs to move.",
      },
      {
        q: "Can you convert a tub to shower without replacing the tile floor?",
        a: "Usually, yes. If your floor tile is in good shape we can work around it, though many homeowners choose to extend the tile into the shower for a seamless look.",
      },
      {
        q: "Will the shower leak?",
        a: "No. We use a fully waterproofed shower system, including a solid pan, waterproof membrane behind the walls, and proper sealing. Every install is leak-tested before we finish.",
      },
    ],
    body: [
      "That bathtub you never use is taking up prime real estate in your bathroom. A tub to shower conversion replaces it with a walk-in shower that's safer, easier to clean, and far more useful for most Plano families. It's one of the most popular upgrades we install at [Eco Bathroom Remodel](/) in Plano.",
      "The conversion opens up the room visually and physically. With the bulky tub gone, you gain floor space, and a curbless or low-threshold design makes the shower accessible for kids, aging parents, and anyone with limited mobility. It's one of the most popular upgrades we install, and it often costs less than a full renovation.",
      "Safety is where we earn our reputation. A shower is only as good as its waterproofing, and we build every one with a solid pan, a waterproof membrane, and proper sealing around fixtures and glass. Water belongs in the shower, not in your walls or under your floors. A [frameless glass enclosure](/glass-enclosure-installations) is the perfect finish for most conversions.",
      "We will help you pick from tiled shower walls, premium acrylic panels, frameless glass, rainfall heads, built-in seating, and niche shelving, all designed exactly for your Plano home. Curious if a conversion is right for you? Read our breakdown of the [benefits of tub to shower conversions](/tub-to-shower-conversion-benefits).",
    ],
    relatedServices: ["shower-installations-replacements", "glass-enclosure-installations", "accessibility-modifications"],
    relatedPosts: ["tub-to-shower-conversion-benefits", "small-bathroom-remodel-ideas", "walk-in-shower-vs-bathtub"],
  },
  {
    slug: "shower-installations-replacements",
    name: "Shower Installations & Replacements",
    shortName: "Shower Installations",
    tagline: "New showers and full replacements built to last",
    description:
      "Upgrade a tired shower or install a brand-new one with premium tile, waterproofing, and fixtures built for daily North Texas living.",
    image: 7005476,
    benefits: [
      "Brand-new shower built with modern waterproofing",
      "Premium tile, stone, and fixture options",
      "Replacements that stop leaks and hidden mold",
      "Custom sizes for awkward or angled spaces",
      "Increased home resale value",
    ],
    process: [
      {
        title: "Assessment",
        text: "We inspect the existing shower and the wall and floor structure to spot moisture damage before anything new goes in.",
      },
      {
        title: "Removal & Prep",
        text: "Old tile and backing are removed down to clean structure so we can waterproof and build fresh.",
      },
      {
        title: "Build & Tile",
        text: "We set the pan, waterproof the walls, and install your tile with precise cuts and straight grout lines.",
      },
      {
        title: "Fixtures & Finish",
        text: "Glass, shower head, valve, and trim go in, and we test everything before handing it over.",
      },
    ],
    whyChoose: [
      "Every shower is leak-tested before completion",
      "In-house tile installers, not random subcontractors",
      "We repair underlying moisture problems instead of hiding them",
      "Honest advice on materials that fit your budget",
    ],
    faqs: [
      {
        q: "How much does a shower replacement cost?",
        a: "Pricing depends on size, tile choice, and whether plumbing moves. On average, Plano homeowners spend $6,000 to $14,000. We provide fixed quotes with no surprises.",
      },
      {
        q: "Can you fix a leaking shower without a full replacement?",
        a: "Sometimes. If the leak comes from a cracked grout line or failed seal, a repair may work. If the waterproofing behind the tile has failed, replacement is the lasting fix. We will tell you honestly which one you need.",
      },
      {
        q: "How long does a shower replacement take?",
        a: "Most replacements take about one to two weeks, including waterproofing, tile, and fixtures.",
      },
    ],
    body: [
      "If your shower is leaking, grout is cracking, or the water pressure has quietly dropped, it may be time for a replacement. [Eco Bathroom Remodel](/) in Plano installs and replaces showers with a level of craft that makes the room feel brand new.",
      "The difference between a good shower and a great one is what's behind the tile. We build every shower with a proper slope to the drain, a fully waterproofed pan, and a waterproof membrane on the walls. That foundation is why our showers still look and perform great years later. If you are replacing a failed install, our article on [common bathroom remodel mistakes](/common-bathroom-remodel-mistakes) explains what to look for.",
      "Design choices matter too. We will work with you on tile size and layout, accent bands, niches for your shampoo, built-in benches, and [lighting](/bathroom-lighting-and-ventilation) that turns a routine shower into a daily ritual. Our team handles every trade in-house, so there's no finger-pointing between subcontractors, just one accountable crew.",
      "Whether you're replacing a failing unit or installing your dream shower from scratch, we deliver a waterproof, beautiful, and durable result. Finish it off with a custom glass enclosure for a clean, modern look.",
    ],
    relatedServices: ["tub-to-shower-conversion", "glass-enclosure-installations", "plumbing-and-fixture-upgrades"],
    relatedPosts: ["tub-to-shower-conversion-benefits", "bathroom-lighting-guide", "walk-in-shower-vs-bathtub"],
  },
  {
    slug: "bathtub-installations-replacements",
    name: "Bathtub Installations & Replacements",
    shortName: "Bathtubs",
    tagline: "Soaking tubs and replacements that make bath time the best part of the day",
    description:
      "Install a new bathtub or replace a dated, worn-out tub with a modern soaking or claw-foot design for your Plano home.",
    image: 6957081,
    benefits: [
      "Choose from soaking, freestanding, alcove, and claw-foot tubs",
      "Eliminate chipped, stained, or leaking tubs",
      "Proper plumbing and drain connections every time",
      "Tub and surround matched to your style",
      "Family-friendly options for kids and pets",
    ],
    process: [
      {
        title: "Consultation",
        text: "We help you choose the right tub style, size, and material for your space and your soaking habits.",
      },
      {
        title: "Removal",
        text: "The old tub comes out cleanly, and we verify the floor and plumbing are ready.",
      },
      {
        title: "Installation",
        text: "The new tub is set, leveled, connected to the drains and supply lines, and anchored properly.",
      },
      {
        title: "Surround & Finish",
        text: "We install tile or panels around the tub and finish all edges with clean, watertight caulking.",
      },
    ],
    whyChoose: [
      "Tubs set dead-level on solid foundations",
      "Proper trap and drain connections, inspected and tested",
      "Design guidance from experienced remodelers",
      "Clean, dust-free installation process",
    ],
    faqs: [
      {
        q: "Which tub material is best?",
        a: "Acrylic tubs are lightweight, warm, and budget-friendly. Cast-iron tubs hold heat longer and feel solid but are heavier. We will recommend based on your floor structure, budget, and how you will use the tub.",
      },
      {
        q: "Can I install a freestanding tub in my existing bathroom?",
        a: "In most cases yes, but floor strength and plumbing access matter. We inspect the subfloor and existing plumbing first and let you know exactly what's needed.",
      },
      {
        q: "How long does a tub replacement take?",
        a: "A straightforward tub swap takes 2 to 4 days. If we are also installing new tile surround or moving plumbing, add a few days.",
      },
    ],
    body: [
      "Nothing says escape quite like a long soak in a beautiful tub. Whether you're replacing a dated builder's tub or adding a statement soaking tub, our installation team at [Eco Bathroom Remodel](/) makes the process effortless.",
      "We start by understanding how you bathe. If you're 6'4\", we won't sell you a compact garden tub. If your kids live in the bath, we will recommend a durable, easy-to-clean acrylic. The right tub is the one that fits your body, your space, and your routine, and we help you find it.",
      "Installation quality is what keeps a tub beautiful for decades. We set tubs level on a solid base, connect the trap and supply lines correctly with [licensed plumbing work](/plumbing-and-fixture-upgrades), and surround the tub with tile or panels that shed water instead of absorbing it.",
      "From classic claw-foot to modern freestanding, alcove to walk-in, we install and replace bathtubs across Plano and the surrounding area. If you are designing a spa-style retreat, pair your new tub with a [luxury bathroom upgrade](/luxury-bathroom-upgrades).",
    ],
    relatedServices: ["luxury-bathroom-upgrades", "plumbing-and-fixture-upgrades", "accessibility-modifications"],
    relatedPosts: ["small-bathroom-remodel-ideas", "water-saving-bathroom-upgrades"],
  },
  {
    slug: "glass-enclosure-installations",
    name: "Glass Enclosure Installations",
    shortName: "Glass Enclosures",
    tagline: "Frameless glass showers that make your bathroom feel open and bright",
    description:
      "Custom frameless and framed glass enclosures installed with precision for a clean, modern look in Plano bathrooms.",
    image: 7031840,
    benefits: [
      "Frameless designs that open up the whole room",
      "Custom cut to fit your exact shower footprint",
      "Tempered safety glass on every install",
      "Watertight channels and proper door hardware",
      "Easier to clean than shower curtains or tracked frames",
    ],
    process: [
      {
        title: "Measure & Design",
        text: "We measure your opening precisely and recommend glass thickness, door style, and hardware.",
      },
      {
        title: "Fabrication",
        text: "Your enclosure is fabricated to your exact measurements, no gappy stock sizes.",
      },
      {
        title: "Installation",
        text: "Glass is set on a level channel or curb, doors are hung and adjusted, and everything is sealed.",
      },
      {
        title: "Clean Up",
        text: "We remove all packaging, clean the glass, and leave your bathroom spotless.",
      },
    ],
    whyChoose: [
      "Custom-sized glass, never off-the-shelf compromises",
      "Tempered safety glass for peace of mind",
      "Watertight sealing that prevents leaks and mildew",
      "Professional handling of heavy glass panels",
    ],
    faqs: [
      {
        q: "Frameless or framed glass?",
        a: "Frameless looks cleaner and more premium and is easier to clean, but costs more. Framed enclosures are budget-friendly and very durable. We will show you both and let you decide.",
      },
      {
        q: "How long does installation take?",
        a: "Most glass enclosure installations are completed in a single day after the glass is fabricated, which usually takes 1 to 2 weeks.",
      },
      {
        q: "Does the glass stay clean?",
        a: "Tempered glass resists buildup, and a simple squeegee keeps it crystal clear. We can also recommend easy-to-clean coatings.",
      },
    ],
    body: [
      "The right glass enclosure transforms a shower from a cave into a showpiece. Frameless glass lets light flow through the entire bathroom, makes the space feel larger, and shows off the tile work behind it.",
      "We fabricate every panel to your exact opening, so the glass fits the shower instead of forcing a standard size to fit your space. Hinged doors, sliding panels, or fixed screens, we install what suits your layout. Pair a new enclosure with a [shower installation or replacement](/shower-installations-replacements) for the full effect.",
      "Tempered safety glass is standard on every project we take on at [Eco Bathroom Remodel](/) in Plano. Each panel is cut, polished, and installed with precision, and all channels and joints are sealed watertight to keep moisture where it belongs.",
      "Upgrade your Plano shower with a glass enclosure that looks stunning on day one and still shines years later. The tile you show off matters too, so browse our [guide to choosing bathroom tiles](/how-to-choose-bathroom-tiles).",
    ],
    relatedServices: ["shower-installations-replacements", "tub-to-shower-conversion", "tile-flooring-installation"],
    relatedPosts: ["how-to-choose-bathroom-tiles", "small-bathroom-remodel-ideas"],
  },
  {
    slug: "tile-flooring-installation",
    name: "Tile Flooring Installation",
    shortName: "Tile Flooring",
    tagline: "Beautiful, durable tile floors laid with precision",
    description:
      "Porcelain, ceramic, and stone tile flooring installed for Plano bathrooms, waterproof, durable, and gorgeous.",
    image: 8583810,
    benefits: [
      "Waterproof flooring that handles daily spills",
      "Heated floors available for cold Texas mornings",
      "Wide range of tile, layout, and grout options",
      "Precise cuts, straight lines, and level surfaces",
      "Long-lasting installation backed by our warranty",
    ],
    process: [
      {
        title: "Subfloor Prep",
        text: "We check and prepare the subfloor so your tile has a rock-solid base that won't crack.",
      },
      {
        title: "Layout Planning",
        text: "We map the tile layout to minimize cuts and keep lines straight through doorways.",
      },
      {
        title: "Tile Setting",
        text: "Tile is set with the right mortar and spacing for the material and your traffic.",
      },
      {
        title: "Grout & Seal",
        text: "Grout is applied, cleaned, and sealed to resist staining and moisture.",
      },
    ],
    whyChoose: [
      "Meticulous subfloor prep that prevents cracked tile",
      "Tile installers who specialize in bathrooms",
      "Honest guidance on tile size and grout color",
      "Cleanup is part of the job, always",
    ],
    faqs: [
      {
        q: "What's the best tile for a bathroom floor?",
        a: "Porcelain is the most popular choice. It's denser than ceramic, more water-resistant, and comes in styles that mimic wood and stone. Large-format tile means fewer grout lines and an easier-to-clean floor.",
      },
      {
        q: "How long does tile flooring take to install?",
        a: "A typical bathroom floor takes 2 to 4 days including subfloor prep, setting, grouting, and sealing.",
      },
      {
        q: "Can you install heated bathroom floors?",
        a: "Yes. Electric radiant heating is a popular add-on for Plano bathrooms, and it's easiest to install during new tile work.",
      },
    ],
    body: [
      "Tile flooring is the foundation of a great bathroom. It needs to be waterproof, durable, and beautiful, and installing it well is a craft. Our team at [Eco Bathroom Remodel](/) sets tile for Plano homeowners with the precision that keeps floors straight, level, and crack-free for decades.",
      "We start below the surface. A level, stable subfloor is the difference between a floor that lasts and one that cracks. Once the base is right, we plan the layout to minimize awkward cuts and keep the pattern flowing naturally through the room.",
      "From large-format porcelain that mimics natural stone to classic subway layouts, hexagonal accents, and heated floors for brisk mornings, we help you choose tile that fits your style and your budget. Still deciding between options? Our [guide to choosing bathroom tiles](/how-to-choose-bathroom-tiles) walks you through it.",
      "Grout color, spacer size, and sealing all affect how your floor looks and wears. We handle every detail, leaving you with a floor that's easy to clean and beautiful to walk on. New tile pairs beautifully with a [custom vanity](/custom-vanity-and-storage).",
    ],
    relatedServices: ["glass-enclosure-installations", "custom-vanity-and-storage", "complete-bathroom-renovations"],
    relatedPosts: ["how-to-choose-bathroom-tiles", "common-bathroom-remodel-mistakes"],
  },
  {
    slug: "custom-vanity-and-storage",
    name: "Custom Vanity and Storage Solutions",
    shortName: "Custom Vanities",
    tagline: "Vanities and storage designed around your stuff",
    description:
      "Custom vanities, medicine cabinets, linen closets, and storage built to fit your space and declutter your Plano bathroom.",
    image: 5502253,
    benefits: [
      "Vanities built to your exact measurements",
      "Smart storage for toiletries, towels, and cleaning supplies",
      "Quartz, granite, and solid-surface countertops",
      "Double-sink layouts for busy households",
      "Adds function and value to the room",
    ],
    process: [
      {
        title: "Space Analysis",
        text: "We measure your bathroom and audit what you need to store.",
      },
      {
        title: "Design & Materials",
        text: "We design the vanity or storage unit and help you pick cabinetry, counters, and hardware.",
      },
      {
        title: "Build & Install",
        text: "Custom units are fabricated and installed to fit your space precisely.",
      },
      {
        title: "Finish & Detail",
        text: "Counters, sinks, plumbing, and hardware are installed and tested.",
      },
    ],
    whyChoose: [
      "Built-to-fit solutions for awkward spaces",
      "Material and finish options for every budget",
      "In-house fabrication and installation",
      "Storage advice from remodelers, not showroom salespeople",
    ],
    faqs: [
      {
        q: "How much does a custom vanity cost?",
        a: "Custom vanities typically range from $1,500 to $5,000 depending on size, cabinetry, and countertop material. We will give you options at multiple price points.",
      },
      {
        q: "Custom or stock vanity?",
        a: "If your space is standard-sized, a quality stock vanity may work great and cost less. If you have an unusual layout or specific storage needs, custom is worth it. We will be honest about which fits you.",
      },
      {
        q: "Can you match the vanity to existing cabinetry?",
        a: "Yes. We can match wood tones and styles to existing cabinets in the rest of your home for a cohesive look.",
      },
    ],
    body: [
      "A beautiful bathroom falls apart when there's no place for anything. At [Eco Bathroom Remodel](/) in Plano, we design custom storage around the things you actually own.",
      "We measure your space, then design a vanity that fits it perfectly. Deep drawers for hairdryers and styling tools, pull-out organizers for toiletries, a linen tower for towels, or a wall niche where a shelf just works. Every inch earns its keep.",
      "Countertops make the vanity. We offer quartz, granite, and solid-surface options in colors that complement your [tile flooring](/tile-flooring-installation), with undermount sinks for a sleek, easy-to-clean surface.",
      "Whether you need a single-sink space-saver or a double vanity to end the morning traffic jam, we build it to fit your Plano home. A new vanity is often the centerpiece of a [complete bathroom renovation](/complete-bathroom-renovations).",
    ],
    relatedServices: ["complete-bathroom-renovations", "tile-flooring-installation", "plumbing-and-fixture-upgrades"],
    relatedPosts: ["small-bathroom-remodel-ideas", "cost-of-bathroom-remodel-in-plano-tx", "bathroom-countertop-materials-guide"],
  },
  {
    slug: "plumbing-and-fixture-upgrades",
    name: "Plumbing and Fixture Upgrades",
    shortName: "Plumbing & Fixtures",
    tagline: "Modern fixtures and reliable plumbing that feel better and use less",
    description:
      "Upgrade faucets, shower systems, toilets, and supply lines with efficient fixtures installed by licensed Plano plumbers.",
    image: 6653889,
    benefits: [
      "Water-efficient fixtures that lower utility bills",
      "Luxury shower systems with rainfall heads and hand showers",
      "Modern faucets and finishes that update the whole room",
      "Licensed plumbing for leaks, valves, and rerouting",
      "Immediate feel: better pressure, better looks",
    ],
    process: [
      {
        title: "Assessment",
        text: "We evaluate your current plumbing, water pressure, and fixture condition.",
      },
      {
        title: "Selection",
        text: "We recommend fixtures that match your style, budget, and water efficiency goals.",
      },
      {
        title: "Installation",
        text: "Old fixtures are removed and new ones are installed with clean, code-compliant connections.",
      },
      {
        title: "Testing",
        text: "Every supply line, drain, and valve is tested for leaks and proper pressure.",
      },
    ],
    whyChoose: [
      "Licensed plumbers handle every fixture project",
      "Honest recommendations, no upsells you don't need",
      "Water-saving advice that actually saves money",
      "Old fixtures removed and disposed of responsibly",
    ],
    faqs: [
      {
        q: "Can fixture upgrades save money?",
        a: "Yes. Low-flow shower heads, efficient toilets, and aerated faucets can cut bathroom water use by 30 to 50%, which shows up directly on your water bill.",
      },
      {
        q: "Do I need to remodel to upgrade fixtures?",
        a: "Not at all. Swapping a faucet, shower head, or toilet is a quick, low-disruption upgrade that can modernize a bathroom in a day.",
      },
      {
        q: "What fixture finishes are in style?",
        a: "Brushed nickel, matte black, and champagne bronze are popular in North Texas right now. We carry samples so you can see them in your light.",
      },
    ],
    body: [
      "Sometimes the whole bathroom doesn't need to change, just the hardware. Plumbing and fixture upgrades from [Eco Bathroom Remodel](/) breathe new life into a dated bathroom, improve how it functions, and can lower your water bill at the same time.",
      "We install modern faucets, shower systems, toilets, and accessories with licensed plumbing work that meets code. That includes supply lines, shut-off valves, drains, and any rerouting needed to move fixtures to a better spot. A new faucet is the finishing touch on a [custom vanity](/custom-vanity-and-storage).",
      "Upgrades are also an easy win for water efficiency. A low-flow shower head, an efficient toilet, and aerated faucets reduce the water your household uses every day, a natural fit for an eco-minded Plano family. See which [water-saving bathroom upgrades](/water-saving-bathroom-upgrades) pay off fastest.",
      "From a single upgraded faucet to a full shower system with multiple heads, we handle projects of every size.",
    ],
    relatedServices: ["bathroom-lighting-and-ventilation", "shower-installations-replacements", "custom-vanity-and-storage"],
    relatedPosts: ["water-saving-bathroom-upgrades", "common-bathroom-remodel-mistakes"],
  },
  {
    slug: "bathroom-lighting-and-ventilation",
    name: "Bathroom Lighting and Ventilation",
    shortName: "Lighting & Ventilation",
    tagline: "Brighter, healthier bathrooms with smart lighting and fresh air",
    description:
      "Layer lighting for every task and install quiet, efficient ventilation that keeps your Plano bathroom fresh and mold-free.",
    image: 7005279,
    benefits: [
      "Layered lighting: ambient, task, and accent",
      "Vanity lighting that flatters and functions",
      "Quiet, powerful exhaust fans that prevent mold",
      "Moisture sensors and humidity-controlled fans",
      "Dimmable, energy-efficient LED options",
    ],
    process: [
      {
        title: "Lighting Audit",
        text: "We review how your bathroom is used and where shadows or glare fall.",
      },
      {
        title: "Design",
        text: "We plan fixture placement for even, flattering light and proper fan sizing.",
      },
      {
        title: "Installation",
        text: "Lighting and fans are installed with clean wiring and proper venting to the outside.",
      },
      {
        title: "Test & Balance",
        text: "We test every switch, dimmer, and sensor and verify the fan moves the right air volume.",
      },
    ],
    whyChoose: [
      "Correct ventilation sizing, most builders undersize it",
      "Wiring done safely and to code",
      "Practical lighting plans, not just pretty fixtures",
      "Energy-efficient choices that pay for themselves",
    ],
    faqs: [
      {
        q: "Why is ventilation important in a bathroom?",
        a: "Bathrooms produce more moisture than any other room. Without proper ventilation, humidity leads to peeling paint, warped cabinets, and mold, the number one hidden problem in remodeled bathrooms.",
      },
      {
        q: "What lighting is best for applying makeup or shaving?",
        a: "Light on both sides of the mirror at eye level gives the most even light with no shadows. We design vanity lighting around that principle.",
      },
      {
        q: "How big should my exhaust fan be?",
        a: "As a rule of thumb, you want about 1 CFM per square foot of bathroom. We calculate the right size and make sure it vents outside, not into the attic.",
      },
    ],
    body: [
      "Lighting and ventilation are the most underrated parts of a great bathroom. Great lighting makes the room feel bigger and works for every task, from the early-morning scramble to a long evening soak. Great ventilation protects your investment from the number one bathroom enemy: moisture. Our Plano team at [Eco Bathroom Remodel](/) designs both into every bathroom we touch.",
      "We design lighting in layers. Ambient lighting fills the room, vanity lighting at eye level on both sides of the mirror makes grooming easier, and accent lighting highlights tile, niches, or artwork. Every fixture is chosen for efficiency and durability, and lighting plans are built into every [complete bathroom renovation](/complete-bathroom-renovations) we take on.",
      "Ventilation gets equal care. We size your exhaust fan properly, install it quietly, and make sure it vents outside your home instead of into the attic, where it can cause bigger problems. Humidity-sensing fans take care of the air automatically.",
      "The result is a bathroom that's easier to live in and healthier for your home. It works perfectly as a standalone upgrade or as part of a full remodel, and it's one of the highest-impact [small bathroom remodel ideas](/small-bathroom-remodel-ideas).",
    ],
    relatedServices: ["plumbing-and-fixture-upgrades", "complete-bathroom-renovations", "luxury-bathroom-upgrades"],
    relatedPosts: ["bathroom-lighting-guide", "prevent-mold-and-mildew-bathroom"],
  },
  {
    slug: "accessibility-modifications",
    name: "Accessibility Modifications",
    shortName: "Accessibility",
    tagline: "Safe, comfortable bathrooms for every age and ability",
    description:
      "Walk-in tubs, curbless showers, grab bars, and ADA-compliant updates that let Plano families age in place safely and independently.",
    image: 5502260,
    benefits: [
      "Curbless and low-threshold showers for easy entry",
      "Walk-in tubs with built-in seating and grab bars",
      "Non-slip flooring for accident prevention",
      "ADA-compliant heights for toilets, sinks, and mirrors",
      "Comfort-height toilets and handheld showers",
    ],
    process: [
      {
        title: "Needs Assessment",
        text: "We discuss current and future needs, including mobility, balance, and caregivers, and inspect the space.",
      },
      {
        title: "Safety Plan",
        text: "We design modifications that reduce fall risk and make daily tasks easier.",
      },
      {
        title: "Installation",
        text: "Grab bars, seating, thresholds, and fixtures are installed to the right heights and anchored securely.",
      },
      {
        title: "Walkthrough",
        text: "We test everything with you and confirm the space works for everyone who uses it.",
      },
    ],
    whyChoose: [
      "We anchor grab bars into structure, not just drywall",
      "Designs that look like a remodel, not an institution",
      "Experience with aging-in-place across North Texas",
      "We plan for the future, not just today",
    ],
    faqs: [
      {
        q: "What does aging in place mean?",
        a: "It means designing your home so you can live safely and independently as you age, avoiding stairs where possible, preventing falls, and making everyday tasks easier.",
      },
      {
        q: "Are accessibility modifications covered by insurance?",
        a: "Some modifications may be eligible under Medicare or long-term care policies if medically necessary. We provide detailed documentation you can submit to your provider.",
      },
      {
        q: "Can modifications look nice?",
        a: "Absolutely. Modern grab bars, curbless showers, and heated tile floors are designed to be beautiful. Safety and style are not in conflict.",
      },
    ],
    body: [
      "The bathroom is the most dangerous room in the house, and for older adults or anyone with mobility challenges, the risk is real. Accessibility modifications from [Eco Bathroom Remodel](/) let your family use the bathroom safely and independently, without sacrificing style.",
      "A curbless shower removes the step-over that causes most falls. Grab bars placed at the right heights and anchored into real structure offer support where it matters. Non-slip tile, comfort-height toilets, and handheld showers make daily routines easier for everyone. Many families start with a [tub to shower conversion](/tub-to-shower-conversion).",
      "We design these spaces to feel like a premium remodel, not a medical facility. Warm materials, clean lines, and thoughtful lighting work with the safety features, so the room looks intentional and inviting.",
      "Whether you're planning ahead or responding to a change in mobility, we build bathrooms that help Plano families live at home longer, safely and beautifully. Learn more in our guide to [aging-in-place bathroom features](/accessibility-bathroom-features).",
    ],
    relatedServices: ["tub-to-shower-conversion", "bathtub-installations-replacements", "tile-flooring-installation"],
    relatedPosts: ["accessibility-bathroom-features"],
  },
  {
    slug: "luxury-bathroom-upgrades",
    name: "Luxury Bathroom Upgrades",
    shortName: "Luxury Upgrades",
    tagline: "Spa-quality features for the bathroom of your dreams",
    description:
      "Freestanding tubs, rain showers, heated floors, and premium finishes that turn a Plano bathroom into a personal spa.",
    image: 9252956,
    benefits: [
      "Freestanding soaking tubs as a stunning centerpiece",
      "Rainfall and multi-head shower systems",
      "Heated floors and towel warmers",
      "Premium stone, quartz, and high-end fixtures",
      "Boutique-hotel design and craftsmanship",
    ],
    process: [
      {
        title: "Vision Session",
        text: "We learn your style, budget, and the wow you're after.",
      },
      {
        title: "Design & Spec",
        text: "We design the space and spec premium materials, fixtures, and smart features.",
      },
      {
        title: "Premium Installation",
        text: "Every element is installed with the precision luxury finishes demand.",
      },
      {
        title: "Reveal",
        text: "We detail every surface, test everything, and hand over a bathroom that feels like a five-star retreat.",
      },
    ],
    whyChoose: [
      "Experience with high-end materials and details",
      "Premium fixtures handled with care",
      "Design that balances wow with daily function",
      "A finished result that raises your home's value",
    ],
    faqs: [
      {
        q: "What makes a bathroom luxury?",
        a: "More than expensive fixtures. It's the combination of premium materials, thoughtful design, smart storage, lighting layers, and flawless craftsmanship that makes the room feel effortless.",
      },
      {
        q: "What's the budget for a luxury bathroom?",
        a: "Luxury remodels in Plano typically range from $25,000 to $60,000+. We design to your budget and prioritize where the impact will be highest.",
      },
      {
        q: "Can you add a steam shower?",
        a: "Yes. Steam showers are a popular luxury feature we design and install with proper waterproofing, ventilation, and a steam generator sized for the space.",
      },
    ],
    body: [
      "Some bathrooms just wash you. A luxury bathroom resets you. If you're dreaming of a freestanding tub by a window, a rainfall shower with body jets, or heated floors on a winter morning, [Eco Bathroom Remodel](/) in Plano can build that spa experience into your home.",
      "Luxury is in the details: the way a countertop catches the light, the feel of a well-balanced faucet, the silence of a properly framed room. We combine premium materials with the craftsmanship that makes them look their best for decades. It all starts with smart choices about [tile flooring](/tile-flooring-installation) and lighting.",
      "We plan everything, including structure, plumbing, electrical, lighting, and ventilation, before the first demo so the finished room feels effortless and works flawlessly. Then we install the features that turn daily life into a retreat, like a statement bathtub installation.",
      "Your bathroom should be the most relaxing room in your home. Let's make it the one guests talk about. Wondering about the budget? Our guide to the [cost of a bathroom remodel in Plano](/cost-of-bathroom-remodel-in-plano-tx) covers the luxury range.",
    ],
    relatedServices: ["complete-bathroom-renovations", "bathtub-installations-replacements", "bathroom-lighting-and-ventilation"],
    relatedPosts: ["master-bathroom-remodel-ideas", "bathroom-lighting-guide"],
  },
];

export const serviceSeo: Record<string, string> = {
  "complete-bathroom-renovations": "Complete Bathroom Renovations in Plano, TX",
  "tub-to-shower-conversion": "Tub to Shower Conversion in Plano, TX | Eco Bathroom Remodel",
  "shower-installations-replacements": "Shower Installations & Replacements in Plano, TX",
  "bathtub-installations-replacements": "Bathtub Installation & Replacement in Plano, TX",
  "glass-enclosure-installations": "Glass Enclosure Installations in Plano, TX",
  "tile-flooring-installation": "Tile Flooring Installation in Plano, TX",
  "custom-vanity-and-storage": "Custom Vanity & Storage in Plano, TX | Eco Bathroom Remodel",
  "plumbing-and-fixture-upgrades": "Plumbing & Fixture Upgrades in Plano, TX",
  "bathroom-lighting-and-ventilation": "Bathroom Lighting & Ventilation in Plano, TX",
  "accessibility-modifications": "Accessibility Modifications in Plano, TX",
  "luxury-bathroom-upgrades": "Luxury Bathroom Upgrades in Plano, TX | Eco Bathroom Remodel",
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
