import Service from "./service";

class CollectionService extends Service {
  readCollections = () => this.api.get("/api/collections");
}

const collectionService = new CollectionService();

export default collectionService;
