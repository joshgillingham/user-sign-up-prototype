import { makeObservable, observable, computed } from "mobx";
import delay from "delay";

import { IUserSignUp as IUserSignUp } from "@app/interfaces";

/**
 * The app root store
 * Usually this store instantiates all other stores, but this is a very simple
 * example, so we just have one store. An example of another store might be a
 * UserStore which would probably be the right home for postUserSignUp.
 *
 * @export
 * @class RootStore
 */
export default class RootStore {
  public userSignUp: IUserSignUp;

  constructor() {
    makeObservable(this, {
      // observables
      userSignUp: observable,
      // computeds
      userSignedUp: computed,
    });
  }

  public get userSignedUp(): boolean {
    return this.userSignUp != null;
  }

  /**
   * Public methods
   */
  public postUserSignUp = async (signUp: IUserSignUp): Promise<void> => {
    try {
      // eslint-disable-next-line no-console
      console.log("Signing the user up", signUp);

      // this is probably a good place to introduce a DAO to execute  an http action
      // for now, we'll just simulate waiting on something
      // eslint-disable-next-line no-console
      console.log("we're waiting. we're waiting....");
      await delay(3000);

      // set app state to indicate we've submitted
      this.setUserSignUp(signUp);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("Error signing up the user", signUp);
    } finally {
      // eslint-disable-next-line no-console
      console.log("Finished signing up.");
    }
  };

  /**
   * Private setters
   */
  private setUserSignUp(value: IUserSignUp): void {
    this.userSignUp = value;
  }
}
