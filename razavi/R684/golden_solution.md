# Golden Solution - R684

## Reference answer

Summary:
- Bias current: ∝ $\mu_nC_{ox}$.
- Gain: the same corner behaviour as with constant-current bias, $|A_v| = \sqrt{K_n/K_p}$ (highest at FS, lowest at SF; ≈ unchanged at FF and SS when the NMOS and PMOS $\mu C_{ox}$ shift by comparable factors).
- Noise: varies more strongly than with constant-current bias, ∝ $1/(\mu_nC_{ox})$ instead of $1/\sqrt{\mu_nC_{ox}}$. FS is always the lowest and SF the highest; for comparable NMOS/PMOS shifts the ordering is FS < FF < nominal < SS < SF, otherwise the position of FF and SS depends on the relative shifts.
- Statements below about FF and SS assume comparable NMOS and PMOS shifts.

Notation: $K_n = \mu_nC_{ox}(W/L)_1$, $K_p = \mu_pC_{ox}(W/L)_2$, $V_{ov1}$ fixed.

Gain:
- Current: $I = \tfrac12K_nV_{ov1}^2$, proportional to the NMOS $\mu C_{ox}$; power varies the same way.
- $g_{m1} = K_nV_{ov1} \propto \mu_nC_{ox}$ (linear, not square root).
- $g_{m2} = \sqrt{2K_pI} = V_{ov1}\sqrt{K_pK_n}$.
- $|A_v| \approx g_{m1}/g_{m2} = \sqrt{K_n/K_p}$, independent of the current. FF and SS leave it ≈ unchanged, FS gives the highest gain, SF the lowest.

Noise:
- $\overline{v_{n,in}^2} = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m2}}{g_{m1}}\right) = \dfrac{4kT\gamma}{K_nV_{ov1}}\left(1 + \sqrt{K_p/K_n}\right)$.
- FF: the noise power falls in proportion to $1/\mu C_{ox}$, a stronger improvement than the square-root dependence at constant current. SS: rises by the same proportion.
- FS: lowest. SF: highest.
- The spread across corners is larger than with constant-current bias.

Output DC level:
- $V_{out} = V_{DD} - |V_{TH2}| - V_{ov1}\sqrt{K_n/K_p}$.
- FS pulls the output down (reducing $M_1$'s $V_{DS}$ margin, possibly toward triode), and SF pulls it up. FF and SS leave it unchanged.

## Grading notes

- +2: bias current ∝ $\mu_nC_{ox}$; gain $\sqrt{K_n/K_p}$ (the same corner behaviour as at constant current: FS highest, SF lowest, FF/SS ≈ nominal for comparable shifts; saying that the FF/SS position depends on the relative shifts is also correct); noise ∝ $1/(\mu_nC_{ox})$ (FF lower, SS higher, FS lowest, SF highest), with a larger spread than at constant current. Mentioning the output-level shift is a plus.
- +1: gain and noise trends right, but the stronger (linear rather than square-root) dependence not identified, or one corner misranked.
- 0: only one of gain and noise right; or M2's $V_{GS}$ treated as fixed as well (giving a gain ∝ $K_n/K_p$) with otherwise right trends.
- -2 (asserted as fact): FS and SF swapped, the gain of the diode-loaded stage claimed to scale with the bias current, or the noise claimed to rise at the fast corners.
- A wrong gain expression from a misread output node (e.g., $A_v = -g_{m1}/(g_{m1}+g_{m2})$, a gain below 1) is a critical error in the gain part even if the corner trends come out right: at most 0.
