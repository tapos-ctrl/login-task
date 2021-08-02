import React from 'react';
import './SignIn.css';
const SignIn = () => {
    return (
        <div className="sign-in-page">
            <div className="page-title">
                <h2>Vidyayan</h2>
                <p>Let's gain togather</p>
            </div>
            <section className="row">

                <div className="select-class">
                    <p className="section-title">Select Your Class</p>
                    <div className="col-md-12 d-flex justify-content-around">

                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-1-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-1-outlined">12th</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-2-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-2-outlined">11th</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-3-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-3-outlined">10th</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-4-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-4-outlined">9th</label>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-around">
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-5-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-5-outlined">8th</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-6-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-6-outlined">7th</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-7-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-7-outlined">6th</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-8-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-8-outlined">5th</label>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-around">
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-9-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-9-outlined">4th</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-10-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-10-outlined">3rd</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-11-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-11-outlined">2nd</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-12-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-12-outlined">1st</label>
                        </div>
                    </div>
                </div>






                <p className="section-title">Select Your Board</p>
                    <div className="col-md-12 d-flex justify-content-around">

                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-13-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-13-outlined">CBSE</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-14-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-14-outlined">ICSE</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-15-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-15-outlined">STATE</label>
                        </div>
                        
                    </div>
                <p className="section-title">Select Your Stream</p>
                    <div className="col-md-12 d-flex justify-content-around">

                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-16-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-16-outlined">PCM</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-17-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-17-outlined">PCB</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-18-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-18-outlined">Com.</label>
                        </div>
                        <div className="col-md-3">
                            <input type="radio" class="btn-check" name="options-outlined" id="check-box-19-outlined" autocomplete="off" checked />
                            <label class="btn check-btn btn-outline" for="check-box-19-outlined">Arts</label>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default SignIn;