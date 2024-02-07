const Product = require("../model/productModel");

exports.getAddProducts = (req, res, next) => {
  console.log("add-product");
  res.render("admin/edit-products", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
    editing: false,
  });
};
exports.postAddProducts = (req, res, next) => {
  console.log("product");
  const title = req.body.title;
  const image = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, image, price, description);
  product.save();
  //   products.push({ title: req.body.title });
  res.redirect("/");
  // res.send("The product has been added");
};

exports.getEditProducts = (req, res, next) => {
  console.log("edit-page");
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    // if (!product) {
    //   return res.redirect("/");
    // }

    res.render("admin/edit-products", {
      pageTitle: "Edit Products",
      path: "/admin/edit-products",
      editing: editMode,
      product: product,
    });
  });
};

exports.postEditProducts = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedPrice,
    updatedDesc
  );
  updatedProduct.save();
  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
      productCSS: "true",
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect("/admin/products");
};
