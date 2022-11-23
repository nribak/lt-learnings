# Newsletter API

#### Base Model
    interface NewsPost {
        id: string,
        title: string,
        details: string
}

### Get all posts
#### request 
    GET /news
#### response
    List of news posts

### Get by post ID
#### request
    GET /news/:id
#### response
    the post or null if not found

### Create a new post
#### request
    POST /news {title?: string, details?: string}
#### response
    the newly created post

### Delete a post
#### request
    DELETE /news/:id
#### response
    boolean if successful

### Update a post
#### request
    POST /news/:id {title?: string, details?: string}
#### response
    the updated post



