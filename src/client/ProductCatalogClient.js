const {Empty} = require('./app_pb');
const {ProductCatalogServiceClient} = require('./app_grpc_web_pb');

const productCatalogServiceClient = new ProductCatalogServiceClient('http://localhost:8080');

const client = {
    listProducts : function () {
        const request = new Empty();
        productCatalogServiceClient.listProducts(request, {}, function (err, response) {
            if (err != null) {
                console.log(err);
            } else {
                console.log(response);
            }
        });
    }
}




