import http from 'k6/http';
import { Counter, Trend } from 'k6/metrics';

const myTrend = new Trend('my_trend');

export default function () {
  const res = http.get('https://quickpizza.grafana.com/');
  myTrend.add(res.timings.waiting);
  console.log(myTrend.name + ': ' + myTrend.mean);
};
