# Golden Solution - R038

## Reference answer

### Voltage jump

The given capacitor voltages set $V_X(0^-)=6\ \mathrm{V}$. The source rises by 3 V while both capacitor voltages are continuous, so $V_X(0^+)=9\ \mathrm{V}$.

### Discharge

The grounded bulk gives $V_{SB}=3\ \mathrm{V}$ and $V_{TH}\approx1.162\ \mathrm{V}$ after the step. The initial $V_{GS}=3\ \mathrm{V}$ and $V_{DS}=6\ \mathrm{V}$ put $M_1$ in saturation, with $I_D(0^+)\approx1.69\,\beta\,\mathrm{V^2}$. The floating gate gives

$$C_1\frac{dV_{C1}}{dt}=C_2\frac{dV_{C2}}{dt}=-I_D.$$

For $C_1/C_2\le (3\ \mathrm{V}+V_{TH})/(3\ \mathrm{V}-V_{TH})\approx2.26$, the saturation model gives a $1/t$ tail to

$$V_X(\infty)=6\ \mathrm{V}+V_{TH}-\frac{C_1}{C_2}(3\ \mathrm{V}-V_{TH}).$$

At this limit $V_{GS}=V_{TH}$. The equal-capacitor result is 5.32 V (4.4 V if body effect is neglected). Above the ratio boundary, $M_1$ enters triode when $V_{DS}=V_{GS}-V_{TH}$. The tail then approaches 3 V exponentially.

![R038 voltage at X for the equal-capacitor example](/q/R038/solution-vx.svg)

## Grading notes

- +2: Correct 6 V to 9 V jump, equal-charge discharge, body-effect threshold and final voltage. Accept an explicit equal-capacitor assumption. The triode branch completes the general case. Either description at the exact boundary is accepted if the 3 V limit is correct.
- +1: Correct jump and mechanism with a missing or incorrect final voltage, or omission of body effect.
- 0: Correct jump only.
- −2: Asserts $V_X$ stays at 9 V, decays to 0 V, decays to 3 V below the ratio boundary, or treats the gate as fixed at 3 V after the step.
