/**
 * NextAuth.js configuration
 * Configures authentication with database-backed sessions and JWT
 */

import { type NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Configure your providers here (e.g., GitHub, Google, Credentials)
    // This is a minimal setup for session management
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        // Add user role to session
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        });
        session.user = {
          ...session.user,
          id: user.id,
          role: dbUser?.role,
        };
      }
      return session;
    },
  },
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};
