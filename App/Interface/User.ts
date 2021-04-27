export default interface UserEntity {
  createUserRole(roleId: string, userId: string): Promise<object>
}