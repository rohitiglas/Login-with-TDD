# RNTesting
# Component Testing in React Native


# To install this library as a dev-dependency, run the following command in your terminal -


# yarn add — dev @testing-library/react-native

# Here’s what your package.json file should look like - 

https://github.com/rohitiglas/RNTesting/blob/master/package.json


For our Login Screen, let’s say we have the following business requirements -
# Test Case 1 : Login Screen (i.e. the component) should display (render) correctly (SnapshotTesting)

Login Screen should show validation error if -

# Test Case 2 : . user submits empty form (no username or password provided) ✅

# Test Case 3 : . user submits form with either username only

# Test Case 4 : . user submits form with either password only

# Test Case 5 : On press of submit button (LOGIN), it should show an Alert dialog ( as we’re not doing any server calls in this post). ✅

We can write one test for each of these requirements.
Let’s go !


# Create folder in your project name src=>Screens=>LoginScreen

# Create Component Name Login.js in LoginScreen folder

# Copy the code and paste your Login.js file from
https://github.com/rohitiglas/RNTesting/blob/master/src/Screens/LoginScreen/Login.js

# Create another file for style name style.js in your LoginScreen Folder and copy & paste the code from 
https://github.com/rohitiglas/RNTesting/blob/master/src/Screens/LoginScreen/styles.js



https://user-images.githubusercontent.com/17780617/92900801-9ea4bc00-f43d-11ea-8fdd-a63337397d9e.png





