# No Memory Leak

Small app to show that doing long polling with `Observable.timer` and the `$http` service is not the cause of a memory leak.

To run the application open in one terminal the fake server:

```
npm run fake-server
```

In other terminal, start the app dev server:

```
npm start
```

Open the Chrome dev tools, look for the "Timeline" panel and start recording the memory usage.