interface ExamInfo {
  name: string;
  description: string;
  examContent: ExamSection[];
  registrationInfo: RegistrationInformation;
  faqs: { [key: string]: string };
}

interface ExamSection {
  sectionName: string;
  totalQuestions: number;
  timeAlloted: string;
  contentAreas: string[];
  additionalInfo: string;
}

interface RegistrationInformation {
  description: string;
  registrationDates: string[];
  officialLink: string;
}

const DSATInfo: ExamInfo = {
  name: "DSAT",
  description:
    "At Axiom Test Prep, we understand that excelling on the SAT is essential for \
    opening the doors to your dream college or university and unlocking a wealth \
    of scholarship opportunities worldwide. A high score on the Digital SAT can \
    be a transformative milestone for many families, and our comprehensive preparation \
    program is designed to help you achieve that success. We provide personalized \
    instruction, realistic mock practice tests (both adaptive and linear), and expert \
    guidance from our dedicated team, who are deeply involved in every aspect of your \
    learning journey. Additionally, our online platform offers access to an extensive \
    video library and focused topic worksheets, ensuring you master every section of the \
    Digital SAT. With Axiom Test Prep, you'll be fully equipped to reach your highest \
    potential and turn your academic aspirations into reality.",
  examContent: [
    {
      sectionName: "Reading & Writing",
      totalQuestions: 54,
      timeAlloted: "1 hour 4 minutes",
      contentAreas: [
        "Craft and Structure",
        "Information and Ideas",
        "Standard English Conventions",
        "Expression of Ideas",
      ],
      additionalInfo: "",
    },
    {
      sectionName: "Math",
      totalQuestions: 44,
      timeAlloted: "1 hour 10 minutes",
      contentAreas: [
        "Algebra",
        "Advanced Math",
        "Problem Solving and Data Analysis",
        "Geometry and Trigonometry",
      ],
      additionalInfo: "Calculators are permitted throughout the math section.",
    },
  ],
  registrationInfo: {
    description:
      "To register for the Digital SAT, create a College Board account, select your test date and location, fill out the registration form, upload a photo, and pay the fee.",
    registrationDates: [
      "August 24, 2024",
      "October 5, 2024",
      "November 2, 2024",
      "December 7, 2024",
    ],
    officialLink: "https://satsuite.collegeboard.org/sat/registration",
  },
  faqs: {
    "How is the Digital SAT different from the SAT?":
      "The Digital SAT uses a new system called multistage adaptive testing. \
            This means that the test is designed to dynamically adapt to a student's proficiency, adjusting its difficulty based on \
            performance as students answer questions. The digital SAT is the gold standard standardized exam \
            for many colleges and universities, and over 1.9 million students in the US take the exam every year. \
            Both test segments—reading and writing as well as math—are divided into two distinct modules and the difficulty \
            level of the module changes based on how the student has done on the previous module.",

    "How is the Digital SAT structured?":
      "It has two main parts: Reading & Writing and Math with each broken into two adaptive modules that provide personalized assessments.",

    "What are the benefits of taking the Digital SAT?":
      "There is a shorter test duration, quicker score releases, better security and more streamlined testing experience.",

    "Can I use my own device for the Digital SAT?":
      "Yes, students can employ their laptops or tablets or Chromebooks with the Bluebook app installed onto them; otherwise, they may borrow some from the College Board.",

    "How is the Digital SAT scored?":
      "This exam uses a scale from 400 to 1600, where each section (Reading & Writing, Math) gets between 200 to 800 points.",

    "When do the Digital SAT Scores come out?":
      "They are usually available 2.5 weeks after the testing date, you can also visit the College Board link below for exact dates/ estimated timing of score release: https://satsuite.collegeboard.org/sat/scores/sat-score-release-dates",

    "Can I use a calculator on the Digital SAT?":
      "Yes a calculator is provided in the BlueBook app during the Math sections, but you may also use an external one that is accepted by this board.",
  },
};


