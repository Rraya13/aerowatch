## Flight Tracking App - Project Flow Summary

### Overview
This React Native app is a Flight Tracking Application designed for Maldives Airports Company Limited (MACL). It enables users to search for flights, view flight details from local JSON data, and subscribe to real-time tracking (dummy function). The app supports offline mode by caching data using AsyncStorage and includes a light/dark mode feature.

### Tech Stack
- **Frontend:** React Native (TypeScript)
- **Navigation:** React Navigation (Stack & Tab)
- **UI Styling:** NativeWind (TailwindCSS for React Native)
- **State Management:** Easy-peasy
- **Storage:** AsyncStorage (for session & offline caching)
- **Data Handling:** Fetching from local JSON with simulated API delay

### Project Features & Flow
#### 1. Flight Search
- Users can search flights by flight number or airline name.
- Search functionality filters the locally stored JSON data.

#### 2. Flight Details
- Flight display cards show:
  - Flight number, airline, and status (On Time, Delayed, Boarding, etc.)
  - Departure and arrival details (airport, time, terminal, gate)
  - Flight duration

#### 3. Flight Subscription (Dummy Tracking)
- Users can "subscribe" to flights.
- Subscriptions persist using AsyncStorage.
- A "Subscribed" status appears on subscribed flights.
- Users can view all subscribed flights in a separate section.

#### 4. Offline Mode Support
- The app caches the last fetched flight data in AsyncStorage.
- If the app is offline, it loads cached data instead of showing an error.

#### 5. Light & Dark Mode
- Users can switch between light and dark themes.
- Theme state persists even if the app restarts.

### Application Architecture
#### Navigation
- **Stack Navigation** for screens (Appearance)
- **Tab Navigation** for easy access between sections (Home, Search, Profile)

#### State Management
- Easy-peasy to manage theme & subscription state
- AsyncStorage for persisting data

#### Data Fetching
- Simulated API calls using `setTimeout()` for a realistic delay
- Data stored in a local JSON file

### Installation & Setup
1. Clone the repository: `git clone <repo-url>`
2. Navigate to the project directory: `cd flight-tracking-app`
3. Install dependencies: `npm install`  or  `yarn install`
4. Run the app:
   - For Android: `npx react-native run-android`
   - For iOS: `npx react-native run-ios`

### Future Improvements
- Implement real-time flight tracking using an external API.
- Add notifications for flight status updates.
- Improve search filtering.

### Prototype & Design
- **Wireframes & UI Flow:** [Figma Prototype](https://www.figma.com/design/lSmJNzMhNgsrLB00UVR8x0/aerowatch?node-id=0-1&t=SsII5u07QsM1Rph5-1)
- **Design Inspiration:** Based on popular flight tracking apps with an accessible UI approach. Inspired by: [Flight Booking UI Kit](https://www.figma.com/design/z5gk4q72fvdK4zDcUAHjBK/Flight-Booking-App-UI-Design-Kit-(Community)?node-id=703-10904&t=rVFyuSDomZaiXFAd-1)

