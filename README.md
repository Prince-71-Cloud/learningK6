# Learning K6 - Performance Testing Repository

A repository dedicated to learning and practicing **K6** for performance testing as a Software Tester.

## 🎯 Purpose

This repository contains practical K6 test scripts for learning load testing, performance testing, and API testing concepts. Each script demonstrates different K6 features and testing scenarios.

## 📁 Files Overview

| File | Description |
|------|-------------|
| `script.js` | Basic load test with 10 VUs running for 30 seconds against Quick Pizza app |
| `checks.js` | Demonstrates K6 check assertions for validating HTTP responses |
| `customMetrics.js` | Shows how to create and use custom Counter and Trend metrics |
| `first_test.js` | Advanced test with both protocol and browser-based testing scenarios |

## 🚀 Getting Started

### Prerequisites

- [K6](https://k6.io/docs/getting-started/installation/) installed
- Node.js (optional, for extended functionality)

### Running Tests

```bash
# Run basic load test
k6 run script.js

# Run with checks
k6 run checks.js

# Run with custom metrics
k6 run customMetrics.js

# Run protocol and browser tests
k6 run first_test.js
```

### Running with Options

```bash
# Run with specific VUs and duration
k6 run --vus 20 --duration 60s script.js

# Run with cloud token (if using k6 Cloud)
k6 cloud script.js
```

## 📚 Key Concepts Covered

- ✅ **HTTP Requests** - GET, POST, and other HTTP methods
- ✅ **Checks & Assertions** - Validate responses and test expectations
- ✅ **Custom Metrics** - Counter, Trend, Gauge, and Rate metrics
- ✅ **Scenarios** - Multiple test scenarios in a single script
- ✅ **Browser Testing** - End-to-end browser automation with k6/browser
- ✅ **Load Testing** - Virtual users (VUs), iterations, and duration

## 🛠️ As a Software Tester

This repository helps software testers:

1. Learn performance testing fundamentals with K6
2. Write maintainable and reusable test scripts
3. Integrate performance tests into CI/CD pipelines
4. Analyze test results and identify bottlenecks
5. Practice real-world testing scenarios

## 📖 Resources

- [K6 Documentation](https://k6.io/docs/)
- [K6 JavaScript API](https://k6.io/docs/javascript-api/)
- [Grafana K6](https://grafana.com/oss/k6/)

## 📄 License

This repository is for learning and educational purposes.
