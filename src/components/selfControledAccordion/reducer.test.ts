import React from "react";
import {reducer} from "./reducer";


test("reducer should change state value", () => {
    expect(reducer({toggle: true}, {type: "COLLAPSED-TOGGLE"}).toggle).toBe(false)
    expect(reducer({toggle: false}, {type: "COLLAPSED-TOGGLE"}).toggle).toBe(true)
    expect(()=>reducer({toggle: true}, {type: "COLLAPSED-TOGGLE"})).toThrowError()
})