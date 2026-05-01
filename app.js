const interests = [
  "AI",
  "Design",
  "Public Health",
  "Climate",
  "Robotics",
  "Economics",
  "Entrepreneurship",
  "Psychology",
  "Policy",
  "Digital Humanities",
];

const apOptions = [
  { id: "rc-a", label: "Reading & Composition A", fulfills: ["R&C A"] },
  { id: "rc-b", label: "Reading & Composition B", fulfills: ["R&C B"] },
  { id: "calc-ab", label: "AP Calculus AB / equivalent", fulfills: ["MATH 1A", "Calculus 1"] },
  { id: "calc-bc", label: "AP Calculus BC / equivalent", fulfills: ["MATH 1A", "MATH 1B", "Calculus 1", "Calculus 2"] },
  { id: "stats", label: "AP Statistics / intro stats credit", fulfills: ["STAT 20"] },
  { id: "lang", label: "Language requirement handled", fulfills: ["Foreign Language"] },
];

const domainEmphases = {
  "Applied Mathematics and Modeling": [
    course("MATH 53", "Multivariable Calculus", 4, true, ["domain", "math"], ["MATH 1B"], { assistEligible: true }),
    course("MATH 110", "Linear Algebra", 4, true, ["domain", "math"], ["MATH 54"]),
    course("MATH 128A", "Numerical Analysis", 4, true, ["domain", "math"], ["MATH 53", "MATH 54"]),
  ],
  "Business and Industrial Analytics": [
    course("UGBA 10", "Principles of Business", 3, false, ["domain", "Economics"]),
    course("IND ENG 115", "Industrial and Commercial Data Systems", 3, true, ["domain", "Economics"], ["DATA C100"]),
    course("IND ENG 162", "Linear Programming", 3, true, ["domain", "Economics"], ["MATH 54"]),
  ],
  Cognition: [
    course("COG SCI 1", "Introduction to Cognitive Science", 4, false, ["domain", "Psychology"], [], {
      assistEligible: true,
      breadthAreas: ["Social & Behavioral Sciences"],
      department: "COGSCI",
    }),
    course("COG SCI 131", "Computational Models of Cognition", 4, true, ["domain", "AI"], ["DATA C100"]),
    course("COG SCI 144", "Cognitive Science of Language", 3, false, ["domain", "Psychology"]),
  ],
  Economics: [
    course("ECON 1", "Introduction to Economics", 4, false, ["domain", "Economics"], [], { assistEligible: true }),
    course("ECON 100A", "Microeconomic Analysis", 4, false, ["domain", "Economics"], ["ECON 1"]),
    course("ECON 140", "Econometrics", 4, true, ["domain", "Economics"], ["DATA C140"]),
  ],
  "Human Behavior and Psychology": [
    course("PSYCH 1", "General Psychology", 3, false, ["domain", "Psychology"], [], { assistEligible: true }),
    course("PSYCH 101", "Research and Data Analysis", 4, true, ["domain", "Psychology"], ["DATA C102"]),
    course("PSYCH 148", "Psychological Data Science", 4, true, ["domain", "Psychology"], ["DATA C100"]),
  ],
  Robotics: [
    course("ENGIN 7", "Intro to Programming for Engineers", 4, true, ["domain", "Robotics"], [], { assistEligible: true }),
    course("EECS 106A", "Robotic Manipulation and Interaction", 4, true, ["domain", "Robotics"], ["COMPSCI 61A", "MATH 54"]),
    course("MEC ENG C106A", "Introduction to Robotics", 4, true, ["domain", "Robotics"], ["COMPSCI 61A", "MATH 54"]),
  ],
  "Science, Technology, and Society": [
    course("STS C10", "History of Science", 4, false, ["domain", "Policy"]),
    course("DATA C104", "Human Contexts and Ethics of Data", 4, false, ["domain", "Policy"]),
    course("INFO 188", "Behind the Data", 4, false, ["domain", "Policy"]),
  ],
  "Urban Science": [
    course("CY PLAN 110", "Introduction to City Planning", 3, false, ["domain", "Policy"]),
    course("CY PLAN 113A", "Urban Design", 4, false, ["domain", "Design"]),
    course("CY PLAN 140", "Urban Data Analytics", 4, true, ["domain", "Climate"], ["DATA C100"]),
  ],
};

const breadthAreas = [
  "Arts & Literature",
  "Biological Science",
  "Historical Studies",
  "International Studies",
  "Philosophy & Values",
  "Physical Science",
  "Social & Behavioral Sciences",
];

const breadthCourseOptions = [
  course("HISTART 11", "Introduction to European and American Art from the Renaissance to the Present", 4, false, ["Design", "Digital Humanities"], [], {
    breadthAreas: ["Arts & Literature", "Historical Studies"],
    department: "HISTART",
  }),
  course("INTEGBI 35AC", "Human Biological Variation", 4, false, ["Public Health", "Psychology"], [], {
    breadthAreas: ["Biological Science", "Social & Behavioral Sciences"],
    department: "INTEGBI",
    americanCultures: true,
  }),
  course("ESPM 50AC", "Introduction to Culture and Natural Resource Management", 4, false, ["Climate", "Policy"], [], {
    breadthAreas: ["Historical Studies", "Philosophy & Values", "Social & Behavioral Sciences"],
    department: "ESPM",
    americanCultures: true,
  }),
  course("GLOBAL 10A", "Introduction to Global Studies", 4, false, ["Policy", "Economics", "Climate"], [], {
    breadthAreas: ["International Studies", "Social & Behavioral Sciences"],
    department: "GLOBAL",
  }),
  course("PHILOS 2", "Individual Morality and Social Justice", 4, false, ["Policy", "Psychology"], [], {
    breadthAreas: ["Philosophy & Values", "Social & Behavioral Sciences"],
    department: "PHILOS",
  }),
  course("EPS 20", "Earthquakes in Your Backyard", 3, false, ["Climate"], [], {
    breadthAreas: ["Physical Science"],
    department: "EPS",
  }),
];

