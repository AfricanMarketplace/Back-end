# Back-end
Node.js

[Heroku App] (https://africa-marketplace.herokuapp.com/)

#### Authenticaion endPoints:

**You must login first with a previously made account or one that you registerd with.**

## (auth) **POST** /auth/register

 **Expected requst body:**

    {
        "username": "Lamb",
        "password": "Lamb"
    }

**Returns the id of the newly created user:200 Status**

    {
        "user": [
            4
        ]
    }

## (auth) **POST** auth/login

**Expected request body:**

    {
        "username": "Jet",
        "password": "Jet"
    }

**Returns:**

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MTA2MjAxLCJleHAiOjE1NzQxOTI2MDF9.2e86pVoODyESq7hq-rQgBmh04ms64fdcbuK5PJxQ2ms"
        "message": "welcome Jet"
    }

## When you get the token, store it in local/session storage
## From the remaining endpoints, you need to have that token in a header under the key "authorization"
## If you dont you will not be allowed to see any other information

#### User Endpoints:

## (users) **GET** /users

**Returns:**

{
  "users": [
    {
      "id": 1,
      "username": "Kyle",
      "locations": [
        {
          "id": 1,
          "name": "CityLocation",
          "user_id": 1
        }
      ]
    },
    {
      "id": 2,
      "username": "Jet",
      "locations": [
        {
          "id": 2,
          "name": "RuralLocation",
          "user_id": 2
        }
      ]
    },
    {
      "id": 3,
      "username": "Erica",
      "locations": [
        {
          "id": 3,
          "name": "CityLocation",
          "user_id": 3
        }
      ]
    }
  ]
}

## (users) **GET** users/:id

**Returns**

{
  "user": {
    "id": 2,
    "username": "Jet",
    "locations": [
      {
        "id": 2,
        "name": "RuralLocation",
        "user_id": 2
      }
    ]
  }
}

## (users) **PUT** users/:id

**Expects**

{
	"username": "test"
}

**Returns:200 status**

{
  "id": [
    5
  ]
}

## (users) **DELETE** /users/:id

**Returns**

{
  "status": "true"
}

#### Locations endPoints:

## (location) **GET** /location

**Returns**

{
  "locations": [
    {
      "id": 1,
      "name": "CityLocation",
      "user_id": 1
    },
    {
      "id": 2,
      "name": "RuralLocation",
      "user_id": 2
    },
    {
      "id": 3,
      "name": "CityLocation",
      "user_id": 3
    }
  ]
}

## (location) **GET** /location/:id

**Returns**

{
  "location": {
    "id": 1,
    "name": "CityLocation",
    "user_id": 1
  }
}

## (location) **POST** /location

**Expects**

{
	"name": "Yeet",
	"user_id": 1
}

**Returns: 200 Status**

{
  "id": [
    4
  ]
}

## (location) **PUT** /location/:id

**Expects**

{
	"name": "Yate"
}

**Returns**

{
  "id": [
    4
  ]
}

## (location) **DELETE** /location/:id

**Returns**

{
    "status":"true"
}

#### Item endPoints:

## (item) **GET** /item

**Returns**

{
  "items": [
    {
      "id": 1,
      "name": "Beef",
      "description": "Tasty meat",
      "price": "30.25",
      "user_id": 1,
      "category_id": 1,
      "user": {
        "id": 1,
        "username": "Kyle"
      },
      "category": {
        "id": 1,
        "name": "Food"
      }
    },
    {
      "id": 2,
      "name": "Scale",
      "description": "measures up to a mg",
      "price": "60.25",
      "user_id": 2,
      "category_id": 2,
      "user": {
        "id": 2,
        "username": "Jet"
      },
      "category": {
        "id": 2,
        "name": "Tools"
      }
    },
    {
      "id": 3,
      "name": "Curtains",
      "description": "Nice looking things",
      "price": "40.25",
      "user_id": 3,
      "category_id": 3,
      "user": {
        "id": 3,
        "username": "Erica"
      },
      "category": {
        "id": 3,
        "name": "Decorations"
      }
    }
  ]
}

## (item) **GET** /item/:id

**Returns**

{
  "item": {
    "id": 1,
    "name": "Beef",
    "description": "Tasty meat",
    "price": "30.25",
    "user_id": 1,
    "category_id": 1,
    "user": {
      "id": 1,
      "username": "Kyle"
    },
    "category": {
      "id": 1,
      "name": "Food"
    }
  }
}

## (item) **POST** /item

**Expects**

{
    "name": "Yeet",
    "description": "Yate",
    "price": "30.25",
    "user_id": 2,
    "category_id": 3
}

**Returns: 200 Status**

{
  "id": [
    5
  ]
}

## (item) **PUT** /item/:id

**Expects**

{
    "name": "Rug",
    "description": "Beautiful blue persian rug ",
    "price": "3000.25",
    "user_id": 1,
    "category_id": 3
}

**Returns; 200 Status**

{
  "id": [
    5
  ]
}

## (item) **DELETE** /item/:id

**Returns**

{
    "status":"true"
}

#### Category endPoints:

## (category) **GET** /category

**Returns**

{
  "categories": [
    {
      "id": 1,
      "name": "Food",
      "items": [
        {
          "id": 1,
          "name": "Beef",
          "description": "Tasty meat",
          "price": "30.25",
          "user_id": 1,
          "category_id": 1
        }
      ]
    },
    {
      "id": 2,
      "name": "Tools",
      "items": [
        {
          "id": 2,
          "name": "Scale",
          "description": "measures up to a mg",
          "price": "60.25",
          "user_id": 2,
          "category_id": 2
        }
      ]
    },
    {
      "id": 3,
      "name": "Decorations",
      "items": [
        {
          "id": 3,
          "name": "Curtains",
          "description": "Nice looking things",
          "price": "40.25",
          "user_id": 3,
          "category_id": 3
        }
      ]
    }
  ]
}

## (category) **GET** /category/:id

**Returns**

{
  "category": {
    "id": 4,
    "name": "Testy testerson",
    "items": []
  }
}

## (category) **POST** /category

**Expects**

{
    "name": "Yeet"

}

**Returns: 200 Status**

{
  "id": [
    4
  ]
}

## (category) **PUT** /category/:id

**Expects**

{
    "name": "Yate"
}

**Returns: 200 Status**

{
  "id": [
    4
  ]
}

## (category) **DELETE** /category/:id

**Returns**

{
    "status":"true"
}











