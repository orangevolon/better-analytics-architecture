# Better architecture for integrating analytics into React/Redux using RxJS

## Brief

It’s very common to think about the analytics as second class citizen in our codebase. They really don’t matter most of the time until, they do… As long as the project is simple and the number of events are small, it’s not a big deal. You fire the event right from the component and it is done.
Now, what happens if you have hundreds of different events spread across you your application and you don’t know where or when any of them are being fired? Or you just want to change your code to include another analytics platform as well? That was the situation I was facing in our codebase and in this article I’m gonna share my experience of how I applied a better architecture to handle the analytics inside our React/Redux applications.

## Medium Article
https://amir-alami.medium.com/better-architecture-for-integrating-analytics-into-react-redux-using-rxjs-19828617c68b