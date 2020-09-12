<h1> React-Native Testing </h1>

### Component Testing in React Native


To install this library as a dev-dependency, run the following command in your terminal - 


``` # yarn add — dev @testing-library/react-native ```

### Here’s what your package.json file should look like - 

https://github.com/rohitiglas/RNTesting/blob/master/package.json




### Create folder in your project name
src=>Screens=>LoginScreen

### Create Component Name Login.js in LoginScreen folder

### Copy the code and paste your Login.js file from
https://github.com/rohitiglas/RNTesting/blob/master/src/Screens/LoginScreen/Login.js

### Create another file for style name style.js in your LoginScreen Folder and copy & paste the code from 
https://github.com/rohitiglas/RNTesting/blob/master/src/Screens/LoginScreen/styles.js



### Login Screen 

<img src="https://user-images.githubusercontent.com/17780617/92900801-9ea4bc00-f43d-11ea-8fdd-a63337397d9e.png" />



# Possible Test Cases of the Login Screen Should like 


For our Login Screen, let’s say we have the following business requirements -
<ul>
<li>Test Case 1 : Login Screen (i.e. the component) should display (render) correctly (SnapshotTesting)</li>
<li>Test Case 2 : user submits empty form (no username or password provided)</li>
<li>Test Case 3 : . user submits form with either username only</li>
  <li>Test Case 4 : . user submits form with either password only</li>
  <li>Test Case 5 : On press of submit button (LOGIN), it should show an Alert dialog ( as we’re not doing any server calls in this post).</li>
</ul>


We can write one test for each of these requirements.
Let’s go !

### UI Testing

Let’s write our first, very basic component test that will let us test if our component renders correctly. This is what we call Snapshot Testing.
Snapshot Testing basically help us identify unknown UI changes made to our component.
Here’s what the snapshot test looks like -
```
import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';
describe('Login Form', () => {
  it('renders correctly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

```

As you can see, we’ve used the render method provided by react-native-testing-library to generate our snapshot. It deeply renders given React element and returns helper methods to query the output components.

For now, we’ve created the component wrapper only in 1 test. But we’ll need this wrapper instance for each of our tests. Thus, we can make use of beforeEach utility provided by Jest to render our wrapper before each test.

We also want each test to be isolated from each other — thus, we need to perform un-mounting (“clean up”) after each test. This can be done by using afterEach.

```
import {render, cleanup} from '@testing-library/react-native';
describe('Login Form', () => {
  let wrapper;
beforeEach(() => {
    wrapper = render(<App />);
  });
afterEach(() => {
    cleanup();
    wrapper = null;
  });
it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

```


Let’s run our test and see what our Snapshot really looks like. Since this is our first time running the snapshot test, and it is the ONLY test in our project, we can simply do so by running the following shell command -

```  ### yarn test ```  (For run the test cases of project)     

If all goes well, you should see a ‘snapshots’ folder created under the __snapshot__ directory, containing the snapshot (component tree).

As you can see in Login.test.js.snap, proper styling has been applied to each element, and each element in the component tree has been given the correct testID and other props as well.

Also, in case we ever update our style or props, our snapshot test will fail, indicating a change in the UI.

Let’s update the ‘backgroundColor’ property of our ‘container’ style to ‘white’ from ‘#ecf0f1’ and re-run our test to see if our snapshot fails.

<img src="https://user-images.githubusercontent.com/17780617/92904842-cfd2bb80-f440-11ea-98e1-30ac5f79ed05.png" />

As you can see, Jest expected a backgroundColor of ‘#ecf0f1’ but received the value ‘white’ in its place. We can run yarn test -u in order to update our snapshot since our change was intentional. But please be wary of updating snapshots — always make sure you don’t update snapshots without knowing what caused the UI changes.
So Now update your snapshot using this command: 
```  # yarn test -u ```   (For run and update snapshot  the test cases of project)

When we update our snapshot (to make sure our background changes are reflected in our snapshot), we get the following message -
<img src="https://user-images.githubusercontent.com/17780617/92905300-2cce7180-f441-11ea-9b28-07d76ae9845f.png" />




