# Golden Solution - R548

## Reference answer

$R_{out}$ lies inside the feedback loop, so with infinite gain it causes no error. With finite $A_1$, the internal source must produce $V_{out} + (I_1 + I_2)R_{out}$, so $V_X - V_Y = [V_{out} + (I_1 + I_2)R_{out}]/A_1$, with $I_1 \approx I_2 = V_T\ln n/R_3$. This acts like an op-amp offset:
$\Delta V_{out} \approx -\left(1 + \dfrac{1}{g_mR_1}\right)\left(1 + \dfrac{R_2}{R_3} + \dfrac{1}{g_mR_3}\right)\dfrac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1} \approx -\left(1 + \dfrac{R_2}{R_3}\right)\dfrac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1}$, with $1/g_m = V_T/I = R_3/\ln n$. The two small corrections come from $I_1 \neq I_2$ and from the change of $V_{BE2}$ with $I_2$.
The part due to $R_{out}$ is $\approx -(1 + R_2/R_3)\,2V_T\ln n\,R_{out}/(R_3A_1)$. Equivalently, $R_{out}$ reduces the loop gain by the factor $R_L/(R_L + R_{out})$, where $R_L$ is the resistance loading the amplifier output.
Check: $n = 8$, $R_3 = 2$ kΩ, $R_1 = R_2 = 14.5$ kΩ, $A_1 = 10^4$, $R_{out} = 50$ kΩ ($V_{out} \approx 1.07$ V): the exact solution gives −3.48 mV (−2.48 mV of it due to $R_{out}$), the full first-order formula −3.50 mV, and the simple $(1 + R_2/R_3)$ form −3.10 mV.

Derivation:
- $V_X - V_Y = |V_{BE1}| - |V_{BE2}| - I_2R_3 = \epsilon$, so $I_2R_3 = V_T\ln n + V_T\ln(I_1/I_2) - \epsilon$. Since $R_1 = R_2$, $I_1 - I_2 = -\epsilon/R_2$ and $V_T\ln(I_1/I_2) \approx -\epsilon/(g_mR_2)$.
- $V_{out} = V_{BE2} + I_2(R_2 + R_3)$, so $\Delta V_{out} = (1/g_m + R_2 + R_3)\Delta I_2$ with $R_3\Delta I_2 = -(1 + 1/(g_mR_2))\,\epsilon$, i.e. $\Delta V_{out} = -(1 + 1/(g_mR_1))(1 + R_2/R_3 + 1/(g_mR_3))\,\epsilon$ (using $R_1 = R_2$), with $\epsilon = [V_{out} + (I_1 + I_2)R_{out}]/A_1$.

## Grading notes

+2: recognizes that $R_{out}$ is inside the loop (no error for $A_1 \to \infty$) and gives the finite-gain error. Required: the extra differential input $(I_1 + I_2)R_{out}/A_1$ (together with $V_{out}/A_1$), amplified by ≈ $1 + R_2/R_3$ (with or without the small $1/(g_mR_1)$ and $1/(g_mR_3)$ refinements; keeping only one of them, e.g. a factor $1 + 1/(g_mR_2)$, is also fine), sign consistent. An equivalent loop-gain formulation also counts. +1: correct structure but the load current or the amplification factor slightly off (e.g., only one branch current), or only the $R_{out}$-dependent part given. 0: right approach with an algebra error in the final expression. -2 (asserted as fact): $R_{out}$ treated as a series drop outside the loop (error $= (I_1 + I_2)R_{out}$ or that times $1 + R_2/R_3$, without $1/A_1$), or the claim that $R_{out}$ causes no error even with finite gain.
