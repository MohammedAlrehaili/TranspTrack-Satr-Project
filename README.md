# TranspTrack-JS-Satr-ProjectJS 🚀

A JavaScript-based Fleet Management System built as part of the **Satr Platform (JavaScript 102)** course. This project demonstrates the core principles of Object-Oriented Programming (OOP) by managing a transportation company's assets (Cars and Planes) and its employees (Drivers and Pilots).

## 📌 Project Overview
The system allows the company to assign specific vehicles to qualified employees. It ensures data integrity by preventing mismatched assignments—such as assigning a car to a pilot or a plane to a driver.

## 🛠️ Key Features
- **OOP Hierarchy:** Uses Class Inheritance to define Vehicles and Employees.
- **Validation Logic:** Implements compatibility checks using `instanceof` to ensure safety and logic in assignments.
- **Reservation System:** Automatically generates and stores reservations in a centralized list.
- **Modern JS Syntax:** Utilizes ES6 classes, Arrow functions, and Array methods like `.find()` and `.map()`.

## 🏗️ Class Structure
- **Vehicle:** Base class for all transport assets.
  - **Car:** Inherits from Vehicle (includes fuel/engine type).
  - **Plane:** Inherits from Vehicle (includes aircraft type).
- **Employee:** Base class for staff.
  - **Driver:** Inherits from Employee (includes License ID).
  - **Pilot:** Inherits from Employee (includes Flight License).
- **Reserved:** Handles the storage and display of all successful bookings.

## 🎓 Learning Objectives
- This project was developed to master:

  - JavaScript Classes and Constructors.

  - super() and Inheritance.

  - Static properties and methods.

  - Array manipulation and searching.
