import { Subject } from "rxjs";
import { filter } from "rxjs/operators";

export const subject = new Subject();

// topics
const storeTopic = subject.pipe(filter((event) => event.topic === "store"));
const routerTopic = subject.pipe(filter((event) => event.topic === "router"));

// subscribers
storeTopic
  .pipe(filter((event) => event.action.type === "product-purchased"))
  .subscribe((event) => {
    // PUT YOUR ANALYTICS CALLS HERE
    console.log("ANALYTICS: product purchased", event.action.payload.id);
  });

routerTopic.subscribe((event) => {
  // PUT YOUR ANALYTICS CALLS HERE
  console.log("ANALYTICS: route changed", event.route.pathname);
});
