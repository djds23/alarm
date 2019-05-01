type EventNext<T> =  T
type EventError = Error
type EventComplete = void

type Event<T> = EventNext<T> | EventError | EventComplete

export {
  EventNext,
  EventError,
  EventComplete,
  Event
}
