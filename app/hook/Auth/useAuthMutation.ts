// import {
//   MutationFunction,
//   useMutation,
//   UseMutationOptions,
// } from "@tanstack/react-query";

// /**
//  * @typedef {Object} TData - shape of the data returned from endpoint
//  * @property {unknown} TData.data - the data returned from the endpoint
//  *
//  * @typedef {Object} TError - shape of error returned from endpoint
//  * @property {unknown} TError.error - the error returned from the endpoint
//  *
//  * @typedef {Object} TVariables - shape of variables being passed to the mutationfn
//  *
//  * @typedef {Object} TContext
//  */

// // const useAuthMutation = <
// //   TData = unknown,
// //   TError = unknown,
// //   TVariables = void,
// //   TContext = unknown
// // >(
// //   mutationFn: MutationFunction<TData, TVariables>,
// //   options?: Omit<
// //     UseMutationOptions<TData, TError, TVariables, TContext>,
// //     "mutationFn"
// //   >
// // ) => {
// //   const mutation = useMutation(mutationFn, options);

// //   return mutation;
// // };

// // export default useAuthMutation;


// const useAuthMutation = <
//   TData = unknown,
//   TError = unknown,
//   TVariables = void,
//   TContext = unknown
// >(
//   mutationFn: MutationFunction<TData, TVariables>,
//   options?: Omit<
//     UseMutationOptions<TData, TError, TVariables, TContext>,
//     "mutationFn"
//   >
// ) => {
//   console.log("mutationFn:", mutationFn);
//   console.log("options:", options);

//   const mutation = useMutation(mutationFn, options);

//   return mutation;
// };

// export default useAuthMutation;

import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";

const useAuthMutation = <
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: UseMutationOptions<TData, TError, TVariables, TContext>
) => {
  console.log("mutationFn:", mutationFn);
  console.log("options:", options);

  const mutation = useMutation<TData, TError, TVariables, TContext>(
    mutationFn as any ,
    options as any,
  );

  console.log("mutation:", mutation);

  return mutation;
};

export default useAuthMutation;


