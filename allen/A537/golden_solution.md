# Golden Solution - A537

## Reference answer

$|\Delta V_{REF}| \le V_{REF}/24$ (≈ 0.0417 $V_{REF}$).

- In subrange $m$ ($m$ = 0…3, set by the ideal stage-1 ADC) the DAC output is $m(V_{REF} + \Delta V_{REF})/4$ instead of $mV_{REF}/4$, so the residue is too small by $m\Delta V_{REF}/4$.
- The three stage-2 transitions of that subrange (to codes $4m+1$, $4m+2$, $4m+3$) therefore move by $+m\Delta V_{REF}/4$. The stage-1 transitions are unaffected.
- Worst case $m = 3$: shift $= 3\Delta V_{REF}/4 = 12\,\Delta V_{REF}/V_{REF}$ LSB.
- $12|\Delta V_{REF}|/V_{REF} \le 0.5$ → $|\Delta V_{REF}| \le V_{REF}/24$.

## Grading notes

+2: $V_{REF}/24$ (±3 %), from the transition shift $m\Delta V_{REF}/4$ being largest in the top subrange (3ΔV_REF/4 ≤ V_REF/32). +1: correct result with a sketchy argument, or the correct shift formula with an arithmetic slip of a few percent. 0: correct mechanism but the shift evaluated for the wrong subrange (e.g., m = 1, giving V_REF/8) with reasoning shown. −2 (asserted as fact): a result based on the full DAC error ΔV_REF (giving V_REF/32), on treating the error as a pure gain error of the whole converter, or another wrong value.
