const products = [];

exports.getAddProducts = (req, res, next) => {
  console.log("add-product");
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProducts = (req, res, next) => {
  console.log("product");

  products.push({ title: req.body.title });
  res.redirect("/");
  // res.send("The product has been added");
};

exports.getProducts = (req, res, next) => {
  console.log("shop");

  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
};

exports.getError = (req, res, next) => {
  console.log("page not found ");
  res.status(404).render("404", { pageTitle: "Page not found" });
};
