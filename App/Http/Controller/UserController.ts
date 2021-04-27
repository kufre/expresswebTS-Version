import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";

class UserController {
  private userRepo: any;
  constructor(UserRepo: any) {
    this.userRepo = UserRepo;
  }
  public index = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description } = req.body;
    try {
      let result = await this.userRepo.createApplicationRole(name, description);
      return HttpResponse.OK(res, result);
    } catch (error) {
      return next(error);
    }
  };
}

export default UserController;
