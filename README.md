# Project REST-Rant

Rest Rant colors
-Primary    #FE4A49
-Secondary  #FBBA72
-Hightlight  #D6FFF6

REST-Rant is an app where users can review restaurants.

"As a user i need to be able to":
    view the menu
    make an order
    view order/reciept
    see my delivery


| Method | Path                  | Purpose                                     |
|--------|-----------------------|---------------------------------------------|
| GET    | /                     | Home page                                   |
| GET    | /places               | Places index page                           |
| POST   | /places               | Create new place                            |
| GET    | /places/new           | Form page for creating a new place          |
| GET    | /places/:id           | Details about a particular place            |
| PUT    | /places/:id           | Update a particular place                   |
| GET    | /places/:id/edit      | Form page for editing an existing place     |
| DELETE | /places/:id           | Delete a particular place                   |
| POST   | /places/:id/rant      | Create a rant (comment) about a place       |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a place    |
| GET    | *                     | 404 page (matches any route not defined above) |


|  Field    | Type      |
|-----------|-----------|
| id        | object id |
| name      | string    |
| city      | string    |
| state     | string    |
| cuisines  | string    |
| pic       | string (URL) |

