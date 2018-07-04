// To open the login page
exports.destroy = function(req, res){
  req.session.destroy();
  res.redirect('login');
};