# Golden Solution - A310

## Reference answer

Set the two supply $v_{SET}$ sources to zero, set the upper-right $v_{SET}$ to +1 V and record $v_{OS}$ ($V_{OS+}$), then to −1 V and record $V_{OS-}$: $A_v = 2002\ \mathrm{V}/|V_{OS+}-V_{OS-}| \approx 2000\ \mathrm{V}/|\Delta V_{OS}|$.

- Servo: virtual ground at the auxiliary op amp → $v_{OUT} = v_{SET}$ (the supplies are now fixed).
- Op amp under test: $v_{OUT} = A_v(v_I - V_{off})$, so $v_I = v_{OUT}/A_v + V_{off}$; the loop automatically supplies exactly the input needed and keeps the op amp in its linear region, so no manual offset trimming is required.
- Divider: $v_{OS} = 1001\,v_I = 1001(v_{SET}/A_v + V_{off})$; the auxiliary op amp output is a 1001× magnified copy of the microvolt-level $v_I$.
- Two settings: $V_{OS+} - V_{OS-} = 1001(2\ \mathrm{V})/A_v$; the offset cancels → $A_v = 2002/|V_{OS+} - V_{OS-}|$. This is the gain averaged over a ±1-V output swing; smaller steps give the small-signal gain at the chosen output level. The load $R_L$, $C_L$ should be the intended one, and the auxiliary loop must be stable (an integrating auxiliary amplifier helps).

## Grading notes

+2: correct procedure (supply-series $v_{SET}$ sources held fixed during the measurement, normally at zero; holding them at another constant value is equally correct and gives the gain at that supply voltage; output stepped via the summing $v_{SET}$) and proof: $v_{OUT} = v_{SET}$ from the servo, $v_I = v_{OUT}/A_v$ (+ offset), $v_{OS} = 1001v_I$, and $A_v ≈ 2000/|\Delta V_{OS}|$ (or $1001\,\Delta v_{OUT}/\Delta v_{OS}$) with offset cancellation. +1: correct procedure and relation with a minor gap (e.g. offset cancellation not mentioned). 0: procedure right but no proof. The three sources share the label $v_{SET}$ but the intended procedure sets them independently. By the drawn polarities, moving all three together shifts both rails and the output by $v_{SET}$ in the same direction (the CMRR measurement of the same fixture); stating this is correct, not an error. An answer that notes the shared label, gives the independent-source procedure and proof, and also analyzes the linked case correctly is +2; one that only argues that the linked case cannot isolate $A_v$, with correct analysis but no workable procedure, is 0. −2 (asserted as fact): varying the supply $v_{SET}$ sources together with the summing source during the gain measurement (that measures CMRR/PSRR), or a relation $A_v = \Delta v_{OS}/\Delta v_{OUT}$ (inverted).
