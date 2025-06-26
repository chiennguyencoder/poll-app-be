import express from 'express'
import PollController from './poll.controller.js'
import VerifyMiddleware from '../../middleware/verify.middleware.js'

const PollRoute = express.Router()

PollRoute.route("/")
    .post(VerifyMiddleware.checkAuth, PollController.createPoll)
    .get(PollController.getAll)

PollRoute.route('/:id')
    .get(PollController.getOne)
    .delete(VerifyMiddleware.checkAuth, PollController.delete)
    .put(VerifyMiddleware.checkAuth, PollController.update)

PollRoute.route('/:id/vote')
    .post(
        VerifyMiddleware.checkAuth, 
        PollController.vote
    )

PollRoute.route('/:id/unvote')
    .post(
        VerifyMiddleware.checkAuth, 
        PollController.unvote
    )

PollRoute.route('/:id/lock')
    .post(
        VerifyMiddleware.checkAuth,
        PollController.lock
    )

PollRoute.route('/:id/unlock')
    .post(
        VerifyMiddleware.checkAuth,
        PollController.unlock
    )

PollRoute.route('/:id/find')
    .post(
        VerifyMiddleware.checkAuth,
        PollController.findVote
    )
export default PollRoute