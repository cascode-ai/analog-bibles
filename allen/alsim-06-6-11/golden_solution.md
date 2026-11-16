# Golden Solution - alsim-06-6-11

## Reference answer

The output stage is class A: M6 can source a large current, while M7 sinks only its fixed bias current (95 µA). The 0.2-V step is fast enough that the output transient needs a current comparable to the bias current, so M6's operating point (and $g_{m6}$, which sets the nondominant pole and hence the phase margin) moves up on the rising edge and down on the falling edge.

- Required current: with $GB$ ≈ 5 MHz the initial output slope for a 0.2-V step is ≈ 0.2 V × 2π × 5 MHz ≈ 6 V/µs, close to the slew rate; charging 20 pF (+ $C_c$ = 3 pF) at that rate takes ≈ 120–140 µA.
- Rising edge: M6 must supply this current on top of M7's 95 µA, so its drain current rises to ≈ 200 µA or more; $g_{m6}$ increases (∝ $\sqrt{I_{D6}}$), the output pole $p_2 \approx g_{m6}/C_L$ (and the RHP zero $g_{m6}/C_c$) move to higher frequency, the phase margin increases and the overshoot is small.
- Falling edge: the load must be discharged by M7, whose current is fixed at 95 µA (and part of it goes to $C_c$), so M6's current must fall toward zero; $g_{m6}$ collapses, $p_2$ moves down (the stage may even slew briefly), the phase margin degrades, and when the loop regains control the output overshoots below the final value: a larger negative overshoot and slower recovery.
- The same mechanism makes the large-signal negative slew rate smaller than the positive one in this op amp (≈ −7 V/µs vs +10 V/µs with 20 pF). Increasing the output-stage bias current (e.g. so that M7 can supply the $C_L$ and $C_c$ currents) or a push–pull output stage would equalize the overshoots.
- Expected simulation: positive overshoot of a few percent (≈ 3–5% of the 0.2-V step), negative overshoot clearly larger (≈ 7–10%), as in [Fig. 2].

## Grading notes

A correct answer explains the asymmetry by the class-A output stage: on the positive transition M6's current (and $g_{m6}$) increases, raising the nondominant output pole and the phase margin; on the negative transition M6's current falls toward cut-off because M7 can only sink its fixed bias current, so $g_{m6}$ and the phase margin drop (and the stage may slew), giving a larger negative overshoot. Mentioning the needed transient current (≈ $C_L\,dv/dt$ ≈ 100+ µA vs 95 µA bias) is expected for +2. A correct simulation reproduces positive overshoot of a few percent and a noticeably larger negative overshoot (and an asymmetric large-signal slew rate). Explanations based only on linear small-signal theory (which predicts symmetric overshoot) or on the RHP zero alone, without the bias-current asymmetry, are incomplete; attributing it to the input stage or claiming the positive overshoot should be larger is wrong.
