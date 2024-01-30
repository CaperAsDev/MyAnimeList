export default function catchError (controller) {
  return (req, res, next) => {
    controller(req, res, next)
      .catch(next)
  }
}
