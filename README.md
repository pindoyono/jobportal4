<p align="center">
  <img width="80" height="80" src="./public/assets/images/icon.png">
  <h1 style="text-align:center">Leverage | Company Job Board</h1>
</p>

## Preview
![Preview Homepage](/public/assets/images/preview_01.png)
![Preview Job Detail](/public/assets/images/preview_02.png)
![Preview Dashboard](/public/assets/images/preview_03.png)

## Installation
- Clone the repo
```bash
git clone https://github.com/ahmethakanbesel/leverage-job-board.git
```
- Install dependencies
```bash
npm install
composer install
```

- Build frontend assets
```bash
npm run build
```

- Create .env file
```bash
cp .env.example .env
```

- Generate app key
```bash
php artisan key:generate
```

- Migrate database
```bash
php artisan migrate
```

- Create admin user
```bash
php artisan leverage:create-admin
```

- Link storage
```bash
php artisan storage:link
```

- Serve the app
```bash
php artisan serve
```

- Visit the app on
    - [http://localhost:8000](http://localhost:8000)
    - [http://localhost:8000/dashboard](http://localhost:8000/dashboard)

## Credits
- [LaraBoard Careers](https://github.com/crivion/laraboard-careers)# jobportal4
