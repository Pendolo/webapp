export function organizationObjectPath(
  organizationId: string,
  fileName: string,
): string {
  return `organizations/${organizationId}/${fileName}`;
}

export async function uploadPrivateObject(input: {
  organizationId: string;
  fileName: string;
  body: Buffer;
  contentType: string;
}): Promise<never> {
  void input;
  throw new Error("uploadPrivateObject is not implemented yet");
}
