# Golden Solution - A326

## Reference answer

$R_{in} \approx 1.03$ kΩ, $R_{out} \approx 77\ \Omega$, $f_{-3\,dB} \approx 41$ MHz (pole at ≈ $2.6\times10^8$ rad/s); the low-frequency gain is ≈ −0.87 V/V.

Model: current-amplifier input resistance $r_i = R_3 + 1/g_{m1} = 300 + 1/6.63\ \mathrm{mS} = 451\ \Omega$; output current $A_o i_{in}$ sunk from node O (gate of M12), $C_o$ at O, $R_2$ from the input node N to O; follower $g_{m12} = \sqrt{2(110\ \mu)(20)(100\ \mu)} = 663\ \mu$S.
- Node N: $(v_{in} - v_N)/R_1 + (v_{out} - v_N)/R_1 + (v_O - v_N)/R_2 = v_N/r_i$.
- Node O: $(v_N - v_O)/R_2 = A_o v_N/r_i + sC_ov_O$; at dc $v_O = v_N(1 - A_oR_2/r_i) = -77.1\,v_N$.
- Output: $g_{m12}(v_O - v_{out}) = (v_{out} - v_N)/R_1$ (plus any test current).
- Solving: $v_{out}/v_{in} = -0.872$ at dc; one pole at $2.58\times10^8$ rad/s → 41 MHz (the open-loop pole $(1+A_o)/(R_2C_o)$ = 29.8 Mrad/s is widened by the loop gain ≈ 7 through the second $R_1$).
- Exactly, $v_{out}/v_{in} = -0.872\,(1 - s/1.36\times10^9)/(1 + s/2.58\times10^8)$: the direct $R_1$–$R_1$ path through the follower's finite output resistance adds a right-half-plane zero at ≈ 216 MHz, so the true half-power frequency is ≈ 42.7 MHz (small-signal simulation); 41 MHz is the dominant-pole value.
- $R_{in} = v_{in}/i_{in}$: the node N resistance with the feedback is only ≈ 30 Ω, so $R_{in} = 1000 + 30 \approx 1030\ \Omega$.
- $R_{out}$ (test current at $v_{out}$, $v_{in}$ = 0): $v_N = 0.225\,v_{out}$, $v_O = -17.4\,v_{out}$, $i_t = v_{out}[g_{m12}(18.4) + 0.775/1000] = 0.01296\,v_{out}$ → $R_{out} = 77\ \Omega$ (the follower's own $1/g_{m12}$ = 1.5 kΩ reduced by the feedback loop).

## Grading notes

+2: $R_{in}$ ≈ 1.0–1.06 kΩ, $R_{out}$ ≈ 65–90 Ω and $f_{-3\,dB}$ ≈ 35–47 MHz (the pole value 41 MHz and the exact half-power 42.7 MHz including the RHP zero are both correct), from a model that includes the feedback through the second $R_1$ ($r_i$ ≈ 451 Ω, $A_o$ = 0.1, $g_{m12}$ ≈ 0.66 mS). +1: two of the three within tolerance with the third off through a slip. 0: the feedback loop recognized but the loop gain mis-evaluated so two results are off; or only $R_{in}$ right; or the closed loop solved correctly but with the current-amplifier input resistance taken as $R_3$ alone (omitting $1/g_{m1}$, a model error), which gives ≈ 1.02 kΩ, ≈ 66 Ω and ≈ 48 MHz. −2 (asserted as fact): $R_{out}$ taken as the follower resistance (≈ 1.5 kΩ) or that in parallel with the $R_1$ path (≈ 0.64–0.70 kΩ) with the loop gain ignored, or the −3 dB frequency taken as the open-loop $(1+A_o)/(2\pi R_2C_o)$ ≈ 4.7 MHz.
