# Task Sync

[Task-Sync](https://task-sync-rho.vercel.app/) - Task Managment App

## How to install and run locally?

```
$ git clone https://github.com/vivekbhatt07/TaskSync.git
$ cd TaskSync
$ npm install
$ npm run dev
```

## Features -

1. **Task Board Layout:** A task board layout with four columns representing the stages: Ready, In Progress, Testing, and Done.
2. **Drag-and-Drop:** The ability to drag and drop tasks from one group to another. Tasks are visually draggable and snap into the appropriate stage when dropped.
3. **Task Cards:** A task card within its respective group. The task card displays the task's name, assignee, priority, and any other relevant information.
4. **Task Metrics:** Visual metrics for each group, showing the total number of tasks in that stage, along with the breakdown of tasks based on their priorities (Urgent, High, Medium, Low).
5. Search functionality, which will search by task name from any group (Ready/In progress/Testing/Done)
6. Filters like filter by Start/End dates, filter by assignee, filter by severity of the task
7. Unique badges to each task based on severity (High/Medium/Low)
8. Light mode and dark mode

## Technology Used -

- React JS
- React Context API + useReducer
- React Router v6
- Tailwind CSS
- react-beautiful-dnd
- Chart.js
- MUI Icons
- MUI Components
