/**
 * Created by jw on 1/10/16.
 * StockerTickerService in api/services
 *
 * Provides access to current stock market indices
 *
 */
module.exports = {
  getStockMarketIndices: function() {
    // call a 3rd party API to retrieve list of markets and index values
    // returns the list
    mockIndex = "{ \"mockIndex\": { \"Name\": \"TSX\", \"Value\": \"15646.57\" } }"
    return mockIndex;
  }
};

