# Golden Solution - R345

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}$$

- Voltage (input shorted, output short-circuit currents): $R_F$ then connects the output to ground; noise current $I_{n1} + I_{n,RD} + I_{n,RF}$; transconductance $G_m = g_m - 1/R_F$.
- Current (input open): no current flows in $R_F$, so the gate follows the output plus $R_F$'s noise voltage: $V_G = V_{out} + V_{n,RF}$. Output: $V_{out}(g_m + 1/R_D) = -(g_mV_{n,RF} + I_{n1} - I_{n,RD})$, i.e. output noise $\dfrac{4kT(g_m^2R_F + \gamma g_m + 1/R_D)}{(g_m + 1/R_D)^2}$.
- Transimpedance for an input current: $V_{out}/I_{in} = -\dfrac{R_D(g_mR_F - 1)}{1 + g_mR_D}$. Dividing gives $\overline{I_{n,in}^2}$.
- With $R_D \to \infty$ (current-source load) these reduce to $\dfrac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}$ and $\dfrac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}$.

## Grading notes

+2: both expressions equivalent to the reference (e.g., written with output-voltage instead of short-circuit-current methods). +1: one of the two with a minor slip (such as $g_m$ in place of $g_m - 1/R_F$ for $G_m$, or the $1/R_D$ term missing), the other right. 0: one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. the open-input noise current set to $4kT/R_F$ alone (transistor and $R_D$ ignored) with the voltage right. -2 (asserted as fact): both quantities wrong, e.g. $R_F$ treated as a series input resistor or the circuit treated as a common-gate stage.
