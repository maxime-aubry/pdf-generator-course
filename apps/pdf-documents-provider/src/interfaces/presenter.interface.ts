export interface IPresenter<TInput, TOutput> {
  format(input: TInput): TOutput;
}
