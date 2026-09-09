import { SESSION_COOKIE_NAME } from "@/lib/constants";

export { SESSION_COOKIE_NAME };

export type SessionRecord = {
  id: string;
  userId: string;
  expiresAt: Date;
  revokedAt: Date | null;
};

export async function createSession(userId: string): Promise<never> {
  void userId;
  throw new Error("createSession is not implemented yet");
}

export async function getSessionByToken(
  token: string,
): Promise<SessionRecord | null> {
  void token;
  throw new Error("getSessionByToken is not implemented yet");
}

export async function revokeSession(sessionId: string): Promise<never> {
  void sessionId;
  throw new Error("revokeSession is not implemented yet");
}
