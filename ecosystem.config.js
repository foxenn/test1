module.exports = {
  apps: [{
    name: 'test1',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-216-216-116.us-east-2.compute.amazonaws.com',
      key: '~/Downloads/test1.pem',
      ref: 'origin/master',
      repo: 'https://github.com/foxenn/test1.git',
      path: '/home/ubuntu/test1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}