# Golden Solution - A232

## Reference answer

$A_v = \dfrac{g_{m1}}{g_{ds2}+g_{ds4}} = \dfrac{2}{\lambda_N+\lambda_P}\sqrt{\dfrac{K'_NW_1}{2I_DL_1}} \propto I_D^{-1/2}$; $R_{out} = \dfrac{1}{(\lambda_N+\lambda_P)I_D} \propto I_D^{-1}$; $|p_1| = \dfrac{g_{ds2}+g_{ds4}}{C_{out}} \propto I_D$.

- $g_m = \sqrt{2K'_N(W/L)I_D} \propto I_D^{1/2}$ while $g_{ds} = \lambda I_D \propto I_D$, so the gain falls as $1/\sqrt{I_D}$, the output resistance as $1/I_D$, and the output-node pole (output conductance over fixed capacitance) rises in proportion to $I_D$. The gain–bandwidth product $g_m/C_{out}$ grows as $\sqrt{I_D}$.

## Grading notes

+2: gain ∝ $I_D^{-1/2}$ with a correct formula ($g_{m1}/(g_{ds2}+g_{ds4})$), $R_{out}$ ∝ $1/I_D$, $|p_1|$ ∝ $I_D$. +1: all three proportionalities right but no gain formula, or a factor-of-2 slip in the formula. 0: two of three right. −2 (asserted as fact): gain increasing with $I_D$, $R_{out}$ ∝ $I_D^{-1/2}$, or the pole independent of current.
