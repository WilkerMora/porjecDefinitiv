const toIndex = (req, res, next) => {
    res.render("index", { title: "Express" });
  };
  
  module.exports = toIndex;

