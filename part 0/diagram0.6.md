```mermaid

sequenceDiagram
    participant browser
    participant server
  
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: The browser sends the user input data to the server as JSON data

    server-->>browser: Responds with 201 created, no further HTTP requests
    deactivate server

  ```