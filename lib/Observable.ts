import Observer from "./Observer"
import { ListenControl } from "./ListenControl"

interface Observable<T> {
  subscribe(observer: Observer<T>): ListenControl
}
type ObserverHandler<T> = (observer: Observer<T>) => ListenControl;

class DefaultObservable<T> implements Observable<T> {
  subscribe(observer: Observer<T>): ListenControl {
    return this.handler(observer)
  }
  private handler: ObserverHandler<T>
  constructor(handler: ObserverHandler<T>) {
    this.handler = handler
  }
}

export {
  Observable,
  ObserverHandler,
  DefaultObservable
}
