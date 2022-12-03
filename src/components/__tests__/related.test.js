import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//used for snapshop testing
import renderer from 'react-test-renderer';
//tests need to render the component you created so make sure you import the component you created!
import RelateAndCompare from '../relateAndCompare/RelateAndCompare.jsx';

//React/Jest Testing Tutorial I Used
//https://www.youtube.com/watch?v=ML5egqL3YFE
//Jest Documentation
//https://jestjs.io/docs/tutorial-react

//The 'describe' keyword is used to group together 'test' keywords. You can also nest describes to create sub sections.
//Example:
//describe('testing if vehicles work', () => {
//  describe('mercedes vehicles', () => {
//    test('mercedes sedan', () => {})
//    test('mercedes van', () => {})
//  })
//  describe('bmw vehicles', () => {
//    test('bmw sedan', () => {})
//  })
//})

// EXAMPLE TEST
// describe('relate and compare', () => {
//   test('test', () => {
//   //render the component you are testing.
//   render(<RelateAndCompare />);
//   //The line below creates a variable and stores an element into it.
//   //In order to get that element you need to put data-testid="{someIDName}" as an attribute in the element you're testing for.
//   const relateCompareElement = screen.getByTestId('relateCompare'); //You then throw the data-testid attribute value into screen.getByTestId in order to get it.
//   expect(relateCompareElement).toBeInTheDocument(); //checks if element is in the dom
//   expect(relateCompareElement).toHaveTextContent('Related & Compare'); //checks to see if the element has text of 'Related & Compare'
//   })
// })


//After every test it will reset the DOM and render the next test on a clean slate.
afterEach(() => {
  cleanup();
});

describe('Overview', () => {

});

describe('Questions & Answers', () => {

});

describe('Ratings & Reviews', () => {

});

describe('Relate & Compare', () => {
  //needs 1 test to not break.
  test('testing', () => {
    expect(true).toBe(true);
  })
})
