# Golden Solution - R560

## Reference answer

$n \approx 6.9$ (≈ 7) and $(W/L)_5 \approx 4.45\,(W/L)_4 \approx 222\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$ ($|I_{D5}| \approx 222\ \mu$A). Using the −1.5 mV/K balance directly gives a factor of 4.5, i.e. 225 μm/0.5 μm.
- $V_X = V_Y$ with equal currents gives $|I_{D4}|R_1 = V_T\ln n = 50$ mV, so $\ln n = 1.934$ and $n = 6.9$.
- $M_5$ with $(W/L)_5 = K(W/L)_4$ and the same $|V_{GS}|$ carries $K \times 50\ \mu$A, so $V_{out} = |V_{BE3}| + K(R_2/R_1)V_T\ln n = |V_{BE3}| + K(0.1\ \mathrm{V})$.
- Zero TC: $K(0.1\ \mathrm{V})/300\ \mathrm{K} = 1.5$ mV/K gives $K = 4.5$ (or $K(R_2/R_1)\ln n = 17.2$ gives $K = 4.45$). $V_{out} \approx |V_{BE3}| + 0.445$ V ≈ 1.2–1.25 V.
- Check: $|V_{GS}| = 0.8 + \sqrt{2(50)/(38.4 \times 100)} = 0.96$ V; $M_5$ has $|V_{DS}| \approx 1.75$ V, so it is saturated.

## Grading notes

+2: $n$ in 6.5–7.3 and $(W/L)_5$ in 4.3–4.7 times 50/0.5 (≈ 215–235 μm/0.5 μm, or the equivalent current ≈ 215–235 μA). +1: both right in method with one arithmetic slip. 0: $n$ correct but $(W/L)_5$ wrong through an algebra slip. -2 (asserted as fact): $(W/L)_5$ from a relation that ignores $R_2/R_1$ (factor ≈ 8.9) or the mirror ratio, $n$ from $\ln n = 17.2$, or $M_5$ assumed to carry the same current as $M_4$ with the zero TC claimed anyway.
