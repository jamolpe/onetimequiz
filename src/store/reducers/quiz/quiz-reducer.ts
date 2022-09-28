import { createSlice } from '@reduxjs/toolkit';
import { Quiz, QuizAdmin, QuizCreated } from '../../../services/quiz/models';
import { RootState } from '../../store';
import { createQuiz, loadAdminQuiz, loadQuiz } from './quiz-actions';

export interface QuizState {
  creating: boolean;
  created: boolean;
  createdQuiz: QuizCreated | null;
  loading: boolean;
  showAdminView: boolean;
  showNormalView: boolean;
  quiz: Quiz | null;
  adminQuiz: QuizAdmin | null;
}

const initialState: QuizState = {
  creating: false,
  created: false,
  createdQuiz: null,
  loading: false,
  showAdminView: false,
  showNormalView: false,
  quiz: null,
  adminQuiz: null
};

export const quizSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    resetState: () => initialState,
    showAdminView: (state) => {
      state.showAdminView = true;
    },
    showNornalView: (state) => {
      state.showNormalView = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createQuiz.pending, (state) => {
      state.creating = true;
      state.created = false;
      state.createdQuiz = null;
    });
    builder.addCase(createQuiz.fulfilled, (state, action) => {
      state.creating = false;
      state.created = true;
      state.createdQuiz = action.payload;
    });
    builder.addCase(createQuiz.rejected, (state) => {
      state.creating = false;
      state.created = false;
      state.createdQuiz = null;
    });
    builder.addCase(loadQuiz.pending, (state) => {
      state.loading = true;
      state.quiz = null;
    });
    builder.addCase(loadQuiz.fulfilled, (state, action) => {
      state.loading = false;
      state.quiz = action.payload;
    });
    builder.addCase(loadQuiz.rejected, (state) => {
      state.loading = false;
      state.quiz = null;
    });
    builder.addCase(loadAdminQuiz.pending, (state) => {
      state.loading = true;
      state.adminQuiz = null;
    });
    builder.addCase(loadAdminQuiz.fulfilled, (state, action) => {
      state.loading = false;
      state.adminQuiz = action.payload;
    });
    builder.addCase(loadAdminQuiz.rejected, (state) => {
      state.loading = false;
      state.adminQuiz = null;
    });
  }
});

export const { resetState } = quizSlice.actions;

export const quizSelector = (state: RootState) => state.quiz;

export default quizSlice.reducer;
