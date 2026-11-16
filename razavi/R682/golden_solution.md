# Golden Solution - R682

## Reference answer

Notation: corners FF, SS, FS (fast NMOS, slow PMOS) and SF (slow NMOS, fast PMOS); $K_n = \mu_nC_{ox}(W/L)_1$, $K_p = \mu_pC_{ox}(W/L)_2$, bias current I fixed.

Summary:
- Gain: about unchanged at FF and SS, highest at FS, lowest at SF.
- Input-referred noise: lowest at FS, then FF (below nominal), then SS (above nominal), highest at SF.

Gain:
- $A_v \approx -g_{m1}/g_{m2}$ (with $r_O$: $-g_{m1}(g_{m2}^{-1}\|r_{O1}\|r_{O2})$, essentially the same).
- At constant current, $g_m = \sqrt{2KI}$, so $|A_v| = \sqrt{K_n/K_p}$.
- FF and SS: both $\mu C_{ox}$ shift the same way, so the gain stays at about its nominal value (exactly, if the relative shifts are equal).
- FS: highest gain (larger $K_n$, smaller $K_p$). SF: lowest gain.

Input-referred thermal noise (per unit bandwidth, same noise coefficient γ for both devices):
- $\overline{v_{n,in}^2} = \dfrac{4kT\gamma}{g_{m1}} + \dfrac{4kT\gamma\,g_{m2}}{g_{m1}^2} = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m2}}{g_{m1}}\right) = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{1}{|A_v|}\right)$, with $g_{m1} \propto \sqrt{\mu_nC_{ox}}$ and $g_{m2}/g_{m1} \propto \sqrt{\mu_pC_{ox}/\mu_nC_{ox}}$.
- FF: both $g_m$ rise by the same square-root factor and the ratio is unchanged, so the noise power falls (∝ $1/\sqrt{\mu C_{ox}}$).
- SS: the noise rises.
- FS: lowest noise ($g_{m1}$ up and the load contribution down).
- SF: highest noise ($g_{m1}$ down and the load contribution up).
- Ordering: FS < FF < nominal < SS < SF.

Side effect: at constant current the overdrives shrink at fast corners, so the output DC level $V_{DD} - |V_{GS2}|$ moves up at fast-PMOS corners and down at slow-PMOS corners.

## Grading notes

- +2: gain ∝ $\sqrt{\mu_nC_{ox}/\mu_pC_{ox}}$ (≈ unchanged at FF and SS, highest at FS, lowest at SF), and noise ∝ $(1/g_{m1})(1 + g_{m2}/g_{m1})$ (FS lowest, SF highest, FF below and SS above nominal).
- +1: gain right, but the noise ranking has one corner misplaced or is only partly discussed.
- 0: only one of gain and noise right.
- -2 (asserted as fact): gain claimed ∝ $\mu_nC_{ox}$ independent of the PMOS, FS and SF swapped, or noise claimed lower at the slow corners.
