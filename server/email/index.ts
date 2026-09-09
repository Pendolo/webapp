export type TransactionalEmail = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail(email: TransactionalEmail): Promise<never> {
  void email;
  throw new Error("sendEmail is not implemented yet");
}
