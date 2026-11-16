# Golden Solution - A395

## Reference answer

Loop gain ≈ +22.7 (≈ 25 if output conductances are neglected) — well above 1, so the stage is bistable (hysteresis).
- Currents: $i_1 = i_2 = 10\ \mu$A. M6 shares $V_{SG}$ with M3 and M7 with M4, and $(W/L)_6/(W/L)_3 = 5$: $i_6 = 5i_3$, $i_7 = 5i_4$. By symmetry $i_3+i_7 = i_3+5i_3 = 10\ \mu$A → $i_3 = i_4 = 1.67\ \mu$A, $i_6 = i_7 = 8.33\ \mu$A.
- $g_{m3} = g_{m4} = \sqrt{2\cdot50\cdot2\cdot1.67}\ \mu\mathrm{S} = 18.3\ \mu$S; $g_{m6} = g_{m7} = \sqrt{2\cdot50\cdot10\cdot8.33}\ \mu\mathrm{S} = 91.3\ \mu$S.
- Loop: a change at $v_{o1}$ makes M6 inject $g_{m6}v_{o1}$ into $v_{o2}$, whose conductance is $g_{m4}+g_{ds4}+g_{ds6}+g_{ds2} \approx 18.26+0.08+0.42+0.40 = 19.2\ \mu$S; M7 then does the same back into $v_{o1}$. Each half gives $91.3/19.2 = 4.77$ (same sign), so $LG = (4.77)^2 \approx 22.7$.
- Neglecting the output conductances, $LG = \dfrac{g_{m6}g_{m7}}{g_{m3}g_{m4}} = \left(\sqrt{5\cdot5}\right)^2 = 25$.

## Grading notes

+2: loop gain ≈ 22–25 (positive) with the balanced currents (≈ 1.67 µA in M3/M4, ≈ 8.33 µA in M6/M7) and the form $(g_{m6}/g_{m4})(g_{m7}/g_{m3})$, optionally including $g_{ds}$ terms. +1: right form and magnitude but the currents taken as 10 µA in M3 and 50 µA in M6 (ratio still 25), or a small slip. 0: correct loop identified but the gain computed only as one half (≈ 5). −2 (asserted as fact): loop gain claimed below 1, gain written as $(W/L)_6/(W/L)_3 = 5$ only, or the loop treated as negative feedback.
