# Golden Solution - R669

## Reference answer

- Tail current: $I_{SS}$ × 4.
- Transconductance: $G_m$ × 8, more than the 4× needed to keep the time constant, so the small-signal settling gets twice as fast.
- Dimensions: $W/L$ × 16 (W × 16 at the same L).
- Power: doubles.

Derivation:
- C × 4 ($kT/C$ noise halved). The slew rate of a one-stage op amp is $I_{SS}/C$, so constant slew rate requires $I_{SS}$ × 4.
- Each input transistor carries $I_{SS}/2$, so $G_m = g_{m1} = 2(I_{SS}/2)/(V_{GS}-V_{TH}) = I_{SS}/(V_{GS}-V_{TH})$, which changes by 4/(½) = 8. The time constant $C/G_m$ becomes ½ of its original value.
- $W/L = 2I_D/[\mu C_{ox}(V_{GS}-V_{TH})^2]$ changes by 4/(¼) = 16.
- Power $(V_{DD}/2)(4I_{SS}) = 2V_{DD}I_{SS}$: with $kT/C$-limited dynamic range, a constant slew rate costs power as the supply scales down.

## Grading notes

- +2: $I_{SS}$ × 4 from SR = $I_{SS}/C$ with C × 4; $G_m$ × 8 and $W/L$ × 16 (W × 16 at the same L) under the halved overdrive. Noting that $G_m$ exceeds the 4× needed to keep the $C/G_m$ time constant, or that the power doubles, is a plus but not required, since the question asks about neither speed nor power.
- +1: $I_{SS}$ × 4 right, with a slip in $G_m$ or $W/L$.
- 0: $I_{SS}$ × 4 only, rest missing; or an answer that keeps $G_m$ at × 4 with $W/L$ × 4 by not halving the overdrive (dropping the stated assumption).
- -2 (asserted as fact): $I_{SS}$ kept constant or doubled for a constant slew rate, the slew rate claimed proportional to $G_m$, or the capacitors taken as unchanged.
