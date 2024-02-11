# Ride-Hailing Offer Aggregator

## Overview
This project aims to develop a minimalist aggregator service that consolidates ride options from mocked ride-hailing platforms (such as Uber and Bolt) into a single, unified interface. The service includes a backend responsible for fetching and processing mock data and a single-page frontend application for displaying the aggregated offers.

## Backend
The backend should ideally be built using NestJS, although Express.js is an acceptable alternative. Key components include:

- **Mock Data JSON Format**: Develop a basic JSON format to represent sample data from ride-hailing companies, including details like provider (e.g., Uber, Bolt), price, duration, and type of car. There should be at least two providers: one with a fixed price (`price`) and another with a price range (`lowPrice` and `highPrice`). The final output should display prices uniformly, choosing to show either the low, high, or average price for those with ranges.
  
- **REST Endpoint**: Implement a single REST endpoint that returns an aggregated list of these mock responses. Initially, this endpoint will not require any parameters.
  
- **Data Processing**: Ensure that the endpoint processes mock data to fit a unified response structure. This may involve normalizing field names or values.
  
- **Error Handling**: Implement simple error handling for the endpoint to respond gracefully in case of issues. Include notes on handling various errors as the API scales and integrates with more external APIs.
  
- **Unit Tests**: Write unit tests for your methods to ensure reliability and stability.

## Frontend
The frontend should preferably be a Next.js app, but any React-based solution is suitable. It should include:

- **Single Screen App**: A basic Next.js app with a single screen displaying a list of ride options.
  
- **Data Fetching**: The screen should fetch aggregated ride options from the backend upon initial load.
  
- **Display Format**: Each ride option should be displayed with uniform formatting, showing information like the service provider, estimated price, duration, and car type.
  
- **Responsive Design**: Ensure that the interface is responsive and maintains usability across different devices.
  
- **User Feedback**: Include user-friendly messages or indicators for scenarios like failed API calls or no available rides.

## Deliverables and Evaluation
- **GitHub Repository**: Provide a link to the GitHub repository containing the project code, including both backend and frontend components.
  
- **README File**: The README should detail setup instructions, API response structure, and any necessary context for understanding the application.
  
- **Evaluation Criteria**: Code quality, proper service layering (e.g., adding repo layer, service layer, REST controllers), efficiency of data handling, effectiveness of the unified interface, and adherence to the project's objectives will be the primary focus in the evaluation process.
