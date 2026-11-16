# Golden Solution - A234

## Reference answer

$R_{out} \approx [g_{m2}r_{ds1}r_{ds2}]\|[g_{m3}r_{ds3}r_{ds4}] = \dfrac{I_D^{-3/2}}{\dfrac{\lambda_1\lambda_2}{\sqrt{2K'_2(W/L)_2}}+\dfrac{\lambda_3\lambda_4}{\sqrt{2K'_3(W/L)_3}}} \propto I_D^{-3/2}$; $A_v = -g_{m1}R_{out} = -\dfrac{\sqrt{2K'_1(W/L)_1}\,I_D^{-1}}{\dfrac{\lambda_1\lambda_2}{\sqrt{2K'_2(W/L)_2}}+\dfrac{\lambda_3\lambda_4}{\sqrt{2K'_3(W/L)_3}}} \propto I_D^{-1}$; $|p_1| = \dfrac{1}{R_{out}C_{out}} \propto I_D^{3/2}$.

- Each cascode resistance is $g_mr_{ds}^2 \propto I_D^{1/2}\cdot I_D^{-2}$; their parallel combination therefore scales as $I_D^{-3/2}$.
- The gain $g_{m1}R_{out}$ scales as $I_D^{1/2}\cdot I_D^{-3/2} = I_D^{-1}$; the output pole as $1/R_{out} \propto I_D^{3/2}$.

## Grading notes

+2: $R_{out}$ ∝ $I_D^{-3/2}$, gain ∝ $I_D^{-1}$ (with a correct formula), $|p_1|$ ∝ $I_D^{3/2}$. +1: proportionalities right but no formula, or a formula slip. 0: two of three. −2 (asserted as fact): the simple-cascode scalings ($I_D^{-1/2}$, $I_D^{-1}$, $I_D$) claimed for this circuit, or a gain that increases with $I_D$ from a wrong model (e.g. $g_m$ treated as ∝ $I_D$, or the cascode $r_{ds}$ treated as current-independent). A wrong gain exponent that comes only from an algebra slip, while $R_{out} \propto I_D^{-3/2}$, $A_v \approx -g_{m1}R_{out}$ and $|p_1| \propto I_D^{3/2}$ are stated correctly, is 0.
