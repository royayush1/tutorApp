export type Tone = "sky" | "berry" | "lavender";

export type ChapterSection = {
  title: string;
  items: string[];
};

export type Subject = {
  key: "psychology";
  label: "Psychology";
  description: string;
  sections: ChapterSection[];
};

export type Syllabus = {
  key: "gcse" | "a-level" | "as-level";
  label: string;
  description: string;
  tone: Tone;
  subjects: Subject[];
};

export const syllabi: Syllabus[] = [
  {
    key: "gcse",
    label: "GCSE",
    description: "Start strong with friendly, confidence-building foundations.",
    tone: "sky",
    subjects: [
      {
        key: "psychology",
        label: "Psychology",
        description: "How minds grow, learn, and connect.",
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
  },
  {
    key: "a-level",
    label: "A Level",
    description: "Go deeper into theory, evidence, and real-world application.",
    tone: "berry",
    subjects: [
      {
        key: "psychology",
        label: "Psychology",
        description: "Explore advanced topics and critical research skills.",
        sections: [
          {
            title: "Core Topics",
            items: ["Social influence", "Memory", "Attachment", "Psychopathology"]
          },
          {
            title: "Methods and Approaches",
            items: [
              "Research methods",
              "Approaches in psychology",
              "Biopsychology"
            ]
          },
          {
            title: "Applications and Options",
            items: [
              "Relationships",
              "Aggression",
              "Forensic psychology",
              "Schizophrenia"
            ]
          }
        ]
      }
    ]
  },
  {
    key: "as-level",
    label: "AS Levels",
    description: "Build strong skills and confidence before A Level depth.",
    tone: "lavender",
    subjects: [
      {
        key: "psychology",
        label: "Psychology",
        description: "A balanced blend of core topics and study skills.",
        sections: [
          {
            title: "Core Topics",
            items: ["Social influence", "Memory", "Attachment", "Psychopathology"]
          },
          {
            title: "Methods and Approaches",
            items: ["Research methods", "Approaches in psychology"]
          },
          {
            title: "Skills Focus",
            items: [
              "Practical investigations",
              "Data handling and statistics",
              "Essay writing and evaluation"
            ]
          }
        ]
      }
    ]
  }
];

export function getSyllabus(key: string) {
  return syllabi.find((item) => item.key === key);
}

export function getSubject(syllabus: Syllabus, subjectKey: string) {
  return syllabus.subjects.find((subject) => subject.key === subjectKey);
}
