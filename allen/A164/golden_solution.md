# Golden Solution - A164

## Reference answer

Current-source loads: $SR = I_{SS}/(2C_L)$. Resistive loads: the maximum rate is $SR = I_{SS}/C_L$, at the start of a full-swing transition, and the waveform is an exponential rather than a linear ramp.

- Current sources: when a large input steers all of $I_{SS}$ into M1, node D1 receives 0.5$I_{SS}$ from its source and must deliver $I_{SS}$ to M1, so 0.5$I_{SS}$ comes through $C_L$ from D2. At D2 the 0.5$I_{SS}$ source current, with M2 off, all flows into $C_L$. The capacitor current is 0.5$I_{SS}$ throughout, so $|dv_{OUT}/dt| = I_{SS}/(2C_L)$.
- Resistors $R_L$: KCL at the two drains gives $2C_L\,dv_{OUT}/dt = -(I_{SS} + v_{OUT}/R_L)$ when M1 takes all the current. Starting from the opposite steered state ($v_{OUT} = +I_{SS}R_L$, the full swing), the initial capacitor current is $I_{SS}$ and the initial rate is $I_{SS}/C_L$. The output then approaches $-I_{SS}R_L$ exponentially with $\tau = 2R_LC_L$. From a balanced start ($v_{OUT} = 0$) the initial rate would be $I_{SS}/(2C_L)$. With resistors the resistor currents add to the capacitor current, so the rate depends on the output state.

## Grading notes

Credit is split between the two cases. +2: $I_{SS}/(2C_L)$ for current-source loads with the current accounting, and for resistive loads $I_{SS}/C_L$ as the maximum rate (full-swing transition) with recognition of the exponential, $R_LC_L$-type settling; a correct state-dependent analysis giving $I_{SS}/C_L$ from a full-swing start is equivalent. +1: current-source case right, resistive case given as $I_{SS}/(2C_L)$ from a balanced start with the exponential noted but the full-swing rate missed. 0: only one case right (this includes $SR = I_{SS}/C_L$ asserted for the current-source loads, which ignores the 0.5$I_{SS}$ the load sources supply, when the resistive case is right). −2 (asserted as fact): errors that make both cases wrong, e.g. $SR = I_{SS}/C_L$ for current-source loads with the resistive case also wrong, a slew rate that is independent of $C_L$, or the capacitor treated as grounded at one end.
