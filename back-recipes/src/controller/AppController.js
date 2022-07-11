class AppController {
  constructor(model) {
    this._model = model;
    this.create = this.create.bind(this);
  }

  create(req, res, next) {
    let obj = req.body;
    const validator = this._model.validateCreate(obj);
    if (validator.passes()) {
      let object = new this._model(obj);
      object.save().then(
        (savedObject) => {
          const meta = getSuccessMeta();
          return res.status(OK).json(formatResponse(meta, savedObject));
        },
        (err) => {
          return next(err);
        }
      );
    } else {
      const appError = new AppError(
        "input errors",
        BAD_REQUEST,
        validator.errors.all()
      );
      return next(appError);
    }
  }
}

export default AppController;
