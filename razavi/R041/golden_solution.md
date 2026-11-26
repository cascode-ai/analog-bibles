# Golden Solution - R041

## Reference answer

- Square law: $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$.
- Gate capacitance: neglecting overlap, the total channel capacitance $C_{GS} + C_{GD} \approx WLC_{ox}$.
- $f_T = \dfrac{\mu_nC_{ox}(W/L)(V_{GS}-V_{TH})}{2\pi WLC_{ox}} = \dfrac{\mu_n(V_{GS}-V_{TH})}{2\pi L^2}$; $W$ and $C_{ox}$ cancel.
- With the saturation split $C_{GS} = \tfrac23WLC_{ox}$, $C_{GD} \approx 0$, the same derivation gives $\tfrac32\mu_n(V_{GS}-V_{TH})/(2\pi L^2)$: same scaling, different constant.
- Interpretation: the minimum $V_{DS}$ in saturation is $V_{GS} - V_{TH}$. Lowering it at fixed $I_D$ requires $W \propto 1/(V_{GS}-V_{TH})^2$, which raises the capacitance faster than $g_m$ ($g_m = 2I_D/(V_{GS}-V_{TH})$ rises only as $1/(V_{GS}-V_{TH})$), so $f_T \propto (V_{GS}-V_{TH})/L^2$ drops in proportion to the allowed voltage headroom.

## Grading notes

+2: square-law $g_m$, gate capacitance proportional to $WLC_{ox}$ with the approximation stated, cancellation of $W$ and $C_{ox}$, result $\propto \mu_n(V_{GS}-V_{TH})/L^2$. Getting the factor 3/2 from $C_{GS} = \tfrac23WLC_{ox}$ is fine if the answer explains how the stated form follows (total gate capacitance ≈ $WLC_{ox}$). +1: correct scaling with an unexplained constant mismatch, or no link to the low-voltage argument. 0: derivation with a gap (e.g., capacitance not related to $W$ and $L$). -2 (asserted as fact): $f_T \propto 1/L$, $f_T$ increasing as the overdrive is reduced, or $W$ not cancelling.
