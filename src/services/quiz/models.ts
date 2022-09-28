type QuestionType = SelectorQuestion | TextQuestion | CheckQuestion;

/**
 *  QUIZ QUESTION
 */
export interface QuizQuestion {
  type: string;
  id: string;
  title: string;
  date?: Date;
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
  created: Date;
  end: Date;
  questions: QuestionType[];
}

/**
 * QUIZ ADMIN
 */

export interface UserRespose {
  userName: string;
  date: Date;
  questionResponses: QuestionType[];
}

export interface QuizAdmin {
  id: string;
  quiz: Quiz;
  created: Date;
  end: Date;
  usersResponse: UserRespose[];
}

/**
 * QUIS CREATE
 */
export interface QuizCreate {
  title: string;
  numUsers: number;
  questions: QuestionType[];
  created: Date;
  end: Date;
}

export interface QuizCreated {
  id: string;
  sharingUrl: string;
  ownerUrl: string;
}
