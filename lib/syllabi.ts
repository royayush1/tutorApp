export type Tone = "sky" | "berry" | "lavender";

export type ChapterSection = {
  title: string;
  items: string[];
};

export type Subject = {
  key: "psychology";
  label: string;
  description: string;
  tone: Tone;
  sections: ChapterSection[];
};

export type Syllabus = {
  key: "gcse" | "a-level" | "as-level";
  label: string;
  description: string;
  tone: Tone;
  examBoards: ExamBoard[];
};

export type ExamBoard = {
  key: "aqa" | "ocr" | "edexcel" | "cie" | "wjec";
  label: string;
  description: string;
  tone: Tone;
  subjects: Subject[];
}

export const subjects: Subject[] = [
    {
      key: "psychology",
      label: "Psychology",
      description: "How minds grow, learn, and connect.",
      tone: "berry",
      sections: [
        {
          title: "Foundations of Psychology",
          items: [
            "Introduction to psychology and key ideas",
            "The brain and nervous system",
            "Development through childhood and adolescence",
            "Theories of learning and behaviour"
          ]
        },
        {
          title: "Cognition and Behaviour",
          items: [
            "Memory and forgetting",
            "Perception and response",
            "Language, thought, and communication",
            "Cognitive biases and decision making"
          ]
        },
        {
          title: "Social Understanding",
          items: [
            "Social influence and group behaviour",
            "Identity, self-esteem, and motivation",
            "Family and peer relationships",
            "Psychological problems and wellbeing"
          ]
        },
        {
          title: "Research Skills",
          items: [
            "Planning investigations",
            "Data collection and analysis",
            "Ethics, reliability, and validity",
            "Evaluating studies and evidence"
          ]
        }
      ]
    }
]

export const examBoards: ExamBoard[] = [
  {
    key: "edexcel",
        label: "Edexcel",
        description: "Edexcel is among the popular and flexible UK-based boards. It is the largest examination board in the UK, owned by Pearson Education. The Pearson Edexcel of Examinations is taking the International GCSEs (IGCSEs), and the A Levels, which is delivered at the worldwide level and it is considered as the major academic qualifications",
        tone: "sky",
        subjects: subjects.filter((b) => ["psychology"].includes(b.key))

  },
  {
    key: "cie",
        label: "CIE",
        description: "CIE programmes, named Cambridge International Examinations, is the international programme of the University of Cambridge. CIE is one of the most recognised and recommended educational boards by the universities and educational bodies all around the globe.",
        tone: "berry",
        subjects: []
  }
]

export const syllabi: Syllabus[] = [
  {
    key: "gcse",
    label: "GCSE",
    description: "Start strong with friendly, confidence-building foundations.",
    tone: "sky",
    examBoards: examBoards.filter((b) => ["edexcel", "cie"].includes(b.key)),
  },
  {
    key: "a-level",
    label: "A Level",
    description: "Go deeper into theory, evidence, and real-world application.",
    tone: "berry",
    examBoards: examBoards.filter((b) => ["cie"].includes(b.key)),
  },
  {
    key: "as-level",
    label: "AS Levels",
    description: "Build strong skills and confidence before A Level depth.",
    tone: "lavender",
    examBoards: examBoards.filter((b) => ["cie"].includes(b.key)),
  }
];

export function getSyllabus(key: string) {
  return syllabi.find((item) => item.key === key);
}

export function getSubject(subjectKey: string) {
  return subjects.find((subject) => subject.key === subjectKey);
}

export function getExamBoard(key: string){
  return examBoards.find((board) => board.key === key)
}

export function getSubjectsInCurrentBoard(examBoard: ExamBoard){
  return examBoard.subjects
}
