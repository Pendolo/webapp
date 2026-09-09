export async function createInvite(input: {
  organizationId: string;
  email: string;
  role: "admin" | "manager" | "employee" | "viewer";
}): Promise<never> {
  void input;
  throw new Error("createInvite is not implemented yet");
}

export async function acceptInvite(input: {
  token: string;
  password: string;
  name: string;
}): Promise<never> {
  void input;
  throw new Error("acceptInvite is not implemented yet");
}
