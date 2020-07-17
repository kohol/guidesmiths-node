# guidesmiths-node


```docker build -t konrad/node-web-app .```

```docker run -p 49160:8080 -d konrad/node-web-app```


<code>
curl -d '{"input":"10 10\n 5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL"}' -H "Content-Type: application/json" -X POST http://localhost:49160/
</code>