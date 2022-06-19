# FED Angular Task

## The App
You have a Calculator component that allows the user to enter 2 values and get a result of adding them together.

There are multiple possible implementations for how the result is calculated and these 2 need to be implemented:
* Normal arithmetic addition. e.g. 2 + 5 = 7, a + 2 = Error.
* String concatenation. e.g. 2 + 5 = 25, a + 2 = a2.

The implementation to run depends on the environment:
* Environment 'A' runs the arithmetic logic.
* Environment 'B' runs the string concatenation.

There may be additional different implementations for different environments, which you might not know about. For example: environment 'C' requires a random number as the result, regardless the input.

## The Task
1. Implement the 2 calculation logics as described above.
2. Have the app able to be build for different environments, each with its own implementation.
3. Future implementations should be able to be integrated in the same way without changing anything to the Calculator component and without having the component built again to get the new implementation. That is, you are not allowed to expose the component (or any of the component's dependencies) to any of the implementations.

## Running the project
1. Install Yarn globally ```npm install -g yarn```.
2. Go to angular directory.
3. run ```yarn``` to install packages.
4. run ```yarn start``` to start the development server.

## Resolution
For this problem, I created a base abstract service called ```CalculatorService```, with a unique method called ```calculate```. Then I extended the behavior of the base service with the ```ArithmeticCalculatorService``` and ```StringConcatenationCalculatorService```.  This concrete implementations override the base method with the expected behavior for each scenario. For each different environment, a specific module is loaded with a configuration for the DI provider, telling which concrete implementation of the ```CalculatorService``` shoud be injected.

## Running calculator environments

1. To run the arithmetic calculator, run ```yarn run start:arithmetic```
1. To run the string concatenation calculator, run ```yarn run start:string-concatenation```
