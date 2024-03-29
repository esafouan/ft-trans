import { createContext, useContext } from 'react';
import socketIOClient from 'socket.io-client';

const socketInstance = socketIOClient('ws://localhost:3000', {
  withCredentials: true,
  transports: ['websocket']
});

const SocketContext = createContext(socketInstance);

export const useSocket = () => useContext(SocketContext);

