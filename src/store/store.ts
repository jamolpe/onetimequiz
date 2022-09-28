import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import quizReducer from './reducers/quiz/quiz-reducer';
import statusReducer from './reducers/status/status-reducer';

export const store = configureStore({
  reducer: {
    status: statusReducer,
    quiz: quizReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
