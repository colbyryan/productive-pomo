# Productive Pomo

![Home Page Image](https://github.com/colbyryan/productive-pomo/blob/main/src/Images/productivepomo.png?raw=true))

> Productive Pomo, focus and flow!

---

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

---

## Description

---

#### Technologies

- React.js
- CSS
- dbdiagram
- Figma
- Canva
- Git/Github
- Postman

---

## How To Use

### Installations

Run commands inside of Productive Pomo Directory.

```
npm install npm@latest -g
```

```
npm install
```

```
npm install react-icons --save
```

```
npm install react-circle-timer --save
```

---

### Starting the webpage

1. Clone the repo

   ```
   git clone git@github.com:colbyryan/productive-pomo.git
   ```

1. Run this command inside of the Nutshell API directory.

   ```
   json-server -p 8088 -w database.json
   ```

   ```
   npm start
   ```

---

### API Reference

Create database.json file inside of the src directory and paste the following JSON.

```JSON
"users": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@productivepomo.com",
      "image": "test.jpg"
    }
],
"tasks": [
    {
      "id": 1,
      "userId": 1,
      "taskCategoryId": 1,
      "name": "Test Task",
      "date": "10/15/21",
      "isCompleted": false
    }
],
"notes": [
    {
      "note": "Test Note",
      "date": "2021-10-27",
      "userId": 1,
      "notesCategoryId": 1,
      "id": 1
    }
  ],
  //THIS DATA IS STATIC
 "taskCategory": [
    {
      "id": 1,
      "name": "Daily"
    },
    {
      "id": 2,
      "name": "Weekly"
    },
    {
      "id": 3,
      "name": "Monthly"
    }
  ],
  "notesCategory": [
    {
      "id": 1,
      "name": "Work"
    },
    {
      "id": 2,
      "name": "Personal"
    }
  ],

```

![ERD Image](https://github.com/colbyryan/productive-pomo/blob/main/src/Images/ERD.png?raw=t))

[Back To The Top](#productive-pomo)

---

## License

MIT License

Copyright (c) 2021 Nashville Software School

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back To The Top](#productive-pomo)

---

## Author Info

### Colby Ryan

- LinkedIn - [Colby Ryan](https://www.linkedin.com/in/colbyrryan/)
- GitHub - [@colbyryan](https://github.com/colbyryan)

[Back To The Top](#productive-pomo)

---