const baseCatalog = {
  "Computer Science (BA)": {
    intro: "Use Berkeley CS as a rigorous technical spine while spacing out high-intensity prerequisites and upper-division depth.",
    required: [
      course("COMPSCI 10", "The Beauty and Joy of Computing", 4, false, ["foundation"], [], { assistEligible: true }),
      course("COMPSCI 61A", "Structure and Interpretation of Computer Programs", 4, true, ["foundation"], [], { assistEligible: true }),
      course("COMPSCI 61B", "Data Structures", 4, true, ["core"], ["COMPSCI 61A"], { assistEligible: true }),
      course("COMPSCI 61C", "Machine Structures", 4, true, ["core"], ["COMPSCI 61B"], {
        assistEligible: true,
        breadthAreas: ["Physical Science"],
        department: "COMPSCI",
      }),
      course("COMPSCI 70", "Discrete Mathematics and Probability Theory", 4, true, ["core"], ["COMPSCI 61A"], { assistEligible: true }),
      course("MATH 1A", "Calculus", 4, true, ["foundation"], [], { assistEligible: true }),
      course("MATH 1B", "Calculus", 4, true, ["foundation"], ["MATH 1A"], { assistEligible: true }),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("CDSS Human & Social Dynamics", "Human and Social Dynamics of Data and Technology", 3, false, ["college"]),
      course("CDSS Statistical Reasoning", "Statistical Reasoning requirement", 3, false, ["college"], [], { assistEligible: true }),
      course("CS Upper Div 1", "Upper-division CS core", 4, true, ["upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
      course("CS Upper Div 2", "Upper-division CS core", 4, true, ["upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
      course("CS Upper Div 3", "Upper-division CS elective", 4, true, ["upperdiv"], ["COMPSCI 61B", "COMPSCI 70"]),
      course("CS Upper Div 4", "Upper-division CS elective", 4, true, ["upperdiv"], ["COMPSCI 61B", "COMPSCI 70"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 3", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 4", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["AI"], ["DATA C8", "COMPSCI 61A", "MATH 54"]),
      course("INFO 159", "Natural Language Processing", 4, true, ["AI"]),
      course("DES INV 15", "Design Methodology", 3, false, ["Design"]),
      course("PB HLTH 142", "Public Health Data", 3, false, ["Public Health"]),
      course("UGBA 192T", "Startup Entrepreneurship", 3, false, ["Entrepreneurship"]),
      course("DATA 144", "Data Mining and Analytics", 3, true, ["AI"]),
    ],
  },
  "Data Science (BA)": {
    intro: "Map Berkeley Data Science around real sequencing: lower-division foundations, probability/modeling/ethics, and a domain emphasis.",
    required: [
      course("DATA C8", "Foundations of Data Science", 4, false, ["foundation"], [], { assistEligible: true }),
      course("COMPSCI 61A", "Structure and Interpretation of Computer Programs", 4, true, ["foundation"], [], { assistEligible: true }),
      course("COMPSCI 61B", "Data Structures", 4, true, ["foundation"], ["COMPSCI 61A"], { assistEligible: true }),
      course("MATH 1A", "Calculus 1", 4, true, ["foundation"], [], { assistEligible: true }),
      course("MATH 1B", "Calculus 2", 4, true, ["foundation"], ["MATH 1A"], { assistEligible: true }),
      course("MATH 54", "Linear Algebra and Differential Equations", 4, true, ["foundation"], ["MATH 1A"], { assistEligible: true }),
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["core"], ["DATA C8", "COMPSCI 61A", "MATH 54"]),
      course("CID Depth 1", "Computational and Inferential Depth course", 4, true, ["core", "depth"], ["DATA C100", "COMPSCI 61B"]),
      course("CID Depth 2", "Computational and Inferential Depth course", 4, true, ["core", "depth"], ["DATA C100", "COMPSCI 61B"]),
      course("DATA C102", "Data, Inference, and Decisions", 4, true, ["core", "modeling"], ["DATA C8", "MATH 1B"]),
      course("DATA C104", "Human Contexts and Ethics of Data", 4, false, ["ethics"]),
      course("DATA C140", "Probability for Data Science", 4, true, ["core", "probability"], ["MATH 54"]),
      course("Domain Lower Slot", "Domain Emphasis Lower-Division Course", 4, false, ["domain"]),
      course("Domain Upper Slot 1", "Domain Emphasis Upper-Division Course", 4, false, ["domain"], ["DATA C100"]),
      course("Domain Upper Slot 2", "Domain Emphasis Upper-Division Course", 4, false, ["domain"], ["DATA C100"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 3", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 4", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("DATA 144", "Data Mining and Analytics", 3, true, ["AI"]),
      course("DATA C146", "Computational Precision Health", 3, true, ["Public Health"]),
      course("INFO 188", "Behind the Data", 4, false, ["Policy"]),
      course("CY PLAN 114A", "Planning for Sustainability", 3, false, ["Climate"]),
      course("HIST ART 190", "Digital Humanities Methods", 4, false, ["Digital Humanities"]),
      course("UGBA 104", "Business Data Decisions", 3, false, ["Entrepreneurship"]),
    ],
  },
  "Statistics (BA)": {
    intro: "Protect the statistics theory sequence while still leaving space for computing, application, and breadth.",
    required: [
      course("STAT 20", "Introduction to Probability and Statistics", 4, false, ["foundation"], [], { assistEligible: true }),
      course("COMPSCI 61A", "Structure and Interpretation of Computer Programs", 4, true, ["foundation"], [], { assistEligible: true }),
      course("MATH 1A", "Calculus 1", 4, true, ["foundation"], [], { assistEligible: true }),
      course("MATH 1B", "Calculus 2", 4, true, ["foundation"], ["MATH 1A"], { assistEligible: true }),
      course("MATH 53", "Multivariable Calculus", 4, true, ["foundation"], ["MATH 1B"], { assistEligible: true }),
      course("MATH 54", "Linear Algebra and Differential Equations", 4, true, ["foundation"], ["MATH 1A"], { assistEligible: true }),
      course("STAT 134", "Concepts of Probability", 4, true, ["core"], ["MATH 53", "MATH 54"]),
      course("STAT 135", "Concepts of Statistics", 4, true, ["core"], ["STAT 134"]),
      course("STAT 150", "Stochastic Processes", 4, true, ["upperdiv"], ["STAT 134"]),
      course("STAT 151A", "Linear Modelling", 4, true, ["upperdiv"], ["STAT 135"]),
      course("STAT 151B", "Machine Learning", 4, true, ["upperdiv"], ["STAT 151A"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("CDSS Human & Social Dynamics", "Human and Social Dynamics of Data and Technology", 3, false, ["college"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 3", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 4", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["AI"], ["DATA C8", "COMPSCI 61A", "MATH 54"]),
      course("PB HLTH 142", "Public Health Analytics", 3, false, ["Public Health"]),
      course("ECON 140", "Econometrics", 4, true, ["Economics"]),
      course("INFO 159", "Natural Language Processing", 4, true, ["AI"]),
      course("UGBA 192T", "Startup Entrepreneurship", 3, false, ["Entrepreneurship"]),
    ],
  },
  "Cognitive Science (BA)": {
    intro: "Balance mind, brain, computation, and society across a Berkeley Cognitive Science path.",
    required: [
      course("COG SCI 1", "Introduction to Cognitive Science", 4, false, ["foundation", "Psychology"], [], {
        breadthAreas: ["Social & Behavioral Sciences"],
        department: "COGSCI",
      }),
      course("COMPSCI 61A", "Structure and Interpretation of Computer Programs", 4, true, ["foundation"], []),
      course("LINGUIS 100", "Introduction to Linguistic Science", 4, false, ["foundation"]),
      course("PHILOS 12A", "Introduction to Logic", 4, false, ["foundation"]),
      course("PSYCH 1", "General Psychology", 3, false, ["foundation", "Psychology"]),
      course("COG SCI 131", "Computational Models of Cognition", 4, true, ["core", "AI"], ["COMPSCI 61A"]),
      course("COG SCI 132", "Cognitive Neuroscience", 4, false, ["core"]),
      course("COG SCI 144", "Cognitive Science of Language", 3, false, ["core", "Psychology"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 3", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["AI"], ["DATA C8", "COMPSCI 61A", "MATH 54"]),
      course("NEUROSC 102", "Introduction to Computational Neuroscience", 4, true, ["AI"]),
      course("DES INV 15", "Design Methodology", 3, false, ["Design"]),
      course("PHILOS 2", "Individual Morality and Social Justice", 4, false, ["Policy", "Psychology"]),
    ],
  },
  "Economics (BA)": {
    intro: "Build a Berkeley Economics path with theory, quantitative preparation, and room for policy or business interests.",
    required: [
      course("ECON 1", "Introduction to Economics", 4, false, ["foundation", "Economics"]),
      course("MATH 1A", "Calculus 1", 4, true, ["foundation"]),
      course("MATH 1B", "Calculus 2", 4, true, ["foundation"], ["MATH 1A"]),
      course("STAT 20", "Introduction to Probability and Statistics", 4, false, ["foundation"]),
      course("ECON 100A", "Microeconomic Analysis", 4, false, ["core", "Economics"], ["ECON 1"]),
      course("ECON 100B", "Macroeconomic Analysis", 4, false, ["core", "Economics"], ["ECON 1"]),
      course("ECON 140", "Econometrics", 4, true, ["core", "Economics"], ["STAT 20", "ECON 100A"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 3", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 4", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("UGBA 10", "Principles of Business", 3, false, ["Entrepreneurship", "Economics"]),
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["AI", "Economics"], ["DATA C8", "COMPSCI 61A", "MATH 54"]),
      course("GLOBAL 10A", "Introduction to Global Studies", 4, false, ["Policy", "Economics"]),
      course("PB HLTH 142", "Public Health Data", 3, false, ["Public Health"]),
    ],
  },
  "Political Science (BA)": {
    intro: "Shape a Berkeley Political Science plan with theory, institutions, methodology, and policy-facing breadth.",
    required: [
      course("POL SCI 1", "Introduction to American Politics", 4, false, ["foundation", "Policy"]),
      course("POL SCI 3", "Empirical Theory and Quantitative Methods", 4, true, ["foundation", "Policy"]),
      course("POL SCI 5", "Introduction to Comparative Politics", 4, false, ["foundation", "Policy"]),
      course("POL SCI 112A", "Political Theory", 4, false, ["core", "Policy"]),
      course("POL SCI 138A", "Comparative Politics", 4, false, ["core", "Policy"]),
      course("POL SCI 149E", "Research Design", 4, true, ["core", "Policy"], ["POL SCI 3"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 3", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("DATA C104", "Human Contexts and Ethics of Data", 4, false, ["Policy"]),
      course("GLOBAL 10A", "Introduction to Global Studies", 4, false, ["Policy"]),
      course("PHILOS 2", "Individual Morality and Social Justice", 4, false, ["Policy", "Psychology"]),
    ],
  },
  "English (BA)": {
    intro: "Balance reading, writing, historical periods, and flexible humanities exploration in an English path.",
    required: [
      course("ENGLISH 45A", "Literature in English: Early Literature", 4, false, ["foundation", "Digital Humanities"]),
      course("ENGLISH 45B", "Literature in English: 1660-1900", 4, false, ["foundation", "Digital Humanities"]),
      course("ENGLISH 45C", "Literature in English: 1900-Present", 4, false, ["foundation", "Digital Humanities"]),
      course("ENGLISH 90", "Methods of Literary Study", 4, false, ["core", "Digital Humanities"]),
      course("ENGLISH 100", "Seminar in Criticism", 4, false, ["core", "Digital Humanities"], ["ENGLISH 90"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 3", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("HISTART 11", "Introduction to European and American Art", 4, false, ["Design", "Digital Humanities"]),
      course("HIST ART 190", "Digital Humanities Methods", 4, false, ["Digital Humanities"]),
      course("DES INV 15", "Design Methodology", 3, false, ["Design"]),
    ],
  },
  "Molecular and Cell Biology (BA)": {
    intro: "Build an MCB pathway around biology, chemistry, lab science, and quantitative support courses.",
    required: [
      course("BIO 1A", "General Biology Lecture", 3, false, ["foundation", "Public Health"]),
      course("BIO 1AL", "General Biology Lab", 2, false, ["foundation"], ["BIO 1A"]),
      course("CHEM 1A", "General Chemistry", 3, true, ["foundation"]),
      course("CHEM 1AL", "General Chemistry Lab", 2, false, ["foundation"], ["CHEM 1A"]),
      course("CHEM 3A", "Organic Chemistry", 3, true, ["core"], ["CHEM 1A"]),
      course("CHEM 3AL", "Organic Chemistry Lab", 2, false, ["core"], ["CHEM 3A"]),
      course("MCB 102", "Survey of the Principles of Biochemistry and Molecular Biology", 4, true, ["core"], ["BIO 1A", "CHEM 3A"]),
      course("MCB 104", "Genetics, Genomics, and Cell Biology", 4, true, ["core"], ["BIO 1A"]),
      course("MATH 1A", "Calculus 1", 4, true, ["foundation"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Biological Science", "Biological Science breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Physical Science", "Physical Science breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("American Cultures", "American Cultures requirement", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward 120-unit minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward 120-unit minimum", 3, false, ["units"]),
    ],
    electives: [
      course("PB HLTH 142", "Public Health Data", 3, false, ["Public Health"]),
      course("DATA C146", "Computational Precision Health", 3, true, ["Public Health", "AI"]),
      course("INTEGBI 35AC", "Human Biological Variation", 4, false, ["Public Health", "Psychology"]),
    ],
  },
  "Mechanical Engineering (BS)": {
    intro: "Sequence calculus, physics, programming, and engineering design into a manageable Berkeley engineering roadmap.",
    required: [
      course("MATH 1A", "Calculus 1", 4, true, ["foundation"]),
      course("MATH 1B", "Calculus 2", 4, true, ["foundation"], ["MATH 1A"]),
      course("MATH 53", "Multivariable Calculus", 4, true, ["foundation"], ["MATH 1B"]),
      course("MATH 54", "Linear Algebra and Differential Equations", 4, true, ["foundation"], ["MATH 1A"]),
      course("PHYS 7A", "Physics for Scientists and Engineers", 4, true, ["foundation"]),
      course("PHYS 7B", "Physics for Scientists and Engineers", 4, true, ["foundation"], ["PHYS 7A"]),
      course("ENGIN 7", "Intro to Programming for Engineers", 4, true, ["foundation", "Robotics"]),
      course("E 25", "Engineering Graphics and Design", 2, false, ["core", "Design"]),
      course("MEC ENG 40", "Thermodynamics", 4, true, ["core"], ["PHYS 7A"]),
      course("MEC ENG C85", "Mechanics", 3, true, ["core"], ["PHYS 7A"]),
      course("MEC ENG 104", "Engineering Mechanics II", 4, true, ["core"], ["MEC ENG C85"]),
      course("R&C A", "Reading and Composition A", 4, false, ["breadth"]),
      course("R&C B", "Reading and Composition B", 4, false, ["breadth"], ["R&C A"]),
      course("Breadth: Arts & Literature", "Arts & Literature breadth", 3, false, ["breadth"]),
      course("Breadth: Historical Studies", "Historical Studies breadth", 3, false, ["breadth"]),
      course("Breadth: International Studies", "International Studies breadth", 3, false, ["breadth"]),
      course("Breadth: Philosophy & Values", "Philosophy & Values breadth", 3, false, ["breadth"]),
      course("Breadth: Social & Behavioral Sciences", "Social & Behavioral Sciences breadth", 3, false, ["breadth"]),
      course("Open Elective 1", "Open elective toward degree minimum", 3, false, ["units"]),
      course("Open Elective 2", "Open elective toward degree minimum", 3, false, ["units"]),
    ],
    electives: [
      course("DES INV 15", "Design Methodology", 3, false, ["Design"]),
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["AI"], ["DATA C8", "COMPSCI 61A", "MATH 54"]),
      course("EECS 16A", "Designing Information Devices and Systems I", 4, true, ["Robotics"]),
    ],
  },
};

const secondaryPrograms = {
  none: { label: "No secondary program", type: "none", required: [] },
  "Computer Science Minor": {
    label: "Computer Science Minor",
    type: "minor",
    required: [
      course("COMPSCI 61A", "Structure and Interpretation of Computer Programs", 4, true, ["secondary", "foundation"], [], { assistEligible: true }),
      course("COMPSCI 61B", "Data Structures", 4, true, ["secondary", "core"], ["COMPSCI 61A"], { assistEligible: true }),
      course("COMPSCI 61C", "Machine Structures", 4, true, ["secondary", "core"], ["COMPSCI 61B"], {
        assistEligible: true,
        breadthAreas: ["Physical Science"],
        department: "COMPSCI",
      }),
      course("COMPSCI 70", "Discrete Mathematics and Probability Theory", 4, true, ["secondary", "core"], ["COMPSCI 61A"], { assistEligible: true }),
      course("CS Minor Upper Div 1", "Minor upper-division CS course", 4, true, ["secondary", "upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
      course("CS Minor Upper Div 2", "Minor upper-division CS course", 4, true, ["secondary", "upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
      course("CS Minor Upper Div 3", "Minor upper-division CS course", 4, true, ["secondary", "upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
    ],
  },
  "Data Science Minor": {
    label: "Data Science Minor",
    type: "minor",
    required: [
      course("DATA C8", "Foundations of Data Science", 4, false, ["secondary", "foundation"], [], { assistEligible: true }),
      course("DATA C88C", "Computational Structures in Data Science", 4, true, ["secondary", "foundation"], [], { assistEligible: true }),
      course("DATA C88S", "Probability and Mathematical Statistics in Data Science", 4, true, ["secondary", "foundation"], ["MATH 1A"], { assistEligible: true }),
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["secondary", "core"], ["DATA C8", "DATA C88C", "MATH 54"]),
      course("DS Minor Upper Div 1", "Minor upper-division data science course", 4, true, ["secondary", "upperdiv"], ["DATA C100"]),
      course("DS Minor Upper Div 2", "Minor upper-division data science course", 4, true, ["secondary", "upperdiv"], ["DATA C100"]),
    ],
  },
  "Statistics Minor": {
    label: "Statistics Minor",
    type: "minor",
    required: [
      course("MATH 1A", "Calculus 1", 4, true, ["secondary", "foundation"], [], { assistEligible: true }),
      course("MATH 1B", "Calculus 2", 4, true, ["secondary", "foundation"], ["MATH 1A"], { assistEligible: true }),
      course("MATH 53", "Multivariable Calculus", 4, true, ["secondary", "foundation"], ["MATH 1B"], { assistEligible: true }),
      course("MATH 54", "Linear Algebra and Differential Equations", 4, true, ["secondary", "foundation"], ["MATH 1A"], { assistEligible: true }),
      course("STAT 134", "Concepts of Probability", 4, true, ["secondary", "core"], ["MATH 53", "MATH 54"]),
      course("STAT 135", "Concepts of Statistics", 4, true, ["secondary", "core"], ["STAT 134"]),
      course("STAT Minor Upper Div", "Minor upper-division statistics course", 4, true, ["secondary", "upperdiv"], ["STAT 135"]),
    ],
  },
  "Computer Science Double Major Track": {
    label: "Computer Science Double Major Track",
    type: "major",
    required: [
      course("COMPSCI 61C", "Machine Structures", 4, true, ["secondary", "core"], ["COMPSCI 61B"], {
        assistEligible: true,
        breadthAreas: ["Physical Science"],
        department: "COMPSCI",
      }),
      course("COMPSCI 70", "Discrete Mathematics and Probability Theory", 4, true, ["secondary", "core"], ["COMPSCI 61A"], { assistEligible: true }),
      course("CS Double Major Upper Div 1", "Upper-division CS course", 4, true, ["secondary", "upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
      course("CS Double Major Upper Div 2", "Upper-division CS course", 4, true, ["secondary", "upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
      course("CS Double Major Upper Div 3", "Upper-division CS course", 4, true, ["secondary", "upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
      course("CS Double Major Upper Div 4", "Upper-division CS course", 4, true, ["secondary", "upperdiv"], ["COMPSCI 61B", "COMPSCI 61C", "COMPSCI 70"]),
    ],
  },
  "Data Science Double Major Track": {
    label: "Data Science Double Major Track",
    type: "major",
    required: [
      course("DATA C100", "Principles and Techniques of Data Science", 4, true, ["secondary", "core"], ["DATA C8", "COMPSCI 61A", "MATH 54"]),
      course("DATA C102", "Data, Inference, and Decisions", 4, true, ["secondary", "core"], ["DATA C8", "MATH 1B"]),
      course("DATA C140", "Probability for Data Science", 4, true, ["secondary", "core"], ["MATH 54"]),
      course("DS Double Major Upper Div 1", "Upper-division data science course", 4, true, ["secondary", "upperdiv"], ["DATA C100"]),
      course("DS Double Major Upper Div 2", "Upper-division data science course", 4, true, ["secondary", "upperdiv"], ["DATA C100"]),
      course("DS Double Major Upper Div 3", "Upper-division data science course", 4, true, ["secondary", "upperdiv"], ["DATA C100"]),
    ],
  },
  "Statistics Double Major Track": {
    label: "Statistics Double Major Track",
    type: "major",
    required: [
      course("STAT 134", "Concepts of Probability", 4, true, ["secondary", "core"], ["MATH 53", "MATH 54"]),
      course("STAT 135", "Concepts of Statistics", 4, true, ["secondary", "core"], ["STAT 134"]),
      course("STAT 150", "Stochastic Processes", 4, true, ["secondary", "upperdiv"], ["STAT 134"]),
      course("STAT 151A", "Linear Modelling", 4, true, ["secondary", "upperdiv"], ["STAT 135"]),
      course("STAT 151B", "Machine Learning", 4, true, ["secondary", "upperdiv"], ["STAT 151A"]),
      course("STAT Double Major Upper Div", "Upper-division statistics elective", 4, true, ["secondary", "upperdiv"], ["STAT 135"]),
    ],
  },
};

const baseTerms = [
  "Year 1 / Fall",
  "Year 1 / Spring",
  "Year 2 / Fall",
  "Year 2 / Spring",
  "Year 3 / Fall",
  "Year 3 / Spring",
  "Year 4 / Fall",
  "Year 4 / Spring",
];

const majorSelect = document.querySelector("#major");
const domainSelect = document.querySelector("#domainEmphasis");
const domainLabel = document.querySelector("#domainLabel");
const secondarySelect = document.querySelector("#secondaryProgram");
const interestGrid = document.querySelector("#interestGrid");
const apGrid = document.querySelector("#apGrid");
const plannerForm = document.querySelector("#planner-form");
const semesterGrid = document.querySelector("#semesterGrid");
const semesterTemplate = document.querySelector("#semesterTemplate");
const creditsInput = document.querySelector("#creditsPerTerm");
const techInput = document.querySelector("#maxTechCourses");
const creditsValue = document.querySelector("#creditsValue");
const techValue = document.querySelector("#techValue");
const summerPreference = document.querySelector("#summerPreference");
const summerCredits = document.querySelector("#summerCredits");
const summerCreditsLabel = document.querySelector("#summerCreditsLabel");
const summerCreditsValue = document.querySelector("#summerCreditsValue");
const specialTermType = document.querySelector("#specialTermType");
const specialTermPlacement = document.querySelector("#specialTermPlacement");
const specialTermPlacementLabel = document.querySelector("#specialTermPlacementLabel");
const comparisonGrid = document.querySelector("#comparisonGrid");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatLog = document.querySelector("#chatLog");
const chatContext = document.querySelector("#chatContext");
const intelHeadline = document.querySelector("#intelHeadline");
const intelWhyList = document.querySelector("#intelWhyList");
const intelUnlockList = document.querySelector("#intelUnlockList");
const milestoneList = document.querySelector("#milestoneList");
const powerMovesGrid = document.querySelector("#powerMovesGrid");

let currentProfile = null;
let activeRenderedPlan = null;
let activePowerMoves = [];
const plannerChatState = {
  selectedCourseCode: null,
  selectedCourseName: null,
  selectedTermLabel: null,
  messages: [
    {
      role: "assistant",
      text: "Click any planned course, then ask for a change like “not in first semester”, “move this to Year 2 Spring”, or “don’t put this in summer.”",
    },
  ],
  rules: [],
};

boot();

function boot() {
  Object.keys(baseCatalog).forEach((major) => majorSelect.append(new Option(major, major)));
  Object.keys(domainEmphases).forEach((domain) => domainSelect.append(new Option(domain, domain)));

  interests.forEach((interest) => {
    const selected = ["AI", "Robotics", "Entrepreneurship"].includes(interest);
    interestGrid.append(buildChip("interest", interest, selected));
  });

  apOptions.forEach((item) => {
    apGrid.append(buildChip("ap", item.id, false, item.label));
  });

  majorSelect.value = "Data Science (BA)";
  domainSelect.value = "Robotics";

  creditsInput.addEventListener("input", () => {
    creditsValue.textContent = `${creditsInput.value} credits`;
  });

  techInput.addEventListener("input", () => {
    techValue.textContent = `${techInput.value} courses`;
  });

  summerCredits.addEventListener("input", () => {
    summerCreditsValue.textContent = `${summerCredits.value} credits`;
  });

  majorSelect.addEventListener("change", () => {
    syncConditionalFields();
    populateSecondaryPrograms();
    renderPlan();
  });

  summerPreference.addEventListener("change", () => {
    syncConditionalFields();
    renderPlan();
  });

  specialTermType.addEventListener("change", () => {
    syncConditionalFields();
    renderPlan();
  });

  plannerForm.addEventListener("change", renderPlan);
  plannerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPlan();
  });
  chatForm.addEventListener("submit", handleChatSubmit);
  powerMovesGrid.addEventListener("click", handlePowerMoveClick);
  comparisonGrid.addEventListener("click", handleComparisonClick);

  populateSecondaryPrograms();
  syncConditionalFields();
  renderChat();
  renderPlan();
}

function buildChip(group, value, selected = false, labelText = value) {
  const label = document.createElement("label");
  label.className = "chip";
  if (selected) label.classList.add("is-selected");
  label.innerHTML = `
    <input type="checkbox" name="${group}" value="${value}" ${selected ? "checked" : ""} />
    <span>${labelText}</span>
  `;
  label.querySelector("input").addEventListener("change", () => {
    label.classList.toggle("is-selected");
  });
  return label;
}

function populateSecondaryPrograms() {
  const primary = majorSelect.value;
  const previous = secondarySelect.value || "none";
  secondarySelect.innerHTML = "";

  Object.entries(secondaryPrograms).forEach(([key, program]) => {
    if (primary.startsWith("Computer Science") && key.startsWith("Computer Science ")) return;
    if (primary.startsWith("Data Science") && key.startsWith("Data Science ")) return;
    if (primary.startsWith("Statistics") && key.startsWith("Statistics ")) return;
    secondarySelect.append(new Option(program.label, key));
  });

  secondarySelect.value = Array.from(secondarySelect.options).some((option) => option.value === previous) ? previous : "none";
}

function syncConditionalFields() {
  domainLabel.style.display = majorSelect.value === "Data Science (BA)" ? "grid" : "none";
  summerCreditsLabel.style.display = summerPreference.value === "none" ? "none" : "grid";
  specialTermPlacementLabel.style.display = specialTermType.value === "none" ? "none" : "grid";
}

function readProfile() {
  return {
    studentName: document.querySelector("#studentName").value.trim() || "Student",
    major: majorSelect.value,
    startingPoint: document.querySelector("#transferGoal").value,
    earnedCredits: Number(document.querySelector("#earnedCredits").value) || 0,
    domainEmphasis: domainSelect.value,
    secondaryProgram: secondarySelect.value,
    creditsPerTerm: Number(creditsInput.value),
    maxTechCourses: Number(techInput.value),
    pacePreference: document.querySelector("#pacePreference").value,
    careerFocus: document.querySelector("#careerFocus").value,
    optimizationMode: document.querySelector("#optimizationMode").value,
    scenarioMode: document.querySelector("#scenarioMode").value,
    summerPreference: summerPreference.value,
    summerCredits: Number(summerCredits.value),
    specialTermType: specialTermType.value,
    specialTermPlacement: specialTermPlacement.value,
    interests: checkedValues("#interestGrid"),
    fulfilledCredits: checkedValues("#apGrid"),
    plannerRules: [...plannerChatState.rules],
  };
}

function checkedValues(selector) {
  return Array.from(document.querySelectorAll(`${selector} input:checked`)).map((input) => input.value);
}

function renderPlan() {
  currentProfile = readProfile();
  const plans = buildPlanComparisons(currentProfile);
  const plan = plans.find((item) => item.key === currentProfile.optimizationMode) || plans[0];
  activeRenderedPlan = plan;

  document.querySelector("#studentHeadline").textContent =
    `${currentProfile.studentName}'s ${currentProfile.major} roadmap is tuned for ${currentProfile.startingPoint.toLowerCase()}.`;
  document.querySelector("#trajectoryMetric").textContent = plan.trajectory;
  document.querySelector("#focusMetric").textContent = plan.focus;
  document.querySelector("#pressureMetric").textContent = plan.pressure;
  document.querySelector("#scoreMetric").textContent = `${plan.score.total} / 100`;

  fillList("#insightsList", plan.insights);
  fillList("#supportList", plan.support);
  fillList("#progressList", plan.progress);
  fillList("#riskList", plan.risks);
  renderComparisons(plans, plan.key);
  renderTerms(plan.terms);
  updateChatContext();
  renderCourseIntel();
  renderMilestones(plan, currentProfile);
  renderPowerMoves(plan, currentProfile);
}

function buildPlanComparisons(profile) {
  const variants = [
    ["balanced", { label: "Balanced default" }],
    ["fastest", { label: "Fastest completion" }],
    ["lowStress", { label: "Lowest stress" }],
    ["careerLaunch", { label: "Career launch" }],
  ];

  return variants.map(([key, meta]) => {
    const variantProfile = { ...profile, optimizationMode: key };
    const plan = buildPlan(variantProfile);
    return { ...plan, key, label: meta.label };
  });
}

function buildPlan(profile) {
  const majorPlan = structuredClone(baseCatalog[profile.major]);
  injectDomainCourses(majorPlan, profile);

  const secondaryProgram = secondaryPrograms[profile.secondaryProgram] || secondaryPrograms.none;
  const secondaryRequired = buildSecondaryRequirements(secondaryProgram, majorPlan);
  materializeBreadthAndAcRequirements(majorPlan, secondaryRequired, profile);
  const fulfilled = fulfilledCourseSet(profile.fulfilledCredits);
  const creditedUnits = roundUnits(profile.earnedCredits || 0);
  const plannedTerms = buildPlanningTerms(profile);
  const remainingRequired = [...majorPlan.required, ...secondaryRequired].filter((course) => !fulfilled.has(course.code));
  ensureUnitMinimum(remainingRequired, creditedUnits);
  const electivePool = pickElectives(majorPlan.electives, profile.interests, profile.careerFocus);
  const completed = new Set([...fulfilled]);
  const terms = [];

  plannedTerms.forEach((term, index) => {
    const planTerm = {
      label: term.label,
      season: term.season,
      kind: term.kind,
      credits: 0,
      techCourses: 0,
      courses: [],
    };

    if (term.kind === "special") {
      planTerm.courses.push(makeSpecialExperience(profile.specialTermType));
      terms.push(planTerm);
      return;
    }

    const targetCredits = term.kind === "summer"
      ? summerTargetCredits(profile)
      : adjustedCredits(profile.creditsPerTerm, profile.pacePreference, index, profile.startingPoint, profile.optimizationMode);
    term.targetCredits = targetCredits;
    const completedBeforeTerm = new Set(completed);

    let attempts = 0;
    while (planTerm.credits < targetCredits && attempts < 40) {
      attempts += 1;
      const nextRequired = chooseNextRequired(remainingRequired, completedBeforeTerm, planTerm, profile, term);
      const nextCourse =
        nextRequired ||
        chooseNextElective(electivePool, completedBeforeTerm, planTerm, profile, term, remainingRequired);

      if (!nextCourse) break;
      addCourseToTerm(nextCourse, planTerm, completed, remainingRequired, electivePool);
    }

    terms.push(planTerm);
  });

  const totalCredits = terms.reduce((sum, term) => sum + term.credits, 0);
  const countedUnits = roundUnits(totalCredits + creditedUnits);
  const unscheduledCount = remainingRequired.length;
  const score = scorePlan(profile, terms, unscheduledCount, countedUnits);
  const risks = makeRiskSummary(profile, terms, unscheduledCount, countedUnits);
  return {
    terms,
    trajectory: trajectoryLabel(countedUnits, profile, secondaryProgram),
    focus: focusLabel(profile, secondaryProgram),
    pressure: pressureLabel(terms, profile),
    insights: makeInsights(profile, terms, fulfilled, secondaryProgram),
    support: makeSupportRecommendations(profile, terms, secondaryProgram),
    progress: makeProgressSummary(profile, majorPlan, secondaryRequired, remainingRequired, fulfilled, totalCredits, countedUnits, creditedUnits),
    score,
    risks,
    countedUnits,
    creditedUnits,
  };
}

function injectDomainCourses(majorPlan, profile) {
  if (profile.major !== "Data Science (BA)") return;
  const selected = domainEmphases[profile.domainEmphasis] || [];
  const replacements = selected.map((item, index) => ({
    ...item,
    code: index === 0 ? `Domain Lower: ${item.code}` : `Domain Upper ${index}: ${item.code}`,
  }));
  const slotOrder = ["Domain Lower Slot", "Domain Upper Slot 1", "Domain Upper Slot 2"];
  let domainIndex = 0;
  majorPlan.required = majorPlan.required.map((courseItem) => {
    if (courseItem.code !== slotOrder[domainIndex]) return courseItem;
    const replacement = replacements[domainIndex];
    domainIndex += 1;
    return replacement || courseItem;
  });
}

function materializeBreadthAndAcRequirements(majorPlan, secondaryRequired, profile) {
  const baseRequired = [...majorPlan.required, ...secondaryRequired].filter((courseItem) => !isBreadthPlaceholder(courseItem) && courseItem.code !== "American Cultures");
  const usedCodes = new Set(baseRequired.map((courseItem) => courseItem.code));
  const departmentCounts = new Map();
  const coveredBreadth = new Set();
  let americanCulturesSatisfied = false;

  baseRequired.forEach((courseItem) => {
    (courseItem.breadthAreas || []).forEach((area) => {
      coveredBreadth.add(area);
      incrementDepartmentCount(departmentCounts, courseItem.department);
    });
    if (courseItem.americanCultures) americanCulturesSatisfied = true;
  });

  const selectedBreadth = new Map();
  breadthAreas.forEach((area) => {
    if (coveredBreadth.has(area)) return;
    const option = chooseBreadthOption(area, profile, departmentCounts, usedCodes);
    if (!option) return;
    selectedBreadth.set(area, {
      ...option,
      tags: [...option.tags, "breadth"],
      breadthChosen: area,
    });
    usedCodes.add(option.code);
    incrementDepartmentCount(departmentCounts, option.department);
    if (option.americanCultures) americanCulturesSatisfied = true;
  });

  const americanCulturesOption = americanCulturesSatisfied ? null : chooseAmericanCulturesOption(profile, departmentCounts, usedCodes);

  majorPlan.required = majorPlan.required.flatMap((courseItem) => {
    if (isBreadthPlaceholder(courseItem)) {
      const area = courseItem.code.replace("Breadth: ", "");
      if (coveredBreadth.has(area)) return [];
      return selectedBreadth.has(area) ? [selectedBreadth.get(area)] : [courseItem];
    }

    if (courseItem.code === "American Cultures") {
      if (americanCulturesSatisfied) return [];
      return americanCulturesOption ? [{ ...americanCulturesOption, tags: [...americanCulturesOption.tags, "american-cultures"] }] : [courseItem];
    }

    return [courseItem];
  });
}

function chooseBreadthOption(area, profile, departmentCounts, usedCodes) {
  return breadthCourseOptions
    .filter((courseItem) => courseItem.breadthAreas.includes(area))
    .filter((courseItem) => !usedCodes.has(courseItem.code))
    .filter((courseItem) => (departmentCounts.get(courseItem.department) || 0) < 2)
    .sort((a, b) => breadthPreferenceScore(b, area, profile) - breadthPreferenceScore(a, area, profile))[0];
}

function chooseAmericanCulturesOption(profile, departmentCounts, usedCodes) {
  return breadthCourseOptions
    .filter((courseItem) => courseItem.americanCultures)
    .filter((courseItem) => !usedCodes.has(courseItem.code))
    .filter((courseItem) => (departmentCounts.get(courseItem.department) || 0) < 2)
    .sort((a, b) => breadthPreferenceScore(b, "American Cultures", profile) - breadthPreferenceScore(a, "American Cultures", profile))[0];
}

function breadthPreferenceScore(courseItem, area, profile) {
  let score = 0;
  if (profile.interests.some((interest) => courseItem.tags.includes(interest))) score += 8;
  if (area === "Physical Science" && courseItem.code === "COMPSCI 61C") score += 6;
  if (profile.careerFocus === "community" && (courseItem.tags.includes("Policy") || courseItem.tags.includes("Public Health"))) score += 3;
  if (profile.careerFocus === "research" && area === "Physical Science") score += 2;
  if (profile.careerFocus === "startup" && courseItem.tags.includes("Design")) score += 2;
  return score;
}

function isBreadthPlaceholder(courseItem) {
  return courseItem.code.startsWith("Breadth: ");
}

function incrementDepartmentCount(counts, department) {
  if (!department) return;
  counts.set(department, (counts.get(department) || 0) + 1);
}

function buildSecondaryRequirements(program, majorPlan) {
  if (program.type === "none") return [];
  const primaryCodes = new Set(majorPlan.required.map((courseItem) => courseItem.code));
  const seeded = program.required
    .filter((courseItem) => !primaryCodes.has(courseItem.code))
    .map((courseItem) => ({ ...courseItem, tags: [...courseItem.tags, program.type] }));
  return expandRequirementsWithPrereqs(seeded, primaryCodes);
}

function expandRequirementsWithPrereqs(requirements, primaryCodes) {
  const expanded = [...requirements];
  const seen = new Set([...primaryCodes, ...expanded.map((courseItem) => courseItem.code)]);

  for (let index = 0; index < expanded.length; index += 1) {
    const courseItem = expanded[index];
    (courseItem.prereqs || []).forEach((prereqCode) => {
      if (seen.has(prereqCode)) return;
      const prereqCourse = findCourseDefinition(prereqCode);
      if (!prereqCourse) return;
      expanded.unshift({ ...prereqCourse, tags: [...prereqCourse.tags, "secondary", "prereq-bridge"] });
      seen.add(prereqCode);
    });
  }

  return expanded;
}

function findCourseDefinition(code) {
  const sources = [
    ...Object.values(baseCatalog).flatMap((program) => [...program.required, ...program.electives]),
    ...Object.values(domainEmphases).flat(),
    ...Object.values(secondaryPrograms).flatMap((program) => program.required || []),
  ];
  return sources.find((courseItem) => courseItem.code === code);
}

function fulfilledCourseSet(selectedApIds) {
  const fulfilled = new Set();
  selectedApIds.forEach((id) => {
    const match = apOptions.find((item) => item.id === id);
    if (match) {
      match.fulfills.forEach((code) => fulfilled.add(code));
    }
  });
  return fulfilled;
}

function ensureUnitMinimum(remainingRequired, creditedUnits) {
  const currentCredits = remainingRequired.reduce((sum, courseItem) => sum + courseItem.credits, 0) + creditedUnits;
  let runningCredits = currentCredits;
  let electiveIndex = remainingRequired.filter((courseItem) => courseItem.tags.includes("units")).length + 1;

  while (runningCredits < 120) {
    remainingRequired.push(
      course(
        `Open Elective ${electiveIndex}`,
        "Open elective toward Berkeley's 120-unit minimum",
        3,
        false,
        ["units"]
      )
    );
    runningCredits += 3;
    electiveIndex += 1;
  }
}

function roundUnits(value) {
  return Math.round(value * 10) / 10;
}

function buildPlanningTerms(profile) {
  const terms = [];
  baseTerms.forEach((label) => {
    terms.push({ label, season: defaultSeason(label, profile), kind: "semester" });
    if (profile.specialTermType !== "none" && profile.specialTermPlacement === label) {
      terms.push({ label: `${label} / ${formatSpecialLabel(profile.specialTermType)}`, season: "Optional experiential term", kind: "special" });
    }
    if (profile.summerPreference !== "none" && label.includes("Spring") && !label.startsWith("Year 4")) {
      const year = label.split(" / ")[0];
      terms.push({ label: `${year} / Summer`, season: "Optional summer session", kind: "summer" });
    }
  });
  return terms;
}

function defaultSeason(label, profile) {
  if (profile.major === "Data Science (BA)" && label.includes("Year 3")) {
    return `${profile.domainEmphasis} depth`;
  }
  return label.includes("Fall") ? "Core momentum" : "Breadth + balance";
}

function summerTargetCredits(profile) {
  return profile.summerPreference === "light" ? Math.min(6, profile.summerCredits) : profile.summerCredits;
}

function makeSpecialExperience(type) {
  if (type === "gap") return course("GAP", "Gap term for rest, planning, or life logistics", 0, false, ["experience"]);
  if (type === "research") return course("RESEARCH", "Research term / URAP-style focus", 0, false, ["experience"]);
  return course("CO-OP", "Co-op / internship term", 0, false, ["experience"]);
}

function chooseNextRequired(remainingRequired, completed, term, profile, termInfo) {
  return remainingRequired
    .filter((courseItem) => prereqsMet(courseItem, completed))
    .filter((courseItem) => fitsTerm(courseItem, term, profile, termInfo))
    .sort((a, b) => scoreCourse(b, profile, termInfo, term, remainingRequired) - scoreCourse(a, profile, termInfo, term, remainingRequired))[0];
}

function chooseNextElective(electivePool, completed, term, profile, termInfo, remainingRequired) {
  if (remainingRequired.some((courseItem) => !courseItem.tags.includes("units"))) {
    return undefined;
  }

  return electivePool
    .filter((courseItem) => !completed.has(courseItem.code))
    .filter((courseItem) => prereqsMet(courseItem, completed))
    .filter((courseItem) => fitsTerm(courseItem, term, profile, termInfo))
    .map((courseItem) => ({ ...courseItem, electiveChoice: true }))
    .sort((a, b) => scoreCourse(b, profile, termInfo, term, remainingRequired) - scoreCourse(a, profile, termInfo, term, remainingRequired))[0];
}

function fitsTerm(courseItem, term, profile, termInfo) {
  if (!techAllowanceMet(courseItem, term, termInfo, profile.maxTechCourses)) return false;
  if (termInfo.kind === "summer" && courseItem.tags.includes("upperdiv")) return false;
  if (termInfo.kind === "summer" && courseItem.tech && term.techCourses >= 1) return false;
  if (isScenarioBlocked(courseItem, termInfo, profile)) return false;
  if (!satisfiesPlannerRules(courseItem, termInfo, profile.plannerRules || [])) return false;
  if (term.credits + courseItem.credits > termInfo.targetCredits) return false;
  return true;
}

function scoreCourse(courseItem, profile, termInfo, term, remainingRequired = []) {
  let score = 0;
  if (courseItem.tags.includes("foundation")) score += termInfo.kind === "summer" ? 6 : 8;
  if (courseItem.tags.includes("core")) score += 7;
  if (courseItem.tags.includes("breadth")) score += profile.pacePreference === "light" ? 4 : 2;
  if (courseItem.tags.includes("college")) score += 3;
  if (courseItem.tags.includes("units")) score += 1;
  if (courseItem.tags.includes("domain")) score += profile.major === "Data Science (BA)" ? 6 : 0;
  if (courseItem.tags.includes("ethics")) score += 5;
  if (courseItem.tags.includes("probability")) score += 5;
  if (courseItem.tags.includes("modeling")) score += 4;
  if (courseItem.tags.includes("depth")) score += 4;
  if (courseItem.tags.includes("secondary")) score += profile.secondaryProgram === "none" ? 0 : 5;
  if (courseItem.tags.includes("upperdiv")) score += termInfo.label.startsWith("Year 1") ? -2 : 5;
  if (profile.interests.some((interest) => courseItem.tags.includes(interest))) score += 8;
  if (profile.careerFocus === "startup" && courseItem.tags.includes("Entrepreneurship")) score += 5;
  if (profile.careerFocus === "community" && (courseItem.tags.includes("Policy") || courseItem.tags.includes("Public Health"))) score += 5;
  if (profile.careerFocus === "research" && courseItem.tags.includes("math")) score += 4;
  if (profile.optimizationMode === "fastest" && courseItem.tags.includes("foundation")) score += 6;
  if (profile.optimizationMode === "fastest" && courseItem.tags.includes("core")) score += 5;
  if (profile.optimizationMode === "fastest" && courseItem.tags.includes("upperdiv")) score += 3;
  if (profile.optimizationMode === "fastest" && courseItem.tags.includes("breadth") && termInfo.label.startsWith("Year 1")) score -= 3;
  if (profile.optimizationMode === "lowStress" && courseItem.tags.includes("breadth")) score += 5;
  if (profile.optimizationMode === "lowStress" && !courseItem.tech) score += 2;
  if (profile.optimizationMode === "lowStress" && courseItem.tech) score -= 5;
  if (profile.optimizationMode === "careerLaunch" && (courseItem.tags.includes("AI") || courseItem.tags.includes("Entrepreneurship") || courseItem.tags.includes("Policy") || courseItem.tags.includes("domain"))) score += 7;
  if (profile.optimizationMode === "careerLaunch" && courseItem.tags.includes("breadth") && (termInfo.label.startsWith("Year 1") || termInfo.label.startsWith("Year 2"))) score -= 2;
  score += downstreamUnlockCount(courseItem.code, remainingRequired) * 4;
  if (term.credits >= Math.max(0, profile.creditsPerTerm - 4) && courseItem.credits === 4) score -= 2;
  if (term.techCourses > 0 && courseItem.tech) score -= 2;
  if (profile.optimizationMode === "lowStress" && term.techCourses > 0 && courseItem.tech) score -= 4;
  if (term.courses.some((existing) => existing.tags.includes("breadth")) && courseItem.tags.includes("breadth")) score -= 1;
  if (term.courses.some((existing) => existing.tags.includes("domain")) && courseItem.tags.includes("domain")) score -= 2;
  return score;
}

function pickElectives(electives, selectedInterests, careerFocus) {
  const chosen = electives.filter((courseItem) => selectedInterests.some((interest) => courseItem.tags.includes(interest)));
  if (careerFocus === "startup" && !chosen.some((courseItem) => courseItem.tags.includes("Entrepreneurship"))) {
    const startupCourse = electives.find((courseItem) => courseItem.tags.includes("Entrepreneurship"));
    if (startupCourse) chosen.push(startupCourse);
  }
  return chosen.length ? chosen : electives.slice(0, 3);
}

function addCourseToTerm(courseItem, term, completed, remainingRequired, electivePool) {
  term.courses.push(courseItem);
  term.credits += courseItem.credits;
  term.techCourses += courseItem.tech ? 1 : 0;
  completed.add(courseItem.code);
  if (courseItem.electiveChoice) {
    removeFirstTaggedCourse(remainingRequired, "units");
  } else {
    removeCourse(remainingRequired, courseItem.code);
  }
  removeCourse(electivePool, courseItem.code);
}

function downstreamUnlockCount(code, remainingRequired) {
  return remainingRequired.filter((courseItem) => (courseItem.prereqs || []).includes(code)).length;
}

function adjustedCredits(baseCredits, pacePreference, termIndex, startingPoint, optimizationMode = "balanced") {
  let target = baseCredits;
  if (pacePreference === "ambitious") target += termIndex < 4 ? 1 : 0;
  if (pacePreference === "light") target -= termIndex % 2 === 0 ? 2 : 1;
  if (startingPoint === "Transfer applicant") target = Math.max(target, 15);
  if (optimizationMode === "lowStress") target -= termIndex < 4 ? 2 : 1;
  if (optimizationMode === "fastest") target += termIndex < 6 ? 2 : 1;
  if (optimizationMode === "careerLaunch") target += termIndex < 4 ? 1 : 0;
  return Math.min(18, Math.max(9, target));
}

function trajectoryLabel(totalCredits, profile, secondaryProgram) {
  if (profile.startingPoint === "Transfer applicant") {
    return totalCredits >= 120 ? "Transfer-compressed" : "Needs tighter transfer sequencing";
  }
  if (secondaryProgram.type === "major") {
    return totalCredits >= 128 ? "Ambitious double-major pace" : "Double-major stretch";
  }
  return totalCredits >= 120 ? "Berkeley-ready pace" : "Steadier four-year pace";
}

function focusLabel(profile, secondaryProgram) {
  if (secondaryProgram.type !== "none") {
    return `${profile.major} + ${secondaryPrograms[profile.secondaryProgram].label}`;
  }
  if (profile.major === "Data Science (BA)") return `${profile.domainEmphasis} emphasis + DS core`;
  if (profile.major === "Computer Science (BA)") return "CS lower divs + upper-div launch";
  return "Probability + modeling spine";
}

function pressureLabel(terms, profile) {
  const semesterTerms = terms.filter((term) => term.kind === "semester");
  const averageCredits = semesterTerms.length
    ? semesterTerms.reduce((sum, term) => sum + term.credits, 0) / semesterTerms.length
    : profile.creditsPerTerm;
  const maxTech = Math.max.apply(null, semesterTerms.map((term) => term.techCourses).concat([0]));

  if (averageCredits >= 15.5 || maxTech >= Math.max(2, profile.maxTechCourses)) return "High-energy";
  if (averageCredits <= 11.5 || (maxTech <= 1 && profile.optimizationMode === "lowStress")) return "Low-burn";
  return "Medium";
}

function makeInsights(profile, terms, fulfilled, secondaryProgram) {
  const maxTechSeen = Math.max(...terms.map((term) => term.techCourses));
  const summerCount = terms.filter((term) => term.kind === "summer").length;
  return [
    `Prerequisites are enforced before a course can appear later in the roadmap, so upper-division work does not jump ahead of lower-division gates.`,
    `Your plan never exceeds ${maxTechSeen} tech-heavy course${maxTechSeen === 1 ? "" : "s"} in a single active term.`,
    summerCount
      ? `${summerCount} summer term${summerCount === 1 ? "" : "s"} were added because you said you are open to summer study.`
      : `No summer terms were added, so the planner keeps everything in fall and spring unless you change that setting.`,
    secondaryProgram.type !== "none"
      ? `${secondaryPrograms[profile.secondaryProgram].label} is being factored in alongside the primary plan.`
      : `No secondary program is being forced into the schedule right now.`,
    profile.scenarioMode === "gatewayDelay"
      ? `The what-if simulator is currently modeling a delayed gateway prerequisite, so downstream classes are intentionally pushed back.`
      : profile.scenarioMode === "studyAbroad"
        ? `The what-if simulator is currently protecting Year 3 Fall for study abroad, so the plan shifts heavier sequencing around it.`
        : profile.scenarioMode === "internshipHeavy"
          ? `The what-if simulator is currently shaping Year 2 around internship readiness and lighter in-term load.`
          : `No what-if disruption is active right now.`,
    fulfilled.size
      ? `${fulfilled.size} AP or transfer-credit equivalenc${fulfilled.size === 1 ? "y was" : "ies were"} used to remove requirements.`
      : "No AP or transfer credit has been applied yet, so the full requirement skeleton stays visible.",
  ];
}

function makeSupportRecommendations(profile, terms, secondaryProgram) {
  const heavyTerm = terms.find((term) => term.techCourses >= profile.maxTechCourses);
  const items = [
    "Use this as a draft, then verify live Berkeley prerequisites, seat restrictions, and offering patterns before enrolling.",
    "Use Berkeley department pages and advising notes to verify requirement lists, overlap rules, and course offering cadence.",
  ];
  if (profile.specialTermType !== "none") {
    items.push(`${formatSpecialLabel(profile.specialTermType)} is optional here, not forced. Shift or remove it if finances, recruiting, or personal timing change.`);
  }
  if (profile.major === "Data Science (BA)") {
    items.push(`For ${profile.domainEmphasis}, keep backup domain courses in mind because some non-Data-Science departments limit access.`);
  }
  if (profile.optimizationMode === "careerLaunch") {
    items.push("This version prioritizes momentum for internships or recruiting, so portfolio-building or applied courses may appear earlier than in the calmer plans.");
  }
  if (secondaryProgram.type === "minor") {
    items.push("Berkeley minor pages note that no more than one upper-division course may overlap between a major and minor, so advisor review matters here.");
  }
  if (secondaryProgram.type === "major") {
    items.push("Berkeley major pages note that no more than two upper-division courses can overlap between two majors, so this should be checked with an adviser.");
  }
  if (heavyTerm) {
    items.push(`${heavyTerm.label} hits your tech-course cap, so that is the term to protect with lighter breadth or reduced extracurricular load.`);
  }
  return items;
}

function scorePlan(profile, terms, unscheduledCount, countedUnits) {
  const totalUnits = terms.reduce((sum, term) => sum + term.credits, 0);
  const overloaded = terms.filter((term) => term.techCourses > Math.max(1, profile.maxTechCourses)).length;
  const emptyTerms = terms.filter((term) => term.kind === "semester" && term.courses.length === 0).length;
  const breadthProgress = terms.flatMap((term) => term.courses).filter((courseItem) => courseItem.tags.includes("breadth")).length;
  const careerCourses = terms.flatMap((term) => term.courses).filter((courseItem) => courseItem.tags.includes("AI") || courseItem.tags.includes("Entrepreneurship") || courseItem.tags.includes("Policy")).length;

  const completion = Math.max(0, 40 - unscheduledCount * 3 - (countedUnits < 120 ? 8 : 0));
  const workload = Math.max(0, 25 - overloaded * 8 - emptyTerms * 3);
  const breadth = Math.min(15, breadthProgress * 2);
  const career = Math.min(20, careerCourses * 3);
  const total = Math.max(0, Math.min(100, completion + workload + breadth + career));

  return {
    total,
    completion,
    workload,
    breadth,
    career,
    totalUnits,
    countedUnits,
  };
}

function makeRiskSummary(profile, terms, unscheduledCount, countedUnits) {
  const risks = [];
  const highTechTerms = terms.filter((term) => term.techCourses >= profile.maxTechCourses && term.kind !== "summer");
  if (highTechTerms.length) {
    risks.push(`${highTechTerms[0].label} is your first bottleneck term for technical intensity.`);
  }
  if (countedUnits < 120) {
    risks.push(`This roadmap is still below Berkeley's 120-unit minimum, so more credit-bearing coursework is needed.`);
  }
  if (unscheduledCount > 0) {
    risks.push(`${unscheduledCount} requirement slot${unscheduledCount === 1 ? "" : "s"} are still unscheduled, so this is a draft rather than a finished audit.`);
  }
  if (profile.scenarioMode === "gatewayDelay") {
    risks.push("A delayed gateway prerequisite can cascade into later core courses, especially in majors with tight lower-division sequencing.");
  }
  if (profile.scenarioMode === "studyAbroad") {
    risks.push("Study abroad protection reduces flexibility in the surrounding terms, so watch for unit spikes before and after Year 3 Fall.");
  }
  if (profile.scenarioMode === "internshipHeavy") {
    risks.push("Internship-heavy planning may trade off earlier completion for stronger applied experience.");
  }
  if (!risks.length) {
    risks.push("No major structural risk jumped out from this draft, but offering cadence and overlap rules still need Berkeley source verification.");
  }
  return risks;
}

function isScenarioBlocked(courseItem, termInfo, profile) {
  if (profile.scenarioMode === "studyAbroad" && termInfo.label === "Year 3 / Fall" && courseItem.credits > 0) return true;
  if (profile.scenarioMode === "internshipHeavy" && (termInfo.label === "Year 2 / Spring" || termInfo.label === "Year 2 / Summer") && courseItem.tech) return courseItem.credits > 3;
  if (profile.scenarioMode !== "gatewayDelay") return false;

  const delayedCode = pickScenarioGateway(profile.major);
  return termInfo.label === "Year 1 / Fall" && courseItem.code === delayedCode;
}

function pickScenarioGateway(major) {
  if (major === "Data Science (BA)") return "COMPSCI 61A";
  if (major === "Computer Science (BA)") return "COMPSCI 61A";
  if (major === "Statistics (BA)") return "MATH 1A";
  return "R&C A";
}

function renderComparisons(plans, activeKey) {
  comparisonGrid.innerHTML = "";
  const bestScore = Math.max(...plans.map((plan) => plan.score.total));
  const baseline = plans.find((plan) => plan.key === "balanced") || plans[0];

  plans.forEach((plan) => {
    const article = document.createElement("article");
    article.className = `comparison-card${plan.score.total === bestScore ? " is-best" : ""}${plan.key === activeKey ? " is-active" : ""}`;
    article.dataset.planKey = plan.key;
    const highlights = comparisonHighlights(plan, baseline);
    article.innerHTML = `
      <div class="comparison-topline">
        <div>
          <p class="eyebrow">${plan.label}</p>
          <h3>${plan.key === activeKey ? "Current roadmap" : "Alternative"}</h3>
        </div>
        ${plan.score.total === bestScore ? '<span class="comparison-badge">Best score</span>' : ""}
      </div>
      <div class="comparison-score">${plan.score.total}</div>
      <ul class="comparison-list">
        ${highlights.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <span class="comparison-cta">${plan.key === activeKey ? "Active plan" : "Use this roadmap"}</span>
    `;
    comparisonGrid.append(article);
  });
}

function comparisonHighlights(plan, baseline) {
  const changes = compareCoursePlacements(baseline.terms, plan.terms).filter((item) => item.code !== "GAP" && item.code !== "RESEARCH" && item.code !== "CO-OP");
  const gateway = gatewayCourseForMajor(currentProfile.major);
  const gatewayTerm = findCourseTermLabel(plan.terms, gateway) || "later in the plan";
  const yearTwoCareerCourses = countTaggedCoursesThroughYear(plan.terms, ["AI", "Entrepreneurship", "Policy", "domain"], 2);
  const yearOneBreadthCourses = countTaggedCoursesThroughYear(plan.terms, ["breadth"], 1);
  const averageCredits = averageSemesterCredits(plan.terms);

  if (plan.key === "fastest") {
    return [
      `Front-loads gateway progress, with ${gateway} landing by ${gatewayTerm}.`,
      `${averageCredits.toFixed(1)} average semester units keeps completion moving faster than the default plan.`,
      `${changes.length} course placements differ from the balanced roadmap.`,
      `${plan.countedUnits} counted units including external credit.`,
    ];
  }

  if (plan.key === "lowStress") {
    return [
      `Spreads pressure more gently, averaging ${averageCredits.toFixed(1)} units per regular semester.`,
      `${yearOneBreadthCourses} breadth or lighter requirement slot${yearOneBreadthCourses === 1 ? "" : "s"} appear by the end of Year 1 to soften the core ramp.`,
      `${changes.length} placement change${changes.length === 1 ? "" : "s"} from the balanced roadmap create the calmer version.`,
      `${plan.countedUnits} counted units including external credit.`,
    ];
  }

  if (plan.key === "careerLaunch") {
    return [
      `${yearTwoCareerCourses} career-facing course slot${yearTwoCareerCourses === 1 ? "" : "s"} appear by the end of Year 2.`,
      `Brings opportunity-building classes forward while keeping ${gateway} on track for ${gatewayTerm}.`,
      `${changes.length} placement change${changes.length === 1 ? "" : "s"} from the balanced roadmap support earlier momentum.`,
      `${plan.countedUnits} counted units including external credit.`,
    ];
  }

  return [
    `Balanced default keeps ${gateway} moving toward ${gatewayTerm} without overcommitting early.`,
    `${averageCredits.toFixed(1)} average semester units aim for a steadier four-year pace.`,
    `${yearTwoCareerCourses} career-facing course slot${yearTwoCareerCourses === 1 ? "" : "s"} appear by the end of Year 2.`,
    `${plan.countedUnits} counted units including external credit.`,
  ];
}

function handleComparisonClick(event) {
  const card = event.target.closest("[data-plan-key]");
  if (!card) return;
  if (card.dataset.planKey === document.querySelector("#optimizationMode").value) return;
  document.querySelector("#optimizationMode").value = card.dataset.planKey;
  renderPlan();
}

function makeProgressSummary(profile, majorPlan, secondaryRequired, remainingRequired, fulfilled, totalCredits, countedUnits, creditedUnits) {
  const trackedCount = majorPlan.required.length + secondaryRequired.length;
  const unscheduled = remainingRequired.length;
  const placed = trackedCount - unscheduled;
  return [
    `${placed} of ${trackedCount} tracked requirement slots are already satisfied or placed.`,
    `${unscheduled} tracked requirement slot${unscheduled === 1 ? "" : "s"} remain unscheduled before open electives and free units.`,
    `${totalCredits} planned Berkeley units are currently distributed across the roadmap.`,
    `${countedUnits} counted units are currently on the degree path, including ${creditedUnits} already-earned credit unit${creditedUnits === 1 ? "" : "s"}.`,
    profile.major === "Data Science (BA)" ? `Domain emphasis selected: ${profile.domainEmphasis}.` : `Primary major: ${profile.major}.`,
    `Secondary program: ${secondaryPrograms[profile.secondaryProgram].label}. AP / transfer fulfillments applied: ${fulfilled.size || 0}.`,
  ];
}

function renderTerms(terms) {
  semesterGrid.innerHTML = "";
  terms.forEach((term) => {
    const node = semesterTemplate.content.cloneNode(true);
    node.querySelector(".semester-label").textContent = term.label;
    node.querySelector(".semester-title").textContent = term.season;
    node.querySelector(".semester-badge").textContent = term.kind === "special"
      ? "Optional experience"
      : term.techCourses
        ? `${term.techCourses} tech-heavy`
        : "Lower pressure";
    node.querySelector(".credit-total").textContent = `${term.credits} credits`;
    node.querySelector(".tech-total").textContent = `${term.courses.length} planned items`;

    const courseList = node.querySelector(".course-list");
    term.courses.forEach((courseItem) => {
      const item = document.createElement("li");
      item.dataset.courseCode = courseItem.code;
      item.dataset.courseName = courseItem.name;
      if (plannerChatState.selectedCourseCode === courseItem.code) {
        item.classList.add("is-selected");
      }
      item.innerHTML = `
        <strong>${courseItem.code} · ${courseItem.name}</strong>
        <span class="course-meta">${courseItem.credits} credits · ${courseItem.tech ? "Tech-heavy" : "Balanced"} · ${courseItem.tags.join(", ")}</span>
      `;
      item.addEventListener("click", () => selectCourseForChat(courseItem, term.label));
      courseList.append(item);
    });

    semesterGrid.append(node);
  });
}

function handleChatSubmit(event) {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  plannerChatState.messages.push({ role: "user", text });
  const result = parsePlannerInstruction(text);
  plannerChatState.messages.push({ role: "assistant", text: result.reply });

  if (result.rule) {
    plannerChatState.rules = mergePlannerRule(plannerChatState.rules, result.rule);
    renderPlan();
  }

  renderChat();
  chatInput.value = "";
}

function renderChat() {
  chatLog.innerHTML = "";
  plannerChatState.messages.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${message.role}`;
    bubble.innerHTML = `
      <span class="chat-role">${message.role === "assistant" ? "Planner" : "You"}</span>
      <p>${message.text}</p>
    `;
    chatLog.append(bubble);
  });
  chatLog.scrollTop = chatLog.scrollHeight;
}

function selectCourseForChat(courseItem, termLabel) {
  plannerChatState.selectedCourseCode = courseItem.code;
  plannerChatState.selectedCourseName = courseItem.name;
  plannerChatState.selectedTermLabel = termLabel;
  updateChatContext();
  renderTerms(activeRenderedPlan ? activeRenderedPlan.terms : []);
  renderCourseIntel();
}

function updateChatContext() {
  if (!plannerChatState.selectedCourseCode) {
    chatContext.textContent = "Click a course card below, then say things like “I don’t want to take this in the first semester.”";
    return;
  }

  const activeRules = plannerChatState.rules.filter((rule) => rule.courseCode === plannerChatState.selectedCourseCode);
  if (!activeRules.length) {
    chatContext.textContent = `Selected: ${plannerChatState.selectedCourseCode} · ${plannerChatState.selectedCourseName}. No custom timing rule yet.`;
    return;
  }

  chatContext.textContent = `Selected: ${plannerChatState.selectedCourseCode} · ${plannerChatState.selectedCourseName}. Active rules: ${activeRules.map(describeRule).join(" • ")}`;
}

function renderCourseIntel() {
  if (!plannerChatState.selectedCourseCode || !activeRenderedPlan) {
    intelHeadline.textContent = "Click a course card to see what it unlocks, what it depends on, and why this placement makes sense.";
    fillList("#intelWhyList", ["No course selected yet."]);
    fillList("#intelUnlockList", ["Select a planned class to inspect its role in the roadmap."]);
    return;
  }

  const selectedCode = plannerChatState.selectedCourseCode;
  const termIndex = activeRenderedPlan.terms.findIndex((term) => term.label === plannerChatState.selectedTermLabel);
  const selectedTerm = activeRenderedPlan.terms[termIndex];
  const selectedCourse = selectedTerm && selectedTerm.courses.find((courseItem) => courseItem.code === selectedCode);

  if (!selectedTerm || !selectedCourse) {
    intelHeadline.textContent = `The current roadmap no longer places ${selectedCode} in the selected term.`;
    fillList("#intelWhyList", ["This usually means a chat instruction or profile change moved the course elsewhere."]);
    fillList("#intelUnlockList", ["Click the course again in its new term to inspect the updated placement."]);
    return;
  }

  const completedBefore = new Set();
  activeRenderedPlan.terms.slice(0, termIndex).forEach((term) => {
    term.courses.forEach((courseItem) => {
      completedBefore.add(courseItem.code);
    });
  });

  const prereqs = selectedCourse.prereqs || [];
  const unlocked = uniqueCoursesByCode(allKnownCourses().filter((courseItem) => (courseItem.prereqs || []).includes(selectedCode)));
  const whyNow = [
    `${selectedCode} is currently placed in ${selectedTerm.label}.`,
    prereqs.length
      ? `Its prerequisites are ${prereqs.join(", ")}, and this plan schedules it after those requirements are already complete.`
      : "It has no tracked prerequisites in this prototype, so it can be placed earlier without sequencing conflicts.",
    selectedCourse.tech
      ? `It is marked tech-heavy, so the planner keeps it within your per-semester tech cap of ${currentProfile.maxTechCourses}.`
      : "It is treated as a balanced course, which makes it useful for smoothing out heavier technical terms.",
  ];

  if (selectedCourse.tags.includes("foundation")) whyNow.push("It is a foundation course, so the scheduler tries to place it early because later requirements depend on it.");
  if (selectedCourse.tags.includes("core")) whyNow.push("It is a major core course, so it is prioritized ahead of electives and open-unit fillers.");
  if (selectedCourse.tags.includes("breadth")) whyNow.push("It helps satisfy breadth or college distribution requirements while also balancing the term.");

  const blockedPrereqs = prereqs.filter((code) => !completedBefore.has(code));
  if (blockedPrereqs.length) {
    whyNow.push(`Heads up: this placement may still be fragile because ${blockedPrereqs.join(", ")} are not visibly completed earlier in the roadmap.`);
  }

  const unlockItems = unlocked.length
    ? unlocked.slice(0, 6).map((courseItem) => `${selectedCode} helps unlock ${courseItem.code} · ${courseItem.name}.`)
    : [`No later tracked requirement currently depends directly on ${selectedCode}. It is supporting breadth, units, or major progress more generally.`];

  if (plannerChatState.rules.some((rule) => rule.courseCode === selectedCode)) {
    unlockItems.push(`Custom chat rules are active: ${plannerChatState.rules.filter((rule) => rule.courseCode === selectedCode).map(describeRule).join(" • ")}.`);
  }

  intelHeadline.textContent = `${selectedCode} · ${selectedCourse.name}`;
  fillList("#intelWhyList", whyNow);
  fillList("#intelUnlockList", unlockItems);
}

function parsePlannerInstruction(text) {
  const normalized = text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[.,!?]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const courseCode = resolveCourseReference(text);

  if (!courseCode) {
    return {
      reply: "I need a course to anchor that change. Click a course card first, or mention the course code directly.",
    };
  }

  if (
    normalized.includes("not in summer") ||
    normalized.includes("don't put this in summer") ||
    normalized.includes("dont put this in summer") ||
    normalized.includes("not during summer")
  ) {
    return {
      rule: { type: "forbidKind", courseCode, kind: "summer" },
      reply: `Okay — I’ll keep ${courseCode} out of summer and rebalance the rest of the plan.`,
    };
  }

  const explicitTerm = parseTermReference(normalized);
  if (normalized.includes("first semester")) {
    return {
      rule: { type: "forbidTerm", courseCode, termLabel: "Year 1 / Fall" },
      reply: `Okay — I’ll avoid placing ${courseCode} in Year 1 / Fall and shift it later.`,
    };
  }

  if (normalized.includes("second semester")) {
    return {
      rule: { type: "forbidTerm", courseCode, termLabel: "Year 1 / Spring" },
      reply: `Okay — I’ll avoid placing ${courseCode} in Year 1 / Spring and reflow the sequence.`,
    };
  }

  if ((normalized.includes("don't want") || normalized.includes("dont want") || normalized.includes("not in")) && explicitTerm) {
    return {
      rule: { type: "forbidTerm", courseCode, termLabel: explicitTerm },
      reply: `Okay — I’ll keep ${courseCode} out of ${explicitTerm}.`,
    };
  }

  if ((normalized.includes("move") || normalized.includes("put") || normalized.includes("take")) && explicitTerm) {
    return {
      rule: { type: "earliestTerm", courseCode, termLabel: explicitTerm },
      reply: `Okay — I’ll move ${courseCode} so it lands no earlier than ${explicitTerm}.`,
    };
  }

  if ((normalized.includes("after") || normalized.includes("later than")) && explicitTerm) {
    return {
      rule: { type: "afterTerm", courseCode, termLabel: explicitTerm },
      reply: `Okay — I’ll push ${courseCode} to after ${explicitTerm} if the prerequisites still work.`,
    };
  }

  return {
    reply: "I can handle timing changes like “not in first semester”, “move this to Year 2 Spring”, or “don’t put this in summer.” Try one of those and I’ll update the plan.",
  };
}

function resolveCourseReference(text) {
  const codes = new Set(allKnownCourses().map((courseItem) => courseItem.code));
  const upperText = text.toUpperCase().replace(/[’']/g, "'");
  const matches = upperText.match(/[A-Z]{1,}(?:\s[A-Z]{1,})?\s[A-Z]?\d+[A-Z]?/g) || [];
  const explicit = matches.find((match) => codes.has(match.trim()));
  if (explicit) return explicit.trim();
  const namedMatch = allKnownCourses().find((courseItem) => upperText.includes(courseItem.code));
  if (namedMatch) return namedMatch.code;
  if (upperText.includes("THIS")) return plannerChatState.selectedCourseCode;
  return plannerChatState.selectedCourseCode;
}

function parseTermReference(normalizedText) {
  const compact = normalizedText
    .replace("year ", "year")
    .replace(" / ", " ")
    .replace(/\s+/g, " ");

  const yearMatch = compact.match(/year\s*(\d)\s*(fall|spring|summer)/);
  if (yearMatch) return `Year ${yearMatch[1]} / ${capitalize(yearMatch[2])}`;

  const directMatch = compact.match(/year(\d)\s*(fall|spring|summer)/);
  if (directMatch) return `Year ${directMatch[1]} / ${capitalize(directMatch[2])}`;

  return null;
}

function satisfiesPlannerRules(courseItem, termInfo, rules) {
  const relevantRules = rules.filter((rule) => rule.courseCode === courseItem.code);
  return relevantRules.every((rule) => {
    if (rule.type === "forbidTerm") return termInfo.label !== rule.termLabel;
    if (rule.type === "forbidKind") return termInfo.kind !== rule.kind;
    if (rule.type === "earliestTerm") return termRank(termInfo.label) >= termRank(rule.termLabel);
    if (rule.type === "afterTerm") return termRank(termInfo.label) > termRank(rule.termLabel);
    return true;
  });
}

function mergePlannerRule(existingRules, nextRule) {
  const retained = existingRules.filter((rule) => !(rule.courseCode === nextRule.courseCode && rule.type === nextRule.type));
  return [...retained, nextRule];
}

function describeRule(rule) {
  if (rule.type === "forbidTerm") return `not in ${rule.termLabel}`;
  if (rule.type === "forbidKind") return `not in ${rule.kind}`;
  if (rule.type === "earliestTerm") return `no earlier than ${rule.termLabel}`;
  if (rule.type === "afterTerm") return `after ${rule.termLabel}`;
  return "custom timing rule";
}

function termRank(label) {
  return buildPlanningTerms(currentProfile || readProfile()).findIndex((term) => term.label === label);
}

function allKnownCourses() {
  return uniqueCoursesByCode([
    ...Object.values(baseCatalog).flatMap((program) => [...program.required, ...program.electives]),
    ...Object.values(domainEmphases).flat(),
    ...Object.values(secondaryPrograms).flatMap((program) => program.required || []),
    ...breadthCourseOptions,
  ]);
}

function uniqueCoursesByCode(courseItems) {
  const unique = new Map();
  courseItems.forEach((courseItem) => {
    if (!unique.has(courseItem.code)) unique.set(courseItem.code, courseItem);
  });
  return Array.from(unique.values());
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderMilestones(plan, profile) {
  const milestones = buildMilestones(plan, profile);
  fillList("#milestoneList", milestones);
}

function renderPowerMoves(plan, profile) {
  const moves = buildPowerMoves(plan, profile);
  activePowerMoves = moves;
  powerMovesGrid.innerHTML = "";

  moves.forEach((move) => {
    const article = document.createElement("article");
    article.className = "power-card";
    article.innerHTML = `
      <div>
        <p class="eyebrow">${move.label}</p>
        <h3>${move.title}</h3>
      </div>
      <span class="power-strip">${move.strip}</span>
      <ul>
        <li>${move.impact}</li>
        <li>${move.rationale}</li>
        <li>${move.preview}</li>
      </ul>
      <button class="primary-button" type="button" data-move-id="${move.id}">${move.buttonLabel}</button>
    `;
    powerMovesGrid.append(article);
  });
}

function buildPowerMoves(plan, profile) {
  const moves = [];
  const heavyTerm = plan.terms.find((term) => term.kind === "semester" && term.techCourses >= profile.maxTechCourses);
  const softLandingCourse = heavyTerm && heavyTerm.courses.find((courseItem) => !courseItem.tech && courseItem.credits > 0);

  if (heavyTerm && softLandingCourse) {
    moves.push(makePowerMove(plan, profile, {
      id: `protect-${softLandingCourse.code}`,
      label: "Load balancing",
      title: `Protect ${heavyTerm.label}`,
      strip: "Reduce stress",
      impact: `Push ${softLandingCourse.code} out of ${heavyTerm.label} so the hardest term has more breathing room.`,
      rationale: `${heavyTerm.label} already hits your technical ceiling, so moving one balanced course can prevent a bottleneck without breaking the degree path.`,
      buttonLabel: "Apply load balance",
      action: {
        type: "rule",
        rule: { type: "forbidTerm", courseCode: softLandingCourse.code, termLabel: heavyTerm.label },
      },
    }));
  }

  if (profile.summerPreference === "none") {
    moves.push(makePowerMove(plan, profile, {
      id: "open-summer",
      label: "Schedule release valve",
      title: "Open a light summer lane",
      strip: "Free regular terms",
      impact: "Turn on a light summer so breadth or unit filler can move out of packed fall and spring semesters.",
      rationale: "This usually creates the cleanest extra space without changing the student’s major, domain, or credit cap.",
      buttonLabel: "Enable light summer",
      action: {
        type: "profile",
        changes: { summerPreference: "light", summerCredits: 6 },
      },
    }));
  }

  if (profile.optimizationMode !== "careerLaunch") {
    moves.push(makePowerMove(plan, profile, {
      id: "career-launch",
      label: "Outcome mode",
      title: "Switch to career-launch optimization",
      strip: "Earlier opportunities",
      impact: "Reweight the roadmap toward internships, applied classes, and earlier portfolio-facing momentum.",
      rationale: "This is the strongest one-click shift if the goal is making the plan feel more employer-facing and competitive.",
      buttonLabel: "Apply career mode",
      action: {
        type: "profile",
        changes: { optimizationMode: "careerLaunch" },
      },
    }));
  }

  if (profile.optimizationMode !== "lowStress") {
    moves.push(makePowerMove(plan, profile, {
      id: "low-stress",
      label: "Resilience mode",
      title: "Switch to low-stress optimization",
      strip: "Smoother pacing",
      impact: "Reshape the roadmap to spread technical intensity and favor more balanced terms.",
      rationale: "This is useful when the current plan is valid but still feels too sharp around one or two gateway-heavy semesters.",
      buttonLabel: "Apply low-stress mode",
      action: {
        type: "profile",
        changes: { optimizationMode: "lowStress" },
      },
    }));
  }

  if (plannerChatState.selectedCourseCode && plannerChatState.selectedTermLabel) {
    moves.push(makePowerMove(plan, profile, {
      id: `anchor-${plannerChatState.selectedCourseCode}`,
      label: "Selected course strategy",
      title: `Protect ${plannerChatState.selectedCourseCode}`,
      strip: "Anchor the gateway",
      impact: `Keep ${plannerChatState.selectedCourseCode} fixed in ${plannerChatState.selectedTermLabel} and let other, more flexible courses move around it.`,
      rationale: "If this is the class the student cares about most, anchoring it can make the planner feel personalized instead of generic.",
      buttonLabel: "Anchor selected course",
      action: {
        type: "rule",
        rule: { type: "earliestTerm", courseCode: plannerChatState.selectedCourseCode, termLabel: plannerChatState.selectedTermLabel },
      },
    }));
  }

  return moves.slice(0, 3);
}

function makePowerMove(plan, profile, move) {
  const previewProfile = applyActionToProfile(profile, move.action);
  const previewPlan = buildPlan(previewProfile);
  const scoreDelta = previewPlan.score.total - plan.score.total;
  const changedCourses = compareCoursePlacements(plan.terms, previewPlan.terms).length;
  return {
    ...move,
    preview: `${scoreDelta >= 0 ? "+" : ""}${scoreDelta} score impact preview · ${changedCourses} course placement change${changedCourses === 1 ? "" : "s"}.`,
  };
}

function applyActionToProfile(profile, action) {
  if (action.type === "profile") {
    return { ...profile, ...action.changes };
  }

  if (action.type === "rule") {
    return { ...profile, plannerRules: mergePlannerRule([...(profile.plannerRules || [])], action.rule) };
  }

  return profile;
}

function handlePowerMoveClick(event) {
  const button = event.target.closest("[data-move-id]");
  if (!button) return;
  const move = activePowerMoves.find((item) => item.id === button.dataset.moveId);
  if (!move) return;

  if (move.action.type === "profile") {
    applyProfileChanges(move.action.changes);
  } else if (move.action.type === "rule") {
    plannerChatState.rules = mergePlannerRule(plannerChatState.rules, move.action.rule);
  }

  plannerChatState.messages.push({
    role: "assistant",
    text: `${move.title} applied. I updated the roadmap and rebalanced the schedule around that change.`,
  });
  renderChat();
  renderPlan();
}

function applyProfileChanges(changes) {
  Object.entries(changes).forEach(([key, value]) => {
    const field = document.querySelector(`#${key}`);
    if (field) field.value = String(value);
  });
  syncConditionalFields();
}

function buildMilestones(plan, profile) {
  const terms = plan.terms || [];
  const gatewayLabel = findCourseTermLabel(terms, gatewayCourseForMajor(profile.major)) || "Year 2 / Spring";
  const upperDivLaunch = findFirstUpperDivTerm(terms) || "Year 3 / Fall";
  const internshipWindow = findInternshipWindow(terms) || "Year 2 / Fall";
  const auditTerm = terms.find((term) => term.label === "Year 4 / Fall");
  const auditWindow = auditTerm ? auditTerm.label : "Year 4 / Fall";

  const items = [
    `${gatewayLabel}: declaration and prerequisite checkpoint. Confirm that your lower-division foundations, GPA targets, and major-entry rules are in good shape before the upper-division ramp.`,
    `${upperDivLaunch}: comprehensive review / qualifying checkpoint. If your program uses a comprehensive review, portfolio review, or formal major progress check, start prep before this term so core sequencing does not get blocked.`,
    `${internshipWindow}: recruiting and opportunity checkpoint. Update your resume, line up research or internship applications, and use this term to connect coursework to a concrete next step.`,
    `${auditWindow}: graduation audit checkpoint. Re-run a full requirement check, overlap review, unit count review, and any final college paperwork before the last spring gets crowded.`,
  ];

  if (profile.careerFocus === "research") {
    items.splice(2, 0, `${upperDivLaunch}: research outreach checkpoint. Use this term to contact faculty, prep a writing sample or project portfolio, and position yourself for lab work or honors research.`);
  }

  if (profile.secondaryProgram !== "none") {
    items.push(`${upperDivLaunch}: secondary program overlap checkpoint. Review whether your ${secondaryPrograms[profile.secondaryProgram].label} still fits without violating overlap rules or overloading one semester.`);
  }

  return items;
}

function findCourseTermLabel(terms, code) {
  const term = terms.find((item) => item.courses.some((courseItem) => courseItem.code === code));
  return term ? term.label : null;
}

function findFirstUpperDivTerm(terms) {
  const term = terms.find((item) => item.courses.some((courseItem) => courseItem.tags.includes("upperdiv")));
  return term ? term.label : null;
}

function findInternshipWindow(terms) {
  const term = terms.find((item) => item.courses.some((courseItem) =>
    courseItem.tags.includes("AI") ||
    courseItem.tags.includes("Entrepreneurship") ||
    courseItem.tags.includes("Policy") ||
    courseItem.tags.includes("domain")
  ));
  return term ? term.label : null;
}

function gatewayCourseForMajor(major) {
  if (major === "Data Science (BA)") return "DATA C100";
  if (major === "Computer Science (BA)") return "COMPSCI 61B";
  if (major === "Statistics (BA)") return "STAT 134";
  if (major === "Cognitive Science (BA)") return "COG SCI 131";
  if (major === "Economics (BA)") return "ECON 100A";
  if (major === "Political Science (BA)") return "POL SCI 149E";
  if (major === "English (BA)") return "ENGLISH 100";
  if (major === "Molecular and Cell Biology (BA)") return "MCB 102";
  if (major === "Mechanical Engineering (BS)") return "MEC ENG 40";
  return "R&C B";
}

function countTaggedCoursesThroughYear(terms, tags, yearLimit) {
  return terms
    .filter((term) => term.kind === "semester" && extractYearNumber(term.label) <= yearLimit)
    .reduce((sum, term) => sum + term.courses.filter((courseItem) => tags.some((tag) => courseItem.tags.includes(tag))).length, 0);
}

function averageSemesterCredits(terms) {
  const semesterTerms = terms.filter((term) => term.kind === "semester");
  if (!semesterTerms.length) return 0;
  return semesterTerms.reduce((sum, term) => sum + term.credits, 0) / semesterTerms.length;
}

function extractYearNumber(label) {
  const match = label.match(/Year\s+(\d)/);
  return match ? Number(match[1]) : 99;
}

function compareCoursePlacements(originalTerms, repairedTerms) {
  const originalLocations = courseLocationMap(originalTerms);
  const repairedLocations = courseLocationMap(repairedTerms);
  const codes = Array.from(new Set([...Object.keys(originalLocations), ...Object.keys(repairedLocations)]));

  return codes
    .map((code) => ({
      code,
      from: originalLocations[code] || "Not scheduled",
      to: repairedLocations[code] || "Not scheduled",
    }))
    .filter((item) => item.from !== item.to);
}

function courseLocationMap(terms) {
  const locations = {};
  terms.forEach((term) => {
    term.courses.forEach((courseItem) => {
      locations[courseItem.code] = term.label;
    });
  });
  return locations;
}

function fillList(selector, items) {
  const list = document.querySelector(selector);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });
}

function prereqsMet(courseItem, completed) {
  return !courseItem.prereqs || courseItem.prereqs.every((prereq) => completed.has(prereq));
}

function techAllowanceMet(courseItem, term, termInfo, maxTechCourses) {
  const cap = termInfo.kind === "summer" ? Math.min(1, maxTechCourses) : maxTechCourses;
  return !courseItem.tech || term.techCourses < cap;
}

function removeCourse(pool, code) {
  const index = pool.findIndex((courseItem) => courseItem.code === code);
  if (index >= 0) pool.splice(index, 1);
}

function removeFirstTaggedCourse(pool, tag) {
  const index = pool.findIndex((courseItem) => courseItem.tags.includes(tag));
  if (index >= 0) pool.splice(index, 1);
}

function formatSpecialLabel(type) {
  if (type === "gap") return "Gap semester";
  if (type === "research") return "Research term";
  return "Co-op term";
}

function course(code, name, credits, tech, tags, prereqs = [], options = {}) {
  return { code, name, credits, tech, tags, prereqs, ...options };
}
