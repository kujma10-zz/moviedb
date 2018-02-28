# MovieDB

Interactive Movie Database.

## Getting Started

MovieDB backend is Rails 5 with Postgres. Front-end is React application.

### Build and run Rails 5 API

```
bundle install
rake db:migrate db:seed
rails s -p 3001
```

### Build and run front-end app

```
cd client && npm install && npm start
```

### Run tests

```
bundle install && bundle exec rspec
cd client && npm install && npm test
```
