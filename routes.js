const express = require("express");
const { registerUser, loginUser } = require("./controllers/userController");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  registerForEvent,
  getEvents,
} = require("./controllers/eventController");

const { authenticateToken, authorizeOrganizer } = require("./middlewares/authMiddleware");

const router = express.Router();

// User routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Event routes
router.get("/events", authenticateToken, getEvents);
router.post("/events", authenticateToken, authorizeOrganizer, createEvent);
router.put("/events/:id", authenticateToken, authorizeOrganizer, updateEvent);
router.delete(
  "/events/:id",
  authenticateToken,
  authorizeOrganizer,
  deleteEvent
);
router.post("/events/:id/register", authenticateToken, registerForEvent);

module.exports = router;
