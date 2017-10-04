module.exports = {
  apps: [{
    name: 'ketogenicfamily',
    script: './build/main.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-30-49.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/ketogenic-family.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jpreecedev/ketogenicfamily.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
