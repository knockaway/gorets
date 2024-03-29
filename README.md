# gorets

Upstream code can be found here https://github.com/jpfielding/gorets, this repo has some minor changes and bug fixes from upstream since that project seems deadish. This is open source to comply with the GPL, and will not be monitoring issues or PRs at this time.

======
RETS client in Go

The attempt is to meet [RETS 1.8.0](https://www.reso.org/specifications/) compliance.

Find me at gophers.slack.com#gorets


There are **multiple projects** in this repository:

## Client Tools

  * [Client](pkg/rets) - provides a Go based client for RETS

  * [Metadata](pkg/metadata) - provides the common structure for reading in properly formed RETS metadata

  * [Syndication](pkg/syndication) - provides the RETS syndication struct for processing syndication feeds 

  * [Util](pkg/util) - helper tools for dealing with RETS

## Web Tools

  * [Explorer Client](web/explorer) - provides a ReactJS UI for browsing RETS servers

  * [Explorer Service](pkg/explorer) - provides a Go backend for browsing RETS servers

  * [Proxy](pkg/proxy) - provides a mechanism for proxying multiple RETS connections through a single endpoint


Find latest explorer builds at https://cloud.docker.com/repository/docker/jpfielding/goretsexplorer

```sh
docker run --rm -it -p 8080:8080 docker.io/jpfielding/goretsexplorer:latest
```

