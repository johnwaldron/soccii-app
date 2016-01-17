/**
 *
 * @description :: Controls Stock Ticker
 */
module.exports = {
  activate: function(req,res) {

    // If not logged in, show the public view.
    if (!req.session.me) {
      return res.view('homepage');
    }

    // call the StockTickerService to get data
    marketIndices = StockTickerService.getStockMarketIndices();

    // return res with StockTicker view and data
    res.view( 'StockTicker', marketIndices );

  }
};
