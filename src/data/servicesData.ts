import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'luxury-interiors',
    slug: 'luxury-interiors',
    title: 'Luxury Bespoke Interiors & Leather Upholstery',
    tagline: 'Handcrafted German leather, tailored stitching, and executive cabin finishes.',
    category: 'Interiors',
    heroImage: '/images/hero-interior.jpg',
    cardImage: '/images/after-luxury-interior.jpg',
    shortDescription: 'Elevate your cabin to international luxury standards with custom Nappa leather upholstery, dual-tone themes, Alcantara roof liners, and precision diamond quilting.',
    fullDescription: 'At VIG Auto Accessories, our interior craftsmanship is helmed by master saddlers with over two decades of fine automotive tailoring. We don’t just swap seat covers—we strip factory seats down to their frame, sculpt high-resilience ergonomic memory foam, and hand-stitch premium German automotive leather, imported microfiber, and Alcantara with millimeter-accurate contrast twin-needle stitching.',
    highlights: [
      'Genuine Automotive-Grade German Nappa & Microfiber Leather',
      'Ergonomic High-Density Contour Foam Shaping',
      'Dual-Tone Bespoke Colorways (Tan Cognac, Ice Grey, Tuscan Amber, Stealth Black)',
      'Matching Wrapped Door Pads, Center Armrest & Dashboard Soft-Touch Inserts',
      '100% Breathable Perforated Inserts for Tropical Indian Climates'
    ],
    features: [
      {
        title: 'Anatomical Contour Sculpting',
        description: 'Custom lumbar support and lateral bolster reshaping tailored to your posture for zero fatigue on long highway drives.'
      },
      {
        title: 'Door Trims & Console Leatherette Wrap',
        description: 'Complete elimination of cheap hard plastics with padded leather wraps and precision-molded trim bezels.'
      },
      {
        title: 'Alcantara Headliner & Starlight Pillars',
        description: 'Black suede or Alcantara roof lining paired with optional fiber-optic starlight constellations and touch controls.'
      },
      {
        title: 'Precision Stitching Patterns',
        description: 'Choice of Bentley-style diamond quilting, Maybach longitudinal channels, or clean AMG sport perforations.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Design Consultation & Color Palette Curation',
        description: 'Tanveer Oberoi and our lead designer review physical leather swatches against your car’s exterior paint to create a balanced theme.'
      },
      {
        step: 2,
        title: 'Seat Dismantling & Foam Re-profiling',
        description: 'Seats are removed with care, original skins preserved or unstitched, and custom orthopedic foam is hand-sculpted.'
      },
      {
        step: 3,
        title: 'CNC Computerized Leather Cutting & Twin-Stitch Tailoring',
        description: 'Hides are laser-cut and stitched with high-tensile bonded nylon threads that resist UV heat degradation.'
      },
      {
        step: 4,
        title: 'Heat Treatment & Precision Fitment',
        description: 'Panels undergo industrial steam-forming to ensure zero wrinkles, sagging, or bunching for a true OEM factory finish.'
      }
    ],
    materialsAndTech: [
      'German Nappa Leather (1.2mm automotive grade)',
      'Italian Ultra-Microfiber breathable suede',
      'High-tensile bonded nylon UV-resistant threads',
      'Dual-density high resilience contour foam',
      'OEM seat airbag-compatible tear seams'
    ],
    compatibleCars: [
      'Hyundai Creta / Alcazar',
      'Mahindra Scorpio-N / XUV700',
      'Mahindra Thar / Thar Roxx',
      'Toyota Innova Hycross / Crysta',
      'Maruti Grand Vitara / Brezza',
      'Toyota Fortuner / Legender',
      'Kia Seltos / Carens'
    ],
    warrantyInfo: '3-Year Comprehensive Warranty against stitching loosening, leather peeling, or color fade.',
    timeRequired: '2 to 3 Working Days',
    priceStartingFrom: '₹28,000*',
    popularAddons: [
      'Perforated Seat Ventilation Retrofit',
      'Alcantara Suede A/B/C Pillar Wrapping',
      'Custom Monogram / Logo Embossing',
      'Soft-Touch Leather Dashboard Panel'
    ],
    faqs: [
      {
        question: 'Will changing to leather seat covers affect side airbag deployment?',
        answer: 'Safety is non-negotiable at VIG. When working on vehicles equipped with seat-mounted side airbags (Creta, Scorpio-N, Thar Roxx, etc.), our craftsmen use certified computer-calibrated breakaway stitching along the airbag seam that deploys seamlessly in milliseconds.'
      },
      {
        question: 'How do VIG custom seats hold up against Mumbai/Navi Mumbai summer heat?',
        answer: 'We exclusively use automotive-grade breathable hides with micro-perforation technology that dissipates trapped heat 4x faster than standard synthetic leatherette. Combined with seat cooling systems, comfort remains exceptional even in 42°C summers.'
      }
    ]
  },
  {
    id: 'recliner-seats',
    slug: 'recliner-seats',
    title: 'VIP Recliner & Comfort Lounge Seats',
    tagline: 'First-class Maybach-style rear lounge seats with powered recline and leg-rests.',
    category: 'Comfort',
    heroImage: '/images/hycross-interior.jpg',
    cardImage: '/images/recliner-seats.jpg',
    shortDescription: 'Transform your SUV or MPV into a rolling private jet lounge. Featuring multi-stage electric recline, calf support ottomans, massage functions, and wireless charging center consoles.',
    fullDescription: 'VIG Auto Accessories is nationally celebrated for pioneering VIP Executive Lounge seat conversions for vehicles like the Toyota Innova Hycross, Mahindra Scorpio-N, Mahindra Thar Roxx, and Kia Carens. By engineering custom crash-tested steel sub-frames and integrating German electric motors, we replace factory benches with ultra-luxury captain recliners.',
    highlights: [
      'Electric 8-Way & 10-Way Motorized Adjustments',
      'Powered Calf-Support Ottomans with 140° Full Recline',
      'Pneumatic Multi-Zone Lumbar Massage & Ventilation',
      'Integrated Bespoke Executive Center Console with Wireless Qi Charging',
      'Aircraft-Style Retractable Folding Aluminum Worktables'
    ],
    features: [
      {
        title: 'Zero-Gravity Recline Angle',
        description: 'Engineered backrest articulation distributes body weight evenly, relieving pressure on the spine for total relaxation.'
      },
      {
        title: 'Independent Power Controls',
        description: 'Brushed metal seat controls integrated into the armrest or touchscreen console for effortless adjustment.'
      },
      {
        title: 'Chilled Cup Holders & Storage Compartments',
        description: 'Custom armrest with thermo-electric heated/cooled drink holders and felt-lined soft-close storage.'
      },
      {
        title: 'OEM Floor Mounting Brackets',
        description: 'Bolts directly to original factory chassis mounting points—zero drilling or structural welding required.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Vehicle Cabin Measurement & Weight Balancing',
        description: 'We calculate rear legroom clearance, ingress/egress space, and center-of-gravity distribution for your exact vehicle model.'
      },
      {
        step: 2,
        title: 'Heavy-Gauge Steel Frame Integration',
        description: 'Laser-cut automotive steel base brackets are installed onto factory chassis anchors with high-tensile grade 8.8 bolts.'
      },
      {
        step: 3,
        title: 'Coupler-to-Coupler Electrical Harnessing',
        description: 'Motors, switches, and heating/ventilation units are wired via independent fused lines with zero tampering of factory wiring.'
      },
      {
        step: 4,
        title: 'Master Leather Tailoring & Final Calibration',
        description: 'Seats are upholstered in matching interior leather and undergo a 20-point mechanical smoothness and safety audit.'
      }
    ],
    materialsAndTech: [
      'High-torque German 12V DC electric linear actuators',
      '4mm high-tensile robotic welded steel sub-frame',
      'Multi-speed pneumatic massage air bladders',
      'OEM flame-retardant cold-cure molded foam',
      'Ceramic thermoelectric heating & cooling elements'
    ],
    compatibleCars: [
      'Toyota Innova Hycross / Crysta',
      'Mahindra Scorpio-N (6/7 Seater to VIP 4/5 Seater)',
      'Mahindra Thar Roxx (5-Door Luxury Lounge)',
      'Toyota Fortuner / Legender',
      'Mahindra XUV700',
      'Kia Carnival / Carens',
      'MG Gloster'
    ],
    warrantyInfo: '2-Year Direct Warranty on electric motors, actuators, and mechanical frames.',
    timeRequired: '3 to 5 Working Days',
    priceStartingFrom: '₹65,000*',
    popularAddons: [
      'Electrically Retractable Footrests',
      'Rear Seat Cinema Display with Android Auto / Apple TV',
      'Ambient Base Night Mood Illumination',
      'Integrated Champagne / Beverage Chiller'
    ],
    faqs: [
      {
        question: 'Can the VIP recliner seats be installed without cutting vehicle chassis or factory wiring?',
        answer: 'Yes! Tanveer Oberoi strictly mandates 100% bolt-on engineering. We fabricate custom adapter brackets that align perfectly with the original factory seat bolt holes. The electrical harness plugs in with independent OEM-grade fuses without splicing any stock wiring.'
      },
      {
        question: 'Do these seats slide forward to allow boot access or luggage storage?',
        answer: 'Absolutely. Our premium captain recliners feature extended fore-and-aft rail sliders, allowing you to maximize trunk space when carrying luggage or push seats back for maximum limousine legroom.'
      }
    ]
  },
  {
    id: 'lighting-upgrades',
    slug: 'lighting-upgrades',
    title: 'Advanced Automotive Lighting & Laser Projectors',
    tagline: 'High-lux Bi-LED laser projectors, matrix DRLs, and Symphony ambient illumination.',
    category: 'Lighting',
    heroImage: '/images/headlight-led.jpg',
    cardImage: '/images/ambient-light.jpg',
    shortDescription: 'Dominate night highways with military-grade optical clarity. We install high-lux Bi-LED projectors, laser auxiliary modules, dynamic cascading DRLs, and German Symphony K4 ambient interior lighting.',
    fullDescription: 'Stock automotive headlights in many Indian vehicles leave much to be desired on unlit highways and rain-soaked expressways. At VIG Auto Accessories, our optical laboratory upgrades headlights, fog lamps, and cabin lighting with plug-and-play precision. We calibrate beam cutoffs on a laser alignment wall to eliminate glare for oncoming traffic while throwing light 400+ meters ahead.',
    highlights: [
      'Bi-LED Projectors & Laser Modules with 6000K Pure Daylight Temp',
      'Triple-Lens Fog Projectors with High/Low Beam Functionality',
      'Plug-and-Play Coupler Harnesses with Zero Factory Wire Splicing',
      'German Symphony K4 / K5 Ambient Interior Fiber-Optic Strip System',
      'Dynamic Audi-Style Sequential Scanning DRL Indicators'
    ],
    features: [
      {
        title: 'Razor-Sharp Z-Cutoff Optical Lens',
        description: 'German curved glass optics project an ultra-wide horizontal beam with a razor-sharp cutoff line that never blinds oncoming drivers.'
      },
      {
        title: 'Laser Auxiliary High-Beam Boost',
        description: 'Laser diodes engage automatically on high beam to illuminate roadway hazards up to 450 meters away in pitch-black conditions.'
      },
      {
        title: 'Symphony Dynamic Ambient Lighting',
        description: 'Multi-zone 64-color interior lighting with flowing music-sync modes, welcome animations, and mobile app control.'
      },
      {
        title: 'Weather-Proof High/Low Fog Projectors',
        description: 'IP68 waterproof aluminum projector pods with selectable 3000K golden amber for dense fog and 5500K bright white.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Lux Photometric Analysis',
        description: 'We test your vehicle’s factory beam output using a digital lux meter to identify beam gaps and weak focal points.'
      },
      {
        step: 2,
        title: 'Optical Retrofit or OEM Replacement',
        description: 'Depending on model, we either retrofit Bi-LED projectors into factory housings or install OEM-spec matrix assemblies.'
      },
      {
        step: 3,
        title: 'Coupler-to-Coupler Wiring & CANBus Decoders',
        description: 'Integrated CANBus anti-flicker modules prevent dashboard error codes and keep all OEM warranty intact.'
      },
      {
        step: 4,
        title: 'Digital Laser Wall Beam Alignment',
        description: 'Every vehicle is calibrated on our dark optical alignment bay to set exact horizontal and vertical beam pitch.'
      }
    ],
    materialsAndTech: [
      'Osram / AES / Aozoom high-output LED chips',
      'Aviation-grade 6063 aluminum heatsinks with magnetic cooling fans',
      'German automotive optical-grade PC lenses',
      'Waterproof OEM male-female automotive couplers',
      'Symphony K4 multi-color addressable LED ribbons'
    ],
    compatibleCars: [
      'Hyundai Creta (E/EX base halogen to top-end LED)',
      'Mahindra Scorpio-N (Z2/Z4/Z6 to Z8L Matrix LED)',
      'Mahindra Thar 4x4 / Thar Roxx',
      'Maruti Grand Vitara / Brezza',
      'Toyota Innova Hycross / Crysta',
      'Kia Seltos / Carens',
      'Tata Safari / Harrier'
    ],
    warrantyInfo: '2-Year Direct Replacement Warranty on LED projectors and ballasts.',
    timeRequired: '4 to 8 Hours',
    priceStartingFrom: '₹14,500*',
    popularAddons: [
      'Bi-LED 3-Color Fog Lamp Upgrade',
      'Illuminated Front Grille Emblem & DRL Bar',
      'Smoked LED Sequential Tail Lamps',
      'Underbody Starlight Puddle Lamps'
    ],
    faqs: [
      {
        question: 'Will upgrading my headlights void my car warranty or cause dashboard errors?',
        answer: 'Not at VIG Auto Accessories. Tanveer Oberoi’s core principle is zero wire cutting. We use customized, vehicle-specific plug-and-play wiring harnesses with built-in CANBus decoders. If you ever need to visit an authorized dealership, everything remains 100% compliant and reversible.'
      },
      {
        question: 'Do your high-power LED headlights blind oncoming vehicles?',
        answer: 'No. Blindness is caused by poorly seated LED bulbs in reflector housings. We install optical Bi-LED projectors with precise mechanical cut-off shields calibrated on our alignment wall so the beam illuminates the tarmac without spilling into the eyes of oncoming motorists.'
      }
    ]
  },
  {
    id: 'sound-entertainment',
    slug: 'sound-entertainment',
    title: 'Hi-End Audio, DSP Tuning & Infotainment',
    tagline: 'Concert-hall acoustics with Morel, Audison, Alpine and 32-band DSP calibration.',
    category: 'Sound',
    heroImage: '/images/car-audio.jpg',
    cardImage: '/images/sound-damping.jpg',
    shortDescription: 'Experience pristine sonic clarity. We architect audiophile-grade sound stages with 3-way component speakers, multi-channel DSP time alignment, compact underseat subwoofers, and high-definition Android/CarPlay touchscreens.',
    fullDescription: 'True high-end automotive audio is not about deafening bass—it is about realistic soundstage staging, instrument separation, vocal warmth, and emotional resonance. Our acoustic engineers design bespoke audio architectures using premier brands like Morel (Israel), Audison, Alpine, Rockford Fosgate, and Sony ES, calibrated with real-time spectrum analyzers (RTA).',
    highlights: [
      '3-Way Active Component Speaker Systems (Tweeter, Mid-Range, Woofer)',
      'Digital Signal Processor (DSP) with 31-Band Parametric EQ & Time Alignment',
      'Custom Fiberglass A-Pillar Pods for Optimal Soundstage Height',
      'Ultra-Fast Apple CarPlay / Android Auto HD QLED Capacitive Displays',
      'Stealth Underseat & Custom Molded Trunk Subwoofer Enclosures'
    ],
    features: [
      {
        title: 'DSP Time-Alignment Calibration',
        description: 'Microsecond delay adjustments compensate for your distance from each speaker, placing the vocalist dead center in front of you.'
      },
      {
        title: 'Custom A-Pillar Pod Craftsmanship',
        description: 'Handcrafted fiberglass pods finished in OEM interior matching leather to house high-frequency tweeters and mid-range drivers.'
      },
      {
        title: 'Multi-Layer Sound Damping',
        description: 'Applied to inner and outer door skins to transform thin sheet metal into an acoustically dead, airtight speaker enclosure.'
      },
      {
        title: 'Plug-and-Play Factory Head Unit Integration',
        description: 'Upgrade the audio without replacing your factory touchscreen using high-level DSP inputs and vehicle-specific T-harnesses.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Acoustic Preference Assessment',
        description: 'We listen to your preferred music genres (Bollywood, Classical, EDM, Rock) and cabin volume requirements to configure the system.'
      },
      {
        step: 2,
        title: 'Door Damping & Acoustic Enclosure Prep',
        description: 'Butyl vibration deadeners and closed-cell acoustic foam are rolled onto door panels to eliminate rattles.'
      },
      {
        step: 3,
        title: 'Pure Oxygen-Free Copper (OFC) Wiring',
        description: 'Heavy-gauge shielded cables routed away from electrical interference lines with gold-plated connectors.'
      },
      {
        step: 4,
        title: 'RTA Microphone & Pink Noise Calibration',
        description: 'Our audio engineer uses calibrated microphones and laptop DSP software to equalize every frequency peak and null.'
      }
    ],
    materialsAndTech: [
      'Morel Maximo / Tempo Ultra / Elate Carbon components',
      'Audison Bit Ten / Prima DSP amplifiers',
      'Pure 99.99% OFC (Oxygen-Free Copper) RCA and power cables',
      'QLED 2K Anti-Glare capacitive touchscreens (Android 13 / Wireless CarPlay)',
      'Multi-layer butyl rubber vibration damping sheets'
    ],
    compatibleCars: [
      'Hyundai Creta / Verna / Venue',
      'Mahindra Scorpio-N / Thar Roxx / XUV700',
      'Toyota Innova Hycross / Fortuner',
      'Maruti Grand Vitara / Fronx / Brezza',
      'Kia Seltos / Sonet',
      'Volkswagen Virtus / Taigun'
    ],
    warrantyInfo: '2-Year Direct Brand Warranty on speakers, DSPs, and amplifiers.',
    timeRequired: '1 to 2 Working Days',
    priceStartingFrom: '₹18,500*',
    popularAddons: [
      'Custom Molded Spare Wheel Subwoofer',
      'Rear Seat Android Entertainment Screens',
      '360-Degree 3D Bird-Eye View HD Camera Integration',
      'Full Floor & Roof 3-Layer Acoustic Damping'
    ],
    faqs: [
      {
        question: 'Can I upgrade my sound system while retaining the original company screen?',
        answer: 'Yes! We frequently integrate advanced DSP processors (Digital Signal Processors) directly with original company infotainment systems via plug-and-play T-harnesses. You retain all steering controls, factory cameras, and menus while gaining theater-quality sound.'
      },
      {
        question: 'Will powerful amplifiers drain my car battery or cause alternator strain?',
        answer: 'No. Modern Class-D digital amplifiers are over 85% energy-efficient. We calculate the power draw of your system and install high-grade copper wiring with dedicated marine-grade ANL fuse holders that protect the vehicle’s electrical circuit.'
      }
    ]
  },
  {
    id: 'exterior-styling',
    slug: 'exterior-styling',
    title: 'Exterior Body Styling, Alloys & Aerodynamics',
    tagline: 'Aggressive road presence with OEM-grade body kits, grilles, and forged wheels.',
    category: 'Exteriors',
    heroImage: '/images/exterior-styling.jpg',
    cardImage: '/images/black-suv-profile.jpg',
    shortDescription: 'Command the road. We fit precision ABS/FRP body kits, AMG/GT vertical slat grilles, forged and diamond-cut alloy wheels, functional roof rails, sleek spoilers, and stealth black-out packages.',
    fullDescription: 'Give your vehicle an imposing, muscular persona with VIG Auto Accessories exterior customization. Every aerodynamic spoiler, side step, diffuser, and bumper protector is manufactured from automotive-grade ABS polymer or precision-molded composite—ensuring seamless flush fitment that looks like it rolled out of a special skunkworks factory division.',
    highlights: [
      'Knight Edition & Stealth De-Chrome Dark Packs',
      'Diamond-Cut & Gloss Black Alloy Wheels (16” to 20” sizes)',
      'Front Bumper Skirts, Rear Diffusers & Functional Quad Exhaust Tips',
      'Heavy-Duty Footsteps & Motorized Retractable Side Steps',
      'High-Gloss Piano Black Aerodynamic Roof Spoilers'
    ],
    features: [
      {
        title: 'OEM-Grade ABS Polymers',
        description: 'Flexible, temperature-resistant, and impact-tolerant body components that never crack under vibration or Indian road conditions.'
      },
      {
        title: 'Paint-Matched in Automated Booths',
        description: 'Parts are finished using OEM computerized paint codes with 3 coats of polyurethane clear coat for seamless color matching.'
      },
      {
        title: 'Forged & Flow-Formed Alloys',
        description: 'JWL/VIA certified alloy wheels tested for structural strength on potholes with balanced offset for zero fender rubbing.'
      },
      {
        title: 'Stealth Black-Out Treatment',
        description: 'Complete de-chroming of window surrounds, grilles, badging, and door handles in gloss black or satin titanium.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Aesthetic Styling Consultation',
        description: 'Selection of wheel offsets, spoiler profiles, and body extensions matching your car’s stance.'
      },
      {
        step: 2,
        title: 'Dry Fitment & Alignment Check',
        description: 'Every kit is test-mounted on the vehicle before final installation to verify body-line gaps down to the millimeter.'
      },
      {
        step: 3,
        title: 'OEM Fastener & 3M VHB Bonding',
        description: 'Mounted using original factory bumper clips combined with industrial 3M structural tape—zero unnecessary screw holes in body sheet metal.'
      },
      {
        step: 4,
        title: 'Wheel Balancing & Final Detailing',
        description: 'Alloys undergo 3D dynamic balancing and exterior panels are sealed with high-gloss protective sealant.'
      }
    ],
    materialsAndTech: [
      'Virgin ABS injection-molded polymers',
      'JWL / VIA certified flow-formed aluminum alloy wheels',
      'Automotive OEM standard 3M 5952 VHB heavy-duty tape',
      'PPG / Dupont automotive polyurethane base and clear coats',
      'Stainless steel 304 hardware and brackets'
    ],
    compatibleCars: [
      'Hyundai Creta (Knight Edition conversion)',
      'Mahindra Scorpio-N (Stealth Dark Edition)',
      'Mahindra Thar 4x4 & Thar Roxx (Off-Road Armor)',
      'Toyota Innova Hycross (Aero Custom)',
      'Toyota Fortuner / Legender (TRD / Modellista Kits)',
      'Maruti Grand Vitara / Fronx',
      'Kia Seltos (X-Line Style Pack)'
    ],
    warrantyInfo: '1-Year Warranty on paint adhesion, ABS fitment, and alloy structural integrity.',
    timeRequired: '1 to 2 Working Days',
    priceStartingFrom: '₹12,000*',
    popularAddons: [
      'Electric Motorized Side Steps',
      'Carbon-Fiber Finish Mirror Caps & Shark Fin',
      'Illuminated Front & Rear Badges',
      'Ceramic Paint Protection Clear Bra (PPF)'
    ],
    faqs: [
      {
        question: 'Will upgrading to larger alloy wheels affect my car warranty or ride comfort?',
        answer: 'We strictly adhere to recommended plus-sizing specifications (Plus 1 / Plus 2). By pairing upgraded alloys with optimal tire aspect ratios and JWL-certified wheel offsets, we maintain stock suspension geometry, avoid speedometer error, and preserve smooth ride comfort.'
      },
      {
        question: 'Are body kits drilled into the metal body panels?',
        answer: 'No. Our body kits and diffusers utilize original factory undertray clip points and 3M industrial VHB bonding tapes. We never drill into the metal body panels, preventing any risk of rust or water ingress.'
      }
    ]
  },
  {
    id: 'oem-upgrades',
    slug: 'oem-upgrades',
    title: 'OEM+ Feature Retrofits & Electrical Upgrades',
    tagline: 'Base-to-top model conversions with original parts and 100% plug & play couplers.',
    category: 'Vehicle Upgrades',
    heroImage: '/images/workshop-studio.jpg',
    cardImage: '/images/craftsman-working.jpg',
    shortDescription: 'Turn your base model into the flagship top trim. We integrate factory OEM steering controls, cruise control, 360-degree bird’s-eye cameras, ventilated seats, wireless chargers, and power-folding ORVMs.',
    fullDescription: 'Why pay lakhs more to car dealerships for the top-end variant when you can get the exact same genuine OEM features installed at VIG Auto Accessories with superior craftsmanship and huge savings? Tanveer Oberoi pioneered Base-to-Top model conversions in India, using genuine Mobis/Mahindra parts with original coupler wiring.',
    highlights: [
      '100% Plug-and-Play Coupler Fitment — Zero Wire Slicing',
      'OEM Cruise Control Retrofit with Instrument Cluster Activation',
      '360-Degree 3D Bird-Eye View Camera with Dynamic Steering Guidelines',
      'Auto-Folding ORVMs with Remote Key Lock Sync',
      'Original Steering Controls with Voice Command Activation'
    ],
    features: [
      {
        title: 'Original OEM Parts & Switches',
        description: 'We source genuine OEM steering buttons, cruise switches, and wiring harnesses that match factory backlighting and tactile feel.'
      },
      {
        title: '360° Surround View HD System',
        description: 'Four ultra-wide angle Sony night-vision cameras calibrated with a 3D grid blanket for effortless parking and tight traffic maneuvers.'
      },
      {
        title: 'Power-Folding Mirrors with Coupler Loom',
        description: 'Mirrors fold automatically when locking your car via key fob and unfold on ignition, matching top-model behavior.'
      },
      {
        title: 'Ventilated Seat Cooling Fans Retrofit',
        description: 'Integrated dual-fan cooling units installed inside perforated seats for breezy comfort in scorching weather.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'ECU & BCM Compatibility Verification',
        description: 'We verify your vehicle’s Body Control Module version to ensure plug-and-play feature readiness.'
      },
      {
        step: 2,
        title: 'Genuine Factory Harness Insertion',
        description: 'Vehicle-specific harnesses are inserted into the original dashboard junction box with factory terminal pins.'
      },
      {
        step: 3,
        title: 'Component Installation & Calibration',
        description: 'Cameras are aligned using precision checkered calibration mats to stitch a seamless 360-degree bird’s-eye view.'
      },
      {
        step: 4,
        title: 'OBD Diagnostics & Feature Verification',
        description: 'We run a complete OBD system scan to confirm cruise control activation, steering communication, and error-free operation.'
      }
    ],
    materialsAndTech: [
      'Genuine Mobis / Mahindra OEM parts & switchgear',
      'Automotive-grade copper wiring looms with corrugated heat-sleeves',
      'Sony Starvis image sensor 360-degree cameras',
      'OEM latching automotive connectors and pin locks',
      'High-speed CANBus decoding modules'
    ],
    compatibleCars: [
      'Hyundai Creta (E / EX / S to SX(O) King Conversion)',
      'Mahindra Scorpio-N (Z2 / Z4 / Z6 to Z8 / Z8L Features)',
      'Mahindra Thar 4x4 (Base to Luxury Overland)',
      'Maruti Grand Vitara (Sigma / Delta to Alpha Features)',
      'Toyota Innova Hycross (G / GX to VX / ZX Features)',
      'Kia Seltos (HTE / HTK to GTX+ Features)'
    ],
    warrantyInfo: '2-Year Direct Warranty on all OEM+ electrical modules and harnesses.',
    timeRequired: '1 Working Day',
    priceStartingFrom: '₹15,000*',
    popularAddons: [
      'Tire Pressure Monitoring System (TPMS) with Screen Display',
      'Soft-Closing Automatic Suction Doors',
      'Smart Electric Tailgate with Foot Sensor',
      'OEM Frameless Auto-Dimming IRVM with Compass'
    ],
    faqs: [
      {
        question: 'Will installing Cruise Control or Steering Controls void my car’s factory warranty?',
        answer: 'No. Tanveer Oberoi’s hallmark is strict adherence to coupler-to-coupler wiring. We do not splice, cut, or tap into the vehicle harness. We utilize the factory-provided unpinned slots in the clock spring and BCM, exactly as the automobile manufacturer does at the factory assembly line.'
      },
      {
        question: 'How does the 360-degree camera perform at night or in rain?',
        answer: 'Our 360-degree system uses high-sensitivity Sony Starvis night-vision sensors housed in IP68 waterproof aluminum casings. Even in dimly lit basements or heavy rain, the display provides vivid 1080p color imagery with dynamic guidelines synchronized to your steering wheel.'
      }
    ]
  },
  {
    id: 'soundproofing-damping',
    slug: 'soundproofing-damping',
    title: 'Acoustic Soundproofing & Thermal Insulation',
    tagline: 'Rolls-Royce level cabin silence with multi-layer butyl damping and thermal barriers.',
    category: 'Acoustics',
    heroImage: '/images/sound-damping.jpg',
    cardImage: '/images/workshop-studio.jpg',
    shortDescription: 'Silence road noise, tire roar, and engine vibration. We apply multi-layer military-grade butyl rubber sheets and closed-cell acoustic foam across doors, floor pans, roof, and wheel arches.',
    fullDescription: 'Indian highway conditions subject vehicle cabins to significant NVH (Noise, Vibration, Harshness), tire rumble, and intense solar thermal load. Our acoustic soundproofing division turns noisy vehicle cabins into serene sanctuaries. By damping metal panel resonance and blocking sound transmission, your cabin stays dramatically quieter and cooler.',
    highlights: [
      'Reduces Cabin NVH by Up to 8 to 12 Decibels',
      '3-Layer Treatment: Butyl Sheet + Aluminum Foil + Closed-Cell Acoustic Foam',
      'Improves AC Cooling Efficiency by Blocking Radiated Roof Heat',
      'Transforms Door Shut Feel into a Solid European Thud',
      'Dramatically Enhances Bass Response and Mid-Bass Punch'
    ],
    features: [
      {
        title: 'Multi-Density Pure Butyl Formulation',
        description: 'Eco-friendly odorless butyl rubber that does not melt, stink, or unstick even under extreme 50°C summer roof temperatures.'
      },
      {
        title: 'Full Door, Floor, Roof & Boot Treatment',
        description: 'Comprehensive coverage damping inner door skin, outer door skin, floor pan, rear wheel wells, and cabin roof.'
      },
      {
        title: 'Acoustic Decoupling Foam',
        description: 'Prevents plastic door trim panels from vibrating or buzzing against the inner metal skeleton.'
      },
      {
        title: 'Wheel Well Arch Armor',
        description: 'Exterior arch lining damping that drastically minimizes water splashing, gravel clicking, and tire tread noise.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Decibel Sound Measurement',
        description: 'We record baseline cabin noise levels at idle, 60 km/h, and 100 km/h using an acoustic decibel meter.'
      },
      {
        step: 2,
        title: 'Interior Stripping & Panel Degreasing',
        description: 'Seats, carpets, and door cards are unmounted, and bare sheet metal is cleaned with isopropyl alcohol.'
      },
      {
        step: 3,
        title: 'Heat Rolling & Vacuum Seal Application',
        description: 'Damping sheets are pressed firmly onto sheet metal contours using specialized high-pressure rollers to eliminate air bubbles.'
      },
      {
        step: 4,
        title: 'Final Decibel Audit & Precision Reassembly',
        description: 'Panels are reinstalled with new OEM trim clips, followed by a post-installation decibel test showing a significant drop in cabin noise.'
      }
    ],
    materialsAndTech: [
      'Dr. Artex / STP / Dampmat 2.2mm virgin butyl sheets',
      '100-micron cold-embossed aluminum constraining layer',
      '6mm waterproof closed-cell polyethylene foam',
      'Odorless, non-toxic, fire-retardant formulation'
    ],
    compatibleCars: [
      'All Hatchbacks, Sedans, Compact SUVs & Full-Size 4x4s',
      'Hyundai Creta / Alcazar',
      'Mahindra Scorpio-N / Thar / Thar Roxx',
      'Toyota Innova Hycross / Fortuner',
      'Maruti Grand Vitara / Brezza'
    ],
    warrantyInfo: 'Lifetime Adhesion Warranty against peeling, melting, or displacement.',
    timeRequired: '1 Working Day',
    priceStartingFrom: '₹9,500 (Doors) / ₹24,000 (Full Car)*',
    popularAddons: [
      'Underbody Rubberized Anti-Rust Coating',
      'Under-Bonnet Engine Sound Barrier Pad',
      'Acoustic Wheel Arch Fender Liners'
    ],
    faqs: [
      {
        question: 'Does sound damping make the car significantly heavier and decrease fuel efficiency?',
        answer: 'No. A standard 4-door damping package adds merely 8 to 11 kg of total weight to the vehicle—the equivalent of a light backpack. Even a full-floor, roof, and trunk treatment adds only around 20-25 kg, which produces no perceptible impact on fuel economy.'
      },
      {
        question: 'Will there be any foul rubber or tar smell inside the cabin when parked in the sun?',
        answer: 'Never. We exclusively use pure virgin butyl rubber sheets with aluminum foil backing. Unlike cheap asphalt or tar-based sheets sold by inexperienced shops, our damping materials are odorless, non-toxic, and rated to withstand temperatures up to 140°C.'
      }
    ]
  }
];
