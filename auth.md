

AuthType one
................................................................|
User                                                            |
Role: []
Permission: []
user_role: []
role_permission: []

auth one
-> setup user -> exiting

-> setup role 
-> setup permissions
-> setup role and permission relationship
-> setup role and user relationship

User: [id, username, email, [password]]
Role: [id,name,description]
Permission: [id,name,description]
user_role:[userid,roleid]
role_permission:[roleid,permissionid]

................................................................
AuthType two
................................................................
User: [id, username, email, [password]]
Role: [id,name,description]
user_role:[userid,roleid]

auth two
-> setup user
-> setup role 
-> setup role and user relationship

node maker make - auth 


interface 
addPermission(name, description)
addPermissionToRole(roleId,permissiontiD);
