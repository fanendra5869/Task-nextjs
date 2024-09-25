"use client";

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// Define the prop type for children
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default AuthProvider;
