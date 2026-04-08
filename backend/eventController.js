let events = [
  {
    id: 1,
    title: 'Code UI Hackathon',
    description: 'A hackathon to build amazing UIs.',
    dateTime: '2026-05-10T10:00:00',
    location: 'Remote',
    category: 'Hackathon'
  },
  {
    id: 2,
    title: 'React Meetup',
    description: 'Learn the latest in React 19.',
    dateTime: '2026-06-15T18:00:00',
    location: 'New York, NY',
    category: 'Meetup'
  }
];

// @desc    Get all events
// @route   GET /api/events
const getEvents = (req, res) => {
  res.status(200).json(events);
};

// @desc    Get event by ID
// @route   GET /api/events/:id
const getEventById = (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  res.status(200).json(event);
};

// @desc    Create an event
// @route   POST /api/events
const createEvent = (req, res) => {
  const { title, description, dateTime, location, category } = req.body;
  if (!title || !description || !dateTime || !location || !category) {
    return res.status(400).json({ message: 'Please include all fields' });
  }

  const newEvent = {
    id: events.length > 0 ? events[events.length - 1].id + 1 : 1,
    title,
    description,
    dateTime,
    location,
    category
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};

module.exports = {
  getEvents,
  getEventById,
  createEvent
};
