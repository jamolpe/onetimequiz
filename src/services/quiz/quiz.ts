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
  userData: QuizCreate
): Promise<ApiResponse<QuizCreated>> => {
  if (process.env.REACT_APP_USEMOCK) {
    const mockResp = await new Promise<ApiResponse<QuizCreated>>((resolve) => {
      setTimeout(() => {
        resolve(mockCreate());
      }, 2000);
    });
    return mockResp;
  }
  const response = await fetch(`/quiz/create`, {
    method: 'POST',
    body: JSON.stringify(userData),
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
  const response = await fetch(`/quiz/${uuid}`, {
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
  const response = await fetch(`/quiz/admin/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleRequest(response);
};
