module.exports = {
  title: process.env.TITLE || 'Dokku UI',
  db_url: process.env.DATABASE_URL || 'sqlite:///tmp/dokku-ui.db',
  cookie_key1: process.env.COOKIE_KEY1 || 'AppleBanana',
  cookie_key2: process.env.COOKIE_KEY2 || 'CherryDurian',
  dokku_host: process.env.DOKKU_HOST || 'ggpark.net',
  identity: process.env.IDENTITY || '~/.ssh/id_rsa'
}
