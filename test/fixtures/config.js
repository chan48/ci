const execSync = require('child_process').execSync;
var repoPath = execSync('git rev-parse --show-toplevel').toString().trim();

module.exports = {
  "notification": {
    "selection": "slack",
    "slack": {
      "webhookurl": "http://localhost:51235",
      "channel": "your_channel_to_be_notified"
    }
  },
  "repoPath": repoPath,
  "jobs": [
    {
      "targets": "*",
      "commands": "git pull"
    },
    {
      "targets": "*",
      "commands": ["npm install", "[ -f underway ] && (touch underway.conflict && exit -1) || touch underway", "sleep 2", "rm -f underway"] 
    }
  ]
}
