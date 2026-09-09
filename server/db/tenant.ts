export type TenantContext = {
  organizationId: string;
  userId: string;
};

export function assertOrganizationId(
  organizationId: string | null | undefined,
): string {
  if (!organizationId) {
    throw new Error("organization_id is required on every business query");
  }

  return organizationId;
}
