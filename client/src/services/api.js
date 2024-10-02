import Service from "./service";

class ItemService extends Service {
  createItem = (item, itemName) =>
    this.api.post(`/api/collections/${itemName}`, item);
  readItems = (itemName) => this.api.get(`/api/collections/${itemName}`);
  readItem = (id, itemName) =>
    this.api.get(`/api/collections/${itemName}/${id}`);
  updateItem = (id, item, itemName) =>
    this.api.put(`/api/collections/${itemName}/${id}`, item);
  deleteItem = (id, itemName) =>
    this.api.delete(`/api/collections/${itemName}/${id}`);
  uploadImage = (image) => this.api.post(`/api/upload`, image);
}

const itemService = new ItemService();

export default itemService;
