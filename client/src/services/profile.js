import Service from "./service";

class ProfileService extends Service {
  // create happens during authentication
  readProfile = () => this.api.get(`/api/profile`);
  updateProfile = (profile) => this.api.put(`/api/profile`, profile);
  deleteProfile = () => this.api.delete(`/api/profile`);
  uploadImage = (image) => this.api.post(`/api/upload`, image);
}

const profileService = new ProfileService();

export default profileService;