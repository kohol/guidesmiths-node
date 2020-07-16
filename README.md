# guidesmiths-node


```docker build -t konrad/node-web-app .```

```docker run -p 49160:8080 -d konrad/node-web-app```


```curl -d '{"input":"10 10\n5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL"}' -H "Content-Type: application/json" -X POST http://localhost:49160/```