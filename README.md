# Real-time Location Monitoring

A web-based real-time location tracking application that enables multiple users to share and monitor their locations simultaneously on an interactive map.

## Features

- Real-time location tracking of multiple users
- Interactive map interface using Leaflet
- Live updates via WebSocket connections
- Automatic marker updates as users move
- User disconnect detection and marker cleanup
- High accuracy GPS positioning

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **Leaflet.js** - Open-source JavaScript library for interactive maps
- **EJS** - Embedded JavaScript templating
- **OpenStreetMap** - Map tile provider

## Prerequisites

Before running this application, ensure you have the following installed:
- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Parthadotio/Real-time-location-monitoring.git
cd Real-time-location-monitoring
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node app.js
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

3. Allow location access when prompted by your browser

4. Your location will be displayed on the map in real-time

5. Open the same URL in multiple browsers or devices to see multiple users being tracked simultaneously

## Configuration

The application runs on port 3000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 node app.js
```

## How It Works

1. The client application requests access to the user's geolocation using the browser's Geolocation API
2. The location coordinates (latitude and longitude) are sent to the server via Socket.io
3. The server broadcasts the location data to all connected clients
4. Each client updates the map with markers representing all active users
5. When a user disconnects, their marker is automatically removed from all maps

## Project Structure

```
Real-time-location-monitoring/
├── app.js              # Main server file
├── package.json        # Project dependencies and metadata
├── views/
│   └── index.ejs      # Main HTML template
├── public/
│   ├── js/
│   │   └── script.js  # Client-side JavaScript
│   └── css/
│       └── app.css    # Styles
└── node_modules/      # Dependencies (generated)
```

## Dependencies

- **express**: ^5.2.1 - Web framework
- **socket.io**: ^4.8.3 - Real-time communication
- **ejs**: ^3.1.10 - Template engine
- **dotenv**: ^17.2.3 - Environment variable management

## Browser Compatibility

This application requires a modern web browser with support for:
- Geolocation API
- WebSocket/Socket.io
- ES6 JavaScript features

Recommended browsers:
- Chrome/Edge (version 50+)
- Firefox (version 55+)
- Safari (version 11+)

## Privacy Note

This application accesses your device's location data. Location information is only shared in real-time and is not stored on the server. All users connected to the application can see the locations of other connected users.

## License

ISC

## Author

Partha
