import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import connect from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

const Equities = ({ onClick }) => {
    const [form, setForm] = useState({});

    const updateEquitiesForm = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };

    return (
        <div>
            <h1 className="title">Equities</h1>
            <div className="field">
                <label htmlFor="" className="label">
                    Name
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="name"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.name}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Share name
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="sharename"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.sharename}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    ISIN
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="isin"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.isin}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Quantity
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="quantity"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.quantity}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Net Rate Per Share (After Brokerage)
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="netRatePerShare"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.netRatePerShare}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Rate Before Brokerage
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="rateBeforeBrokerage"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.rateBeforeBrokerage}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Date of Purchase
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="purchaseDate"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.purchaseDate}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Date of Selling
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="sellDate"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.sellDate}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Reference Number
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="reference"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.reference}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Application Number
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="applicationNumber"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.applicationNumber}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Bonus Shares? Quantity
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="bonusShareQty"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.bonusShareQty}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Bonus Shares? Date
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="bonusShareDate"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.bonusShareDate}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Dividend
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="dividend"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.dividend}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">
                    Dividend Date
                </label>
                <div className="control">
                    <input
                        type="text"
                        id="dividendDate"
                        className="input"
                        onChange={updateEquitiesForm}
                        value={form.dividendDate}
                    />
                </div>
            </div>
            <div className="field.is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={onClick}>
                        Click Me
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({ form: state.equities });

const mapDispatchToProps = (dispatch) => ({
    updateForm: (id, value) => dispatch(updateFormElement({ id, value })),
});

export default Equities;

// quantity    net rate per share ( after brokerage)   rate before brokerage   date of purchase    date of sell    Tracation Id/ref.no Application No. bonus share quantity    bonus share date    Divident    divident date
