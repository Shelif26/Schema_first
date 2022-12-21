import UserService from "../service/userService";

const UserResolver = {
  Query: {
    greet() {
      return UserService.greet();
    },
    getUsers() {
      return UserService.sendUsers();
    },
    getUser(parent: any, args: any, context: any) {
      return UserService.sendUser(args.Id);
    },
  },
  Mutation: {
    createUser(parent: any, args: any, context: any) {
      console.log(args.input);
      return UserService.insertUser(args.input);
    },
    updateUser(parant: any, args: any, context: any) {
      return UserService.sendData(args.newData);
    },
    deleteUser(parent: any, args: any, context: any) {
      return UserService.dataDelete(args.userId);
    },
  },
};
export const resolvers = [UserResolver];
