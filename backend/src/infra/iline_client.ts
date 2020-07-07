import Profile from "./model/profile";

export default interface ILineClient {
  getProfile(userId: string): Promise<Profile>;
}
