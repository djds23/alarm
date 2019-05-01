import { DefaultObservable } from "../../lib/Observable"
import Observer from "../../lib/Observer"
import { EventNext } from "../../lib/Events"
import { DefaultListenControl } from "../../lib/ListenControl"

let app = document.getElementById("app")

class TimeObserver implements Observer<string> {
  onError(event: Error): void {
    throw new Error("Method not implemented.");
  }

  onComplete(event: void): void {
    throw new Error("Method not implemented.");
  }

  onNext(event: EventNext<string>): void {
    console.log(event)
  }
}

let observerHandler = (observer: Observer<string>) => {
  let handle = setInterval(
    () => {
      let date = new Date()
      observer.onNext(date.getSeconds().toString())
     },
     1000
  )
  return new DefaultListenControl(
    () => clearInterval(handle)
  )
}

let observable = new DefaultObservable<string>(observerHandler)
let control = observable.subscribe(new TimeObserver())
setTimeout(() => control.stop(), 5000)