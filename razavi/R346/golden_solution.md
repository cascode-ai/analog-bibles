# Golden Solution - R346

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1},\qquad \overline{I_{n,in}^2} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right)$$

- Voltage (input shorted): the gate sits at $V_{out}/2$ plus the divider noise; KCL at the output gives $V_{out}\left(\dfrac{1}{R_D} + \dfrac{1}{2R_1} + \dfrac{g_m}{2}\right) = g_mV_{in} + I_{n,RD} - I_{n1} - \dfrac{1+g_mR_1}{2}I_{nA} - \dfrac{1-g_mR_1}{2}I_{nB}$ ($I_{nA}$, $I_{nB}$: noise currents of the upper and lower $R_1$). Dividing the noise by $g_m$: the two $R_1$ give $\dfrac{4kT}{R_1}\cdot\dfrac{(1+g_mR_1)^2 + (1-g_mR_1)^2}{4g_m^2} = 2kTR_1 + \dfrac{2kT}{g_m^2R_1}$. Interpretation: $2kTR_1 = 4kT(R_1\|R_1)$ is the divider's Thevenin noise at the gate; the second part is its loading noise at the output.
- Current (input open): $M_1$'s total current is zero (nothing else at the source), so the output sees only the passive network $R_D\|(2R_1)$ with noise $4kT(R_D\|2R_1)$; the transimpedance is $R_D\|2R_1$, giving $\overline{I_{n,in}^2} = 4kT/(R_D\|2R_1)$.

## Grading notes

+2: both results equivalent to the reference, including both parts of the divider noise ($2kTR_1$ and $2kT/(g_m^2R_1)$). +1: voltage expression missing one of the two divider terms or with a factor-of-2 slip in it, current right. 0: one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. the current computed with the input shorted (so that $M_1$'s noise appears in it) with the voltage right, or the gate treated as a fixed bias in the voltage (feedback ignored) with the current right. -2 (asserted as fact): both quantities wrong, e.g. the divider treated as noiseless (both its voltage terms and its $1/(2R_1)$ current term missing), or the gate treated as a fixed bias with the divider dropped from both results.
