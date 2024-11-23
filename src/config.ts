export interface FrameworkConfig {
  name: string;
  stylings?: string[];
}

export interface LanguageConfig {
  frameworks: FrameworkConfig[];
}

export const config: Record<string, LanguageConfig> = {
  JavaScript: {
    frameworks: [
      {
        name: "Express",
      },
      {
        name: "Simple",
      },
    ],
  },
  TypeScript: {
    frameworks: [
      {
        name: "Express",
      },
      {
        name: "Simple",
      },
    ],
  },
};
