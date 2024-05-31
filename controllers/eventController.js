let events = [];

const createEvent = (req, res) => {
    const { name, description, date, time } = req.body;
    const event = { id: events.length + 1, name, description, date, time, participants: [] };
    events.push(event);
    res.status(201).json(event);
};

const updateEvent = (req, res) => {
    const { id } = req.params;
    const event = events.find(e => e.id === parseInt(id));
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const { name, description, date, time } = req.body;
    event.name = name;
    event.description = description;
    event.date = date;
    event.time = time;

    res.json(event);
};

const deleteEvent = (req, res) => {
    const { id } = req.params;
    const eventIndex = events.findIndex(e => e.id === parseInt(id));
    if (eventIndex === -1) return res.status(404).json({ message: 'Event not found' });

    events.splice(eventIndex, 1);
    res.status(204).send();
};

const registerForEvent = (req, res) => {
    const { id } = req.params;
    const event = events.find(e => e.id === parseInt(id));
    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.participants.push(req.user.userId);
    res.json({ message: 'Registered for event successfully' });
};

const getEvents = (req, res) => {
    res.json(events);
};

module.exports ={
    createEvent,
    updateEvent,
    deleteEvent,
    registerForEvent,
    getEvents
}