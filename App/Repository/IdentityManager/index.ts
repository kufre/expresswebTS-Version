import IdentityManagerInterface from "./IdentityManagerInterface";
import Permisson_model from 'App/Model/Permissions_model'
import Role_model from 'App/Model/Roles_model'
import User_role_model from 'App/Model/User_roles_model'
import Role_permission_model from 'App/Model/Role_permissions_model'

abstract class IdentityManager implements IdentityManagerInterface {
  async createRole(name: string, description: string): Promise<object> {
    return await new Promise(async (resolve, reject) => {
      return await Role_model.query()
        .insert({name, description})
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    })
  }
  async createPermission(name: string, description: string): Promise<object> {
    return await new Promise(async (resolve, reject) => {
      return await Permisson_model.query()
        .insert({name,description})
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  assignRoleToUser(roleId: string, userId: string): Promise<object> {
    throw new Error("Method not implemented.");
  }
  removeUserFromRole(roleId: string, userId: string): Promise<object> {
    throw new Error("Method not implemented.");
  }
}

export default IdentityManager;
