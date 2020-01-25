- [ ] Why would you use class component over function components (removing hooks from the question)?
    You would use class components because a state object has a stricter check on when to update whhen changing specific key values. Also class components can make the code more readable.
- [ ] Name three lifecycle methods and their purposes.
    componentdidupdate() this is called each time to the component re-rendered.
    componentdidmount() this is called the first time the component is mounted.
    componentwillreviewprops(newprops) this is called each time the component gets new props but may not actually contain new props so a check must be done in the method to make sure it is new props.
- [ ] What is the purpose of a custom hook?
    Custom hooks allow for more consice code. Having the ability to section off code is paramount in readability and being able to follow ur own code.
- [ ] Why is it important to test our apps?
    Its important because it allows us to be able to make sure that there are no possible errors that could arise later on that we werent expecting for and if something does break it allows the troubleshooting time to be shorter.