export interface QuizCreate {
  id: string;
  title: string;
  numUsers: number;
}

export interface QuizCreated {
  id: string;
  sharingUrl: string;
  ownerUrl: string;
}

/**
 *  QUIZ QUESTION
 */

export interface QuizQuestion {
  type: string;
  id: string;
  title: string;
}

export interface Options {
  id: string;
  text: string;
  selected?: boolean;
}

export interface SelectorQuestion extends QuizQuestion {
  options: Options[];
}

export interface TextQuestion extends QuizQuestion {
  maxCaracters?: number;
  response?: string;
}

export interface CheckQuestion extends QuizQuestion {
  options: Options[];
}

export interface Quiz {
  id: string;
  questions: (SelectorQuestion | TextQuestion | CheckQuestion)[];
}

/**
 * QUIZ ADMIN
 */

export interface UserRespose {
  userName: string;
  questionResponses: (SelectorQuestion | TextQuestion | CheckQuestion)[];
}

export interface QuizAdmin {
  quiz: Quiz;
  usersResponse: UserRespose[];
}
