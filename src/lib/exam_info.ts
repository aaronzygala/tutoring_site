import { StaticImageData } from "next/image";
import ACT_Structure from "@/assets/ACT_Structure.png";
import CLT_Structure from "@/assets/CLT_Structure.png";
interface ExamInfo {
  name: string;
  description: string;
  examContent: ExamSection[];
  registrationInfo: RegistrationInformation;
  faqs: { [key: string]: string };
  image?: StaticImageData;
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
  name: "SAT",
  description:
    "At Axiom Test Prep, we know a high SAT score is key to getting into your dream college and unlocking scholarship opportunities. Our tailored prep program includes personalized instruction, realistic mock tests, and access to a vast video library and worksheets, all designed to help you master the Digital SAT. With our expert guidance, you'll be ready to achieve your academic goals.",
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
      "To register for the Digital SAT: create a College Board account, select your test date and location, fill out the registration form, upload a photo, and pay the fee.",
    registrationDates: [
      "September 20, 2024",
      "October 18, 2024",
      "November 22, 2024",
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
      "At Axiom Test Prep, we know a high ACT score is key to getting into your dream college and unlocking scholarship opportunities. Our tailored prep program includes personalized instruction, realistic mock tests, and access to a vast video library and worksheets, all designed to help you master the Digital SAT. With our expert guidance, you'll be ready to achieve your academic goals.",
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
        "To register for the ACT: create an account on ACT.org, select your test date and location, fill out the registration form, upload a photo, and pay the fee.",
      registrationDates: [
        "September 20, 2024",
        "November 8, 2024",
        "January 3, 2025",
        "February 28, 2025",
      ],
      officialLink: "https://www.act.org/content/act/en/products-and-services/the-act/registration.html",
    },
    faqs: {
      "How is the Digital ACT organized?":
        "The Digital ACT has four sections: English, Math, Reading, and Science, all taken on a computer. There's also an optional Writing section.",
    
      "Can I use a calculator during the Digital ACT?":
        "Absolutely! You can use a calculator for the Math section, and test centers provide access to an online calculator if needed.",
    
      "How is the Digital ACT scored?":
        "Each section is scored on a scale of 1-36, and your overall score is the average of the four main sections.",
    
      "When do I get my Digital ACT scores?":
        "You can usually expect your scores within 2-3 weeks after the test date.",
    
      "What accommodations are available for the Digital ACT?":
        "Eligible students can get accommodations like extended time, extra breaks, large-print materials, and assistive technology.",
    
      "How do I request accommodations for the Digital ACT?":
        "Request accommodations through the ACT's Test Accessibility and Accommodations (TAA) system, providing necessary documentation through your school's accommodations officer.",
    
      "What should I bring on test day?":
        "Bring a valid ID, your admission ticket, and any documentation related to approved accommodations.",
    
      "Does the Digital ACT have adaptive testing like the Digital SAT?":
        "Currently, the Digital ACT doesn't use adaptive testing, so all students receive the same set of questions.",
    
      "How much does the ACT cost?":
        "As of 2024, the standard ACT costs $63 without the Writing section and $88 with it, with additional fees for late registration, changing test dates, or sending scores to extra colleges.",
    },    
    image: ACT_Structure,
  };

  const CLTInfo: ExamInfo = {
    name: "CLT",
    description:
      "At Axiom Test Prep, we know a high SAT score is key to getting into your dream college and unlocking scholarship opportunities. Our tailored prep program includes personalized instruction, realistic mock tests, and access to a vast video library and worksheets, all designed to help you master the Digital SAT. With our expert guidance, you'll be ready to achieve your academic goals.",
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
    image: CLT_Structure,
  };

export { DSATInfo, ACTInfo, CLTInfo };
export type { ExamInfo };
