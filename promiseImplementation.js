const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};
class MyPromise {
  #thenCBs = [];
  #catchCBs = [];
  #state = STATE.PENDING;
  #value;
  constructor(cb) {
    try {
      cb(this.#onSuccess, this.#onFail);
    } catch (e) {
      this.#onFail(e);
    }
  }
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCBs.forEach((callback) => {
        callback(this.#value);
      });
      this.#thenCBs = [];
    }
    if (this.#state === STATE.REJECTED) {
      this.#catchCBs.forEach((callback) => {
        callback(this.#value);
      });
      this.#catchCBs = [];
    }
  }
  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = State.FULFILLED;
    this.#runCallbacks();
  }
  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = State.REJECTED;
    this.#runCallbacks();
  }
  then(thencb, catchcb) {
    if (thencb != null) this.#thenCBs.push(cb);
    if (catchcb != null) this.#catchCBs.push(cb);
    this.#runCallbacks();
  }
  catch(cb) {
    this.then(undefined, cb);
  }
}

module.exports = MyPromise;
