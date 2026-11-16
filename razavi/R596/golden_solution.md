# Golden Solution - R596

## Reference answer

After settling, the gate voltage of $M_5$ returns essentially to its original value. The injected charge instead changes the voltage stored across $C_1$ and $C_2$, so the output CM level shifts by $\Delta V_{out,CM} = -\Delta q/(C_1 + C_2)$ ($= -\Delta q/(2C)$ for $C_1 = C_2 = C$). For an NMOS switch Δq is negative (electrons), so the output CM rises by $|\Delta q|/(C_1 + C_2)$.

- The CM loop must keep $I_{D5} = I_{D3} + I_{D4}$, which is fixed by $V_b$, so $V_{GS5}$ (= $V_X$) cannot change in steady state.
- Charge conservation at the floating node X: $(C_1 + C_2)(\Delta V_X - \Delta V_{CM}) + C_{GS5}\Delta V_X = \Delta q$. With the loop, $\Delta V_{CM} = -A_{CM}\Delta V_X$, where $A_{CM} \approx g_{m5}(r_{O3} \parallel r_{O4})$ is the CM gain from X to the outputs. Hence $\Delta V_X = \Delta q/[(C_1 + C_2)(1 + A_{CM}) + C_{GS5}] \approx 0$ and $\Delta V_{CM} \approx -\Delta q/(C_1 + C_2)$.
- Transient view: X first jumps by ≈ $\Delta q/(C_1 + C_2 + C_{GS5})$ (the outputs have not yet moved). The loop then moves both outputs by $-\Delta q/(C_1 + C_2)$ until X is restored.

## Grading notes

+2: final change of the $M_5$ gate voltage ≈ 0 (restored by the CM loop, or the small residual $\Delta q/[(C_1 + C_2)(1 + A_{CM})]$), and an output CM change of magnitude $|\Delta q|/(C_1 + C_2)$ with the correct direction (opposite in sign to Δq; upward for electrons). +1: the right output CM change $\Delta q/(C_1 + C_2)$, with the gate-voltage part missing or described only as the initial jump. 0: only the initial gate jump $\Delta q/(C_1 + C_2 + C_{GS5})$, with no loop argument. -2 (asserted as fact): a permanent shift of the $M_5$ gate by $\Delta q/(C_1 + C_2)$ with the output CM unchanged, an output CM change of $\Delta q/C_{GS5}$, or a change multiplied by the loop gain.
