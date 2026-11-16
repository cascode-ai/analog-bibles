# Golden Solution - A116

## Reference answer

$v_{OUT}(\max) = 4.3$ V, $v_{OUT}(\min) = 0.418$ V, $A_v \approx -1.97$ V/V, $R_{out} \approx 13.3$ kΩ, $f_{-3\,\mathrm{dB}} \approx 11.7$ MHz. The RHP zero is at ≈ 47 GHz.

- Swing: $v_{OUT}(\max) = V_{DD} - |V_{TP}| = 4.3$ V. $v_{OUT}(\min) = 4.3 - 4.3/\sqrt{1 + \beta_2/\beta_1} = 4.3 - 4.3/\sqrt{1 + 50/220} = 0.418$ V ($v_{IN} = V_{DD}$). This does not depend on the current.
- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 2 \cdot 50\ \mu} = 148.3\ \mu$S, $g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 1 \cdot 50\ \mu} = 70.7\ \mu$S, $g_{ds1} = 2\ \mu$S, $g_{ds2} = 2.5\ \mu$S.
- $A_v = -g_{m1}/(g_{m2} + g_{ds1} + g_{ds2}) = -148.3/75.2 = -1.97$ ($-g_{m1}/g_{m2} = -2.10$ if $g_{ds}$ is neglected).
- $R_{out} = 1/75.2\ \mu\mathrm{S} = 13.3$ kΩ (14.1 kΩ with $g_{m2}$ only).
- $C_{out} = C_{bd1} + C_{bd2} + C_{gs2} + C_L = 1022$ fF and $C_M = C_{gd1} = 0.5$ fF. $|p_1| = 1/[R_{out}(C_{out} + C_M)] = 7.36\times10^7$ rad/s, so $f_{-3\,\mathrm{dB}} = 11.7$ MHz (≈ 11.0 MHz with $g_{m2}$ only).
- RHP zero $z_1 = g_{m1}/C_{gd1} = 2.97\times10^{11}$ rad/s (47.2 GHz), far above the pole.
- Keeping $\lambda$ consistently in the bias point (the given saturation equation) gives $V_{ON1}$ = 0.638 V, $V_{ON2}$ = 1.347 V, $g_{m1}$ = 156.8 µS, $g_{m2}$ = 74.2 µS, $g_{ds1}$ = 1.79 µS, $g_{ds2}$ = 2.27 µS, hence $A_v \approx -2.00$, $R_{out} \approx 12.8$ kΩ, $f_{-3\,\mathrm{dB}} \approx 12.2$ MHz; keeping $\lambda$ of M2 in the $v_{OUT}(\min)$ equation gives ≈ 0.49–0.50 V. These are equally correct.

## Grading notes

+2: swing limits 4.3 V and 0.42–0.50 V (0.418 V neglecting λ; ≈ 0.49–0.50 V if λ of M2 is kept), $A_v$ between −1.95 and −2.10, $R_{out}$ = 12.6–14.2 kΩ, $f_{-3\,\mathrm{dB}}$ = 10.8–12.4 MHz (with or without $g_{ds}$, and with or without λ in the bias point and $g_m$). The zero is a plus, not required. An answer that reads the swing as the range over which M1 stays saturated is also acceptable if it says so and finds the edge on the transfer curve ($v_{OUT} = v_{IN} - V_{TN}$, ≈ 1.39 V, ≈ 1.44 V with λ) with 4.3 V as the upper limit. A lower limit taken from M1's overdrive at the quiescent bias point (≈ 0.64–0.67 V) is wrong under either reading (the gate voltage of M1 changes as the output swings), and an upper limit of 5 V ignores the diode-connected load; either error makes the swing part wrong. If the answer mentions the Q-point overdrive only as a rough estimate it labels as such, and then gives a correct transfer-curve limit (≈ 0.42–0.50 V or ≈ 1.39–1.44 V) as its more exact result, the swing part has a minor flaw only (+1 overall if the rest is right); asserting 0.64 V as the swing limit in the final answer keeps the swing part wrong even when a correct value is also given. +1: one of the five quantities missing or off by a slip. 0: about half the quantities right, or the swing limits wrong with the small-signal quantities right. −2 (asserted as fact): the M2 diode treated as a current source (gain in the tens, bandwidth below 1 MHz), or a bandwidth from $1/(r_{ds}C)$. ($C_{gd1}$ is only 0.5 fF; how it is counted does not change $f_{-3\,\mathrm{dB}}$ and is not an error.)
