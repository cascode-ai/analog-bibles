# Golden Solution - R696

## Reference answer

(c), the long gate oxidation cycle.

- The gain is $|A_v| = g_{m1}(r_{O2}\|r_{O4})$, with $g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1 I_D}$ and $r_O \approx 1/(\lambda I_D)$.
- (c) A long oxidation means a thicker $t_{ox}$ and a smaller $C_{ox}$. At the target bias current, $g_{m1} \propto \sqrt{C_{ox}}$ drops while $r_O$ (set by $I_D$ and λ) is essentially unchanged, so the gain drops.
- (b) A heavy threshold-adjust implant shifts both thresholds positive (higher $V_{THN}$, lower $|V_{THP}|$). At a fixed bias current, square-law $g_m$ and $r_O$ do not depend on $V_{TH}$, so the gain is not reduced. The headroom of the input pair even improves, because $V_{DD} - |V_{GS3}|$ rises.
- (a) Heavy n-well implantation affects only the PMOS load: a larger $|V_{THP}|$, lower hole mobility, and a narrower drain depletion region, which means smaller λ and larger $r_{O4}$. None of these lowers $g_{m1}(r_{O2}\|r_{O4})$; if anything the gain rises. Only through a loss of headroom (a larger $|V_{GS3}|$ pushing $M_1$/$M_2$ toward triode at a high input common-mode level) could it hurt, and that depends on the bias levels.

## Grading notes

+2: (c), with the reasoning that a thicker oxide lowers $C_{ox}$ and hence $g_m$ at the fixed bias current, while $r_O$ is unchanged; (a) and (b) rejected with sound reasons. Remarks that (a) or (b) could hurt only through headroom loss, or slightly through mobility degradation, are acceptable alongside (c).
+1: (c) with correct reasoning but the other options not addressed, or dismissed with a weak reason.
0: (c) chosen with no or wrong mechanism, or (c) plus another option asserted as an equally valid cause.
-2 (asserted as fact): (a) or (b) chosen instead of (c) (e.g., "a higher threshold lowers $g_m$" at fixed current), or a claim that a thicker oxide raises the gain.
The question asks for a verdict on each listed error; the scores above refer to which errors the answer concludes can or cannot cause the effect.
