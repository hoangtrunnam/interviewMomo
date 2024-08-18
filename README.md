# I. Welcome to Momo interview Project
## 1. About this project

The application allows searching within the user's contact list. With complex objectives and technical requirements aimed at assessing the candidate's capabilities, beyond the challenges in technical demands, the application can also evaluate code organization, coding conventions, and more.
## 2. Idea

First, build the UI, then proceed with the logic code. When the user installs and launches the application, the app will call an API to get the contact list, simultaneously initializing the database and tables, and then save the data into the corresponding tables. Here, I use the SQLite database management system. If saving to the database is successful, I will query to get the data from the database; otherwise, an error will be reported. When the user closes the application and reopens it, the API will still be called to synchronize the phone contacts (if there are no new contacts, the insert command will not be executed to avoid data duplication).

**Simple flow:**

The first-time launch app:
- Call API -> Init DB -> Save to DB -> Read Data from DB -> Render

The second launch app and later:

- Call API -> Check to synchronize data -> Read data from DB -> Render

**Technique used:**

- Flashlist
- SQLite
- Fuse.js
- Debounce
- Expo image
- useCallback, React.Memo
- scale (multi devices)

# II. Run project
## Step 1: Run Metro Server on your terminal

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Press **I** to run the application on IOS, **A** to run the application on the Android emulator.



# III. Navigation

## 1.Stack

- How to create a new screen
    + Declare the data props type passed in `src/navigation/types`
    + Declare screen name in `src/navigation/routes`
    + Create `<Stack.Screen>` in `src/navigation/MainStack`
- Navigate to a new screen

            onPress={() => navigation.navigate(routes_name)}
            onPress={() => navigation.push(routes_name, {params})}
- lấy param
    ``` javascript

        const { itemId , otherParam} = route.params
        
    ```
  
# IV. Commit Lint
- Commit in the correct format. If the format is not correct, an error will be reported
- Normal format
        type(scope?): Subject   
        #scope is optional;
- Example: 
    git commit -m 'chore: run tests on Travis ci'
    git commit -m 'fix(server): send cors headers'
    git commit -m 'feat(blog): add comment section'
- Normal type: 
    + build : build
    + chore : việc vặt
    + docs : tài liệu
    + feat : tính năng
    + fix : fix 
    + perf : hoàn thành
    + refactor : cấu trúc lại
    + revert : hoàn lại
    + style : style
    + test : test
    + add : thêm


