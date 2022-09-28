import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuizCreate } from '../../../services/quiz/models';
import {
  getAdminQuiz,
  getQuiz,
  postCreateQuiz
} from '../../../services/quiz/quiz';

export const createQuiz = createAsyncThunk(
  'quiz/createQuiz',
  async (quiz: QuizCreate) => {
    try {
      const created = await postCreateQuiz(quiz);
      return created.body;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }
);

export const loadQuiz = createAsyncThunk(
  'quiz/loadQuiz',
  async (uuid: string) => {
    try {
      const created = await getQuiz(uuid);
      return created.body;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }
);

export const loadAdminQuiz = createAsyncThunk(
  'quiz/loadAdminQuiz',
  async (uuid: string) => {
    try {
      const created = await getAdminQuiz(uuid);
      return created.body;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }
);
