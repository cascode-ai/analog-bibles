# Golden Solution - grsim-08-13

## Reference answer

Hand analysis (constant $|V_{BE}| = 0.7$ V for bias):
- Bias: $V_{E} = -0.7$ V, tail current $5.3/5\text{k} = 1.06$ mA. $Q_3$ needs $V_{EB} = 0.7$ V across 1.25 kΩ: $I_{C1} = 0.56\text{ mA} + I_{B3} \approx 0.57$ mA; $I_{C2} \approx 0.485$ mA; $I_{C3} \approx (V_o + 6)/6\text{k} + V_o/10\text{k} \approx 1.0$ mA; $V_o \approx 0$ (≈ +24 mV from the base current of $Q_2$; a few tens of mV with an exponential model).
- Small-signal: $g_{m1} = 21.9$ mS, $g_{m2} = 18.6$ mS, $g_{m3} = 38.7$ mS; $r_{\pi1} = 9.1$ kΩ, $r_{\pi2} = 10.7$ kΩ, $r_{\pi3} = 2.6$ kΩ.
- Series-shunt two-port: $f = 1/11$ ($A_\infty = 11$), $h_{11f} = 10\text{k}\|1\text{k} = 909$ Ω at the base of $Q_2$, output loading 11 kΩ. Basic amplifier: $Q_1$ load $1.25\text{k}\|r_{\pi3} = 844$ Ω, $Q_3$ load $6\text{k}\|11\text{k} = 3.88$ kΩ, $a \approx 1230$; $T = af \approx 112$; $A = a/(1+T) \approx 10.9$.
- Exact small-signal nodal analysis gives $v_o/v_i = 11.0$ (slightly above 10.9 because the finite 5-kΩ tail makes the effective ideal gain $11[1 + 1/(g_{m2}\cdot5\text{k})] \approx 11.1$).
- $Z_{in} \approx z_{ia}(1+T) = 20.6\text{k}\times112.6 \approx 2.3$ MΩ; $Z_{out} \approx 3.88\text{k}/112.6 \approx 35$ Ω.
- Large-signal transfer characteristic: linear with slope ≈ 11 between $v_i \approx -0.35$ V and $v_i \approx +0.53$ V. Negative limit: $Q_3$ cuts off and the output settles at the passive divider value $-6\times11/17 \approx -3.9$ V (flat for more negative $v_i$). Positive limit: $Q_3$ saturates, $V_o \approx +5.8$ V.
- Distortion for 0.5 V p-p input (output ≈ 2.75 V peak, inside the linear range): the open-loop nonlinearity (mainly the exponential of $Q_3$, whose current swings by about ±45%) is suppressed by the loop gain of ≈ 112; a large-signal calculation with exponential transistors gives HD2 ≈ 0.15% and HD3 ≈ 0.05%.

## Grading notes

A correct simulation shows: dc output within ≈ ±0.1 V of zero; small-signal gain 10.9–11.1; loop gain ≈ 110 (any reasonable loop-gain measurement 95–125, e.g. a return ratio from a loop-breaking or Middlebrook-type injection); input resistance ≈ 2.0–2.6 MΩ; output resistance ≈ 30–40 Ω; a transfer characteristic linear (slope ≈ 11) from about −0.35 V to +0.5 V input, flat near −3.9 V below and limited near +5.8 V above; HD2 of order 0.1–0.3% and HD3 of order 0.03–0.1% for the 0.5 V p-p input (HD2 > HD3). Hand results within ±5% of these for gain and impedances. A model with a different $I_S$ shifts the dc output by tens of mV and changes distortion figures by tens of percent, which is acceptable. A simulation showing gain ≈ 1/11, negative gain, or a clipped output for the 0.5 V p-p input indicates a wrong netlist.
