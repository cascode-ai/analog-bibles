# Golden Solution - R685

## Reference answer

Summary:
- FF and SS: the gain is unchanged, the current scales with $\mu C_{ox}$, and the noise power scales as $1/\mu C_{ox}$ (lower at FF, higher at SS).
- FS and SF: the two fixed-$V_{GS}$ devices demand different currents. The output DC level moves a long way to reconcile them, and one transistor can be pushed out of saturation, collapsing the gain. This biasing is not robust at the skewed corners.

FF and SS (equal relative change of both $\mu C_{ox}$):
- Both currents scale by the same factor, consistent with the same output voltage.
- $g_{m1} = \mu_nC_{ox}(W/L)_1V_{ov1} \propto \mu C_{ox}$, while $r_{O1}$ and $r_{O2} = 1/(\lambda I) \propto 1/\mu C_{ox}$.
- Gain: $|A_v| = g_{m1}(r_{O1}\|r_{O2}) = \dfrac{\mu_nC_{ox}(W/L)_1V_{ov1}}{(\lambda_n+\lambda_p)I} = \dfrac{2}{(\lambda_n+\lambda_p)V_{ov1}}$, unchanged.
- Noise: $\overline{v_{n,in}^2} = (4kT\gamma/g_{m1})(1 + g_{m2}/g_{m1})$ with $g_{m1}$ and $g_{m2}$ both ∝ $\mu C_{ox}$, so it is ∝ $1/\mu C_{ox}$: lower at FF, higher at SS. The power scales ∝ $\mu C_{ox}$.

FS and SF:
- $M_1$ wants $\tfrac12\mu_nC_{ox}(W/L)_1V_{ov1}^2$ and $M_2$ wants $\tfrac12\mu_pC_{ox}(W/L)_2V_{ov2}^2$, with both gate voltages fixed. Only $V_{out}$ can reconcile them, through the finite output resistances.
- Linearizing with fractional $\mu C_{ox}$ changes $\delta_n$, $\delta_p$: $\Delta V_{out} \approx (\delta_p - \delta_n)/(\lambda_n + \lambda_p)$. For a ±10% skew with $\lambda_n = 0.1$ V⁻¹ and $\lambda_p = 0.2$ V⁻¹, this is ≈ 0.67 V.
- FS pulls $V_{out}$ down ($M_1$ toward triode); SF pulls it up ($M_2$ toward triode). With realistic headroom one device leaves saturation and the gain drops sharply. A fixed-$V_{GS}$ bias of this stage needs feedback (or current-mode bias) to define the output level.
- If both devices do stay saturated, the gain change is only a second-order, model-dependent effect. With $g_m = 2I_D/V_{ov}$ and $r_O = 1/(\lambda I_D)$ evaluated at the common current, $|A_v| = 2/[(\lambda_n+\lambda_p)V_{ov1}]$ is unchanged at every corner. With the full λ model ($I_D = I_{D0}(1 + \lambda V_{DS})$, so $g_m = 2I_D/V_{ov}$ but $g_{ds} = \lambda I_{D0}$, where $I_{D0} \propto \mu C_{ox}$ is the λ-free saturation current of each device), the gain rises slightly at FS and falls slightly at SF: about +5% and −6% for a ±10% skew with $\lambda_n = 0.1$ and $\lambda_p = 0.2$ V⁻¹ (other first-order choices give shifts of the same sign, from a few % to ≈ 13%). Either way the noise is lowest at FS ($g_{m1}$ up, $g_{m2}$ down) and highest at SF.

## Grading notes

- +2: FF/SS: gain unchanged ($g_m \propto \mu C_{ox}$, $r_O \propto 1/\mu C_{ox}$), noise ∝ $1/\mu C_{ox}$, current ∝ $\mu C_{ox}$. FS/SF: recognizes that the two fixed-$V_{GS}$ devices want different currents, so the output DC level shifts strongly (FS down, SF up) and one device can leave saturation (gain collapse). A consistent small-signal analysis that assumes saturation (FS slightly higher gain and lowest noise, SF slightly lower gain and highest noise) and notes the output shift also earns +2. Saying the saturated gain is approximately unchanged at the skewed corners is also acceptable. Writing $g_{o1} \propto \mu_nC_{ox}$ and $g_{o2} \propto \mu_pC_{ox}$ from the λ-free saturation currents is a valid first-order small-signal model, not a misreading of the series current, provided the answer also notes the output shift.
- +1: FF/SS right and the skewed-corner trends right, but without noticing the current conflict or the output shift.
- 0: FF/SS gain wrong but the noise right, or vice versa.
- -2 (asserted as fact): $r_O$ treated as constant so that the gain is claimed to scale ∝ $\mu C_{ox}$ at FF/SS; the noise claimed to increase at the fast corners; or FS and SF swapped.
