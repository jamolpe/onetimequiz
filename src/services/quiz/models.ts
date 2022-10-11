export type QuestionType = SelectorQuestion | TextQuestion | CheckQuestion;

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
  id?: string;
  title: string;
  string?: string;
}

export interface Option {
  id: string;
  text: string;
  selected?: boolean;
  correct?: boolean;
}

export interface SelectorQuestion extends QuizQuestion {
  options: Option[];
}

export interface TextQuestion extends QuizQuestion {
  maxCaracters?: number;
  response?: string;
}

export interface CheckQuestion extends QuizQuestion {
  options: Option[];
}

export interface Quiz {
  id: string;
  created: string;
  end: string;
  questions: QuestionType[];
}

/**
 * QUIZ ADMIN
 */

export interface UserRespose {
  userName: string;
  date: string;
  questionResponses: QuestionType[];
}

export interface QuizAdmin {
  id: string;
  quiz: Quiz;
  usersResponse: UserRespose[];
}

/**
 * QUIS CREATE
 */
export interface QuizCreate {
  title: string;
  numUsers: number;
  questions: QuestionType[];
  created: string;
  end: string;
}

export interface QuizCreated {
  id: string;
  sharingUrl: string;
  ownerUrl: string;
}
