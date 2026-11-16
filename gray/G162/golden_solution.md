# Golden Solution - G162

## Reference answer

$PSRR^- \to \infty$ ($A^- \approx 0$), and $PSRR^+ = A_{dm}/A^+$ with $A^+ = \dfrac{V_{A7}}{|V_{A6}|+V_{A7}}$, so
$$|PSRR^+| = \frac{2}{V_{ov1}}\,\frac{2}{|V_{ov6}|}\,\frac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|}\,|V_{A6}|.$$
The roles of the two supplies are swapped relative to the original p-input op amp.

- Negative supply: $M_5$, $M_7$, $M_8$ all have their sources on $-V_{SS}$. $I_{BIAS}$ is constant, so the diode $M_8$ keeps its $V_{GS}$ and $v_{gs5} = v_{gs7} = 0$; only $r_{o5}$ and $r_{o7}$ couple $v_{ss}$.
  - Through $r_{o7}$ (second stage, $v_{gs6}$ = 0): divider $v_{oa}/v_{ss} = r_{o6}/(r_{o6}+r_{o7}) = |V_{A6}|/(|V_{A6}|+V_{A7})$.
  - Through $r_{o5}$: $v_{ss}$ acts as a common-mode input $-v_{ss}$ to the first stage; the common-mode gain gives $v_{gs6}/v_{ss} \approx 1/(2g_{m3}r_{o5})$, and the second stage gives $v_{ob}/v_{ss} \approx -g_{m6}(r_{o6}\parallel r_{o7})/(2g_{m3}r_{o5})$. With equal overdrives $g_{m6}/g_{m3} = I_{D6}/I_{D3}$, $I_{D5} = 2I_{D3}$ and $V_{A5} = V_{A7}$, this equals $-|V_{A6}|/(|V_{A6}|+V_{A7})$.
  - The two cancel: $A^- \approx 0$, so $PSRR^- \to \infty$ at low frequency to first order. The exact solution leaves a residual of relative order $V_{ov}/V_A$, $A^- \approx \dfrac{|V_{A6}|\,(|V_{A3}|V_{ov1} + V_{A5}|V_{ov3}|)}{2|V_{A3}|V_{A5}(V_{A5}+|V_{A6}|)}$ (with $|V_{A3}| = |V_{A6}|$: $(|V_{A6}|V_{ov1} + V_{A5}|V_{ov3}|)/[2V_{A5}(V_{A5}+|V_{A6}|)]$), so $PSRR^- \sim (V_A/V_{ov})^3 \gg PSRR^+$; mismatch also limits it in practice. An exact finite expression that reduces to this is equally correct.
  - This assumes no body effect. If the bodies of $M_1$, $M_2$ are at $-V_{SS}$ (body-effect factor $\chi = g_{mb1}/g_{m1}$), the tail node follows $v_{ss}$ by $\chi/(1+\chi)$, the tail-current change shrinks by $1/(1+\chi)$, and the cancellation is incomplete: $A^- \approx \dfrac{\chi}{1+\chi}\,\dfrac{r_{o6}}{r_{o6}+r_{o7}}$.
- Positive supply: $M_1$, $M_2$ act as common-gate devices holding the currents of $M_3$, $M_4$ constant, so $v_{sg3} = 0$, $v_{sd4} = v_{sd3} = 0$ and the first-stage output follows $V_{DD}$: $v_{sg6} = 0$. $M_6$'s $g_m$ is inactive and the output sees the divider $r_{o6}$ (to $V_{DD}$) / $r_{o7}$ (to ground): $A^+ = r_{o7}/(r_{o6}+r_{o7}) = V_{A7}/(|V_{A6}|+V_{A7})$.
- Dividing $A_{dm} = -\frac{2}{V_{ov1}}\frac{2}{|V_{ov6}|}\frac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|}\frac{|V_{A6}|V_{A7}}{|V_{A6}|+V_{A7}}$ by $A^+$ gives the result (sign negative).

## Grading notes

+2: $A^- \approx 0$ / $PSRR^-$ very large because of the cancellation between the two coupling paths, and $A^+ = r_{o7}/(r_{o6}+r_{o7})$ with $|PSRR^+|$ as above (or $g_{m1}(r_{o2}\parallel r_{o4})g_{m6}r_{o6}$, an equivalent form). The question does not say how the bodies of $M_1$, $M_2$ are connected: an answer that includes their body effect, shows the cancellation of the two paths and finds the residual $A^- \approx [\chi/(1+\chi)]\,r_{o6}/(r_{o6}+r_{o7})$ (finite $PSRR^-$, typically still well above $PSRR^+$) is also +2, as is an exact finite $A^-$ of order $V_{ov}/V_A$ without body effect. +1: both conclusions right but the cancellation asserted without a mechanism, or $PSRR^+$ left as $A_{dm}(r_{o6}+r_{o7})/r_{o7}$ unsimplified. 0: one supply correct and the other wrong, e.g. the original circuit's assignment (finite $PSRR^-$, infinite $PSRR^+$) stated with hedging. -2 (asserted as fact): the original circuit's assignment ($PSRR^+ \to \infty$, $PSRR^- = $ finite) given for this reversed circuit, both PSRRs claimed infinite, or $A^+$ taken as the full gain $A_{dm}$.
