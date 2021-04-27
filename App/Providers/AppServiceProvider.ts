import ServiceProvider from "Elucidate/Support/ServiceProvider";
import Authenticator from "Elucidate/Auth/Authenticator";
import UserEntity from '../../App/Entities/User'
import UserRepository from "App/Repository/UserRepository"

class AppServiceProvicer extends ServiceProvider {
  /**
   * Register any application services.
   * @return void
   */
  public register() {
    this.app.singleton("Authenticator", Authenticator, "class");
    this.app.singleton("userEntity", UserEntity, "class");
    this.app.singleton("UserRepo", UserRepository, "class")
  }
  
  /**
   * Bootstrap any application services.
   * @return void
   */
  public boot() {
    //
  }
}

export default AppServiceProvicer;