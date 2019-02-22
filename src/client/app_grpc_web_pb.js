/**
 * @fileoverview gRPC-Web generated client stub for embleon
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.embleon = require('./app_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.embleon.ProductCatalogServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.embleon.ProductCatalogServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.embleon.ProductCatalogServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.embleon.ProductCatalogServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.embleon.Empty,
 *   !proto.embleon.ListProductsResponse>}
 */
const methodInfo_ProductCatalogService_ListProducts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.embleon.ListProductsResponse,
  /** @param {!proto.embleon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.embleon.ListProductsResponse.deserializeBinary
);


/**
 * @param {!proto.embleon.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.embleon.ListProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.embleon.ListProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.embleon.ProductCatalogServiceClient.prototype.listProducts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/embleon.ProductCatalogService/ListProducts',
      request,
      metadata,
      methodInfo_ProductCatalogService_ListProducts,
      callback);
};


/**
 * @param {!proto.embleon.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.embleon.ListProductsResponse>}
 *     The XHR Node Readable Stream
 */
proto.embleon.ProductCatalogServicePromiseClient.prototype.listProducts =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listProducts(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.embleon.GetProductRequest,
 *   !proto.embleon.Product>}
 */
const methodInfo_ProductCatalogService_GetProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.embleon.Product,
  /** @param {!proto.embleon.GetProductRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.embleon.Product.deserializeBinary
);


/**
 * @param {!proto.embleon.GetProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.embleon.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.embleon.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.embleon.ProductCatalogServiceClient.prototype.getProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/embleon.ProductCatalogService/GetProduct',
      request,
      metadata,
      methodInfo_ProductCatalogService_GetProduct,
      callback);
};


/**
 * @param {!proto.embleon.GetProductRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.embleon.Product>}
 *     The XHR Node Readable Stream
 */
proto.embleon.ProductCatalogServicePromiseClient.prototype.getProduct =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getProduct(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.embleon.SearchProductsRequest,
 *   !proto.embleon.SearchProductsResponse>}
 */
const methodInfo_ProductCatalogService_SearchProducts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.embleon.SearchProductsResponse,
  /** @param {!proto.embleon.SearchProductsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.embleon.SearchProductsResponse.deserializeBinary
);


/**
 * @param {!proto.embleon.SearchProductsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.embleon.SearchProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.embleon.SearchProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.embleon.ProductCatalogServiceClient.prototype.searchProducts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/embleon.ProductCatalogService/SearchProducts',
      request,
      metadata,
      methodInfo_ProductCatalogService_SearchProducts,
      callback);
};


/**
 * @param {!proto.embleon.SearchProductsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.embleon.SearchProductsResponse>}
 *     The XHR Node Readable Stream
 */
proto.embleon.ProductCatalogServicePromiseClient.prototype.searchProducts =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.searchProducts(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.embleon;

