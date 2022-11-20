import { ApiResponse, handleRequest } from '../utils';
import { Quiz, QuizAdmin, QuizCreate, QuizCreated } from './models';
import createQuestion from './mock/mock-create.json';
import getQuestion from './mock/mock-get.json';
import getQuestionAdmin from './mock/mock-get-admin.json';

const mockCreate = () => {
  return createQuestion;
};

const mockGet = () => {
  return getQuestion;
};

const mockGetAdmin = () => {
  return getQuestionAdmin;
};

export const postCreateQuiz = async (
  quizData: QuizCreate
): Promise<ApiResponse<QuizCreated>> => {
  if (process.env.REACT_APP_USEMOCK) {
    const mockResp = await new Promise<ApiResponse<QuizCreated>>((resolve) => {
      setTimeout(() => {
        resolve(mockCreate());
      }, 5000);
    });
    return mockResp;
  }
  const response = await fetch(`/api/quiz`, {
    method: 'POST',
    body: JSON.stringify(quizData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleRequest(response);
};

export const getQuiz = async (uuid: string): Promise<ApiResponse<Quiz>> => {
  if (process.env.REACT_APP_USEMOCK) {
    const mockResp = await new Promise<ApiResponse<Quiz>>((resolve) => {
      setTimeout(() => {
        resolve(mockGet());
      }, 2000);
    });
    return mockResp;
  }
  const response = await fetch(`/api/quiz/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleRequest(response);
};

export const getAdminQuiz = async (
  uuid: string
): Promise<ApiResponse<QuizAdmin>> => {
  if (process.env.REACT_APP_USEMOCK) {
    const mockResp = await new Promise<ApiResponse<QuizAdmin>>((resolve) => {
      setTimeout(() => {
        resolve(mockGetAdmin());
      }, 2000);
    });
    return mockResp;
  }
  const response = await fetch(`/api/quiz/admin/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleRequest(response);
};
