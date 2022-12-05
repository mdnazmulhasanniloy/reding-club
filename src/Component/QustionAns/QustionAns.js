import React from 'react';

const QustionAns = () => {
    return (
            <div className='my-5'>
                    <div class="my-5 text-center">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div class="mx-auto mx-md-5">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How to work react js?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS. 
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is Difference between State and Props?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                      <strong>Props: </strong>Props are read-only. Props allow you to pass data from one component to other components as an argument. Props are used to communicate between components. Props make components reusable. <br />
                                      <strong>State: </strong>State changes can be asynchronous. State holds information about the components. States can be used for rendering dynamic changes with the component.  State cannot make components reusable.
                                </div>
                            </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        useEffect work space in react js.
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="collapseFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    1. The useEffect Hook allows you to perform side effects in your components. <br />
                                    2. Some examples of side effects are: fetching data, directly updating the DOM, and timers. <br />
                                    3. useEffect accepts two arguments. The second argument is optional. <br />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
    );
};

export default QustionAns;