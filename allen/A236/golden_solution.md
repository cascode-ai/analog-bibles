# Golden Solution - A236

## Reference answer

$A_v = \dfrac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} = \dfrac{1}{1+\eta_1+(\lambda_1+\lambda_2)\sqrt{I_DL_1/(2K'_NW_1)}}$ — essentially independent of $I_D$ (≈ $1/(1+\eta_1)$), decreasing only slightly as $I_D$ rises; $R_{out} \approx \dfrac{1}{g_{m1}+g_{mbs1}} \propto I_D^{-1/2}$; $|p| \approx \dfrac{g_{m1}+g_{mbs1}}{C_1+C_2} \propto I_D^{1/2}$.

- Here $\eta_1 = g_{mbs1}/g_{m1} = \gamma/(2\sqrt{2|\phi_F|+V_{SB}})$ is fixed by the bias voltages, not by the current.
- The output conductance is dominated by $g_{m1}(1+\eta_1) \propto \sqrt{I_D}$, so the output resistance and the (high-frequency) output pole scale as $I_D^{-1/2}$ and $I_D^{1/2}$.

## Grading notes

+2: gain ≈ constant (with the formula; slight decrease with $I_D$ through $g_{ds}/g_m$), $R_{out}$ ∝ $I_D^{-1/2}$, pole ∝ $I_D^{1/2}$. +1: proportionalities right with the gain formula missing the body effect or $g_{ds}$ terms. 0: two of three. −2 (asserted as fact): gain ∝ $I_D^{-1/2}$ like a gain stage, $R_{out}$ ∝ $1/I_D$, or a gain exceeding 1.
