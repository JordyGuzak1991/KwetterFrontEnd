import {User} from "./user";
/**
 * Created by jordy on 04/08/2017.
 */

export class Kweet {
  username: string;
  message: string;

  constructor(username: string, message: string) {
    this.username = username;
    this.message = message;
  }
}
