# Golden Solution - A235

## Reference answer

$A_v = -\dfrac{g_{m1}}{g_{ds1}+g_{ds2}} = -\dfrac{2}{\lambda_N+\lambda_P}\sqrt{\dfrac{K'_NW_1}{2I_DL_1}} \propto I_D^{-1/2}$; $R_{out} = \dfrac{1}{(\lambda_N+\lambda_P)I_D} \propto I_D^{-1}$; $|p_1| = \dfrac{g_{ds1}+g_{ds2}}{C_L+C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}} \propto I_D$.

Same reasoning as for any current-source-loaded gain stage: $g_m \propto \sqrt{I_D}$, $g_{ds} \propto I_D$. (With a finite $R_L$ that dominates the output conductance, the gain would instead rise as $\sqrt{I_D}$ and the pole become nearly current-independent.)

## Grading notes

+2: gain ∝ $I_D^{-1/2}$ with $-g_{m1}/(g_{ds1}+g_{ds2})$, $R_{out}$ ∝ $1/I_D$, $|p_1|$ ∝ $I_D$. +1: proportionalities right, gain formula missing or slipped. 0: two of three. −2 (asserted as fact): gain increasing with $I_D$ for the unloaded stage, $R_{out}$ independent of $I_D$, or the pole decreasing with current.
