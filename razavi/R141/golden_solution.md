# Golden Solution - R141

## Reference answer

$\Delta V_{GS} = \dfrac{\Delta V_{in}}{1 + g_mR_S}$, which shrinks as $g_mR_S$ grows; most of $\Delta V_{in}$ appears across $R_S$ instead of across the gate–source of the nonlinear device.

- $\Delta I_D = g_m\Delta V_{GS}$ and $\Delta V_{GS} = \Delta V_{in} - R_S\Delta I_D$ → $\Delta V_{GS}(1 + g_mR_S) = \Delta V_{in}$.
- Linearity: the square-law nonlinearity of $I_D(V_{GS})$ is exercised only by the reduced swing $\Delta V_{in}/(1 + g_mR_S)$, while $\Delta I_D = g_m\Delta V_{in}/(1 + g_mR_S) \to \Delta V_{in}/R_S$ for $g_mR_S \gg 1$: the current, and hence $V_{out} = V_{DD} - I_DR_D$, is set by the linear resistor. Equivalently $G_m = g_m/(1 + g_mR_S)$ varies far less with signal level than $g_m$, and the gain approaches $-R_D/R_S$.
- (With body effect: $\Delta V_{GS} = \Delta V_{in}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$, same trend.)

## Grading notes

+2: $\Delta V_{GS} = \Delta V_{in}/(1 + g_mR_S)$ and a correct linearity argument (smaller swing at the nonlinear device; current and gain set by $R_S$ as $g_mR_S$ grows). +1: correct expression with a vague linearity argument. 0: correct qualitative argument without the expression. -2 (asserted as fact): $\Delta V_{GS} = \Delta V_{in}(1 + g_mR_S)$ or another expression increasing with $g_mR_S$, or a claim that degeneration worsens linearity.
