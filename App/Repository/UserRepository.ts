import IdentityManager from 'App/Repository/IdentityManager/IdentityManagerInterface'

class UserRepository {
  identity : IdentityManager;
  constructor(userEntity: IdentityManager) {
    this.identity = userEntity;
  }
  createApplicationRole = async (name: string, description: string) =>{
     return await this.identity.createRole(name, description)
     .then(result => {
       return result
     }).catch(error => {
       return error
     })
  }
}


export default UserRepository;