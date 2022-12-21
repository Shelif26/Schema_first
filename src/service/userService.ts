import { UserData } from "../Resources/resource";
import { User } from "../Entity/User";

class UserService {
  public static greet() {
    console.log("Welcome");
  }

  public static async insertUser(args: any) {
    console.log(args);
    const user = UserData.getRepository(User);
    const data = await user.save(args);
    return data;
  }

  public static async sendUsers(): Promise<User[]> {
    const user = UserData.getRepository(User);
    const datas = await user.find();
    return datas;
  }

  public static async sendUser(args: any) {
    const user = UserData.getRepository(User);
    const data = await user.findOne({ where: { id: args } });
    return data;
  }

  public static async sendData(newData: any) {
    const user = UserData.getRepository(User);
    await user.save(newData);
    return "Saved SucessFully";
  }

  public static async dataDelete(user: any) {
    const userd = UserData.getRepository(User);
    await userd.delete(user);
    return "Deleted Sucessfully";
  }
}

export default UserService;
