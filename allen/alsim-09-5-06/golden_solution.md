# Golden Solution - alsim-09-5-06

## Reference answer

Hand-analysis targets for a design that meets every specification (maximum SCORE 80):

- Minimum gain: the static error of a unity-gain follower is $1/(1 + A_0) \le 2\,\%$ → $A_0 \ge 49$ (≈ 34 dB). In practice $A_0 \gtrsim 60$ dB so that almost all of the 2 % budget is left for dynamic settling.
- Linear settling: closed-loop time constant $\tau = 1/(2\pi\,\text{GBW})$ = 15.9 ns at 10 MHz; 2 % needs $\ln 50 \cdot \tau$ = 3.9τ ≈ 62 ns (a two-pole response with ≈ 60° phase margin is similar), leaving ≈ 35–40 ns for slewing.
- Slewing: the power budget allows 2 mW / 5 V = 400 µA in total. In a Miller-compensated class-A two-stage op amp the slew rate is $I_{tail}/C_c = 2\pi\,\text{GBW}\cdot V_{ov1}$ ≈ 13–30 V/µs for GBW = 10 MHz and $V_{ov1}$ = 0.2–0.5 V, so a multi-volt step would take 70–150 ns of slewing and the settling-time specification fails. The design therefore needs slewing currents larger than the quiescent currents: a class-AB output stage (push-pull common-source NMOS/PMOS with class-AB control) plus a class-AB or adaptively biased input stage (or dynamic boosting of the tail current during the step).
- GBW and stability with $C_L$ = 10 pF: GBW = $g_{m1}/(2\pi C_c)$ ≥ 10 MHz (e.g. $C_c$ ≈ 3 pF → $g_{m1}$ ≈ 190 µS); the output pole $g_{m,out}/C_L \ge 2.2\cdot2\pi\,\text{GBW}$ → $g_{m,out}$ ≳ 1.4 mS, reachable with ≈ 150–200 µA quiescent in the class-AB output devices (W/L ≈ 10–15 for the NMOS and ≈ 30–40 for the PMOS at these currents).
- Rail-to-rail input: complementary NMOS and PMOS differential pairs in parallel (ideally with constant-$g_m$ control so that GBW does not change across the common-mode range); ICMR ≈ 0–5 V. Rail-to-rail output: common-source output transistors, swing within ≈ 0.1–0.2 V of each rail (≈ 4.6–4.8 V).
- Expected simulated results of a good design: 2 % settling in ≈ 70–95 ns for steps of a few volts, GBW 10–15 MHz with ≥ 55° phase margin, quiescent power ≈ 1.8–2 mW, ICMR ≈ 5 V, output swing ≈ 4.6–4.8 V, giving SCORE ≈ 79–80 out of 80.

## Grading notes

A correct result presents a labeled schematic of a rail-to-rail-input, rail-to-rail-output op amp in the 0.5-µm process and simulation evidence for each SCORE term: unity-gain step response with 10 pF settling to 2 % in < 100 ns (step amplitude stated), GBW ≥ 10 MHz with the 10-pF load and an adequate phase margin (≥ ≈ 45°), supply power ≈ 2 mW (within ≈ 10 %), ICMR spanning close to 0–5 V, and output swing close to the rails; the minimum open-loop gain from the 2 % accuracy (≥ 49, ≈ 34 dB) is stated; the SCORE is computed correctly from the reported values (maximum 80). Any topology meeting the specifications is acceptable. Wrong: a class-A design within 400 µA claimed to slew a multi-volt step into 10 pF within 100 ns, GBW or settling measured without the 10-pF load, power far above 2 mW, or a SCORE inconsistent with the reported numbers.
