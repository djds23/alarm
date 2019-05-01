import { 
  EventNext,
  EventError,
  EventComplete,
  Event
} from "./Events"

export default interface Observer<T> {
  onNext(event: EventNext<T>): void
  onError(event: EventError): void
  onComplete(event: EventComplete): void
}
