import data from 'services/MetadataServiceTest';
  // request:
  // endpoint/rpc
  // {
  // "id": 0,
  // "method": "MetadataService.Get",
  // "params": {
  //    "connection": {} // see config object
  //    "oldest": 60, // the minutes old we'll accept
  //    "extraction" // (COMPACT-DECODED, COMPACT-INCREMENTAL, STANDARD-XML
  //    }
  // }

  // response:
  //  {
  //   "result": {},
  //   "error": nil,
  //   "id": 0
  //   }
export default class MetadataService {
  // empty metadata
  static empty = {
    System: {
      'METADATA-RESOURCE': {
        Resource: [],
      },
      SystemDescription: 'Loading metadata...',
      SystemID: 'Loading...',
    },
  };

  // metadata params
  static params = {
    oldest: 60, // the oldest metadata we're willing to accept cached (minutes)
    extraction: null,  // the extraction type to use (COMPACT-DECODED, COMPACT-INCREMENTAL, STANDARD-XML)
  }

  static get(conn, args) {
    if (config.api === 'test') {
      return Promise.resolve(data.getData(conn));
    }
    return fetch(`${config.api}/rpc`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        method: 'MetadataService.Get',
        params: [{
          ...args,
          connection: conn,
        }],
      }),
    });
  }
}
