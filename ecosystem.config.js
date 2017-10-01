module.exports = {
  apps: [{
    name: 'ketogenicfamily',
    script: './ketogenicfamily/server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-59-74-13.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/ketogenicfamily.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jpreecedev/ketogenicfamily.git',
      path: '/home/ubuntu/ketogenicfamily',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
