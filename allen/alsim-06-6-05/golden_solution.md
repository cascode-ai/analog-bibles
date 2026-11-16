# Golden Solution - alsim-06-6-05

## Reference answer

Simulation configurations (op amp with its intended load $C_L$, $R_L$ and supplies):
(a) Slew rate: unity-gain follower (output tied to the inverting input) driven by a large step or pulse (amplitude a few volts, inside the ICMR, edges much faster than the op amp); SR = slope of $v_{out}$ during the rising and falling transitions (both signs), and the supply current can be monitored.
(b) Transient response: the same follower with a small step (e.g. 0.1–0.2 V, small enough that the op amp does not slew); read rise time, overshoot, ringing and settling time to the specified error band (overshoot also indicates the phase margin).
(c) ICMR: unity-gain follower with a dc sweep of $v_{in}$ over the whole supply range; the ICMR is the range where $v_{out}$ follows $v_{in}$ with unity slope; also plot the tail-current (or input-device) current, which shows where the input stage turns on and where its transistors leave saturation.
(d) Output swing: inverting amplifier with gain ≈ −10 (R and 10R, R larger than $R_L$) with a dc sweep of $v_{in}$; the swing is the range of $v_{out}$ over which the slope stays at −10; the actual $R_L$ must be connected because the load current sets the limits.
Measurement changes and why:
- Sources: a real pulse generator has finite rise time and a 50-Ω output (terminate it); its edges must be faster than the op amp, and its amplitude must be checked. dc sweeps are replaced by slow ramps/triangles displayed in X–Y mode (or stepped dc with a voltmeter).
- Probing: oscilloscope probes and fixtures add capacitance (≈ 10 pF or more) to the output and to high-impedance nodes; use low-capacitance/active probes or a buffer, and include the probe capacitance in $C_L$.
- Offset: a real op amp has random offset (simulation shows only the systematic part); in the dc measurements (c), (d) the curves are shifted, so measure slopes/differences or null the offset.
- Internal currents cannot be probed: monitor the supply currents ($I_{DD}$, $I_{SS}$) instead of the tail current to detect where the input stage cuts off in (c).
- Supplies need bypass capacitors and clean grounding; overdrive and output short-circuit protection, temperature and process spread are also considered.

## Grading notes

A correct answer gives: follower + large step (SR, both edges), follower + small step (transient/settling), follower + dc sweep with a device or supply current monitored (ICMR), inverting gain of about 10 with R > R_L + dc sweep (output swing), all with the real load; and for measurement the main changes: realistic pulse source (rise time, termination), probe/fixture capacitance and loading, slow ramps or X–Y display instead of dc sweeps, random offset, monitoring supply current instead of internal currents, bypassing. A simulation following these configurations shows: unity-slope region bounded by sharp knees (ICMR), a slope-−10 region bounded by the output limits, a ramp-limited large-step response with SR = slope, and a small-step response with overshoot consistent with the phase margin. Missing two of the four configurations, or using an open-loop configuration for the ICMR or swing without dc stabilization, is wrong.
