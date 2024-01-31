exports.getError = (req, res, next) => {
  console.log("page not found ");
  res.status(404).render("404", { pageTitle: "Page not found", path: "/404" });
};
