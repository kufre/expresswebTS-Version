interface IdentityManagerInterface {
  createRole(name: string, description: string): Promise<object>;
  createPermission(name: string, description: string): Promise<object>;
  assignRoleToUser(roleId: string, userId: string): Promise<object>;
  removeUserFromRole(roleId: string, userId: string): Promise<object>;
}

export default IdentityManagerInterface;