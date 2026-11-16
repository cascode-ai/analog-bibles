# Golden Solution - A086

## Reference answer

$(W/L)_3 = 2/1$ and $(W/L)_4 = 1/2$.

- Identical output characteristics require the same gate voltages on M1 and M2 as in [Fig. 2], hence the same $V_{GS}$ for M3 and M4 at half the current, i.e. the same current density $I/(W/L)$.
- M3: $10\ \mu\mathrm{A}/4 = 5\ \mu\mathrm{A}/(W/L)_3$ → $(W/L)_3 = 2$. Then $V_{GS3} = V_{GS1} = 0.7 + \sqrt{2\times10/(110\times4)} = 0.913$ V and M1 (4/1) carries 10 µA.
- M4: $10\ \mu\mathrm{A}/1 = 5\ \mu\mathrm{A}/(W/L)_4$ → $(W/L)_4 = 1/2$, so the gate of M2 is again at $V_T + 2V_{ON} = 0.7 + 0.426 = 1.126$ V.
- $i_{OUT} = 10\ \mu$A, the same minimum output voltage ($2V_{ON}$ ≈ 0.43 V) and the same output resistance as [Fig. 2], with half the bias current in the reference branches.

## Grading notes

+2: $(W/L)_3$ = 2/1 and $(W/L)_4$ = 1/2, from equal current densities (equal $V_{GS}$). A loosely worded closing remark that, read literally, conflicts with the sizes the answer has just derived (e.g. "all device sizes then match [Fig. 2]" meaning the output devices M1, M2) is a trivial slip and does not lower +2. +1: one of the two right with the correct principle. 0: correct principle stated, sizes wrong through a slip. −2 (asserted as fact): $(W/L)_3$ = 8 or $(W/L)_4$ = 2 (current ratio applied the wrong way), M3 and M4 left unchanged with the claim that the output is still 10 µA, or M1 and M2 resized instead.
