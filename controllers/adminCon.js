const Product = require("../model/productModel");

exports.postAddProducts = (req, res, next) => {
  console.log("product");
  const title = req.body.title;
  const image = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, image, price, description);
  product.save();
  //   products.push({ title: req.body.title });
  res.redirect("/");
  // res.send("The product has been added");
};

exports.getAddProducts = (req, res, next) => {
  console.log("add-product");
  res.render("admin/add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
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