const ACTInfo: ExamInfo = {
    name: "ACT",
    description:
      "At Axiom Test Prep, we understand that excelling on the SAT is essential for \
      opening the doors to your dream college or university and unlocking a wealth \
      of scholarship opportunities worldwide. A high score on the Digital SAT can \
      be a transformative milestone for many families, and our comprehensive preparation \
      program is designed to help you achieve that success. We provide personalized \
      instruction, realistic mock practice tests (both adaptive and linear), and expert \
      guidance from our dedicated team, who are deeply involved in every aspect of your \
      learning journey. Additionally, our online platform offers access to an extensive \
      video library and focused topic worksheets, ensuring you master every section of the \
      Digital SAT. With Axiom Test Prep, you'll be fully equipped to reach your highest \
      potential and turn your academic aspirations into reality.",
    examContent: [
      {
        sectionName: "Reading & Writing",
        totalQuestions: 54,
        timeAlloted: "1 hour 4 minutes",
        contentAreas: [
          "Craft and Structure",
          "Information and Ideas",
          "Standard English Conventions",
          "Expression of Ideas",
        ],
        additionalInfo: "",
      },
      {
        sectionName: "Math",
        totalQuestions: 44,
        timeAlloted: "1 hour 10 minutes",
        contentAreas: [
          "Algebra",
          "Advanced Math",
          "Problem Solving and Data Analysis",
          "Geometry and Trigonometry",
        ],
        additionalInfo: "Calculators are permitted throughout the math section.",
      },
    ],
    registrationInfo: {
      description:
        "To register for the Digital SAT, create a College Board account, select your test date and location, fill out the registration form, upload a photo, and pay the fee.",
      registrationDates: [
        "August 24, 2024",
        "October 5, 2024",
        "November 2, 2024",
        "December 7, 2024",
      ],
      officialLink: "https://satsuite.collegeboard.org/sat/registration",
    },
    faqs: {
      "How is the Digital SAT different from the SAT?":
        "The Digital SAT uses a new system called multistage adaptive testing. \
              This means that the test is designed to dynamically adapt to a student's proficiency, adjusting its difficulty based on \
              performance as students answer questions. The digital SAT is the gold standard standardized exam \
              for many colleges and universities, and over 1.9 million students in the US take the exam every year. \
              Both test segments—reading and writing as well as math—are divided into two distinct modules and the difficulty \
              level of the module changes based on how the student has done on the previous module.",
  
      "How is the Digital SAT structured?":
        "It has two main parts: Reading & Writing and Math with each broken into two adaptive modules that provide personalized assessments.",
  
      "What are the benefits of taking the Digital SAT?":
        "There is a shorter test duration, quicker score releases, better security and more streamlined testing experience.",
  
      "Can I use my own device for the Digital SAT?":
        "Yes, students can employ their laptops or tablets or Chromebooks with the Bluebook app installed onto them; otherwise, they may borrow some from the College Board.",
  
      "How is the Digital SAT scored?":
        "This exam uses a scale from 400 to 1600, where each section (Reading & Writing, Math) gets between 200 to 800 points.",
  
      "When do the Digital SAT Scores come out?":
        "They are usually available 2.5 weeks after the testing date, you can also visit the College Board link below for exact dates/ estimated timing of score release: https://satsuite.collegeboard.org/sat/scores/sat-score-release-dates",
  
      "Can I use a calculator on the Digital SAT?":
        "Yes a calculator is provided in the BlueBook app during the Math sections, but you may also use an external one that is accepted by this board.",
    },
  };

  const CLTInfo: ExamInfo = {
    name: "CLT",
    description:
      "At Axiom Test Prep, we understand that excelling on the SAT is essential for \
      opening the doors to your dream college or university and unlocking a wealth \
      of scholarship opportunities worldwide. A high score on the Digital SAT can \
      be a transformative milestone for many families, and our comprehensive preparation \
      program is designed to help you achieve that success. We provide personalized \
      instruction, realistic mock practice tests (both adaptive and linear), and expert \
      guidance from our dedicated team, who are deeply involved in every aspect of your \
      learning journey. Additionally, our online platform offers access to an extensive \
      video library and focused topic worksheets, ensuring you master every section of the \
      Digital SAT. With Axiom Test Prep, you'll be fully equipped to reach your highest \
      potential and turn your academic aspirations into reality.",
    examContent: [
      {
        sectionName: "Reading & Writing",
        totalQuestions: 54,
        timeAlloted: "1 hour 4 minutes",
        contentAreas: [
          "Craft and Structure",
          "Information and Ideas",
          "Standard English Conventions",
          "Expression of Ideas",
        ],
        additionalInfo: "",
      },
      {
        sectionName: "Math",
        totalQuestions: 44,
        timeAlloted: "1 hour 10 minutes",
        contentAreas: [
          "Algebra",
          "Advanced Math",
          "Problem Solving and Data Analysis",
          "Geometry and Trigonometry",
        ],
        additionalInfo: "Calculators are permitted throughout the math section.",
      },
    ],
    registrationInfo: {
      description:
        "To register for the Digital SAT, create a College Board account, select your test date and location, fill out the registration form, upload a photo, and pay the fee.",
      registrationDates: [
        "August 24, 2024",
        "October 5, 2024",
        "November 2, 2024",
        "December 7, 2024",
      ],
      officialLink: "https://satsuite.collegeboard.org/sat/registration",
    },
    faqs: {
      "How is the Digital SAT different from the SAT?":
        "The Digital SAT uses a new system called multistage adaptive testing. \
              This means that the test is designed to dynamically adapt to a student's proficiency, adjusting its difficulty based on \
              performance as students answer questions. The digital SAT is the gold standard standardized exam \
              for many colleges and universities, and over 1.9 million students in the US take the exam every year. \
              Both test segments—reading and writing as well as math—are divided into two distinct modules and the difficulty \
              level of the module changes based on how the student has done on the previous module.",
  
      "How is the Digital SAT structured?":
        "It has two main parts: Reading & Writing and Math with each broken into two adaptive modules that provide personalized assessments.",
  
      "What are the benefits of taking the Digital SAT?":
        "There is a shorter test duration, quicker score releases, better security and more streamlined testing experience.",
  
      "Can I use my own device for the Digital SAT?":
        "Yes, students can employ their laptops or tablets or Chromebooks with the Bluebook app installed onto them; otherwise, they may borrow some from the College Board.",
  
      "How is the Digital SAT scored?":
        "This exam uses a scale from 400 to 1600, where each section (Reading & Writing, Math) gets between 200 to 800 points.",
  
      "When do the Digital SAT Scores come out?":
        "They are usually available 2.5 weeks after the testing date, you can also visit the College Board link below for exact dates/ estimated timing of score release: https://satsuite.collegeboard.org/sat/scores/sat-score-release-dates",
  
      "Can I use a calculator on the Digital SAT?":
        "Yes a calculator is provided in the BlueBook app during the Math sections, but you may also use an external one that is accepted by this board.",
    },
  };

export { DSATInfo, ACTInfo, CLTInfo };
export type { ExamInfo };
