import data from 'services/SearchServiceTest';

export default class SearchService {

  // search params
  static params = {
    resource: null,
    class: null,
    select: null,
    query: null,
    // optional
    format: 'COMPACT-DECODED', // defaults to COMPACT-DECODED
    counttype: 0, // defaults = 0 (none)
    querytype: 'DMQL2', // defaults to DMQL2
    offset: 1, // defaults to 1
    limit: 1000, // defaults to none
  };

  // {
  //  "result":
  //    {
  //    "columns": "array",
  //    "row": "array of arrays",
  //    "maxRows": false,
  //    "count":0}
  //    },
  //  "error": "Foo Bar",
  //  "id":1
  // }
  static search(conn, args) {
    if (config.api === 'test') {
      return Promise.resolve(data.getData(conn, args));
    }
    return fetch(`${config.api}/rpc`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        method: 'SearchService.Run',
        params: [{
          ...args,
          connection: conn,
        }],
      }),
    });
  }
}
