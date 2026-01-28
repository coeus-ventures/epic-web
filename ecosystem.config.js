module.exports = {
 apps: [
  {
    name: "dev",
    script: "npm",
    args: "run dev:start",
    instances: 1,    
    watch: false,
    autorestart: true,
    max_restarts: 5,
    log_file: "./logs/combined.log",
    out_file: "./logs/out.log",
    error_file: "./logs/error.log",
    merge_logs: true,
    env: {
      NODE_ENV: "development",
      PORT: 8080
    }
  }
]
};
