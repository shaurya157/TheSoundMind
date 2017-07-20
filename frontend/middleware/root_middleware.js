import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import AskMiddleware from './ask_middleware';
import FeedbackMiddleware from './feedback_middleware'

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  AskMiddleware,
  FeedbackMiddleware
);

export default RootMiddleware;
