import {Empty} from '../generated/app_pb';
import {ProductCatalogServiceClient} from '../generated/app_grpc_web_pb';

class Client {
    listProducts() {
        const productCatalogServiceClient = new ProductCatalogServiceClient('http://localhost:8080');
        const request = new Empty();
            productCatalogServiceClient.listProducts(request, {}, function (err, response) {
            if (err != null) {
                console.log(err);
            } else {
                const productList = response.getProductsList();
                productList.forEach(i => console.log(i.getName()));
            }
        });
    }
}

export default Client;






