## Set Up

[![Greenkeeper badge](https://badges.greenkeeper.io/ginpei/20170527-watch-docker.svg)](https://greenkeeper.io/)

```console
> docker-compose up
Starting watchdocker_node_1
Attaching to watchdocker_node_1
node_1  | npm info it worked if it ends with ok
...snip...
node_1  | npm info ok
watchdocker_node_1 exited with code 0
```

## Check 'em out

### `fs.watch()`

```console
> docker-compose run node bash
# npm run watch &
[1] 5
npm info it worked if it ends with ok
npm info using npm@3.10.10
npm info using node@v6.10.2
npm info lifecycle @~prewatch: @
npm info lifecycle @~watch: @

> @ watch /app
> node ./watch.js

--- fs.watch ---
# touch target.js
fs change target.js
# # edit the file from host computer
```

It no longer watches its changes...

### watchify

```console
> docker-compose run node bash
# npm run watchify &
...snip...

> @ watchify /app
> watchify target.js -v -o /dev/null

524 bytes written to /dev/null (0.06 seconds) at 7:55:14 AM
# touch target.js
524 bytes written to /dev/null (0.02 seconds) at 7:56:32 AM
# # edit the file from host computer
```

It no longer watches its changes...

### gaze

```console
> docker-compose run node bash
# npm run gaze &
...snip...

> @ gaze /app
> node ./gaze.js

--- gaze ---
gaze! null

# touch target.js
gaze changed /app/target.js
# # edit the file from host computer
gaze changed /app/target.js
```

It works!

## My Environments

- Windows 10 (Version 1607)
- Docker version 17.03.1-ce, build c6d412e
- docker-compose version 1.11.2, build f963d76f
