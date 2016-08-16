import {decrementAction, incrementAction, fetchAmountAction} from "./ActionCreators";

export interface CounterState {
    num: number;
    loadingCount: number;
}

export interface IAmount {
    amount: number;
}

export interface MyAction {
    type: string;
    amount?: number;
    amountJson?: IAmount;
}

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    public increment(amount: number) {
        this.dispatch(incrementAction(amount))
    }

    public decrement(amount: number) {
        this.dispatch(decrementAction(amount))
    }

    public fetchAmount() {
        this.dispatch(fetchAmountAction(false))
    }

    public fetchAmountFail() {
        this.dispatch(fetchAmountAction(true))
    }
}

export class ActionTypes{
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static FETCH_REQUEST = 'FETCH_REQUEST';
    static FETCH_SUCCESS = 'FETCH_SUCCESS';
    static FETCH_FAIL = 'FETCH_FAIL';
}