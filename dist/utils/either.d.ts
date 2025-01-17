export type Either<S, F> = Success<S, F> | Failure<S, F>;
export declare class Success<S, F> {
    readonly value: S;
    constructor(value: S);
    isSuccess(): this is Success<S, F>;
    isFailure(): this is Failure<S, F>;
}
export declare class Failure<S, F> {
    readonly value: F;
    constructor(value: F);
    isSuccess(): this is Success<S, F>;
    isFailure(): this is Failure<S, F>;
}
export declare function sendSuccess<S, F>(value: S): Either<S, F>;
export declare function sendFailure<S, F>(value: F): Either<S, F>;
