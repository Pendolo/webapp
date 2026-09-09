export async function hashPassword(password: string): Promise<never> {
  void password;
  throw new Error("hashPassword is not implemented yet");
}

export async function verifyPassword(
  password: string,
  passwordHash: string,
): Promise<never> {
  void password;
  void passwordHash;
  throw new Error("verifyPassword is not implemented yet");
}
