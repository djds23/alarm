interface ListenControl {
  stop(): void
}


class DefaultListenControl implements ListenControl {
  stop() {
    this.cleanup()
  }

  private cleanup: () => void
  constructor(cleanup: () => void) {
    this.cleanup = cleanup
  }
}

export {
  ListenControl,
  DefaultListenControl
}