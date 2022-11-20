export type QuestionType = SelectorQuestion & TextQuestion & CheckQuestion;

export const questionTypes: Record<string, string> = {
  SELECTOR: 'Selector',
  TEXT: 'Text',
  CHECK: 'Check'
};

/**
 *  QUIZ QUESTION
 */
export interface QuizQuestion {
  type: string;
  id: string;
  title: string;
}

export interface TypeOption {
  id: string;
  text: string;
  selected?: boolean;
}

export interface SelectorQuestion extends QuizQuestion {
  options?: TypeOption[];
}

export interface TextQuestion extends QuizQuestion {
  maxCharacters?: number | string;
}

export interface CheckQuestion extends QuizQuestion {
  options?: TypeOption[];
}

export interface Quiz {
  title: string;
  id: string;
  created: string;
  end: string;
  questions: QuestionType[];
}

/**
 * QUIZ ADMIN
 */

export interface UserResponse {
  userName: string;
  date: string;
  questionResponses: QuestionType[];
}

export interface QuizAdmin {
  id: string;
  quiz: Quiz;
  usersResponse: UserResponse[];
}

/**
 * QUIZ CREATE
 */
export interface QuizCreate {
  title: string;
  numUsers: number;
  questions: QuestionType[];
  created: string;
  end: string;
}

export interface QuizCreated {
  sharingUrls: string[];
  adminUrl: string;
  quiz: Quiz;
}
