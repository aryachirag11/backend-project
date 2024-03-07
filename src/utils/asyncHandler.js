const asynHandleer = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asynHandleer };

// const asynHandleer = (func) => async (req,res,next) => {
//   try {
//     await func(req,res,next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success : true,
//       message : error.message || "error message",
//     });
//   }
// };
