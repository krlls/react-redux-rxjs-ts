# My-build-React

### Установка

Разместите репозиторий в корневой директории пользователя или отредактируйте пути в `docker-compose.yaml`

Создать в корне файл `.env` со следующим содержимым:

Пример можно взять из файла `template.env`

    DATABASE_ROOT_PASSWORD=root_pass
    DATABASE=wordpress
    DATABASE_USER=user
    DATABASE_PASSWORD=password

---

### Запуск и управление

Для управления проектом используются следующие `make` команды:

    make start # Запуск контейнеров проекта 
    make stop # Остановка всех контейнеров проекта
    make restart # Рестарт всех контейнеров

