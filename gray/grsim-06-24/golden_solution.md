# Golden Solution - grsim-06-24

## Reference answer

(a) Common-mode input range:
$-V_{SS} + V_{t1} + 2V_{ovn} \le V_{IC} \le -V_{SS} + V_{t1} + V_{t3} + V_{ovn} + V$,
where $V_{t1}$ is the input-transistor threshold and $V_{t3}$ that of the diode-connected mirror device.
- Lower limit: the $I_1$ transistor needs $V_{DS} \ge V_{ovn}$, with the common source at $V_{IC} - V_{t1} - V_{ovn}$.
- Upper limit: the input drains sit at the diode voltage plus $V$, i.e. $-V_{SS} + V_{t3} + V_{ovn} + V$, and the input transistors need $V_{GD} \le V_{t1}$.
- The p-channel $I_3$ sources must stay active: $V \le V_{DD} + V_{SS} - V_{t3} - V_{ovn} - |V_{ovp}|$. At that largest $V$ the upper limit becomes $V_{DD} - |V_{ovp}| + V_{t1}$, i.e. it can include $V_{DD}$.

Output swing: $-V_{SS} + V_{ovn} \le V_O \le V_{DD} - |V_{ovp}|$ (maximum peak-to-peak $V_{DD} + V_{SS} - V_{ovn} - |V_{ovp}|$). Only the second-stage n-channel driver and the p-channel $I_2$ source limit it, and it does not depend on $V$. The level shift lets the first stage's drains sit high (good common-mode range) while the mirror and second-stage gate sit one $V_{GS}$ above $-V_{SS}$.

(b) Design and I–V:
- $V = V_{GS1} + V_{GS2}$: $M_1$ (gate at +) carries $I_B$, and $M_2$ (gate at $M_1$'s source, drain at +, source at −) carries $I$. So $V = 2V_t + V_{ov1} + V_{ov2} = 1.5$ V, giving $V_{ov1} + V_{ov2} = 0.3$ V.
- Small-signal resistance: $M_1$'s current is fixed, so $v_{gs2} = v$ and $r = 1/g_{m2} = V_{ov2}/(2I)$. $r < 1$ kΩ needs $V_{ov2} < 0.2$ V.
- Choice: $V_{ov1} = V_{ov2} = 0.15$ V, $(W/L)_1 = (W/L)_2 = 2(100\ \mu)/(194\ \mu\times0.15^2) \approx 46$, $r = 750\ \Omega$. Other valid choices: $V_{ov2} = 0.1$ V, $V_{ov1} = 0.2$ V, $(W/L)_2 = 103$, $(W/L)_1 = 26$, $r = 500\ \Omega$.
- Large-signal I–V (lower end at $-V_{SS}$, λ = 0):
  - $I = 0$ for $V < V_{GS1} + V_t = 1.35$ V;
  - above that, $M_2$ is saturated ($V_{DS2} = V > V_{GS2} - V_t$), so $I = \tfrac12\mu_nC_{ox}(W/L)_2(V - 1.35)^2 = 100\ \mu\mathrm{A}\,[(V-1.35)/0.15]^2$: 100 μA at 1.5 V, 400 μA at 1.65 V (a parabola).
  - For $V$ below about $V_{GS1} = 0.75$ V an ideal $I_B$ forces $M_1$'s source below $-V_{SS}$. A transistor current source would instead collapse there, which does not affect $I$, already zero.

## Grading notes

(a) +: both CMR limits and the swing limits as above (equivalent forms accepted), with the $I_3$-headroom condition on $V$ noted. (b) +: $V = V_{GS1} + V_{GS2}$, $r = 1/g_{m2}$, $V_{ov2} < 0.2$ V, a consistent $W/L$ choice meeting 1.5 V and $r < 1$ kΩ, and a simulated I–V that is zero below ≈ 1.35 V (for the 0.15/0.15 choice) and rises quadratically through 100 μA at 1.5 V. Simulation tolerance: battery voltage at 100 μA within ±20 mV of 1.5 V after refinement, slope resistance below 1 kΩ. +2: both parts right. +1: one part fully right and the other with a minor error (e.g. swing limits stated with an extra threshold, or $r$ given as $1/g_{m1}$ with a design that still meets the spec). 0: only one part right. -2: wrong topology reading (e.g. $V = V_{GS2}$ only, or $r = 1/(g_{m1} + g_{m2})$ driving a design that violates the spec), or CMR limits referenced to the wrong supply.
