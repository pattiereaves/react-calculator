# React Calculator

This project is a simple four-function calculator built with React.

## Project goals

I wrote this in (roughly) 2 hours in one sitting. It implements a basic calculator with basic arithmetic features, a change sign button and a percent button. It is designed to look (more or less) like the iOS calculator.

## Production

https://pattiereaves.com/react-calculator/

This project deploys on merges to main via Github pages.

## Development

To work on this project,

1. `npm install`
1. `npm run dev`
1. http://localhost:5173/

## Known issues / Things I would address if I had more time

- Tests
- Operations would stay in the same place (not move up when there is a result)
- The clear button will not appear again if you add more to the operation after pressing it once.
- Once you hit equals, it will keep evaluating the operation even if you add to it.
- The classNames don't follow any convention.
- The css isn't modularized.
- Would refactor to useContext to avoid prop drilling.
