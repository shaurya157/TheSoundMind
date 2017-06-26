import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import AskMiddleware from './ask_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  AskMiddleware
);

export default RootMiddleware;
