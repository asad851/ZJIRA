import { auth } from "@clerk/nextjs/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
export async function createProject(data) {
  const { userId, orgId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  if (!orgId) {
    throw new Error("No organization selected");
  }
  const { data: membership } =
    await clerkClient().organizations.getOrganizationMembershipList({
      organizationId: organization.id,
    });

  const userMembership = membership.find(
    (member) => member.publicUserData.userId === userId
  );

  // If user is not a member, return null
  if (!userMembership || userMembership.role !== "org:admin") {
    throw new Error("Only organization admins can create projects");
  }

  try {
    const project = await db.project.create({
      data: {
        name: data.name,
        key: data.key,
        description: data.description,
        organizationId: orgId,
      },
    });
  } catch (err) {
    throw new Error("Error creating project: " + err.message);
  }
}
