# Golden Solution - R564

## Reference answer

With $Z_X = R_3 \parallel (1/g_{m1})$ and $Z_Y = R_2 \parallel (R_1 + 1/g_{m2})$ (normally $Z_Y > Z_X$):
$\overline{V_{n,BG}^2} = R_4^2\left\{\dfrac{Z_X^2\left(\overline{i_n^2} + \frac{4kT}{R_3}\right) + Z_Y^2\left(\overline{i_n^2} + \frac{4kT}{R_2}\right) + \left(\frac{Z_Y}{R_1 + 1/g_{m2}}\right)^2 4kTR_1 + \overline{V_{n,op}^2}}{(Z_Y - Z_X)^2} + \overline{i_n^2} + \dfrac{4kT}{R_4}\right\}$.
If the bipolar transistors are treated as fixed voltage sources ($1/g_m \to 0$), this reduces to $\overline{V_{n,BG}^2} \approx 2R_4^2\overline{i_n^2} + \left(\dfrac{R_4}{R_1 \parallel R_2}\right)^2\left[\overline{V_{n,op}^2} + 4kT(R_1 \parallel R_2)\right] + 4kTR_4$, so the op-amp noise is amplified by $R_4/(R_1 \parallel R_2)$.

Derivation (small signals; $g$ = gate-driven current common to $M_3$–$M_5$; $i_3$, $i_4$, $i_5$ PMOS noise currents; $i_{R2}$, $i_{R3}$, $i_{R4}$ resistor noise currents; $v_{R1}$ in series with $R_1$; $v_n$ the op-amp noise with $v_X - v_Y = v_n$):
- $v_X = (g + i_3 + i_{R3})Z_X$ and $v_Y = Z_Y[g + i_4 + i_{R2} + v_{R1}/(R_1 + 1/g_{m2})]$.
- Hence $g = [(i_3 + i_{R3})Z_X - (i_4 + i_{R2})Z_Y - v_{R1}Z_Y/(R_1 + 1/g_{m2}) - v_n]/(Z_Y - Z_X)$, and $v_{BG} = R_4(g + i_5 + i_{R4})$. Summing the uncorrelated powers gives the result.
- Typical size: with equal collector currents, $g_mR_1 = \ln n$ and $g_mR_2 = g_mR_3 \approx 17.2$ (zero TC). For $n = 8$, $Z_X \approx 0.95/g_m$ and $Z_Y \approx 2.6/g_m$, so $M_4$'s noise reaches the output with gain ≈ $1.56R_4$, $M_3$'s with ≈ $0.57R_4$, $M_5$'s with $R_4$, and the op-amp noise with ≈ $0.6g_mR_4$. Flicker noise dominates at low frequency; a large $R_4$ makes the output noisy, and an output bypass capacitor helps only at high frequencies.

## Grading notes

+2: correct transfer of every listed source (equivalent forms accepted): op-amp noise gain $R_4/(Z_Y - Z_X)$; $M_5$ (and $R_4$) directly; $M_4$ with gain $R_4Z_Y/(Z_Y - Z_X)$; $M_3$ with $R_4Z_X/(Z_Y - Z_X)$; the $R_1$–$R_3$ terms; all added in power. +1: the simplified result (bipolar transistors as ideal voltage sources, op-amp gain $R_4/(R_1 \parallel R_2)$) despite the model in the question, or one source mis-weighted. 0: only some of the sources handled correctly. -2 (asserted as fact): op-amp noise claimed to appear at the output with unity gain, PMOS noise claimed to be suppressed by the loop, or noise sources added as voltages with cancellation (correlated treatment of independent sources).
